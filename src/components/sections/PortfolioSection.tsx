import Icon from '@/components/ui/icon';

const portfolioItems = [
  { id: 1, title: 'Обрамление бассейна', area: '32 м²', material: 'Мраморная крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/e4381f1f-af60-44b6-8e31-a1b97beef331.jpg', span: 'col-span-2 row-span-2' },
  { id: 2, title: 'Отмостка дома', area: '48 м²', material: 'Серый гранит', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/ecb47df4-f238-47c6-a746-fd3bc98aab03.jpg', span: '' },
  { id: 3, title: 'Крыльцо и ступени', area: '12 м²', material: 'Тёмный базальт', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/2d89b172-e7fb-4198-b27a-98f6f5b47924.jpg', span: '' },
  { id: 4, title: 'Цоколь здания', area: '60 м²', material: 'Кварцит микс', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/b87a4234-faa1-49d7-bb2e-67e61e3fd155.jpg', span: 'col-span-2' },
  { id: 5, title: 'Терраса под навесом', area: '85 м²', material: 'Речная галька', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/7c5a8a6d-374b-4a7c-a71b-aa0a12df4d7e.jpg', span: '' },
  { id: 6, title: 'Прогулочная зона', area: '120 м²', material: 'Натуральный камень', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/ecb47df4-f238-47c6-a746-fd3bc98aab03.jpg', span: '' },
  { id: 7, title: 'Крыльцо с мраморной крошкой', area: '18 м²', material: 'Мраморная крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/f0e90815-c5a9-4f28-8c36-88c378b4529c.jpg', span: 'col-span-2' },
  { id: 8, title: 'Подпорная стена из крошки', area: '24 м²', material: 'Мраморная крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/73f07ea8-eca2-4174-87c8-c4647e52b8f7.jpg', span: '' },
  { id: 9, title: 'Ступени с алюминиевым профилем', area: '15 м²', material: 'Резиновая крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/5c8bd888-3079-4fbf-9a7e-d9c4662a706a.jpg', span: '' },
  { id: 10, title: 'Пол на кухне', area: '22 м²', material: 'Резиновая крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/84f0779a-1ecc-4c2e-a316-13f87d0eabe9.png', span: 'col-span-2' },
  { id: 11, title: 'Широкое крыльцо', area: '30 м²', material: 'Мраморная крошка', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/51f503e0-6869-4576-a6cf-7610630945b8.jpg', span: '' },
  { id: 12, title: 'Крыльцо с отмосткой', area: '28 м²', material: 'Тёмный гранит + галька', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/ae4c0ce5-2572-4659-9f0c-afadb2b04c71.jpg', span: 'col-span-2' },
  { id: 13, title: 'Ступени у фасада', area: '16 м²', material: 'Тёмный гранит', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/5ca5851a-1853-4bd9-b2fb-030fd2be4949.jpg', span: '' },
  { id: 14, title: 'Бордюр и площадка', area: '55 м²', material: 'Серый гранит', img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/c063817c-3a03-41ba-81c3-6614cd52958e.jpg', span: '' },
];

export default function PortfolioSection() {
  return (
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
            Работаем в Краснодаре, Сочи, Анапе и по всему Краснодарскому краю
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3" style={{ gridAutoRows: '200px' }}>
          {portfolioItems.map((item) => (
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
  );
}