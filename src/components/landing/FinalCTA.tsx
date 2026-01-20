import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import peacefulImage from '@/assets/peaceful-light.jpg';

const WHATSAPP_LINK = "https://wa.me/5531920099413?text=Olá, Marcos! Vim pelo site do Instituto Restaurar e gostaria de agendar uma sessão.";

const FinalCTA = () => {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={peacefulImage}
          alt="Ambiente calmo e acolhedor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/70 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
            Você não precisa enfrentar isso sozinho
          </h2>
          
          <div className="h-0.5 w-24 bg-accent mx-auto mb-8" />
          
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10">
            O primeiro passo pode começar com uma conversa acolhedora e respeitosa.
          </p>

          <Button variant="whatsapp" size="xl" className="w-full sm:w-auto whitespace-normal text-center h-auto py-4 px-4 sm:px-10" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <MessageCircle className="mr-2 flex-shrink-0" />
              <span>Agendar atendimento pelo WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
