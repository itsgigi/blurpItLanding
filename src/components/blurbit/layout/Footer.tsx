import logoBlurbit from '../../../assets/loboBlurbit.avif';

export const Footer = () => {
  return (
    <footer className="container mx-auto px-4 md:px-12">
      <div className="bg-secondary rounded-t-[45px] text-white px-8 py-12 md:px-16 md:py-14">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
           <div className="flex items-center gap-2">
              <img src={logoBlurbit} alt="Blurbit Logo" className="w-7 h-7" />
              <span className="text-2xl font-bold font-space">Blurbit</span>
           </div>
           
           <div className="flex sm:flex-row flex-col gap-8 items-center">
              {[
                { name: 'Perchè Blurbit', href: '#features' },
                { name: 'Come funziona', href: '#process' },
                { name: 'Piani', href: '#pricing' },
                { name: 'About', href: '#about' },
                { name: 'Contatti', href: '#contact' },
              ].map((item) => (
                <a key={item.name} href={item.href} style={{ color: 'var(--primary)' }} className="text-lg underline hover:text-primary font-space">
                  {item.name}
                </a>
              ))}
           </div>

           <div className="flex gap-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-primary">in</div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-primary">f</div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-primary">t</div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12 border-b border-white/20 pb-12">
           <div className="space-y-4 font-space">
              <div className="bg-primary text-black px-2 rounded-[7px] inline-block font-medium text-xl mb-4">Contattaci:</div>
              <p className="text-lg">Email: info@blurbit.com</p>
              <p className="text-lg">Richiedi una Demo</p>
           </div>

           <div className="bg-muted p-10 rounded-[14px] flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <input type="email" placeholder="Email" className="bg-transparent border border-secondary text-black px-6 py-4 rounded-[14px] w-full md:w-64 font-space outline-none focus:border-primary" />
              <button style={{ backgroundColor: 'var(--secondary)' }} className="bg-primary text-white px-8 py-4 rounded-[14px] font-medium font-space whitespace-nowrap hover:opacity-90">
                 Iscriviti alle news
              </button>
           </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 font-space text-lg opacity-80">
           <p>© 2025 Blurbit. Tutti i diritti riservati.</p>
           <a href="#" style={{ color: 'var(--primary)' }} className="underline hover:text-primary">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
