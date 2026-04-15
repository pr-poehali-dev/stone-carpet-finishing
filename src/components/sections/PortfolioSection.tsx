import { useState } from 'react';
import Icon from '@/components/ui/icon';

const portfolioItems = [
  { id: 1, title: 'Обрамление бассейна', area: '32 м²', material: 'Мраморная крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/e4381f1f-af60-44b6-8e31-a1b97beef331.jpg', span: 'col-span-2 row-span-2' },
  { id: 2, title: 'Отмостка дома', area: '48 м²', material: 'Серый гранит', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/ecb47df4-f238-47c6-a746-fd3bc98aab03.jpg', span: '' },
  { id: 3, title: 'Крыльцо и ступени', area: '12 м²', material: 'Тёмный базальт', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/2d89b172-e7fb-4198-b27a-98f6f5b47924.jpg', span: '' },
  { id: 4, title: 'Цоколь здания', area: '60 м²', material: 'Кварцит микс', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/b87a4234-faa1-49d7-bb2e-67e61e3fd155.jpg', span: 'col-span-2' },
  { id: 5, title: 'Терраса под навесом', area: '85 м²', material: 'Речная галька', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/7c5a8a6d-374b-4a7c-a71b-aa0a12df4d7e.jpg', span: '' },
  { id: 6, title: 'Прогулочная зона', area: '120 м²', material: 'Натуральный камень', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/ecb47df4-f238-47c6-a746-fd3bc98aab03.jpg', span: '' },
  { id: 7, title: 'Крыльцо с мраморной крошкой', area: '18 м²', material: 'Мраморная крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/f0e90815-c5a9-4f28-8c36-88c378b4529c.jpg', span: 'col-span-2' },
  { id: 8, title: 'Подпорная стена', area: '24 м²', material: 'Мраморная крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/73f07ea8-eca2-4174-87c8-c4647e52b8f7.jpg', span: '' },
  { id: 9, title: 'Ступени с профилем', area: '15 м²', material: 'Резиновая крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/5c8bd888-3079-4fbf-9a7e-d9c4662a706a.jpg', span: '' },
  { id: 10, title: 'Пол на кухне', area: '22 м²', material: 'Резиновая крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/84f0779a-1ecc-4c2e-a316-13f87d0eabe9.png', span: 'col-span-2' },
  { id: 11, title: 'Широкое крыльцо', area: '30 м²', material: 'Мраморная крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/51f503e0-6869-4576-a6cf-7610630945b8.jpg', span: '' },
  { id: 12, title: 'Крыльцо с отмосткой', area: '28 м²', material: 'Тёмный гранит + галька', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/ae4c0ce5-2572-4659-9f0c-afadb2b04c71.jpg', span: 'col-span-2' },
  { id: 13, title: 'Ступени у фасада', area: '16 м²', material: 'Тёмный гранит', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/5ca5851a-1853-4bd9-b2fb-030fd2be4949.jpg', span: '' },
  { id: 14, title: 'Бордюр и площадка', area: '55 м²', material: 'Серый гранит', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/c063817c-3a03-41ba-81c3-6614cd52958e.jpg', span: '' },
];

export default function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section-pad" style={{ background: 'var(--light)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: 'linear-gradient(to right, var(--terra), transparent)' }} />
              <span className="text-xs font-golos tracking-[0.35em] uppercase" style={{ color: 'var(--terra)' }}>Наши работы</span>
            </div>
            <h2 className="font-oswald font-bold" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--dark)', lineHeight: 1.0 }}>
              ПОРТФОЛИО
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-golos text-sm leading-relaxed" style={{ color: 'rgba(26,22,18,0.45)' }}>
              Краснодар · Сочи · Анапа
            </p>
            <p className="font-golos text-xs" style={{ color: 'rgba(26,22,18,0.3)' }}>и по всему Краснодарскому краю</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5" style={{ gridAutoRows: '210px' }}>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`reveal group relative overflow-hidden cursor-pointer ${item.span}`}
              style={{ borderRadius: '6px' }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ filter: hoveredId === item.id ? 'brightness(0.8)' : 'brightness(1)' }}
              />
              {/* Постоянный нижний градиент */}
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,22,18,0.85) 0%, rgba(26,22,18,0.1) 50%, transparent 100%)' }} />

              {/* Hover оверлей */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(135deg, rgba(201,169,110,0.08) 0%, transparent 60%)' }} />

              {/* Контент */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  <span className="font-golos text-xs px-2 py-0.5 uppercase tracking-wider"
                    style={{ background: 'rgba(201,169,110,0.2)', color: 'var(--gold)', borderRadius: '3px', border: '1px solid rgba(201,169,110,0.3)' }}>
                    {item.material}
                  </span>
                </div>
                <h3 className="font-oswald font-semibold text-white leading-tight" style={{ fontSize: item.span.includes('col-span-2') ? '1.4rem' : '1.1rem' }}>
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 mt-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <Icon name="Maximize2" size={11} style={{ color: 'var(--gold)' }} />
                  <span className="font-golos text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.area}</span>
                </div>
              </div>

              {/* Угловой акцент */}
              <div className="absolute top-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(201,169,110,0.25) 0%, transparent 70%)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
