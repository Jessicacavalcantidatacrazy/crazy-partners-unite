import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Rocket, ArrowRight, Calculator } from "lucide-react";

const tiers = [
  {
    name: "Intermediate",
    icon: Target,
    clients: "1-5 clientes ativos",
    commission: "20%",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    example: "R$ 200",
    description: "Perfeito para começar sua jornada!"
  },
  {
    name: "Advanced", 
    icon: Rocket,
    clients: "6-10 clientes ativos",
    commission: "25%",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    example: "R$ 1.250",
    description: "O nível dos profissionais sérios!",
    popular: true
  },
  {
    name: "Expert",
    icon: Trophy,
    clients: "11+ clientes ativos",
    commission: "30%",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    example: "R$ 3.300+",
    description: "Para os verdadeiros Crazy Partners!"
  }
];

export default function CommissionSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/0.1,transparent)] " />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium animate-slide-up">
            <Calculator className="w-4 h-4 mr-2" />
            Estrutura de Comissões
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Quanto mais você vende,
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">mais você ganha!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Sistema de níveis que cresce com você. Comece ganhando e evolua para ganhar ainda mais! 📈
          </p>
        </div>

        {/* Commission Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative ${tier.bgColor} ${tier.borderColor} border-2 hover:shadow-elevation transition-all duration-300 hover:scale-105 group animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-6 py-2 font-semibold">
                    🔥 Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${tier.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tier.icon className={`w-8 h-8 ${tier.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{tier.name}</CardTitle>
                <p className="text-muted-foreground">{tier.clients}</p>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <div>
                  <div className={`text-5xl font-bold ${tier.color} mb-2`}>
                    {tier.commission}
                  </div>
                  <div className="text-muted-foreground">de comissão recorrente</div>
                </div>
                
                <div className={`p-4 ${tier.bgColor} rounded-xl`}>
                  <div className="text-sm text-muted-foreground mb-1">Exemplo mensal*</div>
                  <div className={`text-2xl font-bold ${tier.color}`}>{tier.example}</div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Example Calculation */}
        <div className="bg-gradient-card backdrop-blur-sm border border-primary/20 rounded-3xl p-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Vamos fazer as contas? 🧮
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-primary/10 rounded-xl">
                  <span className="text-foreground">10 clientes × R$ 167/mês (plano médio)</span>
                  <span className="font-bold text-primary">R$ 1.670</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-secondary/10 rounded-xl">
                  <span className="text-foreground">Sua comissão de 25% (Advanced)</span>
                  <span className="font-bold text-secondary">R$ 417,50</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-accent/10 rounded-xl border-2 border-accent/30">
                  <span className="text-foreground font-semibold">Ganho mensal recorrente</span>
                  <span className="font-bold text-accent text-xl">R$ 417,50</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                *Exemplo baseado em plano médio. Valores podem variar conforme planos contratados pelos clientes.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="bg-gradient-primary p-8 rounded-2xl text-white">
                <div className="text-4xl font-bold mb-2">R$ 5.010</div>
                <div className="text-lg opacity-90">ganho anual recorrente</div>
                <div className="text-sm opacity-75 mt-2">com apenas 10 clientes ativos!</div>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-6 rounded-xl w-full"
                onClick={() => window.open('https://partner.datacrazy.io/signup', '_blank')}
              >
                Começar a Ganhar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}