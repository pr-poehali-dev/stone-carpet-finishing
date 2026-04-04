import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

// ─── Reveal hook ───────────────────────────────────────────
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

// ─── Data ───────────────────────────────────────────────────
const portfolioItems = [
  { id: 1, title: 'Обрамление бассейна', area: '32 м²', material: 'Мраморная крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/e4381f1f-af60-44b6-8e31-a1b97beef331.jpg', span: 'col-span-2 row-span-2' },
  { id: 2, title: 'Отмостка дома', area: '48 м²', material: 'Серый гранит', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/ecb47df4-f238-47c6-a746-fd3bc98aab03.jpg', span: '' },
  { id: 3, title: 'Крыльцо и ступени', area: '12 м²', material: 'Тёмный базальт', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/2d89b172-e7fb-4198-b27a-98f6f5b47924.jpg', span: '' },
  { id: 4, title: 'Цоколь здания', area: '60 м²', material: 'Кварцит микс', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/b87a4234-faa1-49d7-bb2e-67e61e3fd155.jpg', span: 'col-span-2' },
  { id: 5, title: 'Терраса под навесом', area: '85 м²', material: 'Речная галька', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/7c5a8a6d-374b-4a7c-a71b-aa0a12df4d7e.jpg', span: '' },
  { id: 6, title: 'Прогулочная зона', area: '120 м²', material: 'Натуральный камень', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/ecb47df4-f238-47c6-a746-fd3bc98aab03.jpg', span: '' },
];

const galleryItems = [
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/e4381f1f-af60-44b6-8e31-a1b97beef331.jpg', label: 'Мраморная крошка', sub: 'Обрамление бассейнов' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/ecb47df4-f238-47c6-a746-fd3bc98aab03.jpg', label: 'Серый гранит', sub: 'Отмостки и дорожки' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/2d89b172-e7fb-4198-b27a-98f6f5b47924.jpg', label: 'Тёмный базальт', sub: 'Крыльцо и ступени' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/b87a4234-faa1-49d7-bb2e-67e61e3fd155.jpg', label: 'Кварцит микс', sub: 'Цоколи и фасады' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/7c5a8a6d-374b-4a7c-a71b-aa0a12df4d7e.jpg', label: 'Речная галька', sub: 'Террасы и площадки' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/e4381f1f-af60-44b6-8e31-a1b97beef331.jpg', label: 'Натуральный камень', sub: 'Любые поверхности' },
];

const stats = [
  { num: '12', unit: 'лет', label: 'на рынке' },
  { num: '500+', unit: '', label: 'проектов завершено' },
  { num: '50+', unit: '', label: 'видов камня' },
  { num: '100%', unit: '', label: 'гарантия качества' },
];

const materialOptions = ['Мрамор', 'Гранит', 'Известняк', 'Кварцит', 'Базальт', 'Оникс'];
const roomOptions = ['Терраса / балкон', 'Бассейн / водоём', 'Лобби / офис', 'Жилая зона', 'Въезд / дорожки', 'Другое'];

// ─── Stone texture block ────────────────────────────────────
function StoneTexture({ color, size = 6 }: { color: string; size?: number }) {
  const stones = Array.from({ length: size * size }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    const lightness = 0.85 + rand * 0.3;
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return {
      bg: `rgb(${Math.min(255, Math.round(r * lightness))},${Math.min(255, Math.round(g * lightness))},${Math.min(255, Math.round(b * lightness))})`,
      br: `${rand * 5}px`,
    };
  });

  return (
    <div className="w-full h-full grid gap-px p-1"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)`, gridTemplateRows: `repeat(${size}, 1fr)` }}>
      {stones.map((s, i) => (
        <div key={i} style={{ background: s.bg, borderRadius: s.br }} />
      ))}
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────
const Index = () => {
  useReveal();
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', area: '', material: '', room: '', comment: '' });
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

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
                style={{ color: activeSection === l.id ? 'var(--gold)' : 'rgba(255,255,255,0.65)' }}>
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo('contacts')}
              className="px-5 py-2 font-oswald font-medium tracking-widest text-sm uppercase transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: 'var(--gold)', color: 'var(--dark)', borderRadius: '2px' }}>
              Заявка
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-1" style={{ background: 'var(--dark)' }}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                className="text-left font-golos text-white/80 hover:text-white py-3 border-b transition-colors"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: 'var(--dark)' }}>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10"
            style={{ background: 'linear-gradient(135deg, transparent 30%, var(--gold) 100%)' }} />
          <div className="absolute" style={{ bottom: '-10%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'var(--terra)', filter: 'blur(120px)', opacity: 0.06 }} />
          <div className="absolute" style={{ top: '20%', right: '20%', width: '300px', height: '300px', borderRadius: '50%', background: 'var(--gold)', filter: 'blur(80px)', opacity: 0.07 }} />
        </div>

        {/* Right stone panel */}
        <div className="absolute right-0 top-0 bottom-0 w-80 hidden xl:block opacity-25"
          style={{ borderLeft: '1px solid rgba(201,169,110,0.15)' }}>
          <StoneTexture color="#8B7355" size={9} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-px" style={{ background: 'var(--gold)' }} />
              <span className="text-xs font-golos tracking-[0.3em] uppercase" style={{ color: 'var(--gold)' }}>
                Эксклюзивные покрытия из натурального камня
              </span>
            </div>
          </div>

          <h1 className="font-oswald font-bold leading-none mb-6 text-white"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
            <span className="block animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>КАМЕНЬ</span>
            <span className="block animate-fade-up" style={{ animationDelay: '0.35s', opacity: 0, color: 'var(--gold)' }}>КАК ИСКУССТВО</span>
          </h1>

          <p className="max-w-lg font-golos text-lg leading-relaxed mb-10 animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0, color: 'rgba(255,255,255,0.55)' }}>
            Создаём уникальные покрытия из натурального камня для интерьеров и экстерьеров премиум-класса.
            Каждый проект — произведение природы и мастерства.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.65s', opacity: 0 }}>
            <button onClick={() => scrollTo('contacts')}
              className="group flex items-center gap-3 px-8 py-4 font-oswald font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:gap-5 active:scale-95"
              style={{ background: 'var(--gold)', color: 'var(--dark)', borderRadius: '2px' }}>
              Рассчитать проект
              <Icon name="ArrowRight" size={16} />
            </button>
            <button onClick={() => scrollTo('portfolio')}
              className="flex items-center gap-3 px-8 py-4 font-oswald font-medium tracking-widest uppercase text-sm border transition-all duration-300 hover:bg-white/5 active:scale-95"
              style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white', borderRadius: '2px' }}>
              Смотреть работы
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
            {stats.map((s, i) => (
              <div key={i} className="border-l-2 pl-4" style={{ borderColor: 'rgba(201,169,110,0.3)' }}>
                <div className="font-oswald font-bold" style={{ fontSize: '2rem', color: 'var(--gold)' }}>
                  {s.num}<span style={{ fontSize: '1.2rem' }}>{s.unit}</span>
                </div>
                <div className="font-golos text-sm mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-golos text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>SCROLL</span>
          <div className="w-px h-10 overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div className="w-full h-4 animate-bounce" style={{ background: 'var(--gold)' }} />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="py-3.5 overflow-hidden" style={{ background: 'var(--gold)' }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {['Мрамор', 'Гранит', 'Известняк', 'Кварцит', 'Базальт', 'Оникс', 'Травертин', 'Яшма',
            'Мрамор', 'Гранит', 'Известняк', 'Кварцит', 'Базальт', 'Оникс', 'Травертин', 'Яшма'].map((m, i) => (
            <span key={i} className="font-oswald font-medium text-sm tracking-[0.25em] uppercase mx-8"
              style={{ color: 'var(--dark)' }}>
              {m} <span style={{ opacity: 0.35 }} className="mx-3">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="section-pad" style={{ background: 'var(--light)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="reveal flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px" style={{ background: 'var(--terra)' }} />
                <span className="text-xs font-golos tracking-[0.3em] uppercase" style={{ color: 'var(--terra)' }}>Наши работы</span>
              </div>
              <h2 className="font-oswald font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--dark)' }}>
                ПОРТФОЛИО
              </h2>
            </div>
            <p className="max-w-xs font-golos text-sm leading-relaxed" style={{ color: 'rgba(26,22,18,0.5)' }}>
              Более 500 реализованных проектов по всей России и СНГ
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3" style={{ gridAutoRows: '200px' }}>
            {portfolioItems.map((item, i) => (
              <div key={item.id}
                className={`reveal group relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${item.span}`}
                style={{ borderRadius: '4px' }}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(26,22,18,0.92) 0%, rgba(26,22,18,0.15) 60%, transparent 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-golos text-xs mb-1" style={{ color: 'var(--gold)' }}>{item.material}</p>
                  <h3 className="font-oswald font-semibold text-white text-xl leading-tight">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="Maximize2" size={12} />
                    <span className="text-xs font-golos" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-16 px-6 md:px-12" style={{ background: 'var(--mid)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 reveal">
            <h2 className="font-oswald font-bold text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
              ПОЧЕМУ ВЫБИРАЮТ НАС
            </h2>
            <p className="font-golos leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Мы не просто укладываем камень — мы создаём поверхности с характером.
              Каждый проект проходит через наших мастеров с 10+ годами опыта.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 reveal">
            {[
              { icon: 'Shield', title: 'Гарантия 10 лет', desc: 'На материалы и работу' },
              { icon: 'Ruler', title: 'Точный расчёт', desc: 'Без переплат и остатков' },
              { icon: 'Truck', title: 'Доставка по России', desc: 'Собственная логистика' },
              { icon: 'Star', title: 'Премиум камень', desc: '50+ видов в наличии' },
            ].map((f, i) => (
              <div key={i} className="p-5 transition-colors hover:bg-white/5"
                style={{ border: '1px solid rgba(201,169,110,0.14)', borderRadius: '4px' }}>
                <div className="w-10 h-10 flex items-center justify-center mb-3"
                  style={{ background: 'rgba(201,169,110,0.1)', borderRadius: '4px' }}>
                  <Icon name={f.icon} fallback="Star" size={18} style={{ color: 'var(--gold)' }} />
                </div>
                <h4 className="font-oswald font-semibold text-white">{f.title}</h4>
                <p className="font-golos text-sm mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="section-pad" style={{ background: 'var(--dark)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-12">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: 'var(--gold)' }} />
              <span className="text-xs font-golos tracking-[0.3em] uppercase" style={{ color: 'var(--gold)' }}>Коллекции</span>
            </div>
            <h2 className="font-oswald font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              ГАЛЕРЕЯ МАТЕРИАЛОВ
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div key={i} className="reveal group relative overflow-hidden cursor-pointer"
                style={{ borderRadius: '4px', aspectRatio: '1' }}>
                <img
                  src={item.img}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(26,22,18,0.95) 0%, rgba(26,22,18,0.3) 60%, transparent 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-oswald font-semibold text-white text-xl">{item.label}</h3>
                  <p className="font-golos text-sm mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.sub}</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'var(--gold)', borderRadius: '2px' }}>
                  <Icon name="Plus" size={14} style={{ color: 'var(--dark)' }} />
                </div>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-12">
            <p className="font-golos mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Хотите узнать о конкретном материале?</p>
            <button onClick={() => scrollTo('contacts')}
              className="font-oswald font-medium tracking-widest uppercase text-sm px-8 py-3 border transition-all hover:bg-white/5"
              style={{ borderColor: 'rgba(201,169,110,0.35)', color: 'var(--gold)', borderRadius: '2px' }}>
              Запросить каталог
            </button>
          </div>
        </div>
      </section>

      {/* ── CONTACTS & CALCULATOR ── */}
      <section id="contacts" className="section-pad" style={{ background: 'var(--light)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="reveal">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px" style={{ background: 'var(--terra)' }} />
                <span className="text-xs font-golos tracking-[0.3em] uppercase" style={{ color: 'var(--terra)' }}>Связаться с нами</span>
              </div>
              <h2 className="font-oswald font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--dark)' }}>
                РАСЧЁТ<br />ПРОЕКТА
              </h2>
              <p className="font-golos leading-relaxed mb-10 max-w-md" style={{ color: 'rgba(26,22,18,0.55)' }}>
                Оставьте заявку — наш специалист свяжется с вами в течение 30 минут,
                проконсультирует по материалам и подготовит детальный расчёт стоимости.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: 'Phone', label: 'Телефон', value: '+7 (964) 847-75-01' },
                  { icon: 'Mail', label: 'Email', value: 'stroyvsaratov@yandex.ru' },
                  { icon: 'MapPin', label: 'Офис', value: 'Краснодар' },
                  { icon: 'Clock', label: 'Режим работы', value: 'Пн–Сб, 9:00–19:00' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                      style={{ background: 'var(--sand)', borderRadius: '4px' }}>
                      <Icon name={c.icon} fallback="Phone" size={16} style={{ color: 'var(--terra)' }} />
                    </div>
                    <div>
                      <p className="font-golos text-xs uppercase tracking-wider mb-0.5" style={{ color: 'rgba(26,22,18,0.4)' }}>{c.label}</p>
                      <p className="font-golos font-medium" style={{ color: 'var(--dark)' }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center"
                  style={{ background: 'var(--dark)', borderRadius: '8px', padding: '60px 40px' }}>
                  <div className="w-16 h-16 flex items-center justify-center mb-6"
                    style={{ background: 'rgba(201,169,110,0.1)', borderRadius: '50%' }}>
                    <Icon name="CheckCircle" size={32} style={{ color: 'var(--gold)' }} />
                  </div>
                  <h3 className="font-oswald font-bold text-white text-2xl mb-3">ЗАЯВКА ПРИНЯТА</h3>
                  <p className="font-golos" style={{ color: 'rgba(255,255,255,0.55)' }}>Наш специалист свяжется с вами в течение 30 минут</p>
                </div>
              ) : (
                <div style={{ background: 'var(--dark)', borderRadius: '8px', padding: '40px' }}>
                  <div className="flex items-center gap-3 mb-8">
                    {[1, 2].map(s => (
                      <div key={s} className="flex items-center gap-2">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full font-oswald text-xs font-bold transition-all duration-300"
                          style={{
                            background: formStep >= s ? 'var(--gold)' : 'rgba(255,255,255,0.08)',
                            color: formStep >= s ? 'var(--dark)' : 'rgba(255,255,255,0.35)',
                          }}>
                          {s}
                        </div>
                        <span className="font-golos text-xs" style={{ color: formStep >= s ? 'var(--gold)' : 'rgba(255,255,255,0.3)' }}>
                          {s === 1 ? 'О проекте' : 'Контакты'}
                        </span>
                        {s < 2 && <div className="w-8 h-px mx-1" style={{ background: 'rgba(255,255,255,0.1)' }} />}
                      </div>
                    ))}
                  </div>

                  {formStep === 1 ? (
                    <div className="space-y-5">
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Тип помещения
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {roomOptions.map(r => (
                            <button key={r} onClick={() => setFormData(p => ({ ...p, room: r }))}
                              className="py-2.5 px-3 text-left font-golos text-sm transition-all duration-150"
                              style={{
                                borderRadius: '4px',
                                border: `1px solid ${formData.room === r ? 'var(--gold)' : 'rgba(255,255,255,0.1)'}`,
                                color: formData.room === r ? 'var(--gold)' : 'rgba(255,255,255,0.55)',
                                background: formData.room === r ? 'rgba(201,169,110,0.08)' : 'transparent',
                              }}>
                              {r}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Материал
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {materialOptions.map(m => (
                            <button key={m} onClick={() => setFormData(p => ({ ...p, material: p.material === m ? '' : m }))}
                              className="py-1.5 px-3 font-golos text-sm transition-all duration-150"
                              style={{
                                borderRadius: '20px',
                                border: `1px solid ${formData.material === m ? 'var(--gold)' : 'rgba(255,255,255,0.15)'}`,
                                color: formData.material === m ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
                                background: formData.material === m ? 'rgba(201,169,110,0.08)' : 'transparent',
                              }}>
                              {m}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Площадь (м²)
                        </label>
                        <input type="number" placeholder="Например: 50" value={formData.area}
                          onChange={e => setFormData(p => ({ ...p, area: e.target.value }))}
                          className="w-full px-4 py-3 font-golos text-white outline-none transition-colors"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}
                        />
                      </div>

                      <button onClick={() => setFormStep(2)}
                        className="w-full py-3.5 font-oswald font-medium tracking-widest uppercase text-sm transition-all hover:opacity-90 active:scale-95"
                        style={{ background: 'var(--gold)', color: 'var(--dark)', borderRadius: '4px' }}>
                        Далее →
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Ваше имя *</label>
                        <input type="text" placeholder="Александр" value={formData.name}
                          onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                          className="w-full px-4 py-3 font-golos text-white outline-none"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}
                        />
                      </div>
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Телефон *</label>
                        <input type="tel" placeholder="+7 (___) ___-__-__" value={formData.phone}
                          onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                          className="w-full px-4 py-3 font-golos text-white outline-none"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}
                        />
                      </div>
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Комментарий</label>
                        <textarea rows={3} placeholder="Расскажите подробнее о вашем проекте..." value={formData.comment}
                          onChange={e => setFormData(p => ({ ...p, comment: e.target.value }))}
                          className="w-full px-4 py-3 font-golos text-white outline-none resize-none"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}
                        />
                      </div>

                      {(formData.room || formData.material || formData.area) && (
                        <div className="py-3 px-4 font-golos text-sm" style={{ background: 'rgba(201,169,110,0.07)', borderRadius: '4px', color: 'rgba(255,255,255,0.45)' }}>
                          {formData.room && <span>{formData.room}</span>}
                          {formData.material && <span> · {formData.material}</span>}
                          {formData.area && <span> · {formData.area} м²</span>}
                        </div>
                      )}

                      <div className="flex gap-3">
                        <button onClick={() => setFormStep(1)}
                          className="px-5 py-3.5 font-golos text-sm transition-colors"
                          style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.45)', borderRadius: '4px' }}>
                          ← Назад
                        </button>
                        <button
                          onClick={() => { if (formData.name && formData.phone) setSubmitted(true); }}
                          className="flex-1 py-3.5 font-oswald font-medium tracking-widest uppercase text-sm transition-all active:scale-95"
                          style={{
                            background: formData.name && formData.phone ? 'var(--gold)' : 'rgba(201,169,110,0.25)',
                            color: 'var(--dark)',
                            borderRadius: '4px',
                            cursor: formData.name && formData.phone ? 'pointer' : 'default'
                          }}>
                          Отправить заявку
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 flex items-center justify-center" style={{ background: 'var(--gold)', borderRadius: '2px' }}>
              <span className="font-oswald font-bold text-xs" style={{ color: 'var(--dark)' }}>КК</span>
            </div>
            <span className="font-oswald font-semibold text-white tracking-wider">КАМЕННЫЙ КОВЁР</span>
          </div>

          <div className="flex gap-8">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                className="font-golos text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.35)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
                {l.label}
              </button>
            ))}
          </div>

          <p className="font-golos text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © 2024 Каменный Ковёр. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;