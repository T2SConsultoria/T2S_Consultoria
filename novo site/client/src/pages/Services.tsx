import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Target, Users, TrendingUp, Zap } from "lucide-react";

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
    },
    {
      id: 2,
      badge: "COMPLETO",
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
    },
  ];

  const processMaps = [
    {
      src: "/fluxo-producao-bizagi.svg",
      alt: "Fluxo de Produção Industrial",
      title: "Produção Industrial",
    },
    {
      src: "/fluxo-atendimento-bizagi.svg",
      alt: "Fluxo de Atendimento ao Cliente",
      title: "Atendimento ao Cliente",
    },
    {
      src: "/fluxo-logistica-bizagi.svg",
      alt: "Fluxo de Logística e Distribuição",
      title: "Logística e Distribuição",
    },
    {
      src: "/fluxo-manutencao-bizagi.svg",
      alt: "Fluxo de Manutenção Industrial",
      title: "Manutenção Industrial",
    },
    {
      src: "/fluxo-onboarding-bizagi.svg",
      alt: "Fluxo de Onboarding de Colaboradores",
      title: "Onboarding RH",
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
                <Card key={idx} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted/50 flex items-center justify-center p-4">
                    <img
                      src={map.src}
                      alt={map.alt}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-primary text-center">{map.title}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-white mb-6">Qual Serviço é Ideal para Sua Empresa?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Comece com um diagnóstico gratuito e sem compromisso. Vamos identificar as melhores
              oportunidades para sua operação.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
              Agendar Diagnóstico Gratuito
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
