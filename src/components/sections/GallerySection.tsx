import Icon from '@/components/ui/icon';

const galleryItems = [
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/5a720f68-4850-4556-915c-eb8c6bae78fc.jpg', label: 'Мрамор', sub: 'Мрамор' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/3da74af8-bdcb-47e9-bbf6-5aa7591a0f7e.jpg', label: 'Змеевик', sub: 'Змеевик' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/f3fc68e6-9d2e-435b-9b64-c34b2723d6d0.jpg', label: 'Галька', sub: 'Галька' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/e6621930-7081-4ed4-ab7b-4137183b5c9d.jpg', label: 'Кварцит', sub: 'Кварцит' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/71d37538-065b-4dab-9506-81147443c518.jpg', label: 'Гранит', sub: 'Гранит' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/abc8bf34-aa05-4e55-8f96-d158bcc6bb26.jpg', label: 'Мрамор', sub: 'Мрамор' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/67fa3990-5139-479f-a249-d527f2634bc5.jpg', label: 'Яшма', sub: 'Яшма' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/95669c90-18e9-4170-9226-da1984485f47.jpg', label: 'Галька', sub: 'Галька' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/754a094e-3c0e-4f5f-9270-014e0d3110f8.jpg', label: 'Яшма', sub: 'Яшма' },
  { img: 'https://cdn.poehali.dev/projects/2712c1ce-a040-4c98-8236-b6a704c80843/bucket/21673b8d-9128-4b8b-8580-6109b4c44d58.jpg', label: 'Гранит', sub: 'Гранит' },
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