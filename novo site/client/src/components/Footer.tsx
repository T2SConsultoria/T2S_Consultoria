import { Mail, Phone, MapPin, Linkedin, MessageCircle, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">

      {/* Top accent line */}
      <div className="h-[3px] bg-gradient-to-r from-accent via-accent/60 to-transparent" />

      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* ── Brand ──────────────────────────────────────────── */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm tracking-wide">T2S</span>
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-b-sm" />
              </div>
              <div className="leading-tight">
                <p
                  className="font-semibold text-sm text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  T2S Consultoria
                </p>
                <p className="text-[10px] text-white/45 uppercase tracking-[0.12em]">
                  Excelência Operacional
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Transformando operações através de metodologias Lean e Kaizen,
              com resultados mensuráveis desde o primeiro mês.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-accent/50 transition-colors duration-200"
                aria-label="LinkedIn T2S Consultoria"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5514991175103"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-accent/50 transition-colors duration-200"
                aria-label="WhatsApp T2S Consultoria"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── Services ─────────────────────────────────────── */}
          <div>
            <h4
              className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-5"
            >
              Serviços
            </h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              {[
                { label: "Diagnóstico Rápido (DRO)", href: "/servicos" },
                { label: "Consultoria Completa (DCMO)", href: "/servicos" },
                { label: "Mapeamento de Processos", href: "/servicos" },
                { label: "Cursos 5S e Kaizen", href: "/#cursos" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-accent transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ─────────────────────────────────────── */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-5">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              {[
                { label: "Metodologia", href: "/#metodologia" },
                { label: "Cases de Sucesso", href: "/cases" },
                { label: "Depoimentos", href: "/depoimentos" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-accent transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ──────────────────────────────────────── */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-5">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li>
                <a
                  href="tel:+5514991175103"
                  className="flex items-center gap-2.5 hover:text-accent transition-colors duration-200"
                >
                  <Phone className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  (14) 99117-5103
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@t2sconsultoria.com.br"
                  className="flex items-center gap-2.5 hover:text-accent transition-colors duration-200"
                >
                  <Mail className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  contato@t2s.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5514991175103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-accent transition-colors duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>

            {/* Mini CTA */}
            <a
              href="/#contato"
              className="inline-flex items-center justify-center w-full mt-6 bg-accent hover:bg-accent/90
                         text-white text-xs font-semibold py-2.5 px-4 rounded-sm transition-colors duration-200"
            >
              Diagnóstico Gratuito
            </a>
          </div>

        </div>

        {/* ── Bottom bar ──────────────────────────────────────────── */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/35">
              © {currentYear} T2S Consultoria Empresarial. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white/25">
              Lean · Kaizen · Excelência Operacional
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
