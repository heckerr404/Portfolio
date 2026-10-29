export default function Footer() {
  const year = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-6 md:px-12 lg:px-16 py-10 bg-[#111111] text-[#F2F0EA] border-t-2 border-[#111111] select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono">
        {/* Left: Designer Trademark */}
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-[#FF1738] text-white flex items-center justify-center font-bold text-xs">
            R
          </div>
          <span className="text-[#C9C9C4]">
            © {year} RITESH YADAV • {year} VISUAL FOLIO
          </span>
        </div>

        {/* Center: Editorial Colophon */}
        <span className="text-[#72726E] text-center text-[11px] hidden sm:inline">
          EDITORIAL GRAPHIC DESIGN PORTFOLIO • EST. {year}
        </span>

        {/* Right: Back to top trigger */}
        <button
          onClick={handleBackToTop}
          className="text-[#F2F0EA] hover:text-[#FF1738] transition-colors font-bold uppercase tracking-widest cursor-pointer flex items-center gap-1.5"
        >
          <span>BACK TO TOP</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}
