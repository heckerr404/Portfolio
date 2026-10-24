import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for desktop mice (not touch devices)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setHasFinePointer(mediaQuery.matches);

    const checkPointer = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    mediaQuery.addEventListener('change', checkPointer);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Detect clickable elements for hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isClickable = Boolean(
        target.closest('a, button, [role="button"], input, select, textarea, [data-cursor="pointer"]')
      );
      setIsHovered(isClickable);
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      mediaQuery.removeEventListener('change', checkPointer);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!hasFinePointer || !isVisible) return null;

  return (
    <>
      {/* Central crisp Signal Red pinpoint */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#FF1738] pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer fluid aura ring in Signal Red */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2"
        style={{
          borderColor: isHovered ? '#FF1738' : 'rgba(255, 23, 56, 0.45)',
          backgroundColor: isHovered ? 'rgba(255, 23, 56, 0.12)' : 'transparent',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 280, mass: 0.15 }}
      />
    </>
  );
};
