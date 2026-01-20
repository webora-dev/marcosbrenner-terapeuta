import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5531920099413?text=Olá, Marcos! Vim pelo site do Instituto Restaurar e gostaria de agendar uma sessão.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center animate-pulse-soft hover:scale-110 transition-transform duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  );
};

export default WhatsAppButton;
