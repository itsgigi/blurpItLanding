import { SectionHeading } from '../ui/SectionHeading';
import { Search, ShieldCheck, Sparkles, PenTool } from 'lucide-react';

const ProcessStepCard = ({ 
  number, 
  title, 
  description, 
  icon: Icon,
  variant 
}: { 
  number: string, 
  title: string, 
  description: string,
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  variant: 'gray' | 'green'
}) => {
  const bgColor = variant === 'green' ? 'bg-primary' : 'bg-[#f3f3f3]';
  const iconBg = variant === 'green' ? 'bg-white' : 'bg-primary';
  
  return (
    <div className={`${bgColor} border border-[#191a23] rounded-[45px] p-8 md:p-10 shadow-[0px_5px_0px_0px_#191a23] flex flex-col gap-6`}>
      <div className="flex items-center gap-4">
        <div className={`${iconBg} rounded-full p-3 flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-black" strokeWidth={2} />
        </div>
        <span className="text-3xl md:text-4xl font-medium font-space text-black">{number}</span>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-medium font-space text-black mb-3">
          {title}
        </h3>
        <p className="text-base md:text-lg font-space text-black leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export const About = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Selezione delle notizie',
      description: 'Basata su termometro tematico e aggiornamento continuo.',
      icon: Search,
      variant: 'gray' as const,
    },
    {
      number: '02',
      title: 'Verifica rigorosa',
      description: 'Su almeno tre fonti indipendenti per garantire l\'affidabilità.',
      icon: ShieldCheck,
      variant: 'green' as const,
    },
    {
      number: '03',
      title: 'Sintesi AI controllata',
      description: 'Progettata per eliminare errori, bias e speculazioni.',
      icon: Sparkles,
      variant: 'green' as const,
    },
    {
      number: '04',
      title: 'Revisione umana professionale',
      description: 'Garantisce stile, tono e coerenza con la tua testata.',
      icon: PenTool,
      variant: 'gray' as const,
    },
  ];

  return (
    <section id="about" className="container mx-auto px-4 md:px-12 py-16 md:py-24">
      <SectionHeading 
        title="About Blurbit" 
        description="Il modo più rapido e sicuro per ottenere contenuti editoriali professionali" 
      />
      
      <div className="space-y-12">
        <div className="border border-[#191a23] rounded-[45px] p-8 md:p-12 bg-muted shadow-[0px_5px_0px_0px_#191a23]">
          <div className="space-y-6 text-lg text-black font-space leading-relaxed max-w-4xl">
            <p className="text-xl md:text-2xl font-medium">
              Blurbit è il modo più rapido e sicuro per ottenere contenuti editoriali professionali senza redazione interna.
            </p>
            
            <p className="text-base md:text-lg">
              Trasformiamo le notizie rilevanti per il tuo settore in articoli originali, verificati e già pronti per essere pubblicati su sito, blog o social.
            </p>
            
            <p className="text-base md:text-lg font-medium">
              Ogni contenuto nasce da un processo editoriale completo:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, i) => (
            <ProcessStepCard 
              key={i}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              variant={step.variant}
            />
          ))}
        </div>

        <div className="border border-[#191a23] rounded-[45px] p-8 md:p-12 bg-[#f3f3f3] shadow-[0px_5px_0px_0px_#191a23]">
          <p className="text-lg md:text-xl font-space text-black leading-relaxed max-w-4xl">
            Il risultato: contenuti affidabili, puliti e realmente pubblicabili, pensati per aumentare la frequenza editoriale, migliorare la reputazione e liberarti dal lavoro operativo.
          </p>
        </div>
      </div>
    </section>
  );
};
