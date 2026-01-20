import { MessageSquare, Users, CalendarCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Entre em contato',
    description: 'Você entra em contato pelo WhatsApp de forma simples e rápida.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Conversamos',
    description: 'Conversamos para entender sua necessidade e como posso te ajudar.',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Agendamos',
    description: 'Agendamos o atendimento no melhor dia e horário para você.',
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28 section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Simples e Acolhedor
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Como funciona
          </h2>
          <div className="gold-line w-24 mx-auto" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="relative bg-background rounded-2xl p-8 text-center shadow-card hover:shadow-elevated transition-shadow duration-300">
                {/* Number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {step.number.slice(-1)}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 mt-4">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
