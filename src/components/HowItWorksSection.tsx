import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Link, Share2, DollarSign, ArrowRight, ExternalLink } from "lucide-react";
import networkIcon from "@/assets/network-icon.jpg";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Cadastro Simples",
    description: "Acesse o link, preencha seus dados básicos e aceite os termos. Leva menos de 5 minutos!",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    number: "02", 
    icon: Link,
    title: "Receba seu Kit",
    description: "Link exclusivo + cupom personalizado de R$ 100 gerados automaticamente na plataforma.",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    number: "03",
    icon: Share2,
    title: "Divulgue Livremente",
    description: "Compartilhe seu link em redes sociais, blog, e-mail, WhatsApp... onde e como quiser!",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    number: "04",
    icon: DollarSign,
    title: "Receba as Comissões",
    description: "Acompanhe tudo no dashboard e receba suas comissões recorrentes mensalmente!",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Como funciona na <span className="bg-gradient-primary bg-clip-text text-transparent">prática</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Simples, rápido e sem complicação. Do cadastro ao primeiro pagamento em 4 passos! 🎯
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className={`w-8 h-8 ${step.color}`} />
                      </div>
                      <div className={`text-sm font-bold ${step.color} text-center`}>
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Visual + CTA */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <img 
                src={networkIcon} 
                alt="Rede de Parceiros DataCrazy" 
                className="w-full h-auto rounded-2xl shadow-elevation hover:shadow-glow transition-all duration-300"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full animate-float blur-xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Pronto para começar a <span className="text-primary">inovar</span>?
              </h3>
              <p className="text-muted-foreground">
                Milhares de empresas brasileiras já usam o DataCrazy. Agora é sua vez de ganhar com isso!
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-6 rounded-xl w-full"
                  onClick={() => window.open('https://partner.datacrazy.io/signup', '_blank')}
                >
                  Cadastrar Agora - É Grátis!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-xl w-full"
                  onClick={() => window.open('https://datacrazy.io', '_blank')}
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Conhecer o DataCrazy
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  ⚡ Cadastro 100% digital • Sem burocracia • Suporte completo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}