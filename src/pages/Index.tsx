import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactsSection from '@/components/sections/ContactsSection';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const Index = () => {
  useReveal();
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'gallery', 'contacts'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Главная' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'contacts', label: 'Контакты' },
  ];

  return (
    <div className="min-h-screen font-golos overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50"
        style={{ background: 'rgba(26,22,18,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'var(--gold)', borderRadius: '2px' }}>
              <span className="font-oswald font-bold text-xs" style={{ color: 'var(--dark)' }}>КК</span>
            </div>
            <span className="font-oswald font-semibold text-white tracking-wider text-lg">КАМЕННЫЙ КОВЁР</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                className={`nav-link font-golos text-sm tracking-wide transition-colors`}
                style={{ color: activeSection === l.id ? 'var(--gold)' : 'rgba(255,255,255,0.55)' }}>
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://t.me/Coverstone" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center transition-all hover:opacity-70"
              style={{ border: '1px solid rgba(201,169,110,0.3)', borderRadius: '2px' }}>
              <Icon name="Send" size={15} style={{ color: 'var(--gold)' }} />
            </a>
            <button onClick={() => scrollTo('contacts')}
              className="font-oswald text-xs tracking-widest uppercase px-5 py-2.5 transition-all hover:opacity-80"
              style={{ background: 'var(--gold)', color: 'var(--dark)', borderRadius: '2px' }}>
              Получить расчёт
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: 'rgba(255,255,255,0.7)' }}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                className="text-left font-golos text-sm py-1"
                style={{ color: activeSection === l.id ? 'var(--gold)' : 'rgba(255,255,255,0.6)' }}>
                {l.label}
              </button>
            ))}
            <a href="https://t.me/Coverstone" target="_blank" rel="noopener noreferrer"
              className="font-golos text-sm py-1 flex items-center gap-2 transition-opacity hover:opacity-70"
              style={{ color: 'var(--gold)' }}>
              <Icon name="Send" size={15} style={{ color: 'var(--gold)' }} />
              Telegram @Coverstone
            </a>
            <button onClick={() => scrollTo('contacts')}
              className="font-oswald text-xs tracking-widest uppercase px-5 py-2.5 text-center mt-2"
              style={{ background: 'var(--gold)', color: 'var(--dark)', borderRadius: '2px' }}>
              Получить расчёт
            </button>
          </div>
        )}
      </nav>

      <HeroSection scrollTo={scrollTo} />
      <PortfolioSection />
      <GallerySection scrollTo={scrollTo} />
      <ContactsSection scrollTo={scrollTo} />

      <a href="https://t.me/Coverstone" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{ background: '#29A8EB', borderRadius: '50%' }}
        title="Написать в Telegram">
        <Icon name="Send" size={22} style={{ color: '#fff' }} />
      </a>
    </div>
  );
};

export default Index;