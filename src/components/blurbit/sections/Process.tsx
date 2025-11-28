/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import svgPaths from '../../../imports/svg-l1wt99x8tb';
import { SectionHeading } from '../ui/SectionHeading';

const SafePath = ({ d, ...props }: React.SVGProps<SVGPathElement>) => {
  if (!d) return null;
  return <path d={d} {...props} />;
};

const ProcessItem = ({ number, title, content, isOpen, onClick }: any) => {
  return (
    <div 
      className={`border border-[#191a23] rounded-[45px] p-8 md:px-12 md:py-10 transition-all duration-300 shadow-[0px_5px_0px_0px_#191a23] ${isOpen ? 'bg-primary' : 'bg-[#f3f3f3]'}`}
    >
      <div className="flex items-center justify-between cursor-pointer" onClick={onClick}>
        <div className="flex items-center gap-6 md:gap-10">
          <span className="text-3xl md:text-6xl font-medium font-space">{number}</span>
          <span className="text-xl md:text-3xl font-medium font-space">{title}</span>
        </div>
        <button style={{ backgroundColor: 'transparent', borderColor: 'var(--secondary)', borderRadius: '50%' }} className="w-10 h-10 md:w-14 md:h-14 border border-primary flex items-center justify-center bg-light-gray shrink-0">
          {isOpen ? (
            <svg width="18" height="6" viewBox="0 0 18 6" fill="none"><path d="M0 5.64V0H17.76V5.64H0Z" fill="var(--secondary)"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><SafePath d={svgPaths.p9dc0700} fill="var(--secondary)" transform="scale(0.6) translate(-14, -14)"/></svg> 
          )}
        </button>
      </div>
      
      {isOpen && (
        <div className="mt-8 pt-8 border-t border-black">
          <p className="text-lg font-space">{content}</p>
        </div>
      )}
    </div>
  );
};

export const Process = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const steps = [
    { title: "Scegli un tema.", content: "Indica l'argomento che vuoi trattare oppure lascia che Blurbit proponga le notizie più rilevanti per il tuo settore." },
    { title: "Sintesi AI verificata", content: "L'AI identifica almeno 3 fonti indipendenti, incrocia le informazioni e produce una bozza accurata e priva di speculazioni." },
    { title: "Revisione editoriale", content: "Un editor umano rifinisce il testo, controlla dati e coerenza e consegna l'articolo già pronto per sito, blog o social." },
  ];

  return (
    <section id="process" className="container mx-auto px-4 md:px-12 py-16 md:py-24 min-h-screen flex flex-col justify-center">
      <SectionHeading 
        title="Come funziona" 
        description="Dalla notizia all'articolo in 3 step semplici" 
      />

      <div className="flex flex-col gap-6">
        {steps.map((step, i) => (
          <ProcessItem 
            key={i}
            number={`0${i + 1}`}
            title={step.title}
            content={step.content}
            isOpen={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
};
