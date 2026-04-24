import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Gerente de Operações",
      company: "Indústria de Manufatura",
      content:
        "A consultoria transformou completamente nossa linha de produção. Reduzimos o tempo de ciclo em 35% e a qualidade melhorou significativamente. O conhecimento transferido permitiu que nossa equipe continue melhorando sozinha.",
      rating: 5,
      result: "35% redução em tempo de ciclo",
    },
    {
      name: "Fernanda Costa",
      role: "Diretora de Saúde",
      company: "Hospital Regional",
      content:
        "Implementar o mapeamento de processos no pronto-socorro foi crucial. Reduzimos o tempo de espera dos pacientes em 25% e aumentamos a satisfação em 42%. Recomendo muito!",
      rating: 5,
      result: "25% redução no tempo de espera",
    },
    {
      name: "Roberto Mendes",
      role: "Diretor Logístico",
      company: "Distribuidora Regional",
      content:
        "O trabalho de otimização de processos de fulfillment foi excelente. Conseguimos reduzir o tempo de entrega em 30% e os erros de picking caíram 55%. ROI impressionante em poucos meses.",
      rating: 5,
      result: "30% redução no tempo de entrega",
    },
    {
      name: "Mariana Oliveira",
      role: "Gerente de RH",
      company: "Empresa de Tecnologia",
      content:
        "O processo de onboarding que desenhamos com a consultoria reduziu o tempo de integração em 50%. Nossos novos colaboradores estão muito mais produtivos desde o início. A retenção também melhorou bastante.",
      rating: 5,
      result: "50% redução no tempo de onboarding",
    },
    {
      name: "Paulo Ribeiro",
      role: "Superintendente de Manutenção",
      company: "Indústria Química",
      content:
        "Implementar a metodologia de manutenção preventiva e corretiva foi transformador. Reduzimos paradas não planejadas em 40% e o ROI foi de 180% em apenas 6 meses. Excelente trabalho!",
      rating: 5,
      result: "40% redução em paradas não planejadas",
    },
    {
      name: "Juliana Pereira",
      role: "Coordenadora de Projetos",
      company: "Empresa de Construção",
      content:
        "A consultoria nos ajudou a padronizar os processos de gestão de projetos. Conseguimos reduzir atrasos em 20% e economizar 15% em custos. Agora temos muito mais controle sobre cronogramas e orçamentos.",
      rating: 5,
      result: "20% redução em atrasos de projeto",
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
              O que dizem sobre nós
            </p>
            <h1 className="text-white mb-4">Depoimentos de Clientes</h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Veja o que nossos clientes dizem sobre a transformação que conquistamos juntos.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="p-8 border-border hover:shadow-lg transition-shadow">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground mb-6 italic leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* Result Badge */}
                  <div className="bg-accent/10 rounded-lg p-3 mb-6">
                    <p className="text-sm font-semibold text-accent">{testimonial.result}</p>
                  </div>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-primary mb-12 text-center">Resultados Agregados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: "400+", label: "Colaboradores Capacitados" },
                { number: "R$ 3,2M+", label: "Em Savings Gerados" },
                { number: "98%", label: "Taxa de Satisfação" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
