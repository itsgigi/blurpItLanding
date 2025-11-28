import React from 'react';
import svgPaths from '../../../imports/svg-l1wt99x8tb';

const SafePath = ({ d, ...props }: React.SVGProps<SVGPathElement>) => {
  if (!d) {
    console.warn('Missing SVG path');
    return null;
  }
  return <path d={d} {...props} />;
};

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 md:px-12 pt-10 pb-20 md:pb-24 md:min-h-screen flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-32 items-center mb-16">
        <div className="flex flex-col gap-8 items-start">
          <h1 className="text-2xl md:text-6xl font-medium font-space leading-tight">
            Notizie verificate. <br/>
            Articoli pronti da pubblicare.
          </h1>
          <p className="text-xl text-black font-space leading-relaxed max-w-lg">
            Sintesi AI, verifica delle fonti e revisione umana. Contenuti già pronti per sito, blog o social.
          </p>
          <a href="#contact" className="w-full md:w-auto">
            <button style={{ backgroundColor: 'var(--secondary)' }} className="text-white px-8 py-5 rounded-[14px] text-xl">
              Richiedi una demo
            </button>
          </a>
        </div>

        <div className="relative w-full aspect-square md:aspect-4/3">
           <svg className="w-full h-full" viewBox="0 0 600 515" fill="none">
              <SafePath d={svgPaths.pf45c00} transform="translate(300 434)" fill="black" stroke="white" />
              <g transform="translate(58 313) rotate(45)">
                 <SafePath d={svgPaths.p3228bc00} fill="black" stroke="white" />
              </g>
              
              <SafePath d={svgPaths.p3197ac00} transform="translate(40 64) rotate(29)" stroke="black" />
              <SafePath d={svgPaths.p3197ac00} transform="translate(20 100) rotate(29)" stroke="black" />
              <SafePath d={svgPaths.p3197ac00} transform="translate(0 137) rotate(29)" stroke="black" />
              
              <circle cx="131.5" cy="104.5" r="15.5" fill="#23d3a2" />
              <circle cx="421" cy="435" r="10" fill="#23d3a2" />
              <circle cx="81.5" cy="64.5" r="23.5" fill="black" />

              <g transform="translate(150, 0) scale(0.8)">
                 <SafePath d={svgPaths.pbf2f280} fill="black" />
                 <SafePath d={svgPaths.p2ed4b200} fill="black" />
                 <SafePath d={svgPaths.p25d57680} fill="#23d3a2" />
                 <SafePath d={svgPaths.p122a4800} fill="white" />
                 <SafePath d={svgPaths.p2a4e0380} fill="black" />
                 <SafePath d={svgPaths.p1c72c680} fill="black" />
                 <SafePath d={svgPaths.p1eec8df0} fill="#23d3a2" />
                 <SafePath d={svgPaths.p3d5992c0} fill="#23d3a2" />
                 <SafePath d={svgPaths.p90cbc00} fill="black" />
                 <SafePath d={svgPaths.pcbd57f2} fill="black" />
                 <SafePath d={svgPaths.p3caf1d00} fill="white" />
                 <SafePath d={svgPaths.p34a55c00} fill="black" />
                 <SafePath d={svgPaths.p11990e00} fill="black" />
                 <SafePath d={svgPaths.p17db1680} fill="white" />
                 <SafePath d={svgPaths.p3277a400} fill="black" />
                 <SafePath d={svgPaths.p16920680} fill="black" />
                 <SafePath d={svgPaths.p38517d00} fill="black" />
                 <SafePath d={svgPaths.p2db91500} fill="black" />
                 <SafePath d={svgPaths.p1fc03100} fill="black" />
              </g>
           </svg>
        </div>
      </div>
    </section>
  );
};
