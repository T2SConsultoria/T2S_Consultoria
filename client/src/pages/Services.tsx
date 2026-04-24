import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Target, Users, TrendingUp, Zap, Shield, Award, BarChart3 } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      badge: "GRATUITO",
      badgeColor: "bg-green-100 text-green-800",
      title: "Diagnóstico Rápido de Oportunidades (DRO)",
      subtitle: "Avaliação inicial sem compromisso",
      icon: Target,
      description:
        "Uma avaliação rápida e gratuita da sua operação. Você responde um questionário sobre sua empresa e identificamos onde está o dinheiro que você está deixando na mesa.",
      duration: "1-2 semanas",
      deliverables: [
        "Questionário estruturado sobre operação",
        "Análise preliminar de oportunidades",
        "Relatório executivo com insights",
        "Recomendação de próximos passos",
      ],
      ideal: "Empresas que querem entender melhor seus gargalos operacionais antes de investir em consultoria completa.",
      price: "Gratuito",
      whyChoose: "Ideal para quem busca uma visão clara e objetiva antes de tomar decisões.",
    },
    {
      id: 2,
      badge: "MAIS PROCURADO",
      badgeColor: "bg-blue-100 text-blue-800",
      title: "Diagnóstico Completo de Maturidade Organizacional (DCMO)",
      subtitle: "Análise aprofundada com implementação",
      icon: TrendingUp,
      description:
        "Um diagnóstico aprofundado de maturidade organizacional. Estudamos seus processos, indicadores, cultura e gargalos reais. Depois, desenvolvemos um plano de ação estratégico e implementamos lado a lado com sua equipe.",
      duration: "8-12 semanas",
      deliverables: [
        "Diagnóstico completo de processos e indicadores",
        "Análise de maturidade organizacional",
        "Plano de ação estratégico com cronograma",
        "Implementação com transferência de conhecimento",
        "Treinamento de equipe em Lean Six Sigma",
        "Acompanhamento de resultados",
      ],
      ideal:
        "Empresas que buscam transformação operacional completa com suporte especializado durante toda a jornada.",
      price: "Sob consulta",
      whyChoose: "O pacote mais completo — transforma sua operação de ponta a ponta.",
    },
    {
      id: 3,
      badge: "NOVO",
      badgeColor: "bg-orange-100 text-orange-800",
      title: "Mapeamento de Processos (Avulso)",
      subtitle: "Desenho profissional de fluxogramas BPMN",
      icon: Zap,
      description:
        "Desenho profissional de fluxogramas no padrão BPMN, mapeamento AS-IS/TO-BE, SIPOC e documentação completa de processos. Ideal para empresas que precisam documentar e otimizar processos específicos.",
      duration: "2-4 semanas",
      deliverables: [
        "Mapeamento AS-IS (situação atual)",
        "Mapeamento TO-BE (situação futura otimizada)",
        "Fluxogramas em padrão BPMN",
        "Matriz SIPOC (Suppliers, Inputs, Process, Outputs, Customers)",
        "Documentação de processos",
        "Identificação de pontos de melhoria",
      ],
      ideal:
        "Empresas que precisam documentar processos para ISO, automação, ou preparação para consultoria completa.",
      price: "A partir de R$ 3.000",
      whyChoose: "Documentação profissional que facilita auditorias e treinamentos.",
    },
  ];

  const processMaps = [
    {
      src: "/fluxo-producao-bizagi.svg",
      alt: "Fluxo de Produção Industrial",
      title: "Produção Industrial",
      description: "Mapeamento completo de linha de manufatura com pontos de controle de qualidade",
    },
    {
      src: "/fluxo-atendimento-bizagi.svg",
      alt: "Fluxo de Atendimento ao Cliente",
      title: "Atendimento ao Cliente",
      description: "Jornada do cliente desde o primeiro contato até a resolução",
    },
    {
      src: "/fluxo-logistica-bizagi.svg",
      alt: "Fluxo de Logística e Distribuição",
      title: "Logística e Distribuição",
      description: "Processo de fulfillment com gestão de exceções",
    },
    {
      src: "/fluxo-manutencao-bizagi.svg",
      alt: "Fluxo de Manutenção Industrial",
      title: "Manutenção Industrial",
      description: "Fluxo de manutenção preventiva e corretiva com classificação por criticidade",
    },
    {
      src: "/fluxo-onboarding-bizagi.svg",
      alt: "Fluxo de Onboarding de Colaboradores",
      title: "Onboarding RH",
      description: "Jornada completa de integração de novos colaboradores",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent/60 to-transparent" />
          <div className="container relative z-10">
            <p className="eyebrow" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
              O que oferecemos
            </p>
            <h1 className="text-white mb-4">Nossos Serviços</h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Soluções completas em excelência operacional, desde diagnóstico até implementação.
              Cada serviço é customizado para a realidade da sua empresa.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 gap-12">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.id} className="p-8 md:p-12 border-border">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Left Column - Main Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="flex-shrink-0">
                            <IconComponent className="w-12 h-12 text-accent" />
                          </div>
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${service.badgeColor}`}>
                              {service.badge}
                            </span>
                            <h3 className="text-2xl font-bold text-primary mb-1">{service.title}</h3>
                            <p className="text-muted-foreground">{service.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-foreground mb-8 leading-relaxed">{service.description}</p>

                        <div className="mb-8">
                          <h4 className="font-bold text-primary mb-4">O que você recebe:</h4>
                          <ul className="space-y-3">
                            {service.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                <span className="text-foreground">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-muted/50 rounded-lg p-4 mb-8">
                          <p className="text-sm text-muted-foreground mb-2">
                            <strong>Ideal para:</strong>
                          </p>
                          <p className="text-foreground">{service.ideal}</p>
                        </div>

                        {/* Why choose this service */}
                        <div className="border-l-4 border-accent pl-4 py-3 bg-accent/5 rounded-r-lg">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Por que escolher este serviço:</p>
                          <p className="text-sm text-foreground italic" style={{ fontFamily: "'Playfair Display', serif" }}>{service.whyChoose}</p>
                        </div>
                      </div>

                      {/* Right Column - Timeline & CTA */}
                      <div className="md:col-span-1">
                        <div className="bg-accent/10 rounded-lg p-6 mb-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Clock className="w-5 h-5 text-accent" />
                            <h4 className="font-bold text-primary">Duração</h4>
                          </div>
                          <p className="text-foreground font-semibold">{service.duration}</p>
                        </div>

                        <div className="bg-primary/10 rounded-lg p-6 mb-6">
                          <h4 className="font-bold text-primary mb-2">Investimento</h4>
                          <p className="text-lg font-bold text-accent">{service.price}</p>
                        </div>

                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold w-full">
                          Solicitar Orçamento
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-primary mb-12 text-center">Comparação de Serviços</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-4 font-bold text-primary">Característica</th>
                    <th className="text-center py-4 px-4 font-bold text-primary">DRO</th>
                    <th className="text-center py-4 px-4 font-bold text-primary">DCMO</th>
                    <th className="text-center py-4 px-4 font-bold text-primary">Mapeamento</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Custo", dro: "Gratuito", dcmo: "Sob consulta", mapping: "A partir de R$ 3k" },
                    { feature: "Duração", dro: "1-2 semanas", dcmo: "8-12 semanas", mapping: "2-4 semanas" },
                    { feature: "Diagnóstico", dro: "✓ Básico", dcmo: "✓ Completo", mapping: "✓ Específico" },
                    { feature: "Implementação", dro: "✗", dcmo: "✓ Completa", mapping: "✗" },
                    { feature: "Treinamento", dro: "✗", dcmo: "✓ Sim", mapping: "✗" },
                    { feature: "Suporte Contínuo", dro: "✗", dcmo: "✓ Sim", mapping: "✗" },
                    { feature: "Ideal para", dro: "Avaliação inicial", dcmo: "Transformação", mapping: "Documentação" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-white/50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-foreground">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-foreground">{row.dro}</td>
                      <td className="py-4 px-4 text-center text-foreground">{row.dcmo}</td>
                      <td className="py-4 px-4 text-center text-foreground">{row.mapping}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Process Mapping Gallery */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <h2 className="text-primary mb-4 text-center">Exemplos de Mapeamento de Processos</h2>
            <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Veja alguns exemplos de fluxogramas profissionais desenvolvidos no padrão BPMN 
              para diferentes áreas e setores.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processMaps.map((map, idx) => (
                <Card key={idx} className="overflow-hidden border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="aspect-video bg-muted/50 flex items-center justify-center p-4 group-hover:bg-accent/5 transition-colors">
                    <img
                      src={map.src}
                      alt={map.alt}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary mb-2">{map.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{map.description}</p>
                    <p className="text-[11px] text-foreground/70 italic border-t border-dashed border-border pt-2">
                      {map.title === "Produção Industrial" && "Otimização de linha de produção com redução de gargalos e aumento de eficiência."}
                      {map.title === "Atendimento ao Cliente" && "Redução de gargalos em atendimento com melhoria no tempo de resposta."}
                      {map.title === "Logística e Distribuição" && "Otimização de cadeia de suprimentos e redução de custos logísticos."}
                      {map.title === "Manutenção Industrial" && "Aumento de disponibilidade de equipamentos com manutenção preventiva."}
                      {map.title === "Onboarding RH" && "Padronização de processos de integração para maior retenção de talentos."}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA for process mapping */}
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/5514991175103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary font-semibold px-6 py-3 rounded-sm transition-all duration-200 shadow-lg"
              >
                Solicitar Orçamento de Mapeamento
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section with urgency */}
        <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="ctaGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#ctaGrid)"/>
            </svg>
          </div>
          
          <div className="container text-center relative z-10">
            <h2 className="text-white mb-6">Qual Serviço é Ideal para Sua Empresa?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Comece com um diagnóstico gratuito e sem compromisso. Vamos identificar as melhores
              oportunidades para sua operação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="https://wa.me/5514991175103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-4 rounded-sm transition-all duration-200 shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.862L0 24l6.324-1.5A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-5.003-1.368l-.359-.214-3.731.979.997-3.643-.233-.374A9.774 9.774 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z"/>
                </svg>
                Falar no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/cases"
                className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-4 rounded-sm transition-all duration-200"
              >
                Ver Cases de Sucesso
              </a>
            </div>
            <p className="text-white/50 text-xs italic">
              ⏱️ Retornamos em até 24 horas úteis
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
