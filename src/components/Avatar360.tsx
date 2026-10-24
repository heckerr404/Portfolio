import React, { useState, useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 60;
const SENSITIVITY = 6; // Pixels of drag per frame change (~6 degrees per frame)

const FRAMES: string[] = Array.from({ length: TOTAL_FRAMES }, (_, i) =>
  `/avatar-360/frame_${String(i).padStart(3, '0')}.webp`
);

interface Avatar360Props {
  className?: string;
}

export const Avatar360: React.FC<Avatar360Props> = ({ className = '' }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const startXRef = useRef(0);
  const startFrameRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Preload all 60 frames in the background
  useEffect(() => {
    let mounted = true;
    let loadedImages = 0;
    const images: HTMLImageElement[] = [];

    FRAMES.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (!mounted) return;
        loadedImages++;
        if (loadedImages === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      images[idx] = img;
    });

    imagesRef.current = images;

    return () => {
      mounted = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Render current frame to canvas with retina scaling
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Calculate aspect fill/contain
    const cw = rect.width;
    const ch = rect.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const nx = (cw - nw) / 2;
    const ny = (ch - nh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, nx, ny, nw, nh);
    ctx.restore();
  }, []);

  // Update canvas whenever currentFrame changes
  useEffect(() => {
    drawFrame(currentFrame);
  }, [currentFrame, drawFrame]);

  // Initial render when first image loads or canvas mounts
  useEffect(() => {
    if (imagesRef.current[0]) {
      imagesRef.current[0].onload = () => drawFrame(0);
    }
  }, [drawFrame]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => drawFrame(currentFrame);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentFrame, drawFrame]);

  // Gentle initial teaser oscillation once on load to hint interactivity
  useEffect(() => {
    if (hasInteracted) return;

    let step = 0;
    const maxSteps = 24;
    const interval = setInterval(() => {
      if (hasInteracted) {
        clearInterval(interval);
        return;
      }
      step++;
      // Subtle oscillation between frame 0 and frame 8
      const offset = Math.round(Math.sin((step / maxSteps) * Math.PI * 2) * 8);
      const frame = ((offset % TOTAL_FRAMES) + TOTAL_FRAMES) % TOTAL_FRAMES;
      setCurrentFrame(frame);

      if (step >= maxSteps) {
        clearInterval(interval);
        setCurrentFrame(0);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [hasInteracted]);

  // Mouse & Touch Drag Handlers
  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    setHasInteracted(true);
    startXRef.current = clientX;
    startFrameRef.current = currentFrame;
  };

  const handlePointerMove = useCallback((clientX: number) => {
    if (!isDragging) return;

    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    rafIdRef.current = requestAnimationFrame(() => {
      const deltaX = clientX - startXRef.current;
      const frameDelta = Math.round(deltaX / SENSITIVITY);

      // Drag right rotates clockwise, drag left rotates counter-clockwise
      const newFrame =
        (((startFrameRef.current - frameDelta) % TOTAL_FRAMES) + TOTAL_FRAMES) %
        TOTAL_FRAMES;

      setCurrentFrame(newFrame);
    });
  }, [isDragging]);

  const handlePointerUp = () => {
    setIsDragging(false);
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
  };

  // Global window listeners for smooth dragging outside container boundaries
  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX);
    const onMouseUp = () => handlePointerUp();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, handlePointerMove]);

  // Degree calculation for technical feedback (0° to 360°)
  const currentDegrees = Math.round((currentFrame / TOTAL_FRAMES) * 360);

  return (
    <div className={`flex flex-col select-none ${className}`}>
      {/* 360 Avatar Frame */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          e.preventDefault();
          handlePointerDown(e.clientX);
        }}
        onTouchStart={(e) => {
          if (e.touches.length > 0) {
            handlePointerDown(e.touches[0].clientX);
          }
        }}
        onTouchMove={(e) => {
          if (e.touches.length > 0) {
            handlePointerMove(e.touches[0].clientX);
          }
        }}
        onTouchEnd={handlePointerUp}
        className={`relative w-full aspect-[9/16] overflow-hidden bg-[#E8E8E6] transition-all duration-200 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        } touch-pan-y`}
      >
        {/* Hardware-accelerated canvas for 60fps render without DOM reflow */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover pointer-events-none block"
        />

        {/* Fallback image for initial instant render before canvas paint */}
        <img
          src={FRAMES[currentFrame]}
          alt="Ritesh Yadav 360 Interactive Avatar"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-0"
        />

        {/* Live angle badge (visible while interacting) */}
        <div
          className={`absolute top-2.5 right-2.5 bg-[#111111]/80 backdrop-blur-xs text-white text-[9px] font-mono px-2 py-0.5 pointer-events-none transition-opacity duration-200 ${
            isDragging ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {currentDegrees}°
        </div>
      </div>

      {/* Subtle "DRAG TO ROTATE ↔" Hint and technical spec below the avatar */}
      <div className="mt-2.5 pt-2 border-t border-[#C9C9C4] flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#72726E]">
        <div className="flex items-center gap-1.5">
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              isDragging ? 'bg-[#FF1738] scale-125' : 'bg-[#111111] animate-pulse'
            }`}
          />
          <span className="font-bold text-[#111111]">DRAG TO ROTATE ↔</span>
        </div>
        <span className="text-[#FF1738] font-bold">
          360° // {currentDegrees}°
        </span>
      </div>
    </div>
  );
};
