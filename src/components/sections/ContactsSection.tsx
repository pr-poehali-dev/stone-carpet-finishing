import { useState } from 'react';
import Icon from '@/components/ui/icon';

const materialOptions = ['Мрамор', 'Гранит', 'Известняк', 'Кварцит', 'Базальт', 'Оникс'];
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

  return (
    <>
      {/* ── CONTACTS & CALCULATOR ── */}
      <section id="contacts" className="section-pad" style={{ background: 'var(--light)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="reveal">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px" style={{ background: 'var(--terra)' }} />
                <span className="text-xs font-golos tracking-[0.3em] uppercase" style={{ color: 'var(--terra)' }}>Связаться с нами</span>
              </div>
              <h2 className="font-oswald font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--dark)' }}>
                РАСЧЁТ<br />ПРОЕКТА
              </h2>
              <p className="font-golos leading-relaxed mb-10 max-w-md" style={{ color: 'rgba(26,22,18,0.55)' }}>
                Оставьте заявку — наш специалист свяжется с вами в течение 30 минут,
                проконсультирует по материалам и подготовит детальный расчёт стоимости.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: 'Phone', label: 'Телефон', value: '+7 (964) 847-75-01' },
                  { icon: 'Mail', label: 'Email', value: 'stroyvsaratov@yandex.ru' },
                  { icon: 'MapPin', label: 'Офис', value: 'Краснодар' },
                  { icon: 'Clock', label: 'Режим работы', value: 'Пн–Сб, 9:00–19:00' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                      style={{ background: 'var(--sand)', borderRadius: '4px' }}>
                      <Icon name={c.icon} fallback="Phone" size={16} style={{ color: 'var(--terra)' }} />
                    </div>
                    <div>
                      <p className="font-golos text-xs uppercase tracking-wider mb-0.5" style={{ color: 'rgba(26,22,18,0.4)' }}>{c.label}</p>
                      <p className="font-golos font-medium" style={{ color: 'var(--dark)' }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center"
                  style={{ background: 'var(--dark)', borderRadius: '8px', padding: '60px 40px' }}>
                  <div className="w-16 h-16 flex items-center justify-center mb-6"
                    style={{ background: 'rgba(201,169,110,0.1)', borderRadius: '50%' }}>
                    <Icon name="CheckCircle" size={32} style={{ color: 'var(--gold)' }} />
                  </div>
                  <h3 className="font-oswald font-bold text-white text-2xl mb-3">ЗАЯВКА ПРИНЯТА</h3>
                  <p className="font-golos" style={{ color: 'rgba(255,255,255,0.55)' }}>Наш специалист свяжется с вами в течение 30 минут</p>
                </div>
              ) : (
                <div style={{ background: 'var(--dark)', borderRadius: '8px', padding: '40px' }}>
                  <div className="flex items-center gap-3 mb-8">
                    {[1, 2].map(s => (
                      <div key={s} className="flex items-center gap-2">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full font-oswald text-xs font-bold transition-all duration-300"
                          style={{
                            background: formStep >= s ? 'var(--gold)' : 'rgba(255,255,255,0.08)',
                            color: formStep >= s ? 'var(--dark)' : 'rgba(255,255,255,0.35)',
                          }}>
                          {s}
                        </div>
                        <span className="font-golos text-xs" style={{ color: formStep >= s ? 'var(--gold)' : 'rgba(255,255,255,0.3)' }}>
                          {s === 1 ? 'О проекте' : 'Контакты'}
                        </span>
                        {s < 2 && <div className="w-8 h-px mx-1" style={{ background: 'rgba(255,255,255,0.1)' }} />}
                      </div>
                    ))}
                  </div>

                  {formStep === 1 ? (
                    <div className="space-y-5">
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Тип помещения
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {roomOptions.map(r => (
                            <button key={r} onClick={() => setFormData(p => ({ ...p, room: r }))}
                              className="py-2.5 px-3 text-left font-golos text-sm transition-all duration-150"
                              style={{
                                borderRadius: '4px',
                                border: `1px solid ${formData.room === r ? 'var(--gold)' : 'rgba(255,255,255,0.1)'}`,
                                color: formData.room === r ? 'var(--gold)' : 'rgba(255,255,255,0.55)',
                                background: formData.room === r ? 'rgba(201,169,110,0.08)' : 'transparent',
                              }}>
                              {r}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Материал
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {materialOptions.map(m => (
                            <button key={m} onClick={() => setFormData(p => ({ ...p, material: p.material === m ? '' : m }))}
                              className="py-1.5 px-3 font-golos text-sm transition-all duration-150"
                              style={{
                                borderRadius: '20px',
                                border: `1px solid ${formData.material === m ? 'var(--gold)' : 'rgba(255,255,255,0.15)'}`,
                                color: formData.material === m ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
                                background: formData.material === m ? 'rgba(201,169,110,0.08)' : 'transparent',
                              }}>
                              {m}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          Площадь (м²)
                        </label>
                        <input type="number" placeholder="Например: 50" value={formData.area}
                          onChange={e => setFormData(p => ({ ...p, area: e.target.value }))}
                          className="w-full px-4 py-3 font-golos text-white outline-none transition-colors"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}
                        />
                      </div>

                      <button onClick={() => setFormStep(2)}
                        className="w-full py-3.5 font-oswald font-medium tracking-widest uppercase text-sm transition-all hover:opacity-90 active:scale-95"
                        style={{ background: 'var(--gold)', color: 'var(--dark)', borderRadius: '4px' }}>
                        Далее →
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Ваше имя *</label>
                        <input type="text" placeholder="Александр" value={formData.name}
                          onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                          className="w-full px-4 py-3 font-golos text-white outline-none"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}
                        />
                      </div>
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Телефон *</label>
                        <input type="tel" placeholder="+7 (___) ___-__-__" value={formData.phone}
                          onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                          className="w-full px-4 py-3 font-golos text-white outline-none"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}
                        />
                      </div>
                      <div>
                        <label className="font-golos text-xs uppercase tracking-wider block mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Комментарий</label>
                        <textarea rows={3} placeholder="Расскажите подробнее о вашем проекте..." value={formData.comment}
                          onChange={e => setFormData(p => ({ ...p, comment: e.target.value }))}
                          className="w-full px-4 py-3 font-golos text-white outline-none resize-none"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}
                        />
                      </div>

                      {(formData.room || formData.material || formData.area) && (
                        <div className="py-3 px-4 font-golos text-sm" style={{ background: 'rgba(201,169,110,0.07)', borderRadius: '4px', color: 'rgba(255,255,255,0.45)' }}>
                          {formData.room && <span>{formData.room}</span>}
                          {formData.material && <span> · {formData.material}</span>}
                          {formData.area && <span> · {formData.area} м²</span>}
                        </div>
                      )}

                      <div className="flex gap-3">
                        <button onClick={() => setFormStep(1)}
                          className="px-5 py-3.5 font-golos text-sm transition-colors"
                          style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.45)', borderRadius: '4px' }}>
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
                          className="flex-1 py-3.5 font-oswald font-medium tracking-widest uppercase text-sm transition-all active:scale-95"
                          style={{
                            background: formData.name && formData.phone ? 'var(--gold)' : 'rgba(201,169,110,0.25)',
                            color: 'var(--dark)',
                            borderRadius: '4px',
                            cursor: formData.name && formData.phone && !sending ? 'pointer' : 'default'
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

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6" style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 flex items-center justify-center" style={{ background: 'var(--gold)', borderRadius: '2px' }}>
              <span className="font-oswald font-bold text-xs" style={{ color: 'var(--dark)' }}>КК</span>
            </div>
            <span className="font-oswald font-semibold text-white tracking-wider">КАМЕННЫЙ КОВЁР</span>
          </div>

          <div className="flex gap-8">
            {navLinks.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}
                className="font-golos text-sm transition-colors"
                style={{ color: 'rgba(255,255,255,0.35)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
                {l.label}
              </button>
            ))}
          </div>

          <p className="font-golos text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © 2024 Каменный Ковёр. Все права защищены.
          </p>
        </div>
      </footer>
    </>
  );
}
