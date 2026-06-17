'use client';

import { useState, useRef, useCallback } from 'react';
import { Icon } from '@/components/Icon';
import {
  PROJECTS, ICONS, AI_STACK, TOOLS, EXPERIENCE, EDUCATION, LEARNING,
  SERVICES, TESTIMONIALS, CONTACT
} from '@/data/portfolio';

type Tab = 'home' | 'work' | 'about' | 'contact';

export default function MobilePage() {
  const [tab, setTab] = useState<Tab>('home');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState('');
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const brand = 'hsl(var(--brand))';
  const muted = 'hsl(var(--muted-foreground))';

  const productWork = PROJECTS.filter(p => p.category === 'product');
  const aiWork = PROJECTS.filter(p => p.category === 'ai');
  const featured = PROJECTS.slice(0, 4);
  const sel = PROJECTS.find(p => p.id === selectedId) ?? null;

  function go(t: Tab) { setTab(t); setSelectedId(null); }

  function copyEmail() {
    try { navigator.clipboard.writeText(CONTACT.email); } catch {}
    setCopied(true);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopied(false), 1900);
  }

  function sendMessage() {
    if (!name.trim() || !message.trim()) return;
    setSent(true);
    setSentName(name.trim().split(' ')[0]);
  }

  function resetForm() { setSent(false); setName(''); setMessage(''); }

  const navColor = useCallback((t: Tab) => tab === t ? brand : muted, [tab]);

  return (
    <>
      <style>{`
        @keyframes axUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
        @keyframes axIn{from{opacity:0;transform:translateX(16px)}to{opacity:1;transform:none}}
        @keyframes axToast{from{opacity:0;transform:translate(-50%,8px)}to{opacity:1;transform:translate(-50%,0)}}
        .ax-scroll::-webkit-scrollbar{width:0;height:0;}
        .ax-scroll{scrollbar-width:none;}
        .ax-press{transition:transform .12s cubic-bezier(.4,0,.2,1);}
        .ax-press:active{transform:scale(.98);}
      `}</style>

      {/* Outer wrapper */}
      <div style={{minHeight:'100vh',width:'100%',background:'radial-gradient(120% 80% at 50% 0%, #f4f4f5 0%, #e4e4e7 60%, #dcdce0 100%)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:20,padding:'36px 16px',fontFamily:'var(--font-sans)',color:'hsl(var(--foreground))'}}>

        {/* Label above phone */}
        <div style={{textAlign:'center',maxWidth:420}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:13,fontWeight:600,letterSpacing:'-0.01em'}}>
            <span style={{display:'inline-flex',width:22,height:22,borderRadius:7,background:'hsl(var(--brand))',color:'#fff',alignItems:'center',justifyContent:'center'}}>
              <Icon paths={ICONS.send} size={13} />
            </span>
            Alexander Horison — Portfolio
          </div>
          <div style={{fontSize:12,color:'hsl(var(--muted-foreground))',marginTop:5}}>A consulting portfolio reimagined as a mobile app · tap through every tab &amp; project</div>
        </div>

        {/* Phone frame */}
        <div style={{position:'relative',width:404,height:852,flexShrink:0,background:'#101012',borderRadius:56,padding:12,boxShadow:'0 50px 90px -30px rgba(0,0,0,.5), 0 0 0 2px #2a2a2e, inset 0 0 0 2px #000'}}>
          <div style={{position:'relative',width:'100%',height:'100%',background:'hsl(var(--background))',borderRadius:44,overflow:'hidden'}}>

            {/* Status bar */}
            <div style={{position:'absolute',top:0,left:0,right:0,height:52,zIndex:18,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 28px',background:'hsl(var(--background))'}}>
              <span style={{fontSize:15,fontWeight:600,letterSpacing:'-0.01em'}}>9:41</span>
              <div style={{display:'flex',alignItems:'center',gap:7,color:'hsl(var(--foreground))'}}>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="6" width="3" height="6" rx="1"/><rect x="5" y="3.5" width="3" height="8.5" rx="1"/><rect x="10" y="1" width="3" height="11" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1" opacity="0.3"/></svg>
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M1 4.2C3.2 2.2 5.8 1 8.5 1S13.8 2.2 16 4.2"/><path d="M3.4 6.7C4.9 5.4 6.6 4.7 8.5 4.7s3.6.7 5.1 2"/><path d="M5.8 9.2c.8-.7 1.7-1.1 2.7-1.1s1.9.4 2.7 1.1"/><circle cx="8.5" cy="11" r="0.6" fill="currentColor"/></svg>
                <div style={{display:'flex',alignItems:'center',gap:2}}>
                  <div style={{width:22,height:11,border:'1.4px solid currentColor',borderRadius:3,opacity:.5,padding:1.5}}>
                    <div style={{width:'80%',height:'100%',background:'currentColor',borderRadius:1}}/>
                  </div>
                  <div style={{width:1.4,height:4,background:'currentColor',borderRadius:1,opacity:.5}}/>
                </div>
              </div>
            </div>

            {/* Dynamic island */}
            <div style={{position:'absolute',top:11,left:'50%',transform:'translateX(-50%)',width:118,height:32,background:'#000',borderRadius:17,zIndex:19}}/>

            {/* Scrollable content */}
            <div className="ax-scroll" style={{position:'absolute',top:52,bottom:68,left:0,right:0,overflowY:'auto',overflowX:'hidden',background:'hsl(var(--background))'}}>

              {/* HOME */}
              {tab === 'home' && (
                <div style={{padding:'6px 16px 28px',animation:'axUp .35s ease both'}}>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 0 18px'}}>
                    <div style={{display:'flex',alignItems:'center',gap:11}}>
                      <div className="wa-avatar wa-avatar--md wa-avatar--brand"><Icon paths={ICONS.send} size={22} /></div>
                      <div>
                        <div style={{fontSize:15,fontWeight:700,lineHeight:1.1,letterSpacing:'-0.01em'}}>Alexander</div>
                        <div style={{fontSize:11,color:'hsl(var(--muted-foreground))',marginTop:1}}>AI Builder &amp; Consultant</div>
                      </div>
                    </div>
                    <span className="wa-badge wa-badge--success" style={{gap:6}}>
                      <span style={{width:6,height:6,borderRadius:'50%',background:'hsl(var(--status-success))',display:'inline-block'}}/>
                      Available
                    </span>
                  </div>

                  <h1 style={{fontSize:30,lineHeight:1.12,fontWeight:700,letterSpacing:'-0.025em',margin:'0 0 8px'}}>Hello! I&apos;m<br/>Alexander 👋</h1>
                  <div style={{display:'flex',alignItems:'center',gap:6,color:'hsl(var(--muted-foreground))',fontSize:13,marginBottom:12}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Jakarta, Indonesia
                  </div>
                  <span className="wa-badge" style={{background:'hsl(var(--brand)/0.1)',color:'hsl(var(--brand))',gap:6,fontWeight:600,marginBottom:14,display:'inline-flex'}}>
                    <Icon paths={ICONS.send} size={12} />
                    AI Builder · Automation · Productivity
                  </span>
                  <p style={{fontSize:14,lineHeight:1.6,color:'hsl(var(--foreground))',margin:'0 0 18px'}}>I&apos;m an <strong style={{fontWeight:600}}>AI Builder</strong> &amp; Technology Consultant with <strong style={{fontWeight:600}}>13+ years</strong> of experience — building automation, AI tools, and web products with a proven record of improving productivity for the businesses I work with.</p>

                  <div style={{display:'flex',gap:10,marginBottom:24}}>
                    <button className="wa-btn wa-btn--brand wa-btn--lg wa-btn--block" onClick={() => go('work')}>
                      <Icon paths={ICONS.bag} size={16} />
                      View my work
                    </button>
                    <button className="wa-btn wa-btn--outline wa-btn--lg ax-press" onClick={copyEmail} style={{flexShrink:0,width:48,padding:0}} aria-label="Copy email">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    </button>
                  </div>

                  {/* Stats grid */}
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginBottom:24}}>
                    {[
                      {icon:ICONS.calendar,bg:'hsl(var(--brand)/0.1)',ic:'hsl(var(--brand))',val:'13+',title:'Years exp.',sub:'Building since 2011'},
                      {icon:ICONS.bag,bg:'hsl(var(--muted))',ic:'hsl(var(--muted-foreground))',val:'20+',title:'Projects shipped',sub:'MVPs to enterprise'},
                      {icon:ICONS.send,bg:'hsl(var(--muted))',ic:'hsl(var(--muted-foreground))',val:'8',title:'AI builds',sub:'Automation tools'},
                      {icon:ICONS.trending,bg:'hsl(var(--muted))',ic:'hsl(var(--muted-foreground))',val:'50%+',title:'Avg. time saved',sub:'Client outcomes'},
                    ].map((s,i) => (
                      <div key={i} className="wa-card" style={{padding:14,display:'flex',flexDirection:'column'}}>
                        <div style={{width:28,height:28,borderRadius:8,background:s.bg,color:s.ic,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:10}}>
                          <Icon paths={s.icon} size={14} />
                        </div>
                        <p style={{fontSize:28,fontWeight:800,letterSpacing:'-0.04em',lineHeight:1,margin:'0 0 4px'}}>{s.val}</p>
                        <p style={{fontSize:11,fontWeight:600,margin:'0 0 2px'}}>{s.title}</p>
                        <p style={{fontSize:10,color:'hsl(var(--muted-foreground))',margin:0}}>{s.sub}</p>
                      </div>
                    ))}
                  </div>

                  {/* Featured work */}
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
                    <h2 style={{fontSize:12,fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase',color:'hsl(var(--muted-foreground))',margin:0}}>Selected Work</h2>
                    <button className="wa-btn wa-btn--link wa-btn--sm" onClick={() => go('work')} style={{fontSize:12,color:'hsl(var(--brand))'}}>See all →</button>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:28}}>
                    {featured.map(p => (
                      <button key={p.id} className="wa-row wa-row--button ax-press" onClick={() => setSelectedId(p.id)}>
                        <div className="wa-row__lead" style={{background:'hsl(var(--brand)/0.1)',color:'hsl(var(--brand))',borderRadius:11}}>
                          <Icon paths={ICONS[p.iconKey] ?? []} size={20} />
                        </div>
                        <div className="wa-row__body">
                          <p className="wa-row__title">{p.name}</p>
                          <p className="wa-row__meta">{p.short} · {p.client}</p>
                        </div>
                        <span className="wa-badge wa-badge--secondary" style={{fontSize:11}}>{p.period}</span>
                      </button>
                    ))}
                  </div>

                  {/* Services */}
                  <h2 style={{fontSize:12,fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase',color:'hsl(var(--muted-foreground))',margin:'0 0 12px'}}>Services</h2>
                  <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:28}}>
                    {SERVICES.map((s,i) => (
                      <div key={i} className="wa-row">
                        <div className="wa-row__lead" style={s.free ? {} : {background:'hsl(var(--brand)/0.1)',color:'hsl(var(--brand))'}}>
                          <Icon paths={ICONS[s.iconKey] ?? []} size={18} />
                        </div>
                        <div className="wa-row__body">
                          <p className="wa-row__title">{s.name}</p>
                          <p className="wa-row__meta">{s.desc}</p>
                        </div>
                        {s.free
                          ? <span className="wa-badge" style={{background:'hsl(var(--status-success)/0.16)',color:'hsl(142 71% 30%)'}}>FREE</span>
                          : <span className="wa-badge wa-badge--secondary" style={{whiteSpace:'nowrap'}}>{s.price}</span>
                        }
                      </div>
                    ))}
                  </div>

                  {/* Testimonials */}
                  <h2 style={{fontSize:12,fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase',color:'hsl(var(--muted-foreground))',margin:'0 0 12px'}}>What clients say</h2>
                  <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:26}}>
                    {TESTIMONIALS.map((t,i) => (
                      <div key={i} className="wa-card wa-card--pad">
                        <p style={{fontSize:14,lineHeight:1.55,margin:'0 0 14px',color:'hsl(var(--foreground))'}}>&ldquo;{t.quote}&rdquo;</p>
                        <div style={{display:'flex',alignItems:'center',gap:11}}>
                          <div className="wa-avatar wa-avatar--sm" style={{background:'hsl(var(--brand)/0.1)',color:'hsl(var(--brand))',fontWeight:600}}>{t.initials}</div>
                          <div>
                            <div style={{fontSize:13,fontWeight:600}}>{t.by}</div>
                            <div style={{fontSize:11,color:'hsl(var(--muted-foreground))'}}>{t.role}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="wa-card wa-card--pad" style={{textAlign:'center',padding:'24px 18px',background:'hsl(var(--foreground))',border:'none'}}>
                    <h3 style={{fontSize:19,fontWeight:700,margin:'0 0 7px',color:'hsl(var(--background))',letterSpacing:'-0.01em'}}>Got questions?</h3>
                    <p style={{fontSize:13,color:'hsl(0 0% 70%)',margin:'0 0 16px',lineHeight:1.5}}>I&apos;m always excited to collaborate on innovative and exciting projects!</p>
                    <button className="wa-btn wa-btn--brand wa-btn--xl wa-btn--block" onClick={() => go('contact')}>
                      <Icon paths={ICONS.send} size={18} />
                      Get in touch
                    </button>
                  </div>
                </div>
              )}

              {/* WORK */}
              {tab === 'work' && (
                <div style={{padding:'14px 16px 28px',animation:'axUp .35s ease both'}}>
                  <h1 style={{fontSize:26,fontWeight:700,letterSpacing:'-0.025em',margin:'0 0 3px'}}>Selected Work</h1>
                  <p style={{fontSize:13,color:'hsl(var(--muted-foreground))',margin:'0 0 18px'}}>{productWork.length} apps &amp; web · {aiWork.length} AI tools · tap any project for the full case study.</p>

                  <h2 style={{fontSize:11,fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase',color:'hsl(var(--muted-foreground))',margin:'0 0 10px',display:'flex',alignItems:'center',gap:7}}>
                    <Icon paths={ICONS.bag} size={13} />
                    Apps &amp; Web Products
                  </h2>
                  <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:24}}>
                    {productWork.map(p => (
                      <button key={p.id} className="wa-row wa-row--button ax-press" onClick={() => setSelectedId(p.id)}>
                        <div className="wa-row__lead" style={{background:'hsl(var(--brand)/0.1)',color:'hsl(var(--brand))',borderRadius:11,height:44,width:44}}>
                          <Icon paths={ICONS[p.iconKey] ?? []} size={20} />
                        </div>
                        <div className="wa-row__body">
                          <p className="wa-row__title">{p.name}</p>
                          <p className="wa-row__meta">{p.short} · {p.client}</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:5,flexShrink:0}}>
                          <span className="wa-badge wa-badge--secondary" style={{fontSize:11}}>{p.period}</span>
                          {p.live && (
                            <span style={{display:'inline-flex',alignItems:'center',gap:4,fontSize:10,fontWeight:600,color:'hsl(142 71% 32%)'}}>
                              <span style={{width:6,height:6,borderRadius:'50%',background:'hsl(var(--status-success))'}}/>
                              Live
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
                    <div style={{flex:1,height:1,background:'hsl(var(--border))'}}/>
                    <span className="wa-badge" style={{background:'hsl(var(--brand)/0.1)',color:'hsl(var(--brand))',gap:5,fontWeight:600,fontSize:11}}>
                      <Icon paths={ICONS.send} size={11} />
                      AI &amp; Automation
                    </span>
                    <div style={{flex:1,height:1,background:'hsl(var(--border))'}}/>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',gap:10}}>
                    {aiWork.map(p => (
                      <button key={p.id} className="wa-row wa-row--button ax-press" onClick={() => setSelectedId(p.id)}>
                        <div className="wa-row__lead" style={{background:'hsl(var(--brand)/0.1)',color:'hsl(var(--brand))',borderRadius:11,height:44,width:44}}>
                          <Icon paths={ICONS[p.iconKey] ?? []} size={20} />
                        </div>
                        <div className="wa-row__body">
                          <p className="wa-row__title">{p.name}</p>
                          <p className="wa-row__meta">{p.short} · {p.client}</p>
                        </div>
                        <span className="wa-badge" style={{background:'hsl(var(--brand)/0.1)',color:'hsl(var(--brand))',fontSize:10,flexShrink:0}}>AI</span>
                      </button>
                    ))}
                  </div>

                  {/* AI Stack */}
                  <h2 style={{fontSize:11,fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase',color:'hsl(var(--muted-foreground))',margin:'28px 0 12px'}}>AI Tech Stack</h2>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                    {AI_STACK.map((t,i) => (
                      <div key={i} style={{border:'1px solid hsl(var(--border))',borderRadius:14,padding:14,display:'flex',flexDirection:'column',gap:8}}>
                        <div style={{width:40,height:40,borderRadius:11,background:t.color,display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,letterSpacing:'-0.02em',color:t.textColor}}>{t.initials}</div>
                        <div style={{fontSize:13,fontWeight:700,letterSpacing:'-0.01em'}}>{t.name}</div>
                        <div style={{fontSize:11,color:'hsl(var(--muted-foreground))',lineHeight:1.3}}>{t.tagline}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ABOUT */}
              {tab === 'about' && (
                <div style={{padding:'14px 16px 28px',animation:'axUp .35s ease both'}}>
                  <div style={{textAlign:'center',padding:'8px 0 6px'}}>
                    <div className="wa-avatar wa-avatar--brand" style={{width:76,height:76,borderRadius:26,margin:'0 auto 14px'}}>
                      <Icon paths={ICONS.send} size={32} />
                    </div>
                    <h1 style={{fontSize:23,fontWeight:700,letterSpacing:'-0.02em',margin:'0 0 4px'}}>Alexander Horison</h1>
                    <p style={{fontSize:13,color:'hsl(var(--muted-foreground))',margin:'0 0 6px'}}>AI Builder · Solution Architect · Web Developer</p>
                    <div style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:12,color:'hsl(var(--muted-foreground))'}}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      Jakarta, Indonesia
                    </div>
                  </div>

                  <p style={{fontSize:14,lineHeight:1.65,margin:'18px 0 8px'}}>Hey, I&apos;m Alexander — an <strong style={{fontWeight:600}}>AI Builder</strong>, Solution Architect, and Web Developer with <strong style={{fontWeight:600}}>13+ years</strong> of experience. I build automation and AI-powered tools that help businesses grow and run more efficiently.</p>
                  <p style={{fontSize:14,lineHeight:1.65,margin:'0 0 24px',color:'hsl(var(--muted-foreground))'}}>I create internal tools, apps, and websites that streamline operations and remove manual, repetitive work — with a proven track record of improving day-to-day productivity.</p>

                  <h2 style={{fontSize:12,fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase',color:'hsl(var(--muted-foreground))',margin:'0 0 12px'}}>Tools I work with</h2>
                  <div style={{display:'flex',flexWrap:'wrap',gap:8,marginBottom:28}}>
                    {TOOLS.map(t => (
                      <span key={t} className="wa-badge wa-badge--outline" style={{fontWeight:500,padding:'6px 12px'}}>{t}</span>
                    ))}
                  </div>

                  <h2 style={{fontSize:12,fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase',color:'hsl(var(--muted-foreground))',margin:'0 0 16px'}}>Experience</h2>
                  <div style={{position:'relative',paddingLeft:26,marginBottom:26}}>
                    <div style={{position:'absolute',left:7,top:6,bottom:6,width:2,background:'hsl(var(--border))'}}/>
                    <div style={{display:'flex',flexDirection:'column',gap:20}}>
                      {EXPERIENCE.map((e,i) => (
                        <div key={i} style={{position:'relative'}}>
                          <span style={{position:'absolute',left:-26,top:3,width:16,height:16,borderRadius:'50%',background:'hsl(var(--background))',border:`2px solid ${e.current ? brand : 'hsl(var(--border))'}`,display:'block'}}/>
                          <div style={{fontSize:14,fontWeight:600,letterSpacing:'-0.01em'}}>{e.title}</div>
                          <div style={{fontSize:12,color:'hsl(var(--brand))',fontWeight:500,margin:'1px 0 2px'}}>{e.company} · {e.period}</div>
                          <p style={{fontSize:12.5,lineHeight:1.55,color:'hsl(var(--muted-foreground))',margin:'4px 0 0'}}>{e.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 style={{fontSize:12,fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase',color:'hsl(var(--muted-foreground))',margin:'0 0 12px'}}>Education</h2>
                  <div className="wa-row">
                    <div className="wa-row__lead" style={{background:'hsl(var(--brand)/0.1)',color:'hsl(var(--brand))'}}>
                      <Icon paths={ICONS.cap} size={18} />
                    </div>
                    <div className="wa-row__body">
                      <p className="wa-row__title">{EDUCATION.school}</p>
                      <p className="wa-row__meta">{EDUCATION.degree}</p>
                    </div>
                  </div>

                  <h2 style={{fontSize:12,fontWeight:600,letterSpacing:'0.05em',textTransform:'uppercase',color:'hsl(var(--muted-foreground))',margin:'26px 0 12px'}}>Courses &amp; Events</h2>
                  <div style={{display:'flex',flexDirection:'column',gap:10}}>
                    {LEARNING.map((l,i) => (
                      <div key={i} className="wa-row">
                        <div className="wa-row__lead" style={{background:'hsl(var(--brand)/0.1)',color:'hsl(var(--brand))'}}>
                          <Icon paths={ICONS[l.iconKey] ?? []} size={18} />
                        </div>
                        <div className="wa-row__body">
                          <p className="wa-row__title">{l.name}</p>
                          <p className="wa-row__meta">{l.meta}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CONTACT */}
              {tab === 'contact' && (
                <div style={{padding:'18px 16px 28px',animation:'axUp .35s ease both'}}>
                  <h1 style={{fontSize:26,fontWeight:700,letterSpacing:'-0.025em',margin:'0 0 7px'}}>Got questions?</h1>
                  <p style={{fontSize:14,color:'hsl(var(--muted-foreground))',margin:'0 0 20px',lineHeight:1.55}}>I&apos;m always excited to collaborate on innovative and exciting projects!</p>

                  <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:22}}>
                    <button className="wa-row wa-row--button ax-press" onClick={copyEmail}>
                      <div className="wa-row__lead" style={{background:'hsl(var(--brand)/0.1)',color:'hsl(var(--brand))'}}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </div>
                      <div className="wa-row__body">
                        <p className="wa-row__title">E-mail</p>
                        <p className="wa-row__meta">{CONTACT.email}</p>
                      </div>
                      <span className="wa-badge wa-badge--secondary" style={{fontSize:11}}>Copy</span>
                    </button>
                    <a className="wa-row wa-row--button ax-press" href={CONTACT.whatsappLink} target="_blank" rel="noopener" style={{textDecoration:'none'}}>
                      <div className="wa-row__lead" style={{background:'hsl(142 71% 45% / 0.12)',color:'hsl(142 71% 34%)'}}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                      </div>
                      <div className="wa-row__body">
                        <p className="wa-row__title">WhatsApp</p>
                        <p className="wa-row__meta">{CONTACT.whatsapp}</p>
                      </div>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                    <a className="wa-row wa-row--button ax-press" href={CONTACT.linkedin} target="_blank" rel="noopener" style={{textDecoration:'none'}}>
                      <div className="wa-row__lead" style={{background:'hsl(217 91% 60% / 0.12)',color:'hsl(217 70% 45%)'}}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      </div>
                      <div className="wa-row__body">
                        <p className="wa-row__title">LinkedIn</p>
                        <p className="wa-row__meta">/in/alexander-horison</p>
                      </div>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                  </div>

                  <div style={{display:'flex',alignItems:'center',gap:12,margin:'6px 0 18px'}}>
                    <div style={{flex:1,height:1,background:'hsl(var(--border))'}}/>
                    <span style={{fontSize:11,color:'hsl(var(--muted-foreground))',textTransform:'uppercase',letterSpacing:'0.05em'}}>or send a message</span>
                    <div style={{flex:1,height:1,background:'hsl(var(--border))'}}/>
                  </div>

                  {sent ? (
                    <div className="wa-status wa-status--success" style={{textAlign:'left'}}>
                      <div className="wa-status__head">
                        <span className="wa-status__icon">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                        </span>
                        <span className="wa-status__title">Message sent</span>
                      </div>
                      <p style={{fontSize:13,lineHeight:1.55,margin:0,color:'hsl(var(--foreground))'}}>Thanks {sentName} — I&apos;ll get back to you soon. For anything urgent, WhatsApp is fastest.</p>
                      <button className="wa-btn wa-btn--outline wa-btn--md wa-btn--block" onClick={resetForm} style={{marginTop:2}}>Send another message</button>
                    </div>
                  ) : (
                    <div style={{display:'flex',flexDirection:'column',gap:15}}>
                      <div>
                        <label className="wa-label" htmlFor="ax-name">Your name</label>
                        <input id="ax-name" className="wa-field wa-input" placeholder="e.g. Michael Santoso" value={name} onChange={e => setName(e.target.value)} style={{marginTop:7}} />
                      </div>
                      <div>
                        <label className="wa-label" htmlFor="ax-msg">Message</label>
                        <textarea id="ax-msg" className="wa-field wa-textarea" placeholder="Tell me about your project..." value={message} onChange={e => setMessage(e.target.value)} style={{marginTop:7,minHeight:120}} />
                      </div>
                      <button className="wa-btn wa-btn--brand wa-btn--xl wa-btn--block" onClick={sendMessage}>
                        <Icon paths={ICONS.send} size={18} />
                        Send message
                      </button>
                      <a className="wa-btn wa-btn--ghost wa-btn--sm wa-btn--block" href={CONTACT.whatsappLink} target="_blank" rel="noopener" style={{color:'hsl(var(--muted-foreground))',textDecoration:'none',display:'flex',alignItems:'center',justifyContent:'center'}}>Or schedule a call →</a>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* PROJECT DETAIL OVERLAY */}
            {sel && (
              <div style={{position:'absolute',top:52,left:0,right:0,bottom:68,zIndex:24,background:'hsl(var(--background))',display:'flex',flexDirection:'column',boxShadow:'0 1px 0 hsl(var(--border))',animation:'axIn .28s cubic-bezier(.4,0,.2,1) both'}}>
                <div style={{display:'flex',alignItems:'center',gap:10,padding:'12px 12px',borderBottom:'1px solid hsl(var(--border))',flexShrink:0,background:'hsl(var(--background))'}}>
                  <button className="wa-btn wa-btn--ghost wa-btn--icon ax-press" onClick={() => setSelectedId(null)} aria-label="Back">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                  </button>
                  <div style={{minWidth:0,flex:1}}>
                    <p style={{fontSize:14,fontWeight:600,margin:0,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{sel.name}</p>
                    <p style={{fontSize:11,color:'hsl(var(--muted-foreground))',margin:0}}>{sel.short}</p>
                  </div>
                </div>

                <div className="ax-scroll" style={{flex:1,overflowY:'auto',overflowX:'hidden',padding:'20px 16px 28px'}}>
                  <div className="wa-avatar wa-avatar--brand" style={{width:60,height:60,borderRadius:20,marginBottom:16}}>
                    <Icon paths={ICONS[sel.iconKey] ?? []} size={26} />
                  </div>
                  <h1 style={{fontSize:23,fontWeight:700,letterSpacing:'-0.02em',lineHeight:1.15,margin:'0 0 14px'}}>{sel.name}</h1>

                  <div style={{display:'flex',gap:10,marginBottom:20}}>
                    <div style={{flex:1,background:'hsl(var(--muted))',borderRadius:12,padding:'11px 12px'}}>
                      <div style={{fontSize:10,textTransform:'uppercase',letterSpacing:'0.05em',color:'hsl(var(--muted-foreground))',marginBottom:3}}>Client</div>
                      <div style={{fontSize:13,fontWeight:600}}>{sel.client}</div>
                    </div>
                    <div style={{flex:1,background:'hsl(var(--muted))',borderRadius:12,padding:'11px 12px'}}>
                      <div style={{fontSize:10,textTransform:'uppercase',letterSpacing:'0.05em',color:'hsl(var(--muted-foreground))',marginBottom:3}}>Year</div>
                      <div style={{fontSize:13,fontWeight:600}}>{sel.period}</div>
                    </div>
                  </div>

                  <div style={{marginBottom:22}}>
                    <div style={{fontSize:10,textTransform:'uppercase',letterSpacing:'0.05em',color:'hsl(var(--muted-foreground))',marginBottom:8}}>Service</div>
                    <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                      <span className="wa-badge wa-badge--secondary">Business Analyst</span>
                      <span className="wa-badge wa-badge--secondary">Consultation</span>
                      <span className="wa-badge wa-badge--secondary">Implementation</span>
                    </div>
                  </div>

                  <p style={{fontSize:14,lineHeight:1.65,margin:'0 0 24px',color:'hsl(var(--foreground))'}}>{sel.intro}</p>

                  {/* Challenge */}
                  <div style={{marginBottom:22}}>
                    <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
                      <span style={{width:24,height:24,borderRadius:7,background:'hsl(var(--status-failed)/0.12)',color:'hsl(var(--status-failed))',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                      </span>
                      <h2 style={{fontSize:15,fontWeight:700,margin:0}}>The Challenge</h2>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',gap:9}}>
                      {sel.challenge.map((c,i) => (
                        <div key={i} style={{display:'flex',gap:9,fontSize:13,lineHeight:1.5,color:'hsl(var(--muted-foreground))'}}>
                          <span style={{color:'hsl(var(--status-failed))',flexShrink:0,marginTop:6,width:5,height:5,borderRadius:'50%',background:'hsl(var(--status-failed))'}}/>
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solution */}
                  <div style={{marginBottom:22}}>
                    <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
                      <span style={{width:24,height:24,borderRadius:7,background:'hsl(var(--brand)/0.12)',color:'hsl(var(--brand))',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
                        <Icon paths={ICONS.send} size={14} />
                      </span>
                      <h2 style={{fontSize:15,fontWeight:700,margin:0}}>The Solution</h2>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',gap:9}}>
                      {sel.solution.map((s,i) => (
                        <div key={i} style={{display:'flex',gap:9,fontSize:13,lineHeight:1.5,color:'hsl(var(--foreground))'}}>
                          <span style={{color:'hsl(var(--brand))',flexShrink:0,marginTop:2}}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                          </span>
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div style={{marginBottom:22}}>
                    <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
                      <span style={{width:24,height:24,borderRadius:7,background:'hsl(var(--status-success)/0.14)',color:'hsl(142 71% 34%)',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>
                        <Icon paths={ICONS.trending} size={14} />
                      </span>
                      <h2 style={{fontSize:15,fontWeight:700,margin:0}}>The Results</h2>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',gap:10}}>
                      {sel.results.map((r,i) => (
                        <div key={i} className="wa-card wa-card--pad" style={{padding:'12px 14px',display:'flex',gap:10,alignItems:'flex-start'}}>
                          <span style={{color:'hsl(142 71% 40%)',flexShrink:0,marginTop:1}}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                          </span>
                          <span style={{fontSize:13,lineHeight:1.5}}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  {sel.quote && (
                    <div className="wa-card wa-card--pad" style={{background:'hsl(var(--brand)/0.05)',border:'2px solid hsl(var(--brand)/0.2)',marginBottom:22}}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="hsl(var(--brand)/.25)" stroke="none" style={{marginBottom:6}}><path d="M10 11H6a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h0a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm9 0h-4a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h0a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1z"/></svg>
                      <p style={{fontSize:14,lineHeight:1.55,margin:'0 0 12px',fontStyle:'italic'}}>{sel.quote}</p>
                      <div style={{display:'flex',alignItems:'center',gap:10}}>
                        <div className="wa-avatar wa-avatar--sm" style={{background:'hsl(var(--brand)/0.12)',color:'hsl(var(--brand))',fontWeight:600}}>{sel.quoteInitials}</div>
                        <div>
                          <div style={{fontSize:12,fontWeight:600}}>{sel.quoteBy}</div>
                          <div style={{fontSize:11,color:'hsl(var(--muted-foreground))'}}>{sel.quoteRole}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Conclusion */}
                  <div style={{background:'hsl(var(--muted))',borderRadius:14,padding:16,marginBottom:18}}>
                    <div style={{fontSize:10,textTransform:'uppercase',letterSpacing:'0.05em',color:'hsl(var(--muted-foreground))',marginBottom:6}}>In conclusion</div>
                    <p style={{fontSize:13,lineHeight:1.6,margin:0}}>{sel.conclusion}</p>
                  </div>

                  <button className="wa-btn wa-btn--primary wa-btn--lg wa-btn--block ax-press" onClick={() => { setSelectedId(null); setTab('contact'); }}>
                    <Icon paths={ICONS.send} size={16} />
                    Start a project like this
                  </button>
                </div>
              </div>
            )}

            {/* BOTTOM NAV */}
            <nav className="wa-bottomnav" style={{position:'absolute',left:0,right:0,bottom:0,height:68,paddingBottom:10,zIndex:26,boxShadow:'0 -1px 0 hsl(var(--border))'}}>
              {([
                {id:'home' as Tab,label:'Home',icon:<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>},
                {id:'work' as Tab,label:'Work',icon:<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>},
                {id:'about' as Tab,label:'About',icon:<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>},
                {id:'contact' as Tab,label:'Contact',icon:<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>},
              ]).map(({id,label,icon}) => (
                <button
                  key={id}
                  className={`wa-bottomnav__item ax-press${tab===id?' wa-bottomnav__item--active':''}`}
                  onClick={() => go(id)}
                  style={{color: tab===id ? brand : muted}}
                >
                  {icon}
                  <span className="wa-bottomnav__label">{label}</span>
                </button>
              ))}
            </nav>

            {/* TOAST */}
            {copied && (
              <div style={{position:'absolute',left:'50%',bottom:88,zIndex:30,background:'hsl(var(--foreground))',color:'hsl(var(--background))',padding:'9px 18px',borderRadius:9999,fontSize:13,fontWeight:600,display:'flex',alignItems:'center',gap:8,boxShadow:'0 12px 30px rgba(0,0,0,.28)',animation:'axToast .22s ease',whiteSpace:'nowrap'}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                Email copied to clipboard
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
