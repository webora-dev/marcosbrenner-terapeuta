import { Heart, Sparkles, Cross } from 'lucide-react';

const trustItems = [
  {
    icon: Heart,
    title: 'Acolhimento',
    description: 'Escuta ativa sem julgamentos, respeitando sua história e sentimentos.',
  },
  {
    icon: Sparkles,
    title: 'Abordagem Integrativa',
    description: 'Técnicas terapêuticas que cuidam da mente, emoções e espírito de forma integrada.',
  },
  {
    icon: Cross,
    title: 'Valores Cristãos',
    description: 'Equilíbrio emocional fundamentado em princípios de fé e restauração.',
  },
];

const TrustBlock = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="card-soft p-8 text-center hover:shadow-elevated transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <item.icon className="w-8 h-8 icon-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
