import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import coupleImage from '@/assets/couple-hands.jpg';

const WHATSAPP_LINK = "https://wa.me/5531920099413?text=Olá, Marcos! Vim pelo site do Instituto Restaurar e gostaria de restaurar meu relacionamento.";

const Marriage = () => {
  return (
    <section className="py-20 md:py-28 section-teal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              Casamento & Emoções
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Seu relacionamento não precisa continuar assim
            </h2>
            
            <div className="h-0.5 w-20 bg-accent mb-8" />
            
            <p className="text-white/90 text-lg leading-relaxed mb-10">
              Conflitos, silêncio e distanciamento emocional podem ser cuidados. Com apoio e orientação, é possível restaurar o diálogo, fortalecer vínculos e reconstruir a conexão no casamento e na família.
            </p>

            <Button 
              variant="whatsapp" 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto whitespace-normal text-center h-auto py-4 px-4 sm:px-10"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <MessageCircle className="mr-2 flex-shrink-0" />
                <span>Quero restaurar meu relacionamento</span>
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-3xl transform -rotate-3" />
            <img
              src={coupleImage}
              alt="Casal de mãos dadas - restauração do casamento"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marriage;
