import { useState } from 'react';
import Icon from '@/components/ui/icon';

const galleryItems = [
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/5a720f68-4850-4556-915c-eb8c6bae78fc.jpg', label: 'Мрамор', sub: 'Мрамор' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/3da74af8-bdcb-47e9-bbf6-5aa7591a0f7e.jpg', label: 'Змеевик', sub: 'Змеевик' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/f3fc68e6-9d2e-435b-9b64-c34b2723d6d0.jpg', label: 'Галька', sub: 'Галька' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/e6621930-7081-4ed4-ab7b-4137183b5c9d.jpg', label: 'Кварцит', sub: 'Кварцит' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/71d37538-065b-4dab-9506-81147443c518.jpg', label: 'Гранит', sub: 'Гранит' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/abc8bf34-aa05-4e55-8f96-d158bcc6bb26.jpg', label: 'Мрамор белый', sub: 'Мрамор' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/67fa3990-5139-479f-a249-d527f2634bc5.jpg', label: 'Яшма', sub: 'Яшма' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/95669c90-18e9-4170-9226-da1984485f47.jpg', label: 'Галька морская', sub: 'Галька' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/754a094e-3c0e-4f5f-9270-014e0d3110f8.jpg', label: 'Яшма красная', sub: 'Яшма' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/21673b8d-9128-4b8b-8580-6109b4c44d58.jpg', label: 'Гранит тёмный', sub: 'Гранит' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/2bc6d249-008a-44c2-88be-7085c80ecf88.jpg', label: 'Щебень чёрно-белый', sub: 'Щебень' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/013c1a38-d9a1-43b1-8380-e2179263a665.jpg', label: 'Галька бежевая', sub: 'Галька' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/11db93d2-cda0-42fa-87c4-7c401e16df98.jpg', label: 'Мраморная крошка', sub: 'Мрамор' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/a8c5dc4d-3d71-4281-9b5c-eb89d9bbee7b.jpg', label: 'Галька речная', sub: 'Галька' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/baa80225-fe90-42a5-b9ea-3652e411ec7f.jpg', label: 'Щебень терракот', sub: 'Щебень' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/b811b4ae-6e6e-4ec4-93ce-017c8d876b3a.jpg', label: 'Коллекция образцов', sub: 'Коллекция' },
];

interface GallerySectionProps {
  scrollTo: (id: string) => void;
}

export default function GallerySection({ scrollTo }: GallerySectionProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-pad" style={{ background: 'var(--dark)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }} />
              <span className="text-xs font-golos tracking-[0.35em] uppercase" style={{ color: 'var(--gold)' }}>Коллекции</span>
            </div>
            <h2 className="font-oswald font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.0 }}>
              ГАЛЕРЕЯ<br />
              <span style={{ color: 'var(--gold)' }}>МАТЕРИАЛОВ</span>
            </h2>
          </div>
          <p className="font-golos text-sm max-w-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Более 50 видов натурального камня в наличии на складе в Краснодаре
          </p>
        </div>

        {/* Сетка — первые 3 крупнее, остальные сеткой */}
        <div className="space-y-2.5">
          {/* Первая строка — 3 карточки разного размера */}
          <div className="grid grid-cols-5 gap-2.5" style={{ height: '280px' }}>
            <div className="col-span-2 reveal group relative overflow-hidden cursor-pointer" style={{ borderRadius: '8px' }}
              onMouseEnter={() => setActive(0)} onMouseLeave={() => setActive(null)}>
              <img src={galleryItems[0].img} alt={galleryItems[0].label} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(26,22,18,0.9) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-oswald text-white text-lg font-semibold">{galleryItems[0].label}</p>
                <p className="font-golos text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{galleryItems[0].sub}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'var(--gold)', borderRadius: '4px' }}>
                  <Icon name="Plus" size={14} style={{ color: 'var(--dark)' }} />
                </div>
              </div>
            </div>

            <div className="col-span-1 reveal group relative overflow-hidden cursor-pointer" style={{ borderRadius: '8px' }}
              onMouseEnter={() => setActive(1)} onMouseLeave={() => setActive(null)}>
              <img src={galleryItems[1].img} alt={galleryItems[1].label} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(26,22,18,0.9) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-oswald text-white text-sm font-semibold">{galleryItems[1].label}</p>
              </div>
            </div>

            <div className="col-span-2 reveal group relative overflow-hidden cursor-pointer" style={{ borderRadius: '8px' }}
              onMouseEnter={() => setActive(2)} onMouseLeave={() => setActive(null)}>
              <img src={galleryItems[2].img} alt={galleryItems[2].label} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(26,22,18,0.9) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-oswald text-white text-lg font-semibold">{galleryItems[2].label}</p>
                <p className="font-golos text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{galleryItems[2].sub}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'var(--gold)', borderRadius: '4px' }}>
                  <Icon name="Plus" size={14} style={{ color: 'var(--dark)' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Остальные — равная сетка */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {galleryItems.slice(3).map((item, i) => (
              <div key={i} className="reveal group relative overflow-hidden cursor-pointer" style={{ borderRadius: '6px', aspectRatio: '1' }}
                onMouseEnter={() => setActive(i + 3)} onMouseLeave={() => setActive(null)}>
                <img
                  src={item.img}
                  alt={item.label}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(26,22,18,0.95) 0%, rgba(26,22,18,0.2) 70%, transparent 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-golos text-xs font-medium text-white">{item.label}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-7 h-7 flex items-center justify-center" style={{ background: 'rgba(201,169,110,0.9)', borderRadius: '50%' }}>
                    <Icon name="Plus" size={13} style={{ color: 'var(--dark)' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal text-center mt-14">
          <p className="font-golos mb-5" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
            Хотите увидеть образцы вживую?
          </p>
          <button onClick={() => scrollTo('contacts')}
            className="inline-flex items-center gap-3 font-oswald font-medium tracking-widest uppercase text-sm px-8 py-3.5 border transition-all duration-300 hover:bg-white/5 group"
            style={{ borderColor: 'rgba(201,169,110,0.3)', color: 'var(--gold)', borderRadius: '4px' }}>
            Запросить каталог
            <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" style={{ color: 'var(--gold)' }} />
          </button>
        </div>
      </div>
    </section>
  );
}