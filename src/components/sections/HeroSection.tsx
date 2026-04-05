import Icon from '@/components/ui/icon';

const stats = [
  { num: '12', unit: 'лет', label: 'на рынке' },
  { num: '500+', unit: '', label: 'проектов завершено' },
  { num: '50+', unit: '', label: 'видов камня' },
  { num: '100%', unit: '', label: 'гарантия качества' },
];

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

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center" style={{ background: 'var(--dark)', paddingTop: '64px' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 grid" style={{ gridTemplateColumns: 'repeat(8, 1fr)', gridTemplateRows: 'repeat(8, 1fr)', opacity: 0.06 }}>
            {Array.from({ length: 64 }, (_, i) => {
              const colors = ['#8B7355', '#A89070', '#6B5A42', '#C4A882', '#7A6248'];
              return (
                <div key={i} style={{ background: colors[i % colors.length] }}>
                  <StoneTexture color={colors[i % colors.length]} size={4} />
                </div>
              );
            })}
          </div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,22,18,0.97) 0%, rgba(26,22,18,0.85) 50%, rgba(26,22,18,0.95) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
          <div className="max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12" style={{ background: 'var(--gold)' }} />
              <span className="font-golos text-xs tracking-[0.35em] uppercase" style={{ color: 'var(--gold)' }}>
                Натуральный камень
              </span>
            </div>
            <h1 className="font-oswald font-bold text-white leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}>
              КАМЕННЫЙ<br />
              <span style={{ color: 'var(--gold)', WebkitTextStroke: '1px var(--gold)' }}>КОВЁР</span>
            </h1>
          </div>

          <p className="font-golos max-w-lg mb-10 animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0, color: 'rgba(255,255,255,0.55)' }}>
            Создаём уникальные покрытия из натурального камня для интерьеров и экстерьеров в Краснодаре и по всему Краснодарскому краю.
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
    </>
  );
}
