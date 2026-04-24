import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Target,
  Phone,
  Award,
  Shield,
  Clock,
  Building2,
  Heart,
  Truck,
  ShoppingCart,
  HardHat,
  Laptop,
} from "lucide-react";

/* ─── Helpers ──────────────────────────────────────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/* ─── Component ─────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">

        {/* ═══════════════════════════════════════════════════════════
            HERO — Full viewport, dark navy, elegant split layout
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[92vh] flex items-center bg-primary overflow-hidden">

          {/* Decorative geometry */}
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            {/* Right accent panel */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[38%] border-l border-white/10 bg-white/[0.03]" />
            {/* Top gold rule */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent/60 to-transparent" />
            {/* Diagonal faint lines */}
            <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-5" viewBox="0 0 256 256" fill="none">
              <line x1="0" y1="256" x2="256" y2="0" stroke="white" strokeWidth="1"/>
              <line x1="64" y1="256" x2="256" y2="64" stroke="white" strokeWidth="1"/>
              <line x1="128" y1="256" x2="256" y2="128" stroke="white" strokeWidth="1"/>
            </svg>
          </div>

          <div className="container relative z-10 py-24 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">

              {/* ── Left content (3 cols) ──────────────────────────── */}
              <div className="lg:col-span-3">
                <Eyebrow>Consultoria Estratégica em Lean &amp; Excelência Operacional</Eyebrow>

                <h1 className="text-white mb-6 leading-[1.08]">
                  Transforme{" "}
                  <em className="not-italic text-accent">Eficiência</em>
                  <br />
                  em Lucratividade
                </h1>

                <p className="text-white/75 text-lg mb-10 leading-relaxed max-w-xl">
                  Otimizamos processos, eliminamos desperdícios e capacitamos equipes para
                  gerar resultados mensuráveis — desde o primeiro mês de trabalho conjunto.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-12">
                  <a
                    href="https://wa.me/5514991175103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white
                               font-semibold text-sm px-7 py-3.5 rounded-sm transition-all duration-200
                               shadow-lg shadow-accent/20 hover:shadow-accent/30"
                  >
                    <Phone className="w-4 h-4" />
                    Falar com Consultor
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center gap-2 border border-white/25
                               text-white hover:bg-white/10 text-sm font-medium px-7 py-3.5
                               rounded-sm transition-all duration-200"
                  >
                    Conhecer Serviços
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10 mb-8">
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Método Validado</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <Award className="w-4 h-4 text-accent" />
                    <span>Certificação Lean Six Sigma</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Resultados em 30 dias</span>
                  </div>
                </div>

                {/* Stats strip */}
                <div className="flex items-center gap-0 pt-8 border-t border-white/10">
                  {[
                    { n: "100+", label: "Processos Mapeados" },
                    { n: "30%",  label: "Redução de Custos" },
                    { n: "98%",  label: "Satisfação" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center">
                      <div className="px-5 first:pl-0 text-center">
                        <div className="text-2xl font-bold text-accent leading-none mb-1">
                          {stat.n}
                        </div>
                        <div className="text-[10px] text-white/50 uppercase tracking-[0.1em]">
                          {stat.label}
                        </div>
                      </div>
                      {i < 2 && <div className="w-px h-8 bg-white/15 flex-shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right panel — differentiators (2 cols, desktop only) ── */}
              <div className="hidden lg:flex lg:col-span-2 items-center justify-center">
                <div className="border border-accent/25 rounded-sm bg-white/[0.04] backdrop-blur-sm p-8 w-full max-w-sm">
                  <div className="w-8 h-[2px] bg-accent mb-6" />
                  <h3
                    className="text-white text-xl mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    O que diferencia a T2S
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Método rigoroso baseado em dados reais",
                      "Implementação lado a lado com sua equipe",
                      "Resultados comprovados desde o 1º mês",
                      "Transferência real de conhecimento",
                      "Sem fórmulas prontas — cada projeto é único",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-white/75 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            VALUE PROPOSITION — Warm cream, centered
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="container">
            <div className="text-center mb-14">
              <Eyebrow>Por que a T2S</Eyebrow>
              <h2 className="text-primary mb-5">
                Consultoria que vai{" "}
                <em className="not-italic text-accent">fundo na operação</em>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Não trabalhamos com templates genéricos. Cada solução é construída para a
                realidade, cultura e desafios específicos da sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Soluções Sob Medida",
                  description:
                    "Nada de receitas prontas — entramos na sua operação para entender o que realmente precisa mudar e desenhamos o plano certo para você.",
                },
                {
                  icon: Users,
                  title: "Impacto em Todos os Níveis",
                  description:
                    "Da operação à alta liderança: ajudamos a saber para onde ir, qual caminho seguir e como executar com consistência e ritmo.",
                },
                {
                  icon: TrendingUp,
                  title: "Resultados Mensuráveis",
                  description:
                    "KPIs claros, metas definidas e ROI projetado. Você acompanha o retorno em tempo real, sem achismos ou relatórios vagos.",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="p-8 bg-white border-border card-hover group"
                >
                  {/* Gold top accent */}
                  <div className="w-10 h-[3px] bg-accent mb-6 transition-all duration-300 group-hover:w-14" />
                  <item.icon className="w-10 h-10 text-accent mb-5 opacity-90" />
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SERVICES — White background, detailed cards
        ═══════════════════════════════════════════════════════════ */}
        <section id="servicos" className="py-20 md:py-28 bg-white">
          <div className="container">
            <div className="text-center mb-14">
              <Eyebrow>Nossos Serviços</Eyebrow>
              <h2 className="text-primary mb-5">
                Soluções que geram{" "}
                <em className="not-italic text-accent">retorno real</em>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Cada projeto é desenhado para a realidade específica da sua empresa —
                do diagnóstico rápido à transformação completa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                {
                  icon: Target,
                  title: "Diagnóstico Rápido de Oportunidades",
                  abbr: "DRO",
                  description:
                    "Avaliação gratuita da sua operação. Identificamos onde está o dinheiro que você está deixando na mesa — sem compromisso.",
                  badge: "GRATUITO",
                  badgeBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
                  href: "/servicos",
                  whyChoose: "Visão clara e objetiva antes de tomar decisões.",
                },
                {
                  icon: Lightbulb,
                  title: "Consultoria Completa",
                  abbr: "DCMO + Implementação",
                  description:
                    "Diagnóstico aprofundado de maturidade organizacional, plano estratégico e implementação lado a lado com sua equipe.",
                  badge: "MAIS PROCURADO",
                  badgeBg: "bg-blue-50 text-blue-700 border border-blue-200",
                  href: "/servicos",
                  whyChoose: "Transformação operacional completa de ponta a ponta.",
                },
                {
                  icon: BookOpen,
                  title: "Mapeamento de Processos",
                  abbr: "Avulso — BPMN",
                  description:
                    "Fluxogramas profissionais em padrão BPMN, mapeamento AS-IS/TO-BE, SIPOC e documentação completa de processos.",
                  badge: "NOVO",
                  badgeBg: "bg-amber-50 text-amber-700 border border-amber-200",
                  href: "/servicos",
                  whyChoose: "Documentação profissional para auditorias e treinamentos.",
                },
              ].map((service, idx) => (
                <div key={idx} className="group flex flex-col border border-border rounded-sm bg-card hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                  <div className="p-7 flex-1">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-sm bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                        <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                      </div>
                      <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full ${service.badgeBg}`}>
                        {service.badge}
                      </span>
                    </div>
                    <p className="text-[10px] font-semibold text-accent tracking-[0.12em] uppercase mb-2">
                      {service.abbr}
                    </p>
                    <h3 className="text-base font-bold text-primary mb-3 leading-snug">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    
                    {/* Por que escolher */}
                    <div className="mt-4 pt-4 border-t border-dashed border-border">
                      <p className="text-xs text-muted-foreground italic">
                        <span className="font-semibold text-primary not-italic">Por que escolher:</span> {service.whyChoose}
                      </p>
                    </div>
                  </div>
                  <div className="px-7 pb-7">
                    <a
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-3 transition-all duration-200"
                    >
                      Saiba mais
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="/servicos"
                className="inline-flex items-center gap-2 border border-border text-foreground/70 hover:text-primary hover:border-primary/40 text-sm font-medium px-6 py-3 rounded-sm transition-all duration-200"
              >
                Ver todos os serviços e valores
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            METHODOLOGY — Warm cream, timeline steps
        ═══════════════════════════════════════════════════════════ */}
        <section id="metodologia" className="py-20 md:py-28 bg-cream">
          <div className="container">
            <div className="text-center mb-14">
              <Eyebrow>Como Trabalhamos</Eyebrow>
              <h2 className="text-primary mb-5">
                Um processo{" "}
                <em className="not-italic text-accent">transparente e mensurável</em>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quatro etapas estruturadas — com resultados visíveis desde o início.
              </p>
            </div>

            {/* Steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-accent/25 pointer-events-none" aria-hidden="true" />

              {[
                {
                  step: "01",
                  title: "DRO",
                  subtitle: "Diagnóstico Rápido",
                  description: "Você responde sobre sua operação e identificamos oportunidades de ganho imediatas.",
                  color: "bg-emerald-100 text-emerald-800",
                },
                {
                  step: "02",
                  title: "DCMO",
                  subtitle: "Diagnóstico Completo",
                  description: "Estudo aprofundado de processos, indicadores e gargalos reais da sua empresa.",
                  color: "bg-blue-100 text-blue-800",
                },
                {
                  step: "03",
                  title: "Plano",
                  subtitle: "Relatório + Prioridades",
                  description: "Apresentação detalhada com diagnóstico, roadmap de melhorias e cronograma.",
                  color: "bg-purple-100 text-purple-800",
                },
                {
                  step: "04",
                  title: "Execução",
                  subtitle: "Implementação",
                  description: "Trabalhamos lado a lado com sua equipe, transferindo conhecimento na prática.",
                  color: "bg-amber-100 text-amber-800",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  {/* Step badge */}
                  <div className={`z-10 w-[4.5rem] h-[4.5rem] rounded-sm flex flex-col items-center justify-center mb-6 ${item.color}`}>
                    <span className="text-[10px] font-bold tracking-widest opacity-60">{item.step}</span>
                    <span className="text-base font-bold">{item.title}</span>
                  </div>
                  <h4 className="text-sm font-bold text-primary mb-2">{item.subtitle}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Recommendation callout */}
            <div className="border border-accent/25 rounded-sm bg-white px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-1 h-12 bg-accent rounded-full flex-shrink-0" />
              <p className="text-foreground text-sm leading-relaxed">
                <strong className="text-primary">Recomendação:</strong> Para máximo impacto, contrate o
                pacote completo DCMO + Plano de Ação + Implementação — garantindo velocidade,
                economia e resultados duradouros.
              </p>
              <a
                href="/#contato"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-3 transition-all duration-200 whitespace-nowrap"
              >
                Solicitar proposta <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            LEAN TRAINING — Dark navy, reversed contrast
        ═══════════════════════════════════════════════════════════ */}
        <section id="cursos" className="py-20 md:py-28 bg-primary">
          <div className="container">
            <div className="text-center mb-14">
              <Eyebrow>Metodologias &amp; Capacitação</Eyebrow>
              <h2 className="text-white mb-5">
                Ferramentas que{" "}
                <em className="not-italic text-accent">transformam culturas</em>
              </h2>
              <p className="text-white/65 text-lg max-w-2xl mx-auto">
                Capacitamos sua equipe com as metodologias mais eficazes de melhoria contínua
                e excelência operacional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* 5S Card */}
              <div className="border border-white/10 rounded-sm bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-300 p-8">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 bg-accent/20 border border-accent/30 rounded-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-accent" style={{ fontFamily: "'Playfair Display', serif" }}>5S</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-1">Metodologia 5S</h3>
                    <p className="text-white/50 text-xs uppercase tracking-widest">Organização &amp; Disciplina</p>
                  </div>
                </div>
                <p className="text-white/65 text-sm leading-relaxed mb-6">
                  Sort, Set in Order, Shine, Standardize, Sustain. A base para uma operação
                  organizada, eficiente e segura — em qualquer setor.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Eliminação de desperdícios visuais",
                    "Padronização de processos e postos",
                    "Melhoria contínua da segurança",
                    "Aumento mensurável da produtividade",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-white/75">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kaizen Card */}
              <div className="border border-white/10 rounded-sm bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-300 p-8">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 bg-secondary/20 border border-secondary/30 rounded-sm flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-secondary" style={{ fontFamily: "'Playfair Display', serif" }}>改善</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-1">Kaizen</h3>
                    <p className="text-white/50 text-xs uppercase tracking-widest">Melhoria Contínua</p>
                  </div>
                </div>
                <p className="text-white/65 text-sm leading-relaxed mb-6">
                  Filosofia de melhoria contínua que envolve toda a organização. Pequenas
                  melhorias consistentes geram grandes resultados ao longo do tempo.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Envolvimento de toda a equipe",
                    "Ciclos rápidos de melhoria (PDCA)",
                    "Cultura de inovação e engajamento",
                    "Resultados sustentáveis e mensuráveis",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-white/75">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/#contato"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white
                           font-semibold text-sm px-8 py-3.5 rounded-sm transition-all duration-200
                           shadow-lg shadow-accent/20"
              >
                Solicitar Informações sobre Cursos
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            TESTIMONIAL TEASER — White, social proof with client logos
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Eyebrow>Resultados Comprovados</Eyebrow>
                <h2 className="text-primary mb-5">
                  Empresas que já{" "}
                  <em className="not-italic text-accent">transformaram</em>
                  <br />
                  suas operações
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Empresas em diferentes setores já experimentaram a metodologia
                  T2S — com resultados mensuráveis em produtividade, redução de custos
                  e satisfação das equipes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="/cases"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-4 transition-all duration-200"
                  >
                    Ver cases e resultados
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/depoimentos"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-4 transition-all duration-200"
                  >
                    Ler depoimentos
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Setores Atendidos */}
                <div className="pt-6 border-t border-border mb-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.1em] mb-4">Setores Atendidos</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { name: "Manufatura", icon: Building2 },
                      { name: "Saúde", icon: Heart },
                      { name: "Logística", icon: Truck },
                      { name: "Varejo", icon: ShoppingCart },
                      { name: "Construção", icon: HardHat },
                      { name: "Tecnologia", icon: Laptop },
                    ].map((sector) => (
                      <div
                        key={sector.name}
                        className="flex items-center gap-2 p-3 bg-muted/50 rounded-sm border border-border hover:border-accent/30 transition-colors"
                      >
                        <sector.icon className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-xs font-medium text-foreground">{sector.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "100+", label: "Processos Mapeados", color: "bg-cream border-accent/20" },
                  { number: "30%",  label: "Redução Média de Custos", color: "bg-primary/5 border-primary/15" },
                  { number: "98%",  label: "Taxa de Satisfação", color: "bg-cream border-accent/20" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`border rounded-sm p-6 text-center ${stat.color}`}
                  >
                    <div
                      className="text-3xl font-bold text-accent mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {stat.number}
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-[0.1em] leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            CTA — Gold accent background with urgency
        ═══════════════════════════════════════════════════════════ */}
        <section id="contato" className="py-16 md:py-20 bg-accent relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)"/>
            </svg>
          </div>
          
          <div className="container text-center relative z-10">
            <p className="text-white/75 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Próximo passo
            </p>
            <h2
              className="text-white mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pronto para transformar<br className="hidden sm:block" /> sua operação?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Comece com um diagnóstico gratuito e sem compromisso.
              Identifique as oportunidades na sua empresa em menos de 2 semanas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://wa.me/5514991175103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-accent
                           font-bold text-sm px-8 py-3.5 rounded-sm hover:bg-white/95
                           transition-all duration-200 shadow-lg"
              >
                Agendar via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+5514991175103"
                className="inline-flex items-center justify-center gap-2 border border-white/40
                           text-white font-medium text-sm px-8 py-3.5 rounded-sm
                           hover:bg-white/10 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                (14) 99117-5103
              </a>
            </div>

            {/* Urgency message */}
            <p className="text-white/60 text-xs italic mb-6">
              ⏱️ Vagas limitadas para diagnósticos gratuitos este mês
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-8 border-t border-white/20">
              {[
                "✓ Método rigoroso baseado em dados",
                "✓ Resultados comprovados",
                "✓ Implementação lado a lado",
                "✓ Sem compromisso",
              ].map((item, i) => (
                <span key={i} className="text-white/70 text-xs">{item}</span>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
