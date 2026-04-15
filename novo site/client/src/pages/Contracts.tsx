import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, FileText, CheckCircle, AlertCircle } from "lucide-react";

export default function Contracts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container">
            <h1 className="text-white mb-4">Contratos e Termos de Serviço</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Informações transparentes sobre nossos contratos, prazos, garantias e condições de
              trabalho.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-4xl">
            {/* Tipos de Contrato */}
            <div className="mb-16">
              <h2 className="text-primary mb-8">Tipos de Contrato</h2>

              <div className="space-y-6">
                <Card className="p-8 border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <FileText className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Diagnóstico Rápido de Oportunidades (DRO)
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Contrato simples para avaliação inicial sem compromisso.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Duração: 1-2 semanas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Custo: Gratuito</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Sem obrigação de contratação futura</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Relatório executivo incluído</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <FileText className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Diagnóstico Completo (DCMO) + Implementação
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Contrato completo com implementação e transferência de conhecimento.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Duração: 8-12 semanas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Diagnóstico aprofundado incluído</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Implementação lado a lado</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Treinamento de equipe</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Acompanhamento de resultados</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-border">
                  <div className="flex items-start gap-4 mb-4">
                    <FileText className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        Mapeamento de Processos (Avulso)
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Contrato específico para documentação e mapeamento de processos.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Duração: 2-4 semanas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Fluxogramas em padrão BPMN</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Mapeamento AS-IS e TO-BE</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span>Documentação completa</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Termos Gerais */}
            <div className="mb-16">
              <h2 className="text-primary mb-8">Termos Gerais</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    Confidencialidade
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Todos os dados, processos e informações compartilhadas durante o projeto são
                    tratados com total confidencialidade. Assinamos NDA (Non-Disclosure Agreement)
                    quando necessário. Nenhuma informação sobre sua empresa será divulgada sem
                    autorização prévia.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    Prazos e Cronograma
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Os prazos estimados são baseados em projetos similares. Podem variar conforme
                    a complexidade da operação, disponibilidade da equipe interna e mudanças de
                    escopo. Qualquer alteração será comunicada com antecedência.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    Garantias
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Garantimos a qualidade técnica do trabalho e a dedicação de profissionais
                    experientes. Resultados específicos dependem da implementação correta das
                    recomendações e do envolvimento da equipe interna.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    Cancelamento e Reembolso
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Para contratos de DRO (diagnóstico gratuito), não há custo e nenhuma
                    obrigação. Para contratos DCMO e Mapeamento, políticas específicas de
                    cancelamento serão definidas no contrato individual.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    Propriedade Intelectual
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Os documentos, fluxogramas, planos de ação e relatórios desenvolvidos são de
                    propriedade do cliente. Podemos solicitar permissão para usar como case study
                    (sem identificação da empresa).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-accent" />
                    Pagamento
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Aceitamos transferência bancária, cartão de crédito e PIX. Condições de
                    pagamento (à vista, parcelado, etc.) serão negociadas conforme o tipo de
                    contrato e volume do projeto.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-accent/10 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-primary mb-4">
                Pronto para Começar?
              </h3>
              <p className="text-muted-foreground mb-6">
                Agende um diagnóstico gratuito e sem compromisso para discutir qual tipo de
                contrato é ideal para sua empresa.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
                Agendar Diagnóstico Gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
