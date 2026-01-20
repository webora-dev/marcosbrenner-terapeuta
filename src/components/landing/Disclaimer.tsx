import { Info } from 'lucide-react';

const Disclaimer = () => {
  return (
    <section className="py-10 bg-background border-t border-border">
      <div className="container">
        <div className="flex items-start gap-4 max-w-3xl mx-auto">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <Info className="w-5 h-5 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Aviso importante:</strong> Atendimento de apoio terapêutico integrativo e emocional. Não substitui acompanhamento médico, psicológico ou psiquiátrico quando necessário.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
