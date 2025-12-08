import React, { useEffect, useState } from 'react';
import { BadgeDecoration } from './components/ArtElements';

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getNameFromUrl = () => {
      if (typeof window === 'undefined') return;

      const params = new URLSearchParams(window.location.search);
      const encodedName = params.get('ad');

      if (encodedName) {
        try {
          const decodedName = atob(encodedName);
          setName(decodedName);
        } catch (e) {
          console.error("Failed to decode name", e);
          setName('DOSTUM');
        }
      } else {
        setName('SENİN');
      }
      setIsLoaded(true);
    };

    getNameFromUrl();
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 p-0 sm:p-4 font-serif">
      {/* 
        Container Rules:
        - Mobile: w-full h-full (no border radius, fills screen)
        - Desktop: Fixed size card centered
      */}
      <main className="
        relative 
        w-full h-[100dvh] 
        sm:w-[450px] sm:h-[650px] 
        bg-[#1A4731] 
        sm:rounded-lg 
        overflow-hidden 
        shadow-2xl 
        flex flex-col items-center
        border-[8px] sm:border-[12px] border-[#133525]
        py-8
      ">
        
        {/* Texture/Noise Overlay */}
        <div className="absolute inset-0 bg-white opacity-[0.02] pointer-events-none z-0 mix-blend-overlay"></div>

        {/* --- TOP CONTENT: GREETING --- */}
        <div className="relative z-20 flex flex-col items-center px-6 text-center shrink-0 mb-4">
          
          {/* Main Title */}
          <h1 className="font-['Cinzel'] text-4xl sm:text-5xl text-[#D4AF37] font-bold tracking-widest drop-shadow-md leading-tight">
            İYİ<br/>YILLAR
          </h1>

          {/* Dynamic Name */}
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#F2F2F2] drop-shadow-lg tracking-wide mt-3 min-h-[3rem] flex items-center justify-center">
            {name}
          </h2>
          
          {/* Divider */}
          <div className="flex gap-3 mt-2">
             <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-80"></div>
             <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-80"></div>
             <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-80"></div>
          </div>
        </div>

        {/* --- MIDDLE CONTENT: USER IMAGE --- */}
        <div className="flex-1 w-full px-4 flex items-center justify-center relative z-10 overflow-hidden">
           {/* 
              KULLANICI GÖRSELİ:
              - Orjinal Boyut: 1015x708 px
              - Aspect Ratio: ~1.43
              - object-contain: Görsel kesilmeden sığdırılır.
           */}
           <img 
              src="./yilbasi_gorseli.png" 
              alt="Görsel Alanı" 
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
              style={{ aspectRatio: '1015 / 708' }}
              onError={(e) => {
                // Görsel bulunamazsa 1015x708 boyutunda yer tutucu gösterilir
                e.currentTarget.src = "https://placehold.co/1015x708/133525/D4AF37?text=1015x708+px+Görsel+Alanı";
                // Sınırları belli olsun diye ince bir çizgi ekliyoruz (sadece hata durumunda)
                e.currentTarget.style.border = "1px dashed rgba(212, 175, 55, 0.5)";
              }}
           />
        </div>

        {/* --- FOOTER: BADGE --- */}
        <div className="relative z-30 shrink-0 w-full flex justify-center mt-6">
          <div className="relative w-64 h-14 flex items-center justify-center">
            <BadgeDecoration className="absolute inset-0 w-full h-full" />
            <span className="font-['Cinzel'] text-[#D4AF37] text-xs sm:text-sm tracking-[0.2em] font-bold uppercase mt-1">
              Season's Greetings
            </span>
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;