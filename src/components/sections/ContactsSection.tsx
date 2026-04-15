import { useState } from 'react';
import Icon from '@/components/ui/icon';

const materialOptions = ['Мрамор', 'Гранит', 'Галька', 'Кварцит', 'Змеевик', 'Яшма'];
const roomOptions = ['Терраса / балкон', 'Бассейн / водоём', 'Лобби / офис', 'Жилая зона', 'Въезд / дорожки', 'Другое'];

interface ContactsSectionProps {
  scrollTo: (id: string) => void;
}

export default function ContactsSection({ scrollTo }: ContactsSectionProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', area: '', material: '', room: '', comment: '' });
  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Главная' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const contacts = [
    { icon: 'Phone', label: 'Телефон', value: '+7 (964) 847-75-01', sub: 'Владислав' },
    { icon: 'Phone', label: 'Телефон', value: '+7 (937) 225-17-59', sub: 'Дмитрий' },
    { icon: 'Mail', label: 'Email', value: 'stroyvsaratov@yandex.ru' },
    { icon: 'MapPin', label: 'Офис', value: 'ул. Красная, 124, Краснодар' },
    { icon: 'Send', label: 'Telegram', value: '@Coverstone', link: 'https://t.me/Coverstone' },
    { icon: 'Clock', label: 'Режим работы', value: 'Пн–Сб, 9:00–19:00' },
  ];

  return (
    <>
      <section id="contacts" className="section-pad" style={{ background: 'var(--light)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Контактная информация */}
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: 'linear-gradient(to right, var(--terra), transparent)' }} />
                <span className="text-xs font-golos tracking-[0.35em] uppercase" style={{ color: 'var(--terra)' }}>Связаться с нами</span>
              </div>
              <h2 className="font-oswald font-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--dark)', lineHeight: 1.05 }}>
                РАСЧЁТ<br />
                <span style={{ color: 'var(--terra)' }}>ПРОЕКТА</span>
              </h2>
              <p className="font-golos leading-relaxed mb-10 max-w-md" style={{ color: 'rgba(26,22,18,0.5)', fontSize: '0.95rem' }}>
                Оставьте заявку — специалист свяжется с вами в течение 30 минут,
                проконсультирует и подготовит детальный расчёт.
              </p>

              <div className="space-y-4">
                {contacts.map((c, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{ background: 'var(--sand)', borderRadius: '8px', border: '1px solid rgba(26,22,18,0.06)' }}>
                      <Icon name={c.icon} fallback="Phone" size={16} style={{ color: 'var(--terra)' }} />
                    </div>
                    <div>
                      <p className="font-golos text-xs uppercase tracking-wider mb-0.5" style={{ color: 'rgba(26,22,18,0.35)' }}>{c.label}</p>
                      {'link' in c && c.link
                        ? <a href={c.link} target="_blank" rel="noopener noreferrer"
                            className="font-golos font-medium transition-colors hover:opacity-70"
                            style={{ color: 'var(--terra)' }}>{c.value}</a>
                        : <p className="font-golos font-medium" style={{ color: 'var(--dark)' }}>{c.value}</p>}
                      {'sub' in c && c.sub && <p className="font-golos text-sm mt-0.5" style={{ color: 'rgba(26,22,18,0.4)' }}>{c.sub}</p>}
                    </div>
                  </div>
                ))}

                <a href="https://www.tiktok.com/@coverstoneng" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 group transition-opacity hover:opacity-70">
                  <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'var(--sand)', borderRadius: '8px', border: '1px solid rgba(26,22,18,0.06)' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--terra)' }}>
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.83 1.54V6.79a4.85 4.85 0 0 1-1.06-.1z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-golos text-xs uppercase tracking-wider mb-0.5" style={{ color: 'rgba(26,22,18,0.35)' }}>TikTok</p>
                    <p className="font-golos font-medium" style={{ color: 'var(--dark)' }}>@coverstoneng</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Форма */}
            <div className="reveal">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center"
                  style={{ background: 'var(--dark)', borderRadius: '12px', padding: '64px 40px', minHeight: '400px' }}>
                  <div className="w-20 h-20 flex items-center justify-center mb-6"
                    style={{ background: 'rgba(201,169,110,0.1)', borderRadius: '50%', border: '1px solid rgba(201,169,110,0.2)' }}>
                    <Icon name="CheckCircle" size={36} style={{ color: 'var(--gold)' }} />
                  </div>
                  <h3 className="font-oswald font-bold text-white text-3xl mb-3">ЗАЯВКА ПРИНЯТА</h3>
                  <p className="font-golos" style={{ color: 'rgba(255,255,255,0.45)' }}>Наш специалист свяжется с вами в течение 30 минут</p>
                </div>
              ) : (
                <div style={{ background: 'var(--dark)', borderRadius: '12px', padding: '40px', border: '1px solid rgba(255,255,255,0.04)' }}>
                  {/* Шаги */}
                  <div className="flex items-center gap-2 mb-8">
                    {[1, 2].map(s => (
                      <div key={s} className="flex items-center gap-2">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full font-oswald text-xs font-bold transition-all duration-300"
                          style={{
                            background: formStep >= s ? 'linear-gradient(135deg, #d4b06a, #c9a96e)' : 'rgba(255,255,255,0.06)',
                            color: formStep >= s ? 'var(--dark)' : 'rgba(255,255,255,0.3)',
                          }}>
                          {s}
                        </div>
                        <span className="font-golos text-xs" style={{ color: formStep >= s ? 'var(--gold)' : 'rgba(255,255,255,0.25)' }}>
                          {s === 1 ? 'О проекте' : 'Контакты'}
                        </span>
                        {s < 2 && (
                          <div className="w-10 h-px mx-1" style={{ background: formStep >= 2 ? 'rgba(201,169,110,0.4)' : 'rgba(255,255,255,0.08)' }} />
                        )}
                      </div>
                    ))}
                  </div>

                  {formStep === 1 ? (
                    <div className="space-y-6">
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                          Тип помещения
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {roomOptions.map(r => (
                            <button key={r} onClick={() => setFormData(p => ({ ...p, room: r }))}
                              className="py-3 px-3 text-left font-golos text-sm transition-all duration-150"
                              style={{
                                borderRadius: '6px',
                                border: `1px solid ${formData.room === r ? 'rgba(201,169,110,0.6)' : 'rgba(255,255,255,0.08)'}`,
                                color: formData.room === r ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
                                background: formData.room === r ? 'rgba(201,169,110,0.07)' : 'rgba(255,255,255,0.02)',
                              }}>
                              {r}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                          Материал
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {materialOptions.map(m => (
                            <button key={m} onClick={() => setFormData(p => ({ ...p, material: p.material === m ? '' : m }))}
                              className="py-2 px-4 font-golos text-sm transition-all duration-150"
                              style={{
                                borderRadius: '20px',
                                border: `1px solid ${formData.material === m ? 'rgba(201,169,110,0.6)' : 'rgba(255,255,255,0.1)'}`,
                                color: formData.material === m ? 'var(--gold)' : 'rgba(255,255,255,0.45)',
                                background: formData.material === m ? 'rgba(201,169,110,0.07)' : 'transparent',
                              }}>
                              {m}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
                          Площадь (м²)
                        </label>
                        <input type="number" placeholder="Например: 50" value={formData.area}
                          onChange={e => setFormData(p => ({ ...p, area: e.target.value }))}
                          className="w-full px-4 py-3.5 font-golos text-white outline-none transition-colors focus:border-gold/40"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px' }}
                        />
                      </div>

                      <button onClick={() => setFormStep(2)}
                        className="w-full py-4 font-oswald font-medium tracking-widest uppercase text-sm transition-all hover:opacity-90 active:scale-[0.99]"
                        style={{ background: 'linear-gradient(135deg, #d4b06a, #c9a96e, #b8923a)', color: 'var(--dark)', borderRadius: '6px' }}>
                        Далее →
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>Ваше имя *</label>
                        <input type="text" placeholder="Александр" value={formData.name}
                          onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                          className="w-full px-4 py-3.5 font-golos text-white outline-none"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px' }}
                        />
                      </div>
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>Телефон *</label>
                        <input type="tel" placeholder="+7 (___) ___-__-__" value={formData.phone}
                          onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                          className="w-full px-4 py-3.5 font-golos text-white outline-none"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px' }}
                        />
                      </div>
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>Комментарий</label>
                        <textarea rows={3} placeholder="Расскажите подробнее о вашем проекте..." value={formData.comment}
                          onChange={e => setFormData(p => ({ ...p, comment: e.target.value }))}
                          className="w-full px-4 py-3.5 font-golos text-white outline-none resize-none"
                          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px' }}
                        />
                      </div>

                      {(formData.room || formData.material || formData.area) && (
                        <div className="py-3 px-4 font-golos text-sm flex items-center gap-2 flex-wrap"
                          style={{ background: 'rgba(201,169,110,0.06)', borderRadius: '6px', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(201,169,110,0.12)' }}>
                          <Icon name="Info" size={12} style={{ color: 'var(--gold)', opacity: 0.6 }} />
                          {formData.room && <span>{formData.room}</span>}
                          {formData.material && <span>· {formData.material}</span>}
                          {formData.area && <span>· {formData.area} м²</span>}
                        </div>
                      )}

                      <a href="https://t.me/Coverstone" target="_blank" rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3.5 font-oswald font-medium tracking-widest uppercase text-sm transition-all hover:opacity-80"
                        style={{ border: '1px solid rgba(201,169,110,0.25)', color: 'var(--gold)', borderRadius: '6px' }}>
                        <Icon name="Send" size={14} style={{ color: 'var(--gold)' }} />
                        Написать в Telegram
                      </a>

                      <div className="flex gap-3">
                        <button onClick={() => setFormStep(1)}
                          className="px-5 py-3.5 font-golos text-sm transition-colors"
                          style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.35)', borderRadius: '6px' }}>
                          ← Назад
                        </button>
                        <button
                          onClick={async () => {
                            if (!formData.name || !formData.phone || sending) return;
                            setSending(true);
                            try {
                              await fetch('https://functions.poehali.dev/1e2c13fb-6e3e-48c1-b2d2-2051e94be181', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(formData),
                              });
                            } finally {
                              setSending(false);
                              setSubmitted(true);
                            }
                          }}
                          className="flex-1 py-3.5 font-oswald font-medium tracking-widest uppercase text-sm transition-all active:scale-[0.99]"
                          style={{
                            background: formData.name && formData.phone ? 'linear-gradient(135deg, #d4b06a, #c9a96e, #b8923a)' : 'rgba(201,169,110,0.2)',
                            color: formData.name && formData.phone ? 'var(--dark)' : 'rgba(255,255,255,0.25)',
                            borderRadius: '6px',
                            cursor: formData.name && formData.phone && !sending ? 'pointer' : 'default',
                          }}>
                          {sending ? 'Отправляем...' : 'Отправить заявку'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        {/* Верхняя строка */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4b06a, #c9a96e)', borderRadius: '4px' }}>
                  <span className="font-oswald font-bold text-sm" style={{ color: 'var(--dark)' }}>КК</span>
                </div>
                <span className="font-oswald font-semibold text-white tracking-wider text-lg">КАМЕННЫЙ КОВЁР</span>
              </div>
              <p className="font-golos text-sm max-w-xs" style={{ color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
                Натуральный камень для интерьеров и экстерьеров. Краснодар и Краснодарский край.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-golos text-xs uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.2)' }}>Навигация</p>
              {navLinks.map(l => (
                <button key={l.id} onClick={() => scrollTo(l.id)}
                  className="text-left font-golos text-sm transition-colors hover:text-white/70"
                  style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {l.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-golos text-xs uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.2)' }}>Контакты</p>
              <a href="tel:+79648477501" className="font-golos text-sm transition-colors hover:text-white/60" style={{ color: 'rgba(255,255,255,0.3)' }}>+7 (964) 847-75-01</a>
              <a href="tel:+79372251759" className="font-golos text-sm transition-colors hover:text-white/60" style={{ color: 'rgba(255,255,255,0.3)' }}>+7 (937) 225-17-59</a>
              <a href="https://t.me/Coverstone" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 font-golos text-sm transition-colors hover:text-white/60" style={{ color: 'rgba(255,255,255,0.3)' }}>
                <Icon name="Send" size={12} />
                Telegram
              </a>
              <a href="https://www.tiktok.com/@coverstoneng" target="_blank" rel="noopener noreferrer"
                className="font-golos text-sm transition-colors hover:text-white/60" style={{ color: 'rgba(255,255,255,0.3)' }}>
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap gap-3">
            <p className="font-golos text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
              © 2024 Каменный Ковёр. Все права защищены.
            </p>
            <p className="font-golos text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
              Краснодар · ул. Красная, 124
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
