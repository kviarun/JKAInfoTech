import { KeyboardEvent, useRef, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Bot, Check, ChevronRight,
  Headphones, Layers3, LineChart, Monitor, Network, Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroCarousel, OfferingsExplorer, StatsBar } from './Interactive';
import { industries, insights, services } from '../data/site';

function SectionHeading({ kicker, title, text, light = false }: { kicker: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}`}>
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

const showcaseItems = [
  {
    label: 'People & process',
    title: 'Make space for better work.',
    description: 'Bring people and process together with business applications and automation designed around the way teams actually work.',
    detail: 'Support more connected finance, operations, sales and service workflows.',
    href: '/services/dynamics-365',
    image: '/images/people-team.jpg',
    alt: 'Colleagues collaborating around a table in a bright modern workspace.',
    icon: Headphones,
    tag: 'BUSINESS APPLICATIONS',
  },
  {
    label: 'Connected networks',
    title: 'Connect the systems behind the scenes.',
    description: 'Build clearer, more resilient connections between applications, services and the data your organisation relies on.',
    detail: 'Explore cloud integration, APIs and event-driven architecture.',
    href: '/services/enterprise-integration',
    image: '/images/network-infrastructure.jpg',
    alt: 'Illuminated server racks representing connected enterprise infrastructure.',
    icon: Network,
    tag: 'CLOUD & INTEGRATION',
  },
  {
    label: 'Modern work',
    title: 'Give people tools that fit the work.',
    description: 'Create thoughtful digital experiences that help teams find information, complete tasks and make decisions.',
    detail: 'Combine low-code apps, analytics and responsible AI.',
    href: '/services/power-platform',
    image: '/images/computer-workspace.jpg',
    alt: 'A person using a laptop at a desk, with work visible on screen.',
    icon: Monitor,
    tag: 'DIGITAL WORKPLACE',
  },
  {
    label: 'Workspaces',
    title: 'Build a foundation for what comes next.',
    description: 'Modernise the workplace and cloud foundations that support secure, flexible ways of working.',
    detail: 'Plan a practical path for cloud, data and application modernisation.',
    href: '/services/azure-cloud',
    image: '/images/office-space.jpg',
    alt: 'A bright contemporary office with collaborative desks and shared workspace.',
    icon: Layers3,
    tag: 'CLOUD MODERNISATION',
  },
];

function InteractiveShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeItem = showcaseItems[activeIndex];

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | undefined;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % showcaseItems.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + showcaseItems.length) % showcaseItems.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = showcaseItems.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="interactive-showcase">
      <div className="showcase-controls">
        <div className="showcase-tabs" role="tablist" aria-label="Explore technology in context" aria-orientation="vertical">
          {showcaseItems.map((item, index) => {
            const ItemIcon = item.icon;
            return (
              <button
                key={item.label}
                ref={(element) => { tabRefs.current[index] = element; }}
                id={`showcase-tab-${index}`}
                className={`showcase-tab${index === activeIndex ? ' is-active' : ''}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls="showcase-panel"
                tabIndex={index === activeIndex ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                <span className="showcase-tab-icon"><ItemIcon size={18} /></span>
                <span className="showcase-tab-copy"><strong>{item.label}</strong><small>{item.detail}</small></span>
                <ChevronRight className="showcase-tab-arrow" size={17} />
              </button>
            );
          })}
        </div>
        <div className="showcase-description" aria-live="polite">
          <span className="eyebrow">Designed around your reality</span>
          <h3>{activeItem.title}</h3>
          <p>{activeItem.description}</p>
          <Link to={activeItem.href} className="text-link">Explore this capability <ArrowRight size={15} /></Link>
        </div>
      </div>
      <div
        className="showcase-photo-panel"
        id="showcase-panel"
        role="tabpanel"
        aria-labelledby={`showcase-tab-${activeIndex}`}
        tabIndex={0}
      >
        <img key={activeItem.image} src={activeItem.image} alt={activeItem.alt} loading="lazy" decoding="async" />
        <div className="showcase-photo-shade" />
        <span className="showcase-photo-progress" aria-hidden="true"><i style={{ width: `${((activeIndex + 1) / showcaseItems.length) * 100}%` }} /></span>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <StatsBar />
      <OfferingsExplorer />

      <section className="section services-section">
        <div className="container">
          <SectionHeading kicker="What we do" title="Technology, aligned to the work that matters." text="From the systems at the heart of your business to the intelligence that helps it move forward, bring the right capabilities together." />
          <div className="service-grid">
            {services.map(({ title, path, icon: Icon, description }, index) => (
              <article className="service-card" key={path}>
                <div className="card-topline"><span className="icon-frame"><Icon size={20} /></span><span className="card-number">0{index + 1}</span></div>
                <h3>{title}</h3><p>{description}</p>
                <Link to={path} className="card-link">Explore service <ArrowRight size={15} /></Link>
              </article>
            ))}
          </div>
          <div className="services-footer"><span>One partner across your technology landscape.</span><Link to="/services" className="text-link">See all services <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="challenge-section">
        <div className="container challenge-layout">
          <div className="challenge-copy">
            <span className="eyebrow">A clearer path forward</span>
            <h2>Complexity shouldn’t get in the way of progress.</h2>
            <p>When systems, information and teams are disconnected, good work takes more effort than it should. We help you see where change can make a difference—and how to make it practical.</p>
            <Link to="/contact" className="button button-dark">Talk through a challenge <ArrowRight size={15} /></Link>
          </div>
          <div className="challenge-list">
            {[
              ['01', 'Disconnected systems', 'Bring applications and teams into a more connected way of working.'],
              ['02', 'Manual, repetitive work', 'Automate the right steps while keeping people in control.'],
              ['03', 'Data that’s hard to trust', 'Build a clearer foundation for reporting and decisions.'],
              ['04', 'Legacy platforms', 'Modernise at a pace that respects operational reality.'],
              ['05', 'Slow decisions', 'Make relevant information easier to access and understand.'],
              ['06', 'Integration that won’t scale', 'Connect services with resilient, observable patterns.'],
            ].map(([number, title, detail]) => <div className="challenge-row" key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div><ArrowDownRight size={17} /></div>)}
          </div>
        </div>
      </section>

      <section className="section ecosystem-section">
        <div className="container">
          <SectionHeading kicker="A connected ecosystem" title="The right tools. Working together." text="Technology is most useful when it connects across the business. We help shape solutions around your needs, existing platforms and people." />
          <InteractiveShowcase />
        </div>
      </section>

      <section className="industries-section section">
        <div className="container">
          <SectionHeading kicker="Industry understanding" title="Technology for the realities of your industry." text="Manufacturing, retail, financial services and healthcare each bring different systems, regulation and priorities. We start with the work and pressures specific to your sector." />
          <div className="industry-grid">
            {industries.map(({ title, text, icon: Icon }, index) => <Link to="/industries" className={`industry-card industry-card-${index + 1}`} key={title}>
              <span className="industry-icon"><Icon size={19} /></span><span className="industry-card-title">{title}<ChevronRight size={15} /></span><span className="industry-description">{text}</span>
            </Link>)}
          </div>
          <div className="center-link"><Link to="/industries" className="text-link">Discover our industry perspectives <ArrowRight size={15} /></Link></div>
        </div>
      </section>

      <section className="solutions-band section">
        <div className="container">
          <div className="solutions-heading">
            <div><span className="eyebrow eyebrow-light">From ambition to action</span><h2>Three ways to move<br />business forward.</h2></div>
            <p>Automation, data and AI deliver most when they are tied to a specific business process. These are the three places engagements most often begin.</p>
          </div>
          <div className="solution-grid">
            <article className="solution-card solution-card-blue"><span className="solution-index">01 / AUTOMATION</span><Workflow size={25} /><h3>Give good work room to flow.</h3><p>Connect process steps, reduce avoidable hand-offs and create a better experience for the people doing the work.</p><span className="solution-outcome"><Check size={14} />A more consistent process</span><Link to="/services/power-platform" aria-label="Explore intelligent automation" className="solution-arrow"><ArrowUpRight size={18} /></Link></article>
            <article className="solution-card solution-card-light"><span className="solution-index">02 / DATA</span><LineChart size={25} /><h3>See the bigger picture.</h3><p>Bring trusted information together so teams can explore what is happening and make more informed decisions.</p><span className="solution-outcome"><Check size={14} />A clearer view of performance</span><Link to="/services/data-analytics" aria-label="Explore data and analytics" className="solution-arrow"><ArrowUpRight size={18} /></Link></article>
            <article className="solution-card solution-card-white"><span className="solution-index">03 / AI</span><Bot size={25} /><h3>Make AI useful, responsibly.</h3><p>Start with a real business need, design appropriate controls and learn from a focused, human-centred use case.</p><span className="solution-outcome"><Check size={14} />A considered first step</span><Link to="/services/ai-copilot" aria-label="Explore AI and Copilot" className="solution-arrow"><ArrowUpRight size={18} /></Link></article>
          </div>
        </div>
      </section>

      <section className="section stories-section">
        <div className="container stories-layout">
          <div className="stories-intro"><span className="eyebrow">How we work</span><h2>Clear scope, steady delivery.</h2><p>Every engagement starts with a short discovery conversation, followed by a written scope, agreed milestones and regular reviews, so you always know what is happening and what comes next.</p><Link to="/about" className="text-link">About our approach <ArrowRight size={15} /></Link></div>
          <div className="story-placeholder">
            <div className="story-art"><span className="story-art-square" /><span className="story-art-circle" /><span className="story-art-line" /></div>
                      <div className="story-caption"><span className="eyebrow">A typical engagement</span><h3>From a discovery conversation to a prioritised, costed roadmap.</h3><Link to="/about" aria-label="Read about our approach"><ArrowRight size={18} /></Link></div>
          </div>
        </div>
      </section>

      <section className="insights-section section">
        <div className="container">
          <div className="insights-header"><SectionHeading kicker="Ideas & perspectives" title="A little clarity goes a long way." text="Practical thinking on the technologies and decisions shaping modern business." /><Link to="/insights" className="text-link insights-all">All insights <ArrowRight size={15} /></Link></div>
          <div className="insights-grid">
            {insights.slice(0, 3).map((article, index) => <article className={`insight-card insight-card-${index + 1}`} key={article.title}>
              <div className="insight-art"><span className="insight-art-shape" /></div>
              <div className="insight-meta"><span>{article.category}</span><span>{article.date}</span></div><h3>{article.title}</h3><p>{article.text}</p>
                            <Link to={`/insights/${article.slug}`} className="card-link">Read insight <ArrowRight size={15} /></Link>
            </article>)}
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-layout">
          <div><span className="eyebrow eyebrow-light">Let’s make progress</span><h2>Ready to turn technology into business value?</h2><p>Let’s explore how the right combination of applications, cloud, data and AI can help your organisation move forward.</p></div>
          <Link to="/contact" className="button button-white">Schedule a consultation <ArrowRight size={16} /></Link>
          <span className="closing-mark" aria-hidden="true"><span /><span /><span /><span /></span>
        </div>
      </section>
    </>
  );
}
