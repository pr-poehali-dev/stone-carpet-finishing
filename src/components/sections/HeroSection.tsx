import Icon from '@/components/ui/icon';

const stats = [
  { num: '12', unit: 'лет', label: 'на рынке' },
  { num: '500+', unit: '', label: 'проектов' },
  { num: '50+', unit: '', label: 'видов камня' },
  { num: '100%', unit: '', label: 'гарантия' },
];

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'var(--dark)', paddingTop: '64px' }}>
        {/* Фоновый узор */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(201,169,110,0.07) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, rgba(184,92,56,0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 60% 80%, rgba(201,169,110,0.04) 0%, transparent 40%)`
          }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(201,169,110,0.5) 80px, rgba(201,169,110,0.5) 81px),
              repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,169,110,0.5) 80px, rgba(201,169,110,0.5) 81px)`
          }} />
        </div>

        {/* Декоративный элемент справа */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block overflow-hidden">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, var(--dark) 0%, transparent 40%)',
            zIndex: 2
          }} />
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1 }}>
            <div className="w-full h-full grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, 1fr)', gap: '3px', opacity: 0.35 }}>
              {[
                'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/e4381f1f-af60-44b6-8e31-a1b97beef331.jpg',
                'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/5a720f68-4850-4556-915c-eb8c6bae78fc.jpg',
                'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/3da74af8-bdcb-47e9-bbf6-5aa7591a0f7e.jpg',
                'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/f3fc68e6-9d2e-435b-9b64-c34b2723d6d0.jpg',
                'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/ecb47df4-f238-47c6-a746-fd3bc98aab03.jpg',
                'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/7c5a8a6d-374b-4a7c-a71b-aa0a12df4d7e.jpg',
                'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/71d37538-065b-4dab-9506-81147443c518.jpg',
                'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/abc8bf34-aa05-4e55-8f96-d158bcc6bb26.jpg',
                'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/67fa3990-5139-479f-a249-d527f2634bc5.jpg',
              ].map((src, i) => (
                <div key={i} className="overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover" style={{ filter: 'saturate(0.7)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Контент */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-36 w-full">
          <div className="max-w-xl">
            <div className="animate-fade-up flex items-center gap-3 mb-8" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <div className="h-px w-16 transition-all" style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }} />
              <span className="font-golos text-xs tracking-[0.4em] uppercase" style={{ color: 'var(--gold)' }}>
                Натуральный камень · Краснодар
              </span>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0 }}>
              <h1 className="font-oswald font-bold text-white leading-[0.9] mb-2" style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', letterSpacing: '-0.03em' }}>
                КАМЕННЫЙ
              </h1>
              <h1 className="font-oswald font-bold leading-[0.9] mb-8" style={{
                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, var(--gold) 0%, #e8c87a 40%, #a07840 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                КОВЁР
              </h1>
            </div>

            <p className="font-golos text-lg mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.45s', opacity: 0, color: 'rgba(255,255,255,0.5)' }}>
              Создаём уникальные покрытия из натурального камня.<br className="hidden md:block" />
              Каждый проект — произведение природы и мастерства.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
              <button onClick={() => scrollTo('contacts')}
                className="group flex items-center gap-3 px-8 py-4 font-oswald font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/30 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #d4b06a, #c9a96e, #b8923a)', color: 'var(--dark)', borderRadius: '3px' }}>
                Рассчитать проект
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo('portfolio')}
                className="flex items-center gap-3 px-8 py-4 font-oswald font-medium tracking-widest uppercase text-sm border transition-all duration-300 hover:border-gold/50 hover:bg-white/5 active:scale-95"
                style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.75)', borderRadius: '3px' }}>
                Смотреть работы
              </button>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
              {stats.map((s, i) => (
                <div key={i} className="relative pl-4 group">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full" style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
                  <div className="font-oswald font-bold" style={{ fontSize: '2.2rem', lineHeight: 1, color: 'var(--gold)' }}>
                    {s.num}<span style={{ fontSize: '1rem', opacity: 0.7 }}>{s.unit}</span>
                  </div>
                  <div className="font-golos text-xs mt-1.5 uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-golos text-xs tracking-[0.4em]" style={{ color: 'rgba(255,255,255,0.2)' }}>SCROLL</span>
          <div className="w-px h-12 overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
            <div className="w-full h-5 animate-bounce" style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-4 overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #d4b06a, #c9a96e, #b8923a)' }}>
        <div className="flex animate-marquee whitespace-nowrap">
          {['Мрамор', 'Гранит', 'Галька', 'Кварцит', 'Змеевик', 'Яшма', 'Мрамор', 'Гранит', 'Галька', 'Кварцит', 'Змеевик', 'Яшма'].map((m, i) => (
            <span key={i} className="font-oswald font-medium text-xs tracking-[0.3em] uppercase mx-8"
              style={{ color: 'rgba(26,22,18,0.75)' }}>
              {m} <span style={{ opacity: 0.4 }} className="mx-3">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="py-20 px-6 md:px-12" style={{ background: 'var(--mid)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="flex-1 reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }} />
                <span className="font-golos text-xs tracking-[0.35em] uppercase" style={{ color: 'var(--gold)' }}>О нас</span>
              </div>
              <h2 className="font-oswald font-bold text-white mb-5" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.05 }}>
                ПОЧЕМУ ВЫБИРАЮТ<br />
                <span style={{ color: 'var(--gold)' }}>НАС</span>
              </h2>
              <p className="font-golos leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem' }}>
                Мы не просто укладываем камень — мы создаём поверхности с характером.
                Каждый проект проходит через наших мастеров с 10+ годами опыта.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 reveal">
              {[
                { icon: 'Shield', title: 'Гарантия 10 лет', desc: 'На материалы и работу' },
                { icon: 'Ruler', title: 'Точный расчёт', desc: 'Без переплат и остатков' },
                { icon: 'Truck', title: 'Доставка', desc: 'По всей России' },
                { icon: 'Star', title: 'Премиум камень', desc: '50+ видов в наличии' },
              ].map((f, i) => (
                <div key={i} className="p-5 group cursor-default transition-all duration-300 hover:bg-white/5"
                  style={{ border: '1px solid rgba(201,169,110,0.1)', borderRadius: '6px' }}>
                  <div className="w-11 h-11 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(201,169,110,0.08)', borderRadius: '8px', border: '1px solid rgba(201,169,110,0.15)' }}>
                    <Icon name={f.icon} fallback="Star" size={18} style={{ color: 'var(--gold)' }} />
                  </div>
                  <h3 className="font-oswald font-semibold text-white text-base mb-1">{f.title}</h3>
                  <p className="font-golos text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
