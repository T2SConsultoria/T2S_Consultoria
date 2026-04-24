import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Os 5 Desperdícios Mais Comuns em Operações Manufatureiras",
      excerpt:
        "Descubra os principais tipos de desperdício (muda) que drenam a lucratividade de sua fábrica e como identificá-los.",
      category: "Lean",
      author: "Tiago Fernandes",
      date: "12 de abril de 2024",
      readTime: "5 min",
      content:
        "A metodologia Lean identifica sete tipos principais de desperdício. Neste artigo, focamos nos cinco mais comuns em operações manufatureiras...",
    },
    {
      id: 2,
      title: "Kaizen: Como Implementar Melhoria Contínua em Sua Empresa",
      excerpt:
        "Aprenda os princípios fundamentais do Kaizen e como criar uma cultura de melhoria contínua em toda a organização.",
      category: "Kaizen",
      author: "Tiago Fernandes",
      date: "10 de abril de 2024",
      readTime: "7 min",
      content:
        "Kaizen significa 'mudança para melhor' em japonês. É uma filosofia que envolve toda a organização em busca de melhorias contínuas...",
    },
    {
      id: 3,
      title: "5S: O Primeiro Passo para a Excelência Operacional",
      excerpt:
        "Entenda como o método 5S (Sort, Set, Shine, Standardize, Sustain) transforma o ambiente de trabalho e aumenta a produtividade.",
      category: "5S",
      author: "Tiago Fernandes",
      date: "8 de abril de 2024",
      readTime: "6 min",
      content:
        "O 5S é frequentemente o primeiro passo na jornada Lean. Seus benefícios vão muito além da limpeza e organização...",
    },
    {
      id: 4,
      title: "Como Mapear Processos: Guia Prático com BPMN",
      excerpt:
        "Um guia completo sobre como mapear processos usando o padrão BPMN e identificar oportunidades de melhoria.",
      category: "Processos",
      author: "Tiago Fernandes",
      date: "5 de abril de 2024",
      readTime: "8 min",
      content:
        "O mapeamento de processos é fundamental para entender como o trabalho flui em sua organização. Neste artigo, mostramos como fazer isso...",
    },
    {
      id: 5,
      title: "ROI de Consultoria Lean: Quanto Você Pode Economizar?",
      excerpt:
        "Análise de casos reais mostrando o retorno sobre investimento típico de projetos de consultoria em excelência operacional.",
      category: "Negócios",
      author: "Tiago Fernandes",
      date: "3 de abril de 2024",
      readTime: "6 min",
      content:
        "Muitas empresas hesitam em investir em consultoria Lean. Mas os números mostram que o ROI é impressionante...",
    },
    {
      id: 6,
      title: "Indicadores Essenciais para Monitorar Melhoria Contínua",
      excerpt:
        "Conheça os KPIs mais importantes para acompanhar o progresso de sua jornada de excelência operacional.",
      category: "Indicadores",
      author: "Tiago Fernandes",
      date: "1 de abril de 2024",
      readTime: "7 min",
      content:
        "Sem indicadores claros, é impossível saber se suas melhorias estão gerando resultados. Veja quais são os mais importantes...",
    },
  ];

  const categories = ["Todos", "Lean", "Kaizen", "5S", "Processos", "Negócios", "Indicadores"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent/60 to-transparent" />
          <div className="container relative z-10">
            <p className="eyebrow" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
              Conhecimento em prática
            </p>
            <h1 className="text-white mb-4">Blog &amp; Insights</h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Artigos, guias e insights práticos sobre Lean, Kaizen, 5S e melhoria contínua.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b border-border">
          <div className="container">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    idx === 0
                      ? "bg-accent text-white"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Card key={article.id} className="p-6 border-border hover:shadow-lg transition-shadow flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-primary mb-3 flex-grow">{article.title}</h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4 text-sm">{article.excerpt}</p>

                  {/* Meta */}
                  <div className="border-t border-border pt-4 mb-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <div>{article.readTime}</div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white w-full"
                  >
                    Ler Artigo <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 md:py-24 bg-accent/10">
          <div className="container text-center">
            <h2 className="text-primary mb-4">Receba Novos Artigos por Email</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter e receba dicas, insights e artigos sobre excelência
              operacional direto na sua caixa de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-white text-foreground"
              />
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                Inscrever
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
