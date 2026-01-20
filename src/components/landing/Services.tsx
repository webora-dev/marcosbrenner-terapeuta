import { 
  Brain, 
  HeartHandshake, 
  Users, 
  Sparkles,
  ShieldCheck,
  Lightbulb,
  Heart,
  Target,
  Frown,
  UserCheck,
  Home,
  MessageSquareHeart
} from 'lucide-react';

const serviceCategories = [
  {
    title: 'Questões Emocionais',
    icon: Brain,
    items: [
      { icon: ShieldCheck, text: 'Ansiedade leve a moderada' },
      { icon: Lightbulb, text: 'Estresse emocional e mental' },
      { icon: Frown, text: 'Cansaço emocional e sobrecarga' },
      { icon: Heart, text: 'Tristeza profunda' },
      { icon: Target, text: 'Medos e inseguranças' },
      { icon: UserCheck, text: 'Baixa autoestima' },
      { icon: Sparkles, text: 'Falta de propósito' },
      { icon: HeartHandshake, text: 'Culpa excessiva' },
      { icon: Brain, text: 'Bloqueios emocionais' },
      { icon: Lightbulb, text: 'Falta de motivação' },
      { icon: Heart, text: 'Feridas emocionais do passado' },
    ],
  },
  {
    title: 'Casamento e Família',
    icon: Home,
    items: [
      { icon: MessageSquareHeart, text: 'Conflitos conjugais' },
      { icon: HeartHandshake, text: 'Crises no casamento' },
      { icon: MessageSquareHeart, text: 'Falta de diálogo' },
      { icon: Heart, text: 'Distanciamento emocional' },
      { icon: Users, text: 'Restauração de vínculos' },
      { icon: Sparkles, text: 'Apoio a casais cristãos' },
      { icon: Home, text: 'Pais e filhos' },
    ],
  },
  {
    title: 'Espiritualidade e Emoções',
    icon: Sparkles,
    items: [
      { icon: Heart, text: 'Emoções ligadas à fé' },
      { icon: Lightbulb, text: 'Crises espirituais' },
      { icon: HeartHandshake, text: 'Culpa religiosa excessiva' },
    ],
  },
];

const Services = () => {
  return (
    <section id="atuacao" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Como posso te ajudar
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="card-soft p-8 hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 icon-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
