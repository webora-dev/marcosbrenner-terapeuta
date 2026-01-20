import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-therapy.jpg';

const WHATSAPP_LINK = "https://wa.me/5531920099413?text=Olá, Marcos! Vim pelo site do Instituto Restaurar e gostaria de agendar uma sessão.";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ambiente acolhedor de terapia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <p className="text-accent font-medium tracking-wide uppercase text-sm md:text-base mb-4 animate-fade-in-up">
            Instituto Restaurar
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Restauração emocional para indivíduos, casais e famílias
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Terapia Integrativa e Emocional com valores cristãos, respeitando sua história, sua fé e o seu tempo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button variant="outlineLight" size="lg" asChild>
              <a href="#sobre">
                Conhecer mais
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
