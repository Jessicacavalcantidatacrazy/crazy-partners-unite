import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function PartnersHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/25 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mb-8 animate-slide-up">
          <Zap className="w-5 h-5 text-primary animate-glow" />
          <span className="text-sm font-medium text-primary">Programa Oficial de Parceria</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="bg-gradient-vibrant bg-clip-text text-transparent">
            Partners
          </span>
          <br />
          <span className="text-foreground">Crazy</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Não só acompanhe o mercado de CRM. <br />
          <span className="text-primary font-semibold">Inove ele e ganhe com isso! 🚀</span>
        </p>
        
        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Torne-se um parceiro oficial do DataCrazy e ganhe comissões recorrentes de até <span className="text-secondary font-bold">30%</span> promovendo o CRM mais inovador do Brasil.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-6 rounded-xl"
            onClick={() => window.open('https://partner.datacrazy.io/signup', '_blank')}
          >
            Quero ser um Crazy
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-xl"
          >
            <TrendingUp className="mr-2 w-5 h-5" />
            Ver Comissões
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="bg-card/20 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:bg-card/30 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">30%</div>
            <div className="text-muted-foreground">Comissão máxima recorrente</div>
          </div>
          <div className="bg-card/20 backdrop-blur-sm border border-secondary/20 rounded-2xl p-6 hover:bg-card/30 transition-all duration-300">
            <div className="text-3xl font-bold text-secondary mb-2">R$ 100</div>
            <div className="text-muted-foreground">Cupom de desconto exclusivo</div>
          </div>
          <div className="bg-card/20 backdrop-blur-sm border border-accent/20 rounded-2xl p-6 hover:bg-card/30 transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">30 dias</div>
            <div className="text-muted-foreground">Cookie de rastreamento</div>
          </div>
        </div>
      </div>
    </section>
  );
}