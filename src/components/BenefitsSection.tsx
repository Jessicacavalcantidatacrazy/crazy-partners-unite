import { Card, CardContent } from "@/components/ui/card";
import { Repeat, Gift, Users, BarChart3, Clock, Shield } from "lucide-react";
import commissionIcon from "@/assets/commission-icon.jpg";
import networkIcon from "@/assets/network-icon.jpg";

const benefits = [
  {
    icon: Repeat,
    title: "Comissão Recorrente",
    description: "Ganhe todo mês enquanto seus clientes estiverem ativos. É dinheiro trabalhando para você!",
    color: "text-primary"
  },
  {
    icon: Gift,
    title: "Cupom Exclusivo R$ 100",
    description: "Seus clientes ganham desconto e você facilita a conversão. Win-win total!",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Suporte Dedicado",
    description: "Nossa equipe te apoia em tudo. Materiais, treinamentos e suporte técnico completo.",
    color: "text-accent"
  },
  {
    icon: BarChart3,
    title: "Dashboard Completo",
    description: "Acompanhe seus ganhos, conversões e performance em tempo real na plataforma Rewardful.",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Cookie de 30 Dias",
    description: "Seus leads têm 30 dias para converter. Mesmo voltando depois, a comissão é sua!",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Zero Burocracia",
    description: "Cadastro 100% digital, sem contratos, sem pegadinhas. Foco total na conversão!",
    color: "text-accent"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gradient-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Por que ser um <span className="bg-gradient-primary bg-clip-text text-transparent">Partner Crazy</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Não é só sobre ganhar dinheiro (embora seja muito bom 💰). É sobre fazer parte da revolução do CRM no Brasil!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl ${benefit.color.replace('text-', 'bg-')}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-bold text-foreground">
              Ganhe enquanto seus clientes <span className="text-primary">crescem</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              O DataCrazy não é só um CRM qualquer. É uma plataforma completa com IA, automações inteligentes e BI interno. 
              Seus clientes ficam viciados na eficiência, e você ganha recorrente! 🎯
            </p>
            <div className="flex items-center gap-4">
              <div className="w-2 h-12 bg-gradient-primary rounded-full" />
              <div>
                <div className="text-2xl font-bold text-primary">Média de Retenção</div>
                <div className="text-muted-foreground">Clientes ficam mais tempo = mais comissão para você</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <img 
              src={commissionIcon} 
              alt="Comissões Partners Crazy" 
              className="w-full h-auto rounded-2xl shadow-elevation hover:shadow-glow transition-all duration-300"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full animate-float blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}