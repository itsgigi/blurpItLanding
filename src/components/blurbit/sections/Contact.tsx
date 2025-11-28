import { Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 md:px-12 py-16 md:py-24">
      <div className="bg-[#f3f3f3] rounded-[45px] p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 z-10">
          <h3 className="text-3xl md:text-[30px] font-medium font-space mb-6">Parliamo del tuo progetto editoriale</h3>
          <p className="text-lg font-space mb-8 max-w-md">
            Richiedi una demo
          </p>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="font-medium font-space text-black">Nome</label>
              <input 
                type="text" 
                placeholder="Mario Rossi"
                className="w-full p-4 rounded-[14px] border border-[#191a23] bg-white font-space focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="font-medium font-space text-black">Email</label>
              <input 
                type="email" 
                placeholder="mario@azienda.com"
                className="w-full p-4 rounded-[14px] border border-[#191a23] bg-white font-space focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="font-medium font-space text-black">Messaggio</label>
              <textarea 
                rows={4}
                placeholder="Raccontaci le tue esigenze..."
                className="w-full p-4 rounded-[14px] border border-[#191a23] bg-white font-space focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="bg-[#191a23] text-white px-8 py-5 rounded-[14px] text-xl font-space hover:bg-[#333] transition-colors w-full md:w-auto">
              Invia richiesta
            </button>
          </form>
        </div>
        
        {/* Decorative Icon */}
        <div className="hidden md:flex absolute right-0 top-0 h-full w-1/2 pointer-events-none items-center justify-center">
           <div className="relative">
             <div className="absolute inset-0 bg-primary rounded-full opacity-20 blur-3xl transform scale-150"></div>
             <Mail className="relative z-10 w-32 h-32 text-primary opacity-30" strokeWidth={1.5} />
           </div>
        </div>
      </div>
    </section>
  );
};
