import Icon from '@/components/ui/icon';

const materials = [
  { name: 'Мраморная крошка', desc: 'Тёплые бежевые и кремовые оттенки. Идеально для крылец, террас и интерьерных полов.' },
  { name: 'Гранит', desc: 'Самый прочный камень. Подходит для отмосток, цоколей и зон высокой нагрузки.' },
  { name: 'Речная галька', desc: 'Гладкая округлая фактура. Создаёт массажный эффект, отлично для зон у бассейна.' },
  { name: 'Кварцит', desc: 'Декоративный камень с блеском. Часто используется для фасадов и цоколей.' },
  { name: 'Змеевик', desc: 'Зелёный благородный оттенок. Эффектно смотрится на лестницах и в интерьере.' },
  { name: 'Яшма', desc: 'Эксклюзивные красные и коричневые тона. Премиальное покрытие для дизайн-проектов.' },
];

const services = [
  { icon: 'Waves', title: 'Покрытие бассейнов', desc: 'Нескользящее, влагостойкое, устойчиво к хлору и УФ.' },
  { icon: 'Home', title: 'Террасы и веранды', desc: 'Бесшовное покрытие любой формы и размера.' },
  { icon: 'Layers', title: 'Отмостки домов', desc: 'Защита фундамента + декоративный внешний вид.' },
  { icon: 'TrendingUp', title: 'Ступени и крыльцо', desc: 'С противоскользящим эффектом и подсветкой по желанию.' },
  { icon: 'Building2', title: 'Цоколи зданий', desc: 'Долговечная отделка фасада натуральным камнем.' },
  { icon: 'Trees', title: 'Прогулочные зоны', desc: 'Дорожки в саду и вокруг дома до 200 м².' },
];

const cities = ['Краснодар', 'Сочи', 'Анапа', 'Новороссийск', 'Геленджик', 'Армавир', 'Туапсе', 'Ейск'];

const prices = [
  { name: 'Мраморная крошка', price: 'от 2 800 ₽/м²', note: 'крыльцо, терраса, интерьер' },
  { name: 'Речная галька', price: 'от 3 200 ₽/м²', note: 'зоны у бассейна, дорожки' },
  { name: 'Гранитная крошка', price: 'от 3 500 ₽/м²', note: 'отмостки, цоколи' },
  { name: 'Кварцит / змеевик', price: 'от 3 900 ₽/м²', note: 'фасады, премиум-объекты' },
  { name: 'Яшма (эксклюзив)', price: 'от 4 500 ₽/м²', note: 'дизайн-проекты' },
  { name: 'Замер и расчёт', price: 'бесплатно', note: 'выезд по Краснодару' },
];

const steps = [
  { n: '01', title: 'Заявка и замер', desc: 'Принимаем заявку, бесплатно выезжаем на объект, замеряем площадь и считаем точную смету.' },
  { n: '02', title: 'Договор и материалы', desc: 'Заключаем договор с фиксированной ценой и гарантией. Подбираем камень под ваш интерьер.' },
  { n: '03', title: 'Подготовка основания', desc: 'Готовим и грунтуем поверхность — это влияет на срок службы покрытия.' },
  { n: '04', title: 'Укладка каменного ковра', desc: 'Наносим смесь камня с полиуретаном вручную, выравниваем бесшовное покрытие.' },
  { n: '05', title: 'Сдача и гарантия', desc: 'Через сутки покрытие готово к нагрузке. Выдаём гарантию по договору до 25 лет.' },
];

export default function SeoSection() {
  return (
    <section id="about-stone" className="section-pad" style={{ background: 'var(--light)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Основной описательный блок */}
        <div className="reveal max-w-4xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, var(--terra), transparent)' }} />
            <span className="text-xs font-golos tracking-[0.35em] uppercase" style={{ color: 'var(--terra)' }}>
              О материале
            </span>
          </div>
          <h2 className="font-oswald font-bold mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--dark)', lineHeight: 1.0 }}>
            КАМЕННЫЙ КОВЁР <span style={{ color: 'var(--terra)' }}>В КРАСНОДАРЕ</span>
          </h2>
          <div className="space-y-4 font-golos text-base leading-relaxed" style={{ color: 'rgba(26,22,18,0.7)' }}>
            <p>
              <strong>Каменный ковёр</strong> — это современное бесшовное покрытие из натурального камня на полиуретановом связующем. Технология пришла в Россию из Германии и за последние 10 лет стала самым популярным премиальным покрытием для частных домов, бассейнов и общественных пространств в Краснодарском крае.
            </p>
            <p>
              Наша компания <strong>«Каменный Ковёр»</strong> укладывает покрытия из натурального камня в Краснодаре с 2014 года. За 12 лет работы мы реализовали более 500 проектов — от небольших крылец до больших террас и обустройства зон вокруг бассейнов. Используем только сертифицированный полиуретан европейского производства и натуральный камень с проверенных карьеров России и Турции.
            </p>
            <p>
              <strong>Главные преимущества каменного ковра:</strong> бесшовность, водопроницаемость (вода не застаивается), нескользящая поверхность, устойчивость к морозу, ультрафиолету и хлору, простой уход — достаточно смывать пыль шлангом. Покрытие служит <strong>от 15 до 25 лет</strong>, мы даём официальную гарантию по договору.
            </p>
          </div>
        </div>

        {/* Материалы */}
        <div className="reveal mb-16">
          <h3 className="font-oswald font-bold mb-8 uppercase" style={{ fontSize: '1.75rem', color: 'var(--dark)' }}>
            Материалы для каменного ковра
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((m, i) => (
              <div key={i} className="p-5" style={{ background: '#fff', border: '1px solid rgba(26,22,18,0.06)', borderRadius: '6px' }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'var(--terra)', borderRadius: '4px' }}>
                    <Icon name="Gem" size={15} style={{ color: '#fff' }} />
                  </div>
                  <h4 className="font-oswald font-semibold text-base uppercase tracking-wide" style={{ color: 'var(--dark)' }}>
                    {m.name}
                  </h4>
                </div>
                <p className="font-golos text-sm leading-relaxed" style={{ color: 'rgba(26,22,18,0.6)' }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Услуги */}
        <div className="reveal mb-16">
          <h3 className="font-oswald font-bold mb-8 uppercase" style={{ fontSize: '1.75rem', color: 'var(--dark)' }}>
            Виды работ из натурального камня
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={i} className="p-5 flex gap-4" style={{ background: '#fff', border: '1px solid rgba(26,22,18,0.06)', borderRadius: '6px' }}>
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center" style={{ background: 'rgba(184,92,56,0.08)', borderRadius: '6px' }}>
                  <Icon name={s.icon} size={22} style={{ color: 'var(--terra)' }} />
                </div>
                <div>
                  <h4 className="font-oswald font-semibold text-base uppercase tracking-wide mb-1" style={{ color: 'var(--dark)' }}>
                    {s.title}
                  </h4>
                  <p className="font-golos text-sm leading-relaxed" style={{ color: 'rgba(26,22,18,0.6)' }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Цены */}
        <div className="reveal mb-16">
          <h3 className="font-oswald font-bold mb-3 uppercase" style={{ fontSize: '1.75rem', color: 'var(--dark)' }}>
            Цены на каменный ковёр в Краснодаре
          </h3>
          <p className="font-golos text-sm leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(26,22,18,0.6)' }}>
            Стоимость зависит от вида камня, площади и сложности объекта. Указаны цены под ключ с материалом и работой. Точную смету рассчитываем бесплатно после замера.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {prices.map((p, i) => (
              <div key={i} className="p-5 flex items-center justify-between gap-4" style={{ background: '#fff', border: '1px solid rgba(26,22,18,0.06)', borderRadius: '6px' }}>
                <div>
                  <h4 className="font-oswald font-semibold text-base uppercase tracking-wide" style={{ color: 'var(--dark)' }}>
                    {p.name}
                  </h4>
                  <p className="font-golos text-xs mt-1" style={{ color: 'rgba(26,22,18,0.5)' }}>{p.note}</p>
                </div>
                <span className="font-oswald font-bold text-base whitespace-nowrap" style={{ color: 'var(--terra)' }}>
                  {p.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Этапы работ */}
        <div className="reveal mb-16">
          <h3 className="font-oswald font-bold mb-8 uppercase" style={{ fontSize: '1.75rem', color: 'var(--dark)' }}>
            Как мы работаем — этапы укладки
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="p-5" style={{ background: '#fff', border: '1px solid rgba(26,22,18,0.06)', borderRadius: '6px' }}>
                <div className="font-oswald font-bold text-2xl mb-2" style={{ color: 'var(--gold)' }}>{s.n}</div>
                <h4 className="font-oswald font-semibold text-base uppercase tracking-wide mb-1" style={{ color: 'var(--dark)' }}>
                  {s.title}
                </h4>
                <p className="font-golos text-sm leading-relaxed" style={{ color: 'rgba(26,22,18,0.6)' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* География */}
        <div className="reveal p-8 md:p-10" style={{ background: 'var(--dark)', borderRadius: '8px' }}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="font-oswald font-bold text-white mb-4 uppercase" style={{ fontSize: '1.5rem' }}>
                Где мы работаем
              </h3>
              <p className="font-golos leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Укладываем каменный ковёр по всему Краснодарскому краю. Бесплатный выезд замерщика по Краснодару, в другие города выезжаем по согласованию.
              </p>
              <div className="flex flex-wrap gap-2">
                {cities.map(c => (
                  <span key={c} className="px-3 py-1.5 font-golos text-xs uppercase tracking-wider" style={{
                    background: 'rgba(201,169,110,0.12)',
                    color: 'var(--gold)',
                    border: '1px solid rgba(201,169,110,0.25)',
                    borderRadius: '3px'
                  }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 md:w-72">
              <div className="flex items-center gap-3 p-4" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                <Icon name="Phone" size={18} style={{ color: 'var(--gold)' }} />
                <div>
                  <div className="font-golos text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Звоните</div>
                  <a href="tel:+79648477501" className="font-oswald font-semibold text-white text-base">+7 964 847-75-01</a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}>
                <Icon name="MapPin" size={18} style={{ color: 'var(--gold)' }} />
                <div>
                  <div className="font-golos text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Офис</div>
                  <div className="font-golos text-sm text-white">Краснодар, ул. Красная, 124</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}