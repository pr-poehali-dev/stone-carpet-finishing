import Icon from '@/components/ui/icon';

const galleryItems = [
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/e4381f1f-af60-44b6-8e31-a1b97beef331.jpg', label: 'Мраморная крошка', sub: 'Обрамление бассейнов' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/ecb47df4-f238-47c6-a746-fd3bc98aab03.jpg', label: 'Серый гранит', sub: 'Отмостки и дорожки' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/2d89b172-e7fb-4198-b27a-98f6f5b47924.jpg', label: 'Тёмный базальт', sub: 'Крыльцо и ступени' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/b87a4234-faa1-49d7-bb2e-67e61e3fd155.jpg', label: 'Кварцит микс', sub: 'Цоколи и фасады' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/7c5a8a6d-374b-4a7c-a71b-aa0a12df4d7e.jpg', label: 'Речная галька', sub: 'Террасы и площадки' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/e4381f1f-af60-44b6-8e31-a1b97beef331.jpg', label: 'Натуральный камень', sub: 'Любые поверхности' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/f0e90815-c5a9-4f28-8c36-88c378b4529c.jpg', label: 'Мраморная крошка', sub: 'Крыльцо с лестницей' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/73f07ea8-eca2-4174-87c8-c4647e52b8f7.jpg', label: 'Мраморная крошка', sub: 'Подпорная стена' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/5c8bd888-3079-4fbf-9a7e-d9c4662a706a.jpg', label: 'Резиновая крошка', sub: 'Ступени с профилем' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/84f0779a-1ecc-4c2e-a316-13f87d0eabe9.png', label: 'Резиновая крошка', sub: 'Напольное покрытие' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/51f503e0-6869-4576-a6cf-7610630945b8.jpg', label: 'Мраморная крошка', sub: 'Широкое крыльцо' },
];

interface GallerySectionProps {
  scrollTo: (id: string) => void;
}

export default function GallerySection({ scrollTo }: GallerySectionProps) {
  return (
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
  );
}
