import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Serviços", href: "/servicos" },
    { label: "Metodologia", href: "/#metodologia" },
    { label: "Cases", href: "/cases" },
    { label: "Depoimentos", href: "/depoimentos" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(27,44,74,0.10)]" : "border-b border-border"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">

        {/* ── Logo ──────────────────────────────────────────────── */}
        <a href="/" className="flex items-center gap-3 group" aria-label="T2S Consultoria — página inicial">
          {/* Monogram */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-sm bg-primary shrink-0">
            <span className="text-white font-bold text-sm tracking-wide">T2S</span>
            {/* Gold bottom accent */}
            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent rounded-b-sm" />
          </div>
          {/* Wordmark */}
          <div className="hidden sm:block leading-tight">
            <span
              className="block text-sm font-semibold text-primary tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              T2S Consultoria
            </span>
            <span className="block text-[10px] font-medium text-muted-foreground tracking-[0.12em] uppercase">
              Excelência Operacional
            </span>
          </div>
        </a>

        {/* ── Desktop Navigation ────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-7" role="navigation" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-[13px] font-medium text-foreground/75 hover:text-primary transition-colors duration-200
                         after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-accent
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ── Desktop CTA ───────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5514991175103"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1.5"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-accent" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.862L0 24l6.324-1.5A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.003-1.368l-.359-.214-3.731.979.997-3.643-.233-.374A9.774 9.774 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href="/#contato"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white text-[13px] font-semibold
                       px-5 py-2.5 rounded-sm transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Diagnóstico Gratuito
          </a>
        </div>

        {/* ── Mobile Menu Button ────────────────────────────────── */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary hover:bg-muted rounded-sm transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Navigation ─────────────────────────────────── */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white animate-in slide-in-from-top-1 duration-200">
          <nav className="container py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/60 rounded-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-border flex flex-col gap-2">
              <a
                href="https://wa.me/5514991175103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium border border-border text-foreground hover:bg-muted rounded-sm transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="/#contato"
                className="flex items-center justify-center w-full px-4 py-3 bg-accent text-white text-sm font-semibold rounded-sm hover:bg-accent/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Diagnóstico Gratuito
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
