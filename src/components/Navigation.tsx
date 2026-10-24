import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F2F0EA]/92 backdrop-blur-md border-b border-[#C9C9C4] shadow-sm py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-16">
          {/* Masthead Brand Identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group select-none"
          >
            <div className="w-6 h-6 bg-[#111111] text-[#F2F0EA] flex items-center justify-center font-display font-black text-sm group-hover:bg-[#FF1738] transition-colors">
              R
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-tight uppercase text-[#111111] leading-none">
              RITESH YADAV
            </span>
          </a>

          {/* Center editorial descriptor (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-white/70 border border-[#C9C9C4] rounded-full text-[10px] font-mono uppercase tracking-wider text-[#111111]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1738] animate-pulse" />
            <span>GRAPHIC DESIGN • POSTERS • BRAND IDENTITY</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {profile.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-grotesk text-xs uppercase tracking-widest text-[#4A4A46] hover:text-[#FF1738] transition-colors duration-200 link-underline-red font-semibold"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-[#FF1738] text-white hover:bg-[#111111] transition-colors duration-200 px-4 py-2 text-xs font-grotesk font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <span>↗</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden relative w-9 h-9 flex flex-col justify-center items-center gap-1.5 bg-[#111111] text-[#F2F0EA] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[4px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[4px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay with Paper Grid */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F2F0EA] bg-graph-grid flex flex-col justify-between p-8 pt-28"
          >
            {/* Stamp label */}
            <div className="flex justify-between items-center border-b border-[#C9C9C4] pb-4">
              <span className="font-mono text-xs text-[#FF1738] tracking-widest uppercase">
                [ INDEX / ISSUE 2026 ]
              </span>
              <span className="font-hand text-lg text-[#72726E]">
                select destination ↴
              </span>
            </div>

            {/* Links List */}
            <div className="flex flex-col gap-6 my-auto">
              {profile.navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                  className="font-display text-4xl text-[#111111] hover:text-[#FF1738] transition-colors uppercase tracking-tight flex items-baseline justify-between border-b border-[#C9C9C4]/60 pb-3"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#72726E]">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-[#C9C9C4] flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full bg-[#FF1738] text-white py-3 text-center font-grotesk font-bold text-sm uppercase tracking-wider"
              >
                Start A Project ↗
              </a>
              <span className="text-[10px] font-mono text-center text-[#72726E]">
                RITESH YADAV • 2026 GRAPHIC DESIGN PORTFOLIO
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
