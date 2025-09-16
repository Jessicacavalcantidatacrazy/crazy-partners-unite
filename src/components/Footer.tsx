import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20 py-16">
      <div className="container mx-auto px-6">
        {/* Final CTA */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Pronto para ser um <span className="bg-gradient-primary bg-clip-text text-transparent">Partner Crazy</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se aos profissionais que já estão ganhando dinheiro promovendo a revolução do CRM no Brasil!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-12 py-6 rounded-xl"
              onClick={() => window.open('https://partner.datacrazy.io/signup', '_blank')}
            >
              Começar Agora - Grátis
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Links and Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Links Úteis</h3>
            <div className="space-y-2">
              <a 
                href="https://datacrazy.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Site Oficial DataCrazy
              </a>
              <a 
                href="https://partner.datacrazy.io/signup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Cadastro de Parceiro
              </a>
              <a 
                href="https://cal.com/team/crm-datacrazy/demonstracao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Agendar Demo
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Suporte</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>Suporte via plataforma</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-4 h-4" />
                <span>Chat direto no dashboard</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Programa Partners Crazy</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Powered by Rewardful - Plataforma internacional de gestão de afiliados. 
              Segurança e transparência total em seus ganhos.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 DataCrazy - Programa Partners Crazy. Todos os direitos reservados. 
            <br />
            <span className="text-primary">Não somos apenas um CRM. Somos DataCrazy! 🚀</span>
          </p>
        </div>
      </div>
    </footer>
  );
}