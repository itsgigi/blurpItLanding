import logoBlurbit from '../../../assets/loboBlurbit.avif';

export const Navbar = () => {
  return (
    <nav className="container mx-auto px-4 md:px-12 py-8 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logoBlurbit} alt="Blurbit Logo" className="w-8 h-8" />
        <span className="text-3xl font-bold font-space tracking-tighter">Blurbit</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-10">
        {[
          { name: 'Perchè Blurbit', href: '#features' },
          { name: 'Come funziona', href: '#process' },
          { name: 'Piani', href: '#pricing' },
        ].map((item) => (
          <a key={item.name} href={item.href} style={{ color: 'var(--secondary)' }} className="text-xl hover:underline font-space">
            {item.name}
          </a>
        ))}
        <a href="#contact">
          <button style={{ backgroundColor: 'transparent', borderColor: 'var(--secondary)', color: 'var(--primary)' }} className="px-8 hover:underline py-4 border border-[#191a23] rounded-[14px] text-xl hover:bg-[#191a23] transition-colors font-space">
            Richiedi una demo
          </button>
        </a>
      </div>
    </nav>
  );
};
