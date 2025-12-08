import React, { useEffect, useState } from 'react';
import { BadgeDecoration } from './components/ArtElements';
import { Snowfall } from './components/Snowfall';

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
    <div className="app-container">
      <main className="card">
        
        {/* Texture/Noise Overlay */}
        <div className="texture-overlay"></div>
        
        {/* Snowfall Effect */}
        <Snowfall />

        {/* --- TOP CONTENT: GREETING --- */}
        <div style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1.5rem', marginBottom: '1rem' }}>
          
          {/* Main Title */}
          <h1 className="greeting-title">
            İYİ<br/>YILLAR
          </h1>

          {/* Dynamic Name */}
          <h2 className="name-text">
            {name}
          </h2>
          
          {/* Divider */}
          <div className="dots-divider">
             <div className="dot"></div>
             <div className="dot"></div>
             <div className="dot"></div>
          </div>
        </div>

        {/* --- MIDDLE CONTENT: USER IMAGE --- */}
        <div className="image-container">
           {/* 
              KULLANICI GÖRSELİ:
              - Orjinal Boyut: 1015x708 px
              - Aspect Ratio: ~1.43
              - object-contain: Görsel kesilmeden sığdırılır.
           */}
           <img 
              src="./yilbasi_gorseli.png" 
              alt="Görsel Alanı" 
              className="main-image"
              style={{ aspectRatio: '1015 / 708' }}
              onError={(e) => {
                // Görsel bulunamazsa 1015x708 boyutunda yer tutucu gösterilir
                e.currentTarget.src = "https://placehold.co/1015x708/133525/D4AF37?text=1015x708+px+Görsel+Alanı";
                e.currentTarget.style.border = "1px dashed rgba(212, 175, 55, 0.5)";
              }}
           />
        </div>

        {/* --- FOOTER: BADGE --- */}
        <div className="footer-section">
          <div className="badge-wrapper">
            <BadgeDecoration className="badge-svg" />
            <span className="badge-text">
              Season's Greetings
            </span>
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;