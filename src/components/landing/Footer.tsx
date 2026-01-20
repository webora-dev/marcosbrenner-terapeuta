import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import logo from '@/assets/logo-instituto-restaurar.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Instituto Restaurar"
              className="h-24 md:h-28 w-auto mb-6 brightness-0 invert opacity-90"
            />
            <p className="text-white/70 leading-relaxed max-w-md">
              Terapia Integrativa e Emocional com valores cristãos. Cuidando de indivíduos, casais e famílias com acolhimento e respeito.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-accent">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5531920099413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (31) 92009-9413
                </a>
              </li>
              <li>
                <a
                  href="mailto:terapeutamarcosbrenner@gmail.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  terapeutamarcosbrenner@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5" />
                Ribeirão das Neves – MG
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-accent">
              Redes Sociais
            </h4>
            <a
              href="https://instagram.com/TerapeutaMarcosBrenner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
              @TerapeutaMarcosBrenner
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Instituto Restaurar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
