'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Icon } from '@/components/Icon';
import {
  PROJECTS, ICONS, AI_STACK, TOOLS, EXPERIENCE, EDUCATION,
  LEARNING, SERVICES, TESTIMONIALS, CONTACT,
} from '@/data/portfolio';

type Section = 'home' | 'work' | 'about' | 'contact';

export default function WebPortfolio() {
  const [active, setActive] = useState<Section>('home');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState('');
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ioRef = useRef<IntersectionObserver | null>(null);

  const productWork = PROJECTS.filter(p => p.category === 'product');
  const aiWork = PROJECTS.filter(p => p.category === 'ai');
  const sel = PROJECTS.find(p => p.id === selectedId) ?? null;

  useEffect(() => {
    const ids: Section[] = ['home', 'work', 'about', 'contact'];
    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    if (ioRef.current) ioRef.current.disconnect();
    ioRef.current = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id as Section); });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    els.forEach(el => ioRef.current!.observe(el));
    return () => { if (ioRef.current) ioRef.current.disconnect(); };
  }, []);

  const copyEmail = useCallback(() => {
    try { navigator.clipboard.writeText(CONTACT.email); } catch {}
    setCopied(true);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopied(false), 1900);
  }, []);

  function sendMessage() {
    if (!name.trim() || !message.trim()) return;
    setSent(true);
    setSentName(name.trim().split(' ')[0]);
  }

  function resetForm() { setSent(false); setName(''); setEmail(''); setMessage(''); }

  function closeAndContact() {
    setSelectedId(null);
    setTimeout(() => { window.location.hash = '#contact'; }, 60);
  }

  const brand = 'hsl(var(--brand))';
  const sidebarFg = 'hsl(var(--sidebar-foreground))';
  const navColor = (id: Section) => active === id ? brand : sidebarFg;
  const navBg = (id: Section) => active === id ? 'hsl(var(--brand) / .08)' : 'transparent';

  const teaser = (intro: string) => intro.split('. ')[0] + '.';

  return (
    <>
      {/* ===== Desktop sidebar ===== */}
      <aside className="axw-side">
        <a href="#home" className="axw-navlink" style={{ padding: 0, marginBottom: 30, gap: 11 }}>
          <span className="wa-avatar wa-avatar--md wa-avatar--brand">
            <Icon paths={ICONS.send} size={20} />
          </span>
          <span>
            <span style={{ display: 'block', fontSize: 15, fontWeight: 700, color: 'hsl(var(--foreground))', letterSpacing: '-0.01em' }}>Alexander</span>
            <span style={{ display: 'block', fontSize: 11, color: 'hsl(var(--muted-foreground))' }}>AI Builder · Consultant</span>
          </span>
        </a>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {([
            ['home',    'Home',    ICONS.send],
            ['work',    'Work',    ["M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"] as import('@/data/portfolio').PathData[]],
            ['about',   'About',   ["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", [12, 7, 4] as [number,number,number]] as import('@/data/portfolio').PathData[]],
            ['contact', 'Contact', ["M2 4h20v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z", "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"] as import('@/data/portfolio').PathData[]],
          ]).map(([id, label, paths]) => (
            <a
              key={id as string}
              className="axw-navlink"
              href={`#${id}`}
              style={{ color: navColor(id as Section), background: navBg(id as Section) }}
            >
              <Icon paths={paths as import('@/data/portfolio').PathData[]} size={18} />
              {label}
            </a>
          ))}
        </nav>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span className="wa-badge wa-badge--success" style={{ gap: 6, alignSelf: 'flex-start' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'hsl(var(--status-success))', display: 'inline-block' }} />
            Available for projects
          </span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="wa-btn wa-btn--outline wa-btn--sm" onClick={copyEmail} style={{ flex: 1, gap: 6 }}>
              <Icon paths={["M9 9h13v13a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V9Z", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"]} size={15} />
              Email
            </button>
            <a className="wa-btn wa-btn--outline wa-btn--sm" href={CONTACT.linkedin} target="_blank" rel="noopener" style={{ flex: 1, gap: 6, textDecoration: 'none' }}>
              <Icon paths={["M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", "M2 9h4v12H2z", [4, 4, 2]]} size={15} />
              LinkedIn
            </a>
          </div>
        </div>
      </aside>

      <div className="axw-main">
        {/* ===== Tablet / mobile top nav ===== */}
        <header className="axw-top" style={{ position: 'sticky', top: 0, zIndex: 30, height: 64, alignItems: 'center', justifyContent: 'space-between', padding: '0 30px', background: 'hsl(var(--background) / .85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid hsl(var(--border))' }}>
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <span className="wa-avatar wa-avatar--md wa-avatar--brand">
              <Icon paths={ICONS.send} size={19} />
            </span>
            <span style={{ fontSize: 15, fontWeight: 700, color: 'hsl(var(--foreground))', letterSpacing: '-0.01em' }}>Alexander</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
            <nav className="axw-tnav" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <a className="axw-toplink" href="#work">Work</a>
              <a className="axw-toplink" href="#about">About</a>
              <a className="axw-toplink" href="#contact">Contact</a>
            </nav>
            <a className="wa-btn wa-btn--brand wa-btn--sm axw-tcta" href="#contact" style={{ textDecoration: 'none' }}>Let&apos;s talk</a>
          </div>
        </header>

        {/* ===== HERO ===== */}
        <section id="home" style={{ scrollMarginTop: 80, padding: '72px 0 56px' }}>
          <div className="axw-wrap">
            <div className="axw-hero">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 18 }}>
                  <span className="wa-badge" style={{ background: 'hsl(var(--brand) / .1)', color: 'hsl(var(--brand))', gap: 6, fontWeight: 600 }}>
                    <Icon paths={ICONS.send} size={13} />
                    AI Builder · Technology Consultant
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'hsl(var(--muted-foreground))' }}>
                    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx={12} cy={10} r={3} /></svg>
                    Jakarta, Indonesia
                  </span>
                </div>
                <h1 className="axw-h1" style={{ fontWeight: 700, margin: '0 0 22px' }}>
                  Hello! I&apos;m Alexander <span style={{ color: 'hsl(var(--brand))' }}>👋</span>
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: 'hsl(var(--muted-foreground))', margin: '0 0 18px', maxWidth: 540 }}>
                  I&apos;m an <strong style={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}>AI Builder</strong> and Technology Consultant with <strong style={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}>13+ years</strong> of experience. I design and ship automation, AI-powered tools, and full web products — with a proven track record of building solutions that <strong style={{ color: 'hsl(var(--foreground))', fontWeight: 600 }}>improve productivity</strong> and help businesses run better.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a className="wa-btn wa-btn--brand wa-btn--xl" href="#work" style={{ textDecoration: 'none' }}>
                    <Icon paths={["M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"]} size={18} />
                    View my work
                  </a>
                  <button className="wa-btn wa-btn--outline wa-btn--xl" onClick={copyEmail}>
                    <Icon paths={["M2 4h20v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z", "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"]} size={17} />
                    Copy email
                  </button>
                </div>
              </div>

              <div style={{ background: 'hsl(var(--foreground))', borderRadius: 24, padding: 30, color: 'hsl(var(--background))' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
                  <span className="wa-avatar" style={{ width: 60, height: 60, borderRadius: 20, background: 'hsl(var(--brand))', color: '#fff' }}>
                    <Icon paths={ICONS.send} size={26} />
                  </span>
                  <div>
                    <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em' }}>Alexander Horison</div>
                    <div style={{ fontSize: 13, color: 'hsl(0 0% 65%)' }}>AI Builder · Solution Architect</div>
                  </div>
                </div>
                <div style={{ height: 1, background: 'hsl(0 0% 100% / .12)', marginBottom: 20 }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 22 }}>
                  <div><div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1 }}>13+</div><div style={{ fontSize: 12, color: 'hsl(0 0% 62%)', marginTop: 4 }}>Years experience</div></div>
                  <div><div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1 }}>20+</div><div style={{ fontSize: 12, color: 'hsl(0 0% 62%)', marginTop: 4 }}>Projects shipped</div></div>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <a className="wa-btn wa-btn--brand wa-btn--md" href={CONTACT.whatsappLink} target="_blank" rel="noopener" style={{ flex: 1, textDecoration: 'none' }}>
                    <Icon paths={["M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"]} size={16} />
                    WhatsApp
                  </a>
                  <a className="wa-btn wa-btn--md" href="#contact" style={{ flex: 1, textDecoration: 'none', background: 'hsl(0 0% 100% / .12)', color: '#fff' }}>Contact</a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="axw-stats" style={{ marginTop: 48 }}>
              {[
                { icon: ICONS.calendar, iconBg: 'hsl(var(--brand) / .1)', iconColor: 'hsl(var(--brand))', value: '13+', label: 'Years of experience', sub: 'Building systems since 2011' },
                { icon: ["M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"], iconBg: 'hsl(var(--muted))', iconColor: 'hsl(var(--muted-foreground))', value: '20+', label: 'Projects shipped', sub: 'MVPs to enterprise platforms' },
                { icon: ICONS.send, iconBg: 'hsl(var(--muted))', iconColor: 'hsl(var(--muted-foreground))', value: '8', label: 'AI builds shipped', sub: 'Automation & intelligence tools' },
                { icon: ICONS.trending, iconBg: 'hsl(var(--muted))', iconColor: 'hsl(var(--muted-foreground))', value: '50%+', label: 'Avg. time saved', sub: 'Measured across client projects' },
              ].map((stat, i) => (
                <div key={i} className="wa-card" style={{ padding: 22, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: stat.iconBg, color: stat.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, flexShrink: 0 }}>
                    <Icon paths={stat.icon as import('@/data/portfolio').PathData[]} size={17} />
                  </div>
                  <p style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, margin: '0 0 7px' }}>{stat.value}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, margin: '0 0 3px' }}>{stat.label}</p>
                  <p style={{ fontSize: 11, color: 'hsl(var(--muted-foreground))', margin: 0 }}>{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WORK ===== */}
        <section id="work" style={{ scrollMarginTop: 80, padding: '48px 0', background: 'hsl(var(--muted) / .4)', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))' }}>
          <div className="axw-wrap">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'hsl(var(--brand))', marginBottom: 8 }}>Selected Work</div>
            <h2 style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.025em', margin: '0 0 8px' }}>Apps, products &amp; AI automation</h2>
            <p style={{ fontSize: 14, color: 'hsl(var(--muted-foreground))', margin: '0 0 30px' }}>{productWork.length} web &amp; app products · {aiWork.length} AI &amp; automation tools · click any card for the full case study.</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 16 }}>
              <Icon paths={["M2 7h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Z", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"]} size={15} className="text-muted-foreground" style={{ color: 'hsl(var(--muted-foreground))' }} />
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))' }}>Apps &amp; Web Products</span>
            </div>
            <div className="axw-work" style={{ marginBottom: 44 }}>
              {productWork.map(p => (
                <button key={p.id} className="axw-card" onClick={() => setSelectedId(p.id)} style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                    <span className="wa-avatar" style={{ width: 48, height: 48, borderRadius: 14, background: 'hsl(var(--brand) / .1)', color: 'hsl(var(--brand))' }}>
                      <Icon paths={ICONS[p.iconKey]} size={22} />
                    </span>
                    {p.live && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600, color: 'hsl(142 71% 32%)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'hsl(var(--status-success))' }} />Live
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: 'hsl(var(--muted-foreground))', marginBottom: 14 }}>{p.short} · {p.client}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.55, color: 'hsl(var(--muted-foreground))', margin: '0 0 16px', flex: 1 }}>{teaser(p.intro)}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="wa-badge wa-badge--secondary">{p.period}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: 'hsl(var(--brand))' }}>
                      Case study
                      <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ flex: 1, height: 1, background: 'hsl(var(--border))' }} />
              <span className="wa-badge" style={{ background: 'hsl(var(--brand) / .1)', color: 'hsl(var(--brand))', gap: 7, fontWeight: 600, fontSize: 12, padding: '8px 14px' }}>
                <Icon paths={ICONS.send} size={13} />
                AI &amp; Automation
              </span>
              <div style={{ flex: 1, height: 1, background: 'hsl(var(--border))' }} />
            </div>
            <p style={{ fontSize: 14, color: 'hsl(var(--muted-foreground))', margin: '0 0 20px', textAlign: 'center' }}>Productivity tooling built with AI — designed to remove manual, repetitive work.</p>
            <div className="axw-work">
              {aiWork.map(p => (
                <button key={p.id} className="axw-card" onClick={() => setSelectedId(p.id)} style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 0, borderColor: 'hsl(var(--brand) / .25)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                    <span className="wa-avatar" style={{ width: 48, height: 48, borderRadius: 14, background: 'hsl(var(--brand) / .1)', color: 'hsl(var(--brand))' }}>
                      <Icon paths={ICONS[p.iconKey]} size={22} />
                    </span>
                    <span className="wa-badge" style={{ background: 'hsl(var(--brand) / .1)', color: 'hsl(var(--brand))', fontSize: 10, gap: 5 }}>
                      <Icon paths={ICONS.send} size={11} />AI
                    </span>
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: 'hsl(var(--muted-foreground))', marginBottom: 14 }}>{p.short} · {p.client}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.55, color: 'hsl(var(--muted-foreground))', margin: '0 0 16px', flex: 1 }}>{teaser(p.intro)}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span className="wa-badge wa-badge--secondary">{p.period}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: 'hsl(var(--brand))' }}>
                      Case study
                      <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ===== AI STACK ===== */}
        <section id="ai-stack" style={{ padding: '56px 0' }}>
          <div className="axw-wrap">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'hsl(var(--brand))', marginBottom: 8 }}>AI Tech Stack</div>
            <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 10px' }}>Technologies I build with</h2>
            <p style={{ fontSize: 14, color: 'hsl(var(--muted-foreground))', margin: '0 0 28px' }}>The AI tools and platforms powering my automation, product, and creative work.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(155px,1fr))', gap: 14 }}>
              {AI_STACK.map((t, i) => (
                <div key={i} className="wa-card" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: t.color, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '-0.02em', color: t.textColor }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em', marginBottom: 3 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: 'hsl(var(--muted-foreground))' }}>{t.tagline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section style={{ padding: '56px 0 20px' }}>
          <div className="axw-wrap">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'hsl(var(--brand))', marginBottom: 8 }}>Services</div>
            <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 26px' }}>How I can help</h2>
            <div className="axw-svc">
              {SERVICES.map((s, i) => (
                <div key={i} className="wa-card wa-card--pad" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <span className="wa-avatar" style={{ width: 44, height: 44, borderRadius: 13, background: s.free ? 'hsl(var(--muted))' : 'hsl(var(--brand) / .1)', color: s.free ? 'hsl(var(--muted-foreground))' : 'hsl(var(--brand))' }}>
                    <Icon paths={ICONS[s.iconKey]} size={20} />
                  </span>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em' }}>{s.name}</div>
                    <div style={{ fontSize: 13, color: 'hsl(var(--muted-foreground))', marginTop: 3 }}>{s.desc}</div>
                  </div>
                  <span className="wa-badge" style={{ alignSelf: 'flex-start', marginTop: 'auto', ...(s.free ? { background: 'hsl(var(--status-success) / .16)', color: 'hsl(142 71% 30%)' } : { background: 'hsl(var(--secondary))', color: 'hsl(var(--foreground))' }) }}>{s.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section style={{ padding: '36px 0 56px' }}>
          <div className="axw-wrap">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'hsl(var(--brand))', marginBottom: 8 }}>What clients say</div>
            <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 26px' }}>Trusted by the people I work with</h2>
            <div className="axw-test">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="wa-card wa-card--pad" style={{ padding: 28 }}>
                  <p style={{ fontSize: 17, lineHeight: 1.5, letterSpacing: '-0.01em', margin: '0 0 20px' }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div className="wa-avatar wa-avatar--md" style={{ background: 'hsl(var(--brand) / .1)', color: 'hsl(var(--brand))', fontWeight: 600 }}>{t.initials}</div>
                    <div><div style={{ fontSize: 14, fontWeight: 600 }}>{t.by}</div><div style={{ fontSize: 12, color: 'hsl(var(--muted-foreground))' }}>{t.role}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" style={{ scrollMarginTop: 80, padding: '56px 0', background: 'hsl(var(--muted) / .4)', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))' }}>
          <div className="axw-wrap">
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'hsl(var(--brand))', marginBottom: 8 }}>About</div>
            <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 18px' }}>13 years turning operations into products</h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, maxWidth: 760, margin: '0 0 8px' }}>Hey, I&apos;m Alexander — a Web Developer, Project Manager, and Systems Designer with over 10 years of experience. I&apos;m passionate about building smart digital tools that help businesses grow and run better.</p>
            <p style={{ fontSize: 16, lineHeight: 1.65, maxWidth: 760, color: 'hsl(var(--muted-foreground))', margin: '0 0 30px' }}>I create apps and websites that streamline operations, improve user experience, and showcase brands in the best light. At the heart of it, I help companies evolve digitally and work more efficiently.</p>

            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))', marginBottom: 12 }}>Tools I work with</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9, marginBottom: 36 }}>
              {TOOLS.map((t, i) => (
                <span key={i} className="wa-badge wa-badge--outline" style={{ fontWeight: 500, padding: '7px 14px', background: 'hsl(var(--background))' }}>{t}</span>
              ))}
            </div>

            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))', marginBottom: 14 }}>Experience</div>
            <div className="axw-exp" style={{ marginBottom: 30 }}>
              {EXPERIENCE.map((e, i) => (
                <div key={i} className="wa-card wa-card--pad" style={{ padding: '20px 22px', background: 'hsl(var(--background))' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 6 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.01em' }}>{e.title}</div>
                    {e.current && <span className="wa-badge wa-badge--success" style={{ fontSize: 10 }}>Current</span>}
                  </div>
                  <div style={{ fontSize: 13, color: 'hsl(var(--brand))', fontWeight: 500, marginBottom: 8 }}>{e.company} · {e.period}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.55, color: 'hsl(var(--muted-foreground))', margin: 0 }}>{e.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))', marginBottom: 12 }}>Education</div>
            <div className="wa-card wa-card--pad" style={{ display: 'flex', alignItems: 'center', gap: 14, maxWidth: 480, background: 'hsl(var(--background))', padding: '16px 18px' }}>
              <span className="wa-avatar wa-avatar--md" style={{ background: 'hsl(var(--brand) / .1)', color: 'hsl(var(--brand))' }}>
                <Icon paths={ICONS.cap} size={20} />
              </span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{EDUCATION.school}</div>
                <div style={{ fontSize: 13, color: 'hsl(var(--muted-foreground))' }}>{EDUCATION.degree}</div>
              </div>
            </div>

            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))', margin: '30px 0 12px' }}>Courses &amp; Events</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 14 }}>
              {LEARNING.map((l, i) => (
                <div key={i} className="wa-card wa-card--pad" style={{ display: 'flex', alignItems: 'center', gap: 13, background: 'hsl(var(--background))', padding: '16px 18px' }}>
                  <span className="wa-avatar wa-avatar--md" style={{ background: 'hsl(var(--brand) / .1)', color: 'hsl(var(--brand))', flexShrink: 0 }}>
                    <Icon paths={ICONS[l.iconKey]} size={18} />
                  </span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' }}>{l.name}</div>
                    <div style={{ fontSize: 12, color: 'hsl(var(--muted-foreground))', marginTop: 1 }}>{l.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contact" style={{ scrollMarginTop: 80, padding: '64px 0' }}>
          <div className="axw-wrap">
            <div className="axw-contact">
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'hsl(var(--brand))', marginBottom: 8 }}>Contact</div>
                <h2 style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.025em', margin: '0 0 12px' }}>Got questions?</h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: 'hsl(var(--muted-foreground))', margin: '0 0 26px', maxWidth: 420 }}>I&apos;m always excited to collaborate on innovative and exciting projects! Reach out and let&apos;s build something great.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 440 }}>
                  <button className="wa-row wa-row--button" onClick={copyEmail} style={{ cursor: 'pointer' }}>
                    <div className="wa-row__lead" style={{ background: 'hsl(var(--brand) / .1)', color: 'hsl(var(--brand))' }}>
                      <Icon paths={["M2 4h20v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z", "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"]} size={18} />
                    </div>
                    <div className="wa-row__body"><p className="wa-row__title">E-mail</p><p className="wa-row__meta">{CONTACT.email}</p></div>
                    <span className="wa-badge wa-badge--secondary" style={{ fontSize: 11 }}>Copy</span>
                  </button>
                  <a className="wa-row wa-row--button" href={CONTACT.whatsappLink} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                    <div className="wa-row__lead" style={{ background: 'hsl(142 71% 45% / .12)', color: 'hsl(142 71% 34%)' }}>
                      <Icon paths={["M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"]} size={18} />
                    </div>
                    <div className="wa-row__body"><p className="wa-row__title">WhatsApp</p><p className="wa-row__meta">{CONTACT.whatsapp}</p></div>
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </a>
                  <a className="wa-row wa-row--button" href={CONTACT.linkedin} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                    <div className="wa-row__lead" style={{ background: 'hsl(217 91% 60% / .12)', color: 'hsl(217 70% 45%)' }}>
                      <Icon paths={["M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", "M2 9h4v12H2z", [4, 4, 2]]} size={18} />
                    </div>
                    <div className="wa-row__body"><p className="wa-row__title">LinkedIn</p><p className="wa-row__meta">/in/alexander-horison</p></div>
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                  </a>
                </div>
              </div>

              <div className="wa-card wa-card--pad" style={{ padding: 28 }}>
                {sent ? (
                  <div className="wa-status wa-status--success">
                    <div className="wa-status__head">
                      <span className="wa-status__icon">
                        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                      </span>
                      <span className="wa-status__title">Message sent</span>
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0 }}>Thanks {sentName} — I&apos;ll get back to you soon. For anything urgent, WhatsApp is fastest.</p>
                    <button className="wa-btn wa-btn--outline wa-btn--md wa-btn--block" onClick={resetForm}>Send another message</button>
                  </div>
                ) : (
                  <>
                    <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 18, letterSpacing: '-0.01em' }}>Send a message</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div className="axw-form2">
                        <div>
                          <label className="wa-label" htmlFor="axw-name">Name</label>
                          <input id="axw-name" className="wa-field wa-input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} style={{ marginTop: 7 }} />
                        </div>
                        <div>
                          <label className="wa-label" htmlFor="axw-email">Email</label>
                          <input id="axw-email" className="wa-field wa-input" type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} style={{ marginTop: 7 }} />
                        </div>
                      </div>
                      <div>
                        <label className="wa-label" htmlFor="axw-msg">Message</label>
                        <textarea id="axw-msg" className="wa-field wa-textarea" placeholder="Tell me about your project..." value={message} onChange={e => setMessage(e.target.value)} style={{ marginTop: 7, minHeight: 140 }} />
                      </div>
                      <button className="wa-btn wa-btn--brand wa-btn--xl wa-btn--block" onClick={sendMessage}>
                        <Icon paths={ICONS.send} size={18} />
                        Send message
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer style={{ borderTop: '1px solid hsl(var(--border))', padding: '30px 0' }}>
          <div className="axw-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span className="wa-avatar wa-avatar--sm wa-avatar--brand">
                <Icon paths={ICONS.send} size={15} />
              </span>
              <span style={{ fontSize: 13, color: 'hsl(var(--muted-foreground))' }}>© 2024 Alexander Horison · Technology Consultant</span>
            </div>
            <div style={{ display: 'flex', gap: 18, fontSize: 13 }}>
              <a className="axw-toplink" href="#work">Work</a>
              <a className="axw-toplink" href="#about">About</a>
              <a className="axw-toplink" href="#contact">Contact</a>
            </div>
          </div>
        </footer>
      </div>

      {/* ===== PROJECT MODAL ===== */}
      {sel && (
        <div
          onClick={() => setSelectedId(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 20px', overflow: 'auto', animation: 'axwFade .2s ease' }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: 'hsl(var(--background))', borderRadius: 22, maxWidth: 680, width: '100%', margin: 'auto', position: 'relative', animation: 'axwPop .28s cubic-bezier(.4,0,.2,1) both', overflow: 'hidden' }}
          >
            <button className="wa-btn wa-btn--icon" onClick={() => setSelectedId(null)} aria-label="Close" style={{ position: 'absolute', top: 16, right: 16, zIndex: 2, background: 'hsl(var(--muted))' }}>
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
            <div style={{ padding: '34px 36px 36px' }}>
              <span className="wa-avatar" style={{ width: 60, height: 60, borderRadius: 18, background: 'hsl(var(--brand) / .1)', color: 'hsl(var(--brand))', marginBottom: 18 }}>
                <Icon paths={ICONS[sel.iconKey]} size={26} />
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 8 }}>
                <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', margin: 0 }}>{sel.name}</h2>
                {sel.live && <span className="wa-badge wa-badge--success" style={{ fontSize: 11 }}>Live</span>}
              </div>
              <p style={{ fontSize: 14, color: 'hsl(var(--muted-foreground))', margin: '0 0 22px' }}>{sel.short}</p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
                <div style={{ flex: 1, minWidth: 120, background: 'hsl(var(--muted))', borderRadius: 12, padding: '12px 14px' }}><div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--muted-foreground))', marginBottom: 3 }}>Client</div><div style={{ fontSize: 14, fontWeight: 600 }}>{sel.client}</div></div>
                <div style={{ flex: 1, minWidth: 90, background: 'hsl(var(--muted))', borderRadius: 12, padding: '12px 14px' }}><div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--muted-foreground))', marginBottom: 3 }}>Year</div><div style={{ fontSize: 14, fontWeight: 600 }}>{sel.period}</div></div>
                <div style={{ flex: 1.4, minWidth: 170, background: 'hsl(var(--muted))', borderRadius: 12, padding: '12px 14px' }}><div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--muted-foreground))', marginBottom: 3 }}>Service</div><div style={{ fontSize: 13, fontWeight: 600 }}>Business Analyst · Consult · Build</div></div>
              </div>

              <p style={{ fontSize: 15, lineHeight: 1.65, margin: '0 0 26px' }}>{sel.intro}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ width: 24, height: 24, borderRadius: 7, background: 'hsl(var(--status-failed) / .12)', color: 'hsl(var(--status-failed))', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                </span>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>The Challenge</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
                {sel.challenge.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.55, color: 'hsl(var(--muted-foreground))' }}>
                    <span style={{ flexShrink: 0, marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: 'hsl(var(--status-failed))' }} />
                    <span>{c}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ width: 24, height: 24, borderRadius: 7, background: 'hsl(var(--brand) / .12)', color: 'hsl(var(--brand))', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon paths={ICONS.send} size={14} />
                </span>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>The Solution</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 24 }}>
                {sel.solution.map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14, lineHeight: 1.55 }}>
                    <span style={{ color: 'hsl(var(--brand))', flexShrink: 0, marginTop: 2 }}>
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ width: 24, height: 24, borderRadius: 7, background: 'hsl(var(--status-success) / .14)', color: 'hsl(142 71% 34%)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon paths={ICONS.trending} size={14} />
                </span>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>The Results</h3>
              </div>
              <div className="axw-mres">
                {sel.results.map((r, i) => (
                  <div key={i} className="wa-card" style={{ padding: 14, display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                    <span style={{ color: 'hsl(142 71% 40%)', flexShrink: 0, marginTop: 1 }}>
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>
                    </span>
                    <span style={{ fontSize: 13, lineHeight: 1.5 }}>{r}</span>
                  </div>
                ))}
              </div>

              {sel.quote && (
                <div className="wa-card wa-card--pad" style={{ background: 'hsl(var(--brand) / .05)', border: '2px solid hsl(var(--brand) / .2)', marginBottom: 24 }}>
                  <p style={{ fontSize: 15, lineHeight: 1.55, margin: '0 0 12px', fontStyle: 'italic' }}>&ldquo;{sel.quote}&rdquo;</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className="wa-avatar wa-avatar--sm" style={{ background: 'hsl(var(--brand) / .12)', color: 'hsl(var(--brand))', fontWeight: 600 }}>{sel.quoteInitials}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{sel.quoteBy}</div>
                      <div style={{ fontSize: 11, color: 'hsl(var(--muted-foreground))' }}>{sel.quoteRole}</div>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ background: 'hsl(var(--muted))', borderRadius: 14, padding: 18, marginBottom: 22 }}>
                <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--muted-foreground))', marginBottom: 6 }}>In conclusion</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{sel.conclusion}</p>
              </div>

              <button className="wa-btn wa-btn--primary wa-btn--lg wa-btn--block" onClick={closeAndContact}>
                <Icon paths={ICONS.send} size={16} />
                Start a project like this
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== TOAST ===== */}
      {copied && (
        <div style={{ position: 'fixed', left: '50%', bottom: 32, zIndex: 70, background: 'hsl(var(--foreground))', color: 'hsl(var(--background))', padding: '11px 20px', borderRadius: 9999, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 9, boxShadow: '0 14px 36px rgba(0,0,0,.3)', animation: 'axwToast .22s ease', whiteSpace: 'nowrap' }}>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          Email copied to clipboard
        </div>
      )}
    </>
  );
}
