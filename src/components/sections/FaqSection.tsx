import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqItems = [
  {
    q: 'Что такое каменный ковёр?',
    a: 'Каменный ковёр — это декоративное бесшовное покрытие из натурального камня (мрамор, гранит, галька, кварцит) на полиуретановом связующем. Используется для отделки бассейнов, террас, отмосток, ступеней и цоколей зданий. Покрытие устойчиво к влаге, ультрафиолету, перепадам температур и служит более 15 лет.',
  },
  {
    q: 'Сколько стоит каменный ковёр в Краснодаре?',
    a: 'Стоимость каменного ковра зависит от вида камня, площади и сложности объекта. Расчёт проекта мы делаем бесплатно — выезд замерщика по Краснодару и Краснодарскому краю. Позвоните +7 964 847-75-01 или оставьте заявку на сайте, и мы подготовим точную смету в течение дня.',
  },
  {
    q: 'Какие виды камня используются для каменного ковра?',
    a: 'У нас в наличии более 50 видов натурального камня: мраморная крошка, гранит (серый, тёмный, красный), речная и морская галька, кварцит, змеевик, яшма, базальт, щебень. Все материалы хранятся на складе в Краснодаре — можно приехать и выбрать вживую.',
  },
  {
    q: 'Можно ли укладывать каменный ковёр у бассейна?',
    a: 'Да, каменный ковёр идеально подходит для зон бассейнов и террас. Покрытие не скользит даже мокрым, устойчиво к хлору, морской воде и ультрафиолету. Мы выполнили более 100 проектов покрытий для бассейнов в Краснодаре, Сочи и Анапе.',
  },
  {
    q: 'Где работает компания «Каменный Ковёр»?',
    a: 'Мы работаем в Краснодаре и по всему Краснодарскому краю — Сочи, Анапа, Новороссийск, Геленджик, Армавир. Адрес офиса: г. Краснодар, ул. Красная, 124. Часы работы: пн–сб с 09:00 до 19:00.',
  },
  {
    q: 'Сколько служит каменный ковёр?',
    a: 'При правильной укладке и эксплуатации каменный ковёр служит от 15 до 25 лет. Мы даём официальную гарантию на все работы и используем только сертифицированные полиуретановые связующие европейского производства.',
  },
  {
    q: 'Можно ли уложить каменный ковёр зимой?',
    a: 'Укладка возможна при температуре от +5°C. В Краснодарском крае мы работаем практически круглый год благодаря мягкому климату. Для внутренних работ ограничений по сезону нет.',
  },
  {
    q: 'Делаете ли вы крыльцо и ступени из натурального камня?',
    a: 'Да, изготавливаем крыльца, лестницы и ступени любой сложности — с профилем, подсветкой и противоскользящим эффектом. В портфолио более 200 проектов крылец и входных групп в Краснодаре.',
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad" style={{ background: 'var(--light)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ background: 'linear-gradient(to right, var(--terra), transparent)' }} />
            <span className="text-xs font-golos tracking-[0.35em] uppercase" style={{ color: 'var(--terra)' }}>
              Вопросы и ответы
            </span>
          </div>
          <h2 className="font-oswald font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--dark)', lineHeight: 1.0 }}>
            ЧАСТЫЕ <span style={{ color: 'var(--terra)' }}>ВОПРОСЫ</span>
          </h2>
          <p className="font-golos mt-4 text-base max-w-2xl" style={{ color: 'rgba(26,22,18,0.55)' }}>
            Собрали ответы на самые популярные вопросы о каменном ковре в Краснодаре. Не нашли свой — звоните +7 964 847-75-01.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className="reveal" style={{ background: '#fff', borderRadius: '8px', border: '1px solid rgba(26,22,18,0.06)', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 transition-colors hover:bg-black/[0.02]"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-oswald font-semibold text-base md:text-lg uppercase tracking-wide" style={{ color: 'var(--dark)', letterSpacing: '0.02em' }}>
                    {item.q}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform" style={{
                    background: isOpen ? 'var(--terra)' : 'rgba(26,22,18,0.05)',
                    borderRadius: '4px',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    <Icon name="ChevronDown" size={16} style={{ color: isOpen ? '#fff' : 'var(--dark)' }} />
                  </div>
                </button>
                <div style={{
                  maxHeight: isOpen ? '500px' : '0px',
                  opacity: isOpen ? 1 : 0,
                  transition: 'max-height 0.4s ease, opacity 0.3s ease',
                  overflow: 'hidden'
                }}>
                  <div className="px-6 pb-5 pt-1 font-golos leading-relaxed" style={{ color: 'rgba(26,22,18,0.7)', fontSize: '15px' }}>
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
