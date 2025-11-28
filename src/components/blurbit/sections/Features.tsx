import React from 'react';
import svgPaths from '../../../imports/svg-l1wt99x8tb';
import { SectionHeading } from '../ui/SectionHeading';
import { ShieldCheck, PenTool, Newspaper, CheckCircle } from 'lucide-react';

const SafePath = ({ d, ...props }: React.SVGProps<SVGPathElement>) => {
  if (!d) return null;
  return <path d={d} {...props} />;
};

const ArrowIcon = ({ variant }: { variant: 'grey' | 'green' | 'black' }) => (
  <svg className="w-10 h-10" viewBox="0 0 41 41" fill="none">
     <circle cx="20.5" cy="20.5" r="20.5" fill={variant === 'black' ? 'white' : 'var(--secondary)'} />
     <SafePath d={svgPaths.p298cdb00} fill={variant === 'black' ? 'var(--secondary)' : '#23d3a2'} />
  </svg>
);

const FeatureCard = ({ title, variant, icon: Icon }: { title: string, variant: 'grey' | 'green' | 'black', icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }) => {
  const bgColors = {
    grey: 'bg-[#f3f3f3]',
    green: 'bg-primary',
    black: 'bg-secondary',
  };

  const titleBg = {
    grey: 'bg-primary',
    green: 'bg-white',
    black: 'bg-white',
  };

  const textColor = variant === 'black' ? 'text-white' : 'text-black';
  const iconColor = variant === 'black' ? 'text-white' : 'text-black';

  return (
    <div className={`${bgColors[variant]} border border-[#191a23] rounded-[45px] p-12 shadow-[0px_5px_0px_0px_#191a23] flex justify-between items-center min-h-[310px] overflow-hidden relative`}>
      <div className="flex flex-col justify-between h-full gap-20 z-10 relative">
        <div>
          <span className={`${titleBg[variant]} px-2 rounded-[7px] text-3xl font-medium font-space md:whitespace-nowrap`}>{title}</span>
        </div>
        
        <div className="flex items-center gap-4 cursor-pointer group">
          <ArrowIcon variant={variant} />
          <span className={`text-xl font-space block ${textColor} group-hover:underline whitespace-nowrap`}>Scopri di più</span>
        </div>
      </div>

      <div className="w-[40%] md:w-[210px] flex items-center justify-center">
         <Icon className={`w-32 h-32 ${iconColor}`} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export const Features = () => {
  const features = [
    { title: "Fonti affidabili", v: 'grey' as const, icon: ShieldCheck },
    { title: "Revisione umana", v: 'green' as const, icon: PenTool },
    { title: "Pronti da pubblicare", v: 'green' as const, icon: Newspaper },
    { title: "3+ Fonti verificate", v: 'grey' as const, icon: CheckCircle },
  ];

  return (
    <section id="features" className="container mx-auto px-4 md:px-12 py-16 md:py-24">
      <SectionHeading 
        title="Perchè Blurbit" 
        description="Contenuti di qualità verificati e pronti per essere pubblicati" 
      />

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <FeatureCard key={i} title={f.title} variant={f.v} icon={f.icon} />
        ))}
      </div>
    </section>
  );
};
