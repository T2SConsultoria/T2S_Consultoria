import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Factory, Heart, Truck, Users, Building2 } from "lucide-react";

export default function Cases() {
  const casesByCategory = {
    industrial: [
      {
        title: "Linha de Envase — Produção",
        description:
          "Mapeamento completo do fluxo produtivo com pontos de inspeção de qualidade, loops de retrabalho e gates de aprovação.",
        icon: Factory,
        metrics: ["Redução de 35% no tempo de ciclo", "Aumento de 28% na capacidade"],
      },
      {
        title: "Manutenção Preventiva e Corretiva",
        description:
          "Workflow de manutenção com classificação por criticidade, gestão de peças sobressalentes e ciclo de teste e liberação.",
        icon: Factory,
        metrics: ["Redução de 40% em paradas não planejadas", "ROI de 180% em 6 meses"],
      },
    ],
    saude: [
      {
        title: "Pronto Socorro — Atendimento ao Paciente",
        description:
          "Fluxo de triagem com classificação de risco Manchester, roteamento por prioridade e decisões clínicas otimizadas.",
        icon: Heart,
        metrics: ["Redução de 25% no tempo de espera", "Satisfação do paciente +42%"],
      },
    ],
    logistica: [
      {
        title: "Gestão de Pedidos e Distribuição",
        description:
          "Processo completo de fulfillment: do recebimento do pedido à confirmação de entrega, com verificações e tratamento de exceções.",
        icon: Truck,
        metrics: ["Redução de 30% no tempo de entrega", "Erro de picking reduzido em 55%"],
      },
    ],
    rh: [
      {
        title: "Onboarding de Colaboradores",
        description:
          "Jornada completa de integração: documentação, acessos, treinamentos e avaliações de 30 e 90 dias até efetivação.",
        icon: Users,
        metrics: ["Redução de 50% no tempo de onboarding", "Retenção aumentada em 38%"],
      },
    ],
    construcao: [
      {
        title: "Gestão de Projetos e Obras",
        description:
          "Processo de planejamento, execução e controle de projetos com rastreamento de marcos, alocação de recursos e gestão de riscos.",
        icon: Building2,
        metrics: ["Redução de 20% em atrasos", "Economia de 15% em custos de projeto"],
      },
    ],
  };

  const categories = [
    { key: "industrial", label: "🏭 Industrial & Manufatura", color: "bg-blue-100 text-blue-800" },
    { key: "saude", label: "🏥 Saúde", color: "bg-red-100 text-red-800" },
    { key: "logistica", label: "🚛 Logística & Distribuição", color: "bg-green-100 text-green-800" },
    { key: "rh", label: "👥 RH & Administrativo", color: "bg-purple-100 text-purple-800" },
    { key: "construcao", label: "🏗️ Construção & Projetos", color: "bg-orange-100 text-orange-800" },
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
              Resultados reais
            </p>
            <h1 className="text-white mb-4">Cases de Sucesso</h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Exemplos reais de transformações operacionais desenvolvidas para diferentes setores.
              Cada projeto foi customizado para a realidade específica do cliente.
            </p>
          </div>
        </section>

        {/* Cases by Category */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            {categories.map((category) => (
              <div key={category.key} className="mb-20">
                <div className="mb-8">
                  <span className={`inline-block px-4 py-2 rounded-lg font-semibold ${category.color}`}>
                    {category.label}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {casesByCategory[category.key as keyof typeof casesByCategory].map(
                    (caseItem, idx) => {
                      const IconComponent = caseItem.icon;
                      return (
                        <Card key={idx} className="p-8 border-border hover:shadow-lg transition-shadow">
                          <div className="flex items-start gap-4 mb-6">
                            <IconComponent className="w-12 h-12 text-accent flex-shrink-0" />
                            <div>
                              <h3 className="text-xl font-bold text-primary">{caseItem.title}</h3>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-6">{caseItem.description}</p>

                          <div className="bg-muted/50 rounded-lg p-4 mb-6">
                            <p className="text-sm font-semibold text-primary mb-3">Resultados Alcançados:</p>
                            <ul className="space-y-2">
                              {caseItem.metrics.map((metric, midx) => (
                                <li key={midx} className="text-sm text-foreground flex items-start gap-2">
                                  <span className="text-accent font-bold">✓</span>
                                  {metric}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Button
                            variant="outline"
                            className="border-accent text-accent hover:bg-accent hover:text-white w-full"
                          >
                            Ver Detalhes <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Card>
                      );
                    }
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container text-center">
            <h2 className="text-primary mb-6">Quer Conhecer Mais Sobre Nossos Projetos?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada case é único e reflete nossa capacidade de adaptar soluções para diferentes
              contextos operacionais. Fale conosco para discutir como podemos ajudar sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                Agendar Diagnóstico Gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Fale Conosco no WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
