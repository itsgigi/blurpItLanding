import { SectionHeading } from '../ui/SectionHeading';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    subtitle: "Pubblicazione essenziale e costante",
    price: "99",
    period: "mese",
    articles: "4 articoli/mese",
    features: ["Termometro + 3 fonti", "Stile adattato al cliente", "Pronto alla pubblicazione"],
  },
  {
    name: "Business",
    subtitle: "Per crescere con regolarità",
    price: "199",
    period: "mese",
    articles: "8 articoli/mese",
    features: ["1 premium/mese", "Termometro + 3 fonti", "Check legale", "Pronto alla pubblicazione"],
  },
  {
    name: "Pro",
    subtitle: "Per un flusso editoriale professionale",
    price: "349",
    period: "mese",
    articles: "12 articoli/mese",
    features: ["3 premium/mese", "Calendario editoriale integrato", "Termometro + 3 fonti", "Check legale", "Pronto alla pubblicazione"],
  }
];

const PricingCard = ({ plan, isPopular }: { plan: typeof plans[0], isPopular: boolean }) => {
  return (
    <div className={`border border-[#191a23] rounded-[45px] p-8 md:p-12 shadow-[0px_5px_0px_0px_#191a23] ${isPopular ? 'bg-primary' : 'bg-white'} flex flex-col justify-between`}>
      <h3 className={`text-2xl md:text-3xl font-medium font-space mb-2 ${isPopular ? 'text-black' : 'text-black'}`}>
        {plan.name}
      </h3>
      <p className="text-lg font-space mb-6 text-black/70">
        {plan.subtitle}
      </p>
      
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl md:text-6xl font-medium font-space text-black">€{plan.price}</span>
        <span className="text-lg font-space text-black/70">/{plan.period}</span>
      </div>

      <div className={`p-4 rounded-[14px] mb-6 text-center font-medium font-space ${isPopular ? 'bg-white text-black' : 'bg-[#f3f3f3] text-black'}`}>
        {plan.articles}
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className={`mt-1 rounded-full p-0.5 ${isPopular ? 'bg-black text-primary' : 'bg-[#191a23] text-primary'}`}>
              <Check size={12} strokeWidth={4} />
            </div>
            <span className="text-base font-space text-black">
              {feat}
            </span>
          </li>
        ))}
      </ul>

      <button style={{ backgroundColor: 'var(--secondary)' }} className={`w-full px-8 py-4 rounded-[14px] text-xl font-space border border-[#191a23] transition-colors text-white
      hover:bg-primary`}>
        Select
      </button>
    </div>
  );
};

export const Pricing = () => {
  return (
    <section id="pricing" className="container mx-auto px-4 md:px-12 py-16 md:py-24">
      <SectionHeading 
        title="Piani" 
        description="Per ogni esigenza" 
      />

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} isPopular={i === 1} />
        ))}
      </div>
    </section>
  );
};
