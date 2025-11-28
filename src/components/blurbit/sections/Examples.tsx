import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight } from 'lucide-react';

const ExampleItem = ({ category, date, title }: { category: string, date: string, title: string }) => (
  <div className="flex flex-col gap-5 flex-1">
    <div className="mb-4">
      <span className="bg-primary text-black px-3 py-1 rounded-[7px] text-sm font-medium font-space mr-3">
        {category}
      </span>
      <span className="text-white/60 text-sm font-space">{date}</span>
    </div>
    <h3 className="text-white font-space text-xl font-medium leading-normal mb-4">
      {title}
    </h3>
    <div className="flex items-center gap-4 cursor-pointer hover:opacity-80">
      <span className="text-primary text-xl font-space">Leggi articolo</span>
      <ArrowRight className="w-5 h-5 text-primary -rotate-45" />
    </div>
  </div>
);

export const Examples = () => {
  const articles = [
    { category: "Tech", date: "20-11-2025", title: "Come l'AI sta rivoluzionando la comunicazione aziendale" },
    { category: "Business", date: "13-11-2025", title: "Contenuti pronti per blog e social: il nuovo vantaggio competitivo delle PMI" },
    { category: "Giornalismo", date: "6-11-2025", title: "La verifica delle fonti nell'era post-verità: come migliorare qualità e velocità nelle redazioni" },
  ];

  return (
    <section className="container mx-auto px-4 md:px-12 py-16 md:py-24">
      <SectionHeading 
        title="Articoli di esempio" 
        description="Un assaggio delle qualità di Blurbit" 
      />

      <div className="bg-secondary rounded-[45px] p-12 md:p-16 flex flex-col md:flex-row gap-12 md:gap-16 overflow-hidden">
        {articles.map((article, i) => (
          <React.Fragment key={i}>
            <ExampleItem {...article} />
            {i < articles.length - 1 && (
              <>
                <div className="hidden md:block w-px bg-white/50 self-stretch" />
                <div className="md:hidden h-px bg-white/50 w-full" />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
