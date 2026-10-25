import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { goalPaths, heroSlides, offerings, stats } from '../data/offerings';

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const slide = heroSlides[index];

  useEffect(() => {
    if (!playing || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % heroSlides.length), 7000);
    return () => window.clearInterval(timer);
  }, [playing]);

  const go = (next: number) => setIndex((next + heroSlides.length) % heroSlides.length);
  const offering = offerings.find((item) => item.id === slide.offering);

  return (
    <section className="tcs-hero" aria-roledescription="carousel" aria-label="Featured offerings">
      {heroSlides.map((item, i) => (
        <div key={item.offering} className={`tcs-hero-bg${i === index ? ' is-active' : ''}`} style={{ backgroundImage: `url(${item.image})` }} aria-hidden="true" />
      ))}
      <div className="tcs-hero-shade" aria-hidden="true" />
      <div className="container tcs-hero-content" aria-live={playing ? 'off' : 'polite'}>
        <span className="tcs-hero-kicker">{slide.kicker}</span>
        <h1 key={slide.title}>{slide.title}</h1>
        <p>{slide.text}</p>
        <div className="tcs-hero-actions">
          <Link to={offering?.path ?? '/services'} className="tcs-btn">Explore {slide.kicker} <ArrowRight size={20} /></Link>
          <Link to="/contact" className="tcs-btn tcs-btn-ghost">Talk to our experts</Link>
        </div>
      </div>
      <div className="container tcs-hero-controls">
        <div className="tcs-hero-dots" role="tablist" aria-label="Choose slide">
          {heroSlides.map((item, i) => (
            <button key={item.offering} type="button" role="tab" aria-selected={i === index} aria-label={`Show ${item.kicker}`} className={i === index ? 'is-active' : ''} onClick={() => setIndex(i)}>
              <span>{item.kicker}</span><i />
            </button>
          ))}
        </div>
        <div className="tcs-hero-buttons">
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide"><ChevronLeft size={22} /></button>
          <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}>{playing ? <Pause size={20} /> : <Play size={20} />}</button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Next slide"><ChevronRight size={22} /></button>
        </div>
      </div>
    </section>
  );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { setDisplay(value); return; }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1400, 1);
        setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export function StatsBar() {
  return (
    <section className="tcs-stats" aria-label="At a glance">
      <div className="container tcs-stats-grid">
        {stats.map((stat) => (
          <div key={stat.label}><strong><CountUp value={stat.value} suffix={stat.suffix} /></strong><span>{stat.label}</span></div>
        ))}
      </div>
    </section>
  );
}

export function OfferingsExplorer() {
  const [activeId, setActiveId] = useState(offerings[0].id);
  const [openSub, setOpenSub] = useState(0);
  const [goal, setGoal] = useState<string | null>(null);
  const active = offerings.find((item) => item.id === activeId) ?? offerings[0];

  const select = (id: string) => { setActiveId(id); setOpenSub(0); };
  const pickGoal = (label: string, id: string) => { setGoal(label); select(id); };

  return (
    <section className="section tcs-offerings" id="offerings">
      <div className="container">
        <div className="tcs-section-head">
          <span className="tcs-kicker">Our offerings</span>
          <h2>Explore what we do across four core platforms.</h2>
          <p>Choose a platform, or tell us your goal, and see the detailed offerings available.</p>
        </div>

        <div className="tcs-goals" role="group" aria-label="Find an offering by goal">
          <span>I want to…</span>
          {goalPaths.map((item) => (
            <button key={item.goal} type="button" className={goal === item.goal ? 'is-active' : ''} aria-pressed={goal === item.goal} onClick={() => pickGoal(item.goal, item.offering)}>{item.goal}</button>
          ))}
        </div>

        <div className="tcs-tabs" role="tablist" aria-label="Platforms">
          {offerings.map((item) => (
            <button key={item.id} id={`tab-${item.id}`} type="button" role="tab" aria-selected={item.id === activeId} aria-controls="offering-panel" className={item.id === activeId ? 'is-active' : ''} onClick={() => select(item.id)}>{item.short}</button>
          ))}
        </div>

        <div className="tcs-panel" id="offering-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`}>
          <div className="tcs-panel-media">
            <img key={active.image} src={active.image} alt={active.alt} loading="lazy" decoding="async" />
          </div>
          <div className="tcs-panel-body">
            <h3>{active.name}</h3>
            <p className="tcs-panel-tagline">{active.tagline}</p>
            <p>{active.summary}</p>
            <div className="tcs-accordion">
              {active.subOfferings.map((sub, i) => (
                <div key={sub.title} className={`tcs-acc-item${openSub === i ? ' is-open' : ''}`}>
                  <button type="button" aria-expanded={openSub === i} onClick={() => setOpenSub(openSub === i ? -1 : i)}>
                    <span>{sub.title}</span><ChevronDown size={22} />
                  </button>
                  {openSub === i && (
                    <div className="tcs-acc-body">
                      <p>{sub.text}</p>
                      <ul>{sub.points.map((point) => <li key={point}><Check size={18} />{point}</li>)}</ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="tcs-tags">{active.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <Link to={active.path} className="tcs-btn">Explore {active.short} <ArrowRight size={20} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OfferingDeepDive({ path }: { path: string }) {
  const offering = offerings.find((item) => item.path === path);
  const [open, setOpen] = useState(0);
  if (!offering) return null;
  return (
    <section className="section tcs-deepdive">
      <div className="container">
        <div className="tcs-section-head">
          <span className="tcs-kicker">Detailed offerings</span>
          <h2>{offering.tagline}</h2>
          <p>{offering.summary}</p>
        </div>
        <div className="tcs-deep-grid">
          {offering.subOfferings.map((sub, i) => (
            <article key={sub.title} className={`tcs-deep-card${open === i ? ' is-open' : ''}`}>
              <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="tcs-deep-num">0{i + 1}</span><h3>{sub.title}</h3><ChevronDown size={22} />
              </button>
              <p>{sub.text}</p>
              {open === i && <ul>{sub.points.map((point) => <li key={point}><Check size={18} />{point}</li>)}</ul>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
