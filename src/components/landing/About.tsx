import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-instituto-restaurar.png';

const WHATSAPP_LINK = "https://wa.me/5531920099413?text=Olá, Marcos! Vim pelo site do Instituto Restaurar e gostaria de agendar uma sessão.";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 section-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Logo Side */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3" />
              <div className="relative bg-background rounded-3xl p-12 shadow-card">
                <img
                  src={logo}
                  alt="Instituto Restaurar"
                  className="w-64 md:w-80 h-auto"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Quem Sou
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Sobre Marcos Brenner
            </h2>
            
            <div className="gold-line w-20 mb-8" />
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                Sou Terapeuta Integrativo & Emocional Cristão, com atuação no cuidado da saúde emocional, individual, casais e famílias.
              </p>
              <p>
                Minha abordagem une técnicas terapêuticas integrativas, princípios emocionais e valores cristãos, respeitando a história, a fé e o ritmo de cada pessoa. O atendimento é baseado em acolhimento, escuta ativa e apoio emocional, sempre com ética, sensibilidade e responsabilidade.
              </p>
            </div>

            <Button variant="cta" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                Falar comigo no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
