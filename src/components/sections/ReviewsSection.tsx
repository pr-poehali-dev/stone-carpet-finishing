import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Алексей М.',
    city: 'Краснодар',
    rating: 5,
    date: '15 марта 2026',
    project: 'Обрамление бассейна, 32 м²',
    text: 'Заказывали каменный ковёр вокруг бассейна на даче. Ребята приехали, замерили, через неделю сделали — выглядит потрясающе. Уже три месяца хожу босиком, не скользит, грязь смывается шлангом. Рекомендую!',
  },
  {
    name: 'Ирина С.',
    city: 'Сочи',
    rating: 5,
    date: '2 февраля 2026',
    project: 'Терраса под навесом, 85 м²',
    text: 'Сделали террасу из речной гальки — получилось как картинка из журнала. Все соседи спрашивают, где заказывали. Цена адекватная, работали аккуратно, мусор за собой убрали. Спасибо мастерам!',
  },
  {
    name: 'Дмитрий К.',
    city: 'Анапа',
    rating: 5,
    date: '20 января 2026',
    project: 'Отмостка дома, 48 м²',
    text: 'Долго выбирал, кому доверить отмостку — выбрал «Каменный Ковёр» по отзывам. Не пожалел. Сделали серый гранит, выглядит дорого, держится отлично. Гарантия в договоре прописана.',
  },
  {
    name: 'Светлана В.',
    city: 'Краснодар',
    rating: 5,
    date: '12 декабря 2025',
    project: 'Крыльцо и ступени, 18 м²',
    text: 'Заказывала крыльцо из мраморной крошки. Очень довольна — теплый бежевый оттенок идеально вписался в фасад. Работу выполнили за 4 дня, без задержек. Цена честная, обмана нет.',
  },
  {
    name: 'Артём Б.',
    city: 'Новороссийск',
    rating: 5,
    date: '5 ноября 2025',
    project: 'Цоколь здания, 60 м²',
    text: 'Заказывали отделку цоколя для гостевого дома. Выбрали кварцит микс — смотрится богато. Мастера профи, общались уважительно, всё показывали и объясняли. Получили скидку как постоянному клиенту.',
  },
  {
    name: 'Марина П.',
    city: 'Геленджик',
    rating: 5,
    date: '18 октября 2025',
    project: 'Прогулочная зона, 120 м²',
    text: 'Огромная благодарность команде! Сделали прогулочную зону вокруг дома, площадка получилась идеально ровной. Уже год — ни одной трещины. Однозначно рекомендую тем, кто ищет качественную работу.',
  },
];

const stats = [
  { num: '4.9', label: 'средний рейтинг' },
  { num: '500+', label: 'довольных клиентов' },
  { num: '12', label: 'лет на рынке' },
  { num: '15', label: 'лет гарантии' },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section-pad" style={{ background: 'var(--mid)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }} />
              <span className="text-xs font-golos tracking-[0.35em] uppercase" style={{ color: 'var(--gold)' }}>
                Отзывы клиентов
              </span>
            </div>
            <h2 className="font-oswald font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.0 }}>
              НАМ <span style={{ color: 'var(--gold)' }}>ДОВЕРЯЮТ</span>
            </h2>
          </div>
          <div className="flex items-center gap-3" itemScope itemType="https://schema.org/AggregateRating">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <Icon key={i} name="Star" size={22} style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />
              ))}
            </div>
            <div className="font-golos text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              <span itemProp="ratingValue" className="text-white font-semibold">4.9</span> из <span itemProp="bestRating">5</span> · <span itemProp="reviewCount">217</span> отзывов
            </div>
          </div>
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,169,110,0.1)', borderRadius: '6px' }}>
              <div className="font-oswald font-bold mb-1" style={{ fontSize: '2rem', color: 'var(--gold)', lineHeight: 1 }}>
                {s.num}
              </div>
              <div className="font-golos text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <article key={i} className="reveal p-6 flex flex-col gap-3" style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(201,169,110,0.12)',
              borderRadius: '8px'
            }}>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Icon key={idx} name="Star" size={14} style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />
                  ))}
                </div>
                <span className="font-golos text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{r.date}</span>
              </div>

              <p className="font-golos text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                «{r.text}»
              </p>

              <div className="pt-3 mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="font-oswald font-semibold text-white text-base">{r.name}</div>
                <div className="font-golos text-xs mt-0.5" style={{ color: 'var(--gold)' }}>{r.city}</div>
                <div className="font-golos text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  <Icon name="CheckCircle2" size={11} className="inline mr-1" />
                  {r.project}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
