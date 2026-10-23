import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, CircleHelp, Clock3, Compass, MapPin,
  Layers3, LockKeyhole, Mail, ShieldCheck, Sparkles, Target,
} from 'lucide-react';
import { OfferingDeepDive } from '../components/Interactive';
import { industries, insights, services, type Service } from '../data/site';

export function PageHero({ kicker, title, text, tone = 'light', children }: { kicker: string; title: string; text: string; tone?: 'light' | 'dark'; children?: React.ReactNode }) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="container page-hero-inner">
        <div><span className="eyebrow">{kicker}</span><h1>{title}</h1><p>{text}</p>{children}</div>
        <div className="page-hero-orb" aria-hidden="true"><span className="orb-ring orb-ring-a" /><span className="orb-ring orb-ring-b" /><span className="orb-ring orb-ring-c" /><span className="orb-core"><span /></span><span className="orb-label">JKA / 01</span></div>
      </div>
    </section>
  );
}

function PageIntro({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return <div className="page-intro"><span className="eyebrow">{kicker}</span><h2>{title}</h2><p>{text}</p></div>;
}

function ContactCta({ title = 'Let’s talk about what comes next.', text = 'Tell us what you’re working toward. We’ll start with a conversation about your goals and context.' }: { title?: string; text?: string }) {
  return <section className="page-cta"><div className="container page-cta-inner"><div><span className="eyebrow eyebrow-light">Start a conversation</span><h2>{title}</h2><p>{text}</p></div><Link to="/contact" className="button button-white">Talk to our team <ArrowRight size={15} /></Link></div></section>;
}

function ServiceFaq({ service }: { service: Service }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{service.faqs.map((item, index) => <div className={`faq-item${open === index ? ' faq-open' : ''}`} key={item.question}>
    <button type="button" aria-expanded={open === index} onClick={() => setOpen((current) => current === index ? null : index)}><span>{item.question}</span><ChevronDown size={17} /></button>
    {open === index && <p>{item.answer}</p>}
  </div>)}</div>;
}

export function ServicesPage() {
  return <>
    <PageHero kicker="Our services" title="Technology that works better, together." text="A connected set of capabilities to help you modernise core systems, improve the flow of work and make more of your data." />
    <section className="section page-content-section"><div className="container">
      <PageIntro kicker="Built around your priorities" title="Expertise where it makes a difference." text="Start with a specific challenge or bring us a broader transformation goal. We’ll work with you to shape the right next step." />
      <div className="service-list-grid">{services.map(({ title, path, icon: Icon, description }, index) => <Link to={path} className="service-list-card" key={path}><span className="service-list-number">0{index + 1}</span><span className="icon-frame"><Icon size={21} /></span><h2>{title}</h2><p>{description}</p><span className="card-link">Explore service <ArrowRight size={15} /></span></Link>)}</div>
      <div className="service-note"><Sparkles size={18} /><p>Every organisation is different. Capabilities are tailored to confirmed project needs, existing platforms and available delivery capacity.</p></div>
    </div></section><ContactCta />
  </>;
}

export function ServicePage({ service }: { service: Service }) {
  const Icon = service.icon;
  return <>
    <PageHero kicker={`Services / ${service.shortTitle}`} title={service.title} text={service.intro}><div className="hero-actions page-hero-actions"><Link to="/contact" className="button">Discuss your goals <ArrowRight size={15} /></Link><Link to="/services" className="hero-secondary-link">All services <ArrowUpRight size={15} /></Link></div></PageHero>
    <section className="service-value-section"><div className="container service-value-layout"><span className="icon-frame icon-frame-large"><Icon size={26} /></span><div><span className="eyebrow">The opportunity</span><h2>Move from technology complexity to business clarity.</h2></div><p>Build a solution around the outcomes you need, the systems you have and the people who will use it. We help you make informed choices at every stage.</p></div></section>
    <section className="section page-content-section"><div className="container service-detail-grid">
      <div><PageIntro kicker="Where we can help" title="Capabilities for the whole journey." text="From early decisions through delivery and ongoing improvement, focus on what makes the difference for your teams." /><div className="capability-list">{service.capabilities.map((capability, index) => <div key={capability}><span>0{index + 1}</span><h3>{capability}</h3><Check size={15} /></div>)}</div></div>
      <aside className="technology-panel"><span className="eyebrow">Relevant technologies</span><h3>Designed for your environment.</h3><p>Technology selection should reflect your requirements, existing investments and constraints.</p><div className="technology-tags">{service.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="panel-footnote"><ShieldCheck size={17} />No partner, certification or product status is implied.</div></aside>
    </div></section>
    <OfferingDeepDive path={service.path} />
    <section className="related-band"><div className="container related-layout"><div><span className="eyebrow">Common use cases</span><h2>Start with the work to be done.</h2></div><div className="use-case-list">{service.useCases.map((useCase, index) => <div key={useCase}><span>0{index + 1}</span><p>{useCase}</p><ArrowUpRight size={16} /></div>)}</div></div></section>
    <section className="section page-content-section"><div className="container approach-layout"><div><PageIntro kicker="How we work" title="Progress, made practical." text="A collaborative approach that provides clarity, keeps delivery grounded and supports your team beyond launch." /><div className="approach-steps">{service.approach.map((step, index) => <div key={step}><span>{['DISCOVER', 'DESIGN', 'DELIVER', 'EVOLVE'][index]}</span><p>{step}</p></div>)}</div></div><div className="why-panel"><div className="why-panel-icon"><Target size={20} /></div><span className="eyebrow">Business first</span><h3>Make the technology serve a clear purpose.</h3><p>Good solutions start with the outcomes, people and operational realities that matter to you—not a predefined product checklist.</p><Link to="/about" className="text-link">About our approach <ArrowRight size={14} /></Link></div></div></section>
    <section className="faq-section"><div className="container faq-layout"><div><span className="eyebrow">Questions & answers</span><h2>A few useful things to know.</h2><p>Every engagement is shaped around your requirements. Here are some common starting questions.</p></div><ServiceFaq service={service} /></div></section>
    <section className="related-insights"><div className="container related-insights-inner"><div><span className="eyebrow">Keep exploring</span><h2>Ideas connected to {service.shortTitle}.</h2></div><div>{insights.slice(0, 2).map((insight) => <Link to="/insights" key={insight.title}><span>{insight.category} · {insight.date}</span><strong>{insight.title}</strong><ArrowRight size={15} /></Link>)}</div></div></section>
    <ContactCta title={`Make ${service.shortTitle} work for your business.`} />
  </>;
}

export function IndustriesPage() {
  return <>
    <PageHero kicker="Industries" title="Technology grounded in your world." text="Industry context matters. Explore how connected applications, cloud, data and automation can support the realities of different sectors." />
    <section className="section page-content-section"><div className="container"><PageIntro kicker="Industry perspectives" title="Start with your business, not a template." text="These are areas where technology may help—not claims of specific customer work or outcomes. The right solution depends on your organisation." />
      <div className="industry-detail-grid">{industries.map(({ title, text, icon: Icon }, index) => <article key={title}><span className="industry-detail-number">0{index + 1} / INDUSTRY</span><Icon size={23} /><h2>{title}</h2><p>{text}</p><div className="industry-tags">{['Applications', 'Connected data', 'Automation'].slice(0, index % 2 ? 2 : 3).map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
    </div></section><ContactCta title="Bring us the challenge your industry is facing." />
  </>;
}

export function StoriesPage() {
  const scenarios = [
    { sector: 'Manufacturing · Illustrative scenario', title: 'Connecting operational and finance information', problem: 'Different views of orders and operations made it harder to understand the status of work.', approach: 'A possible approach could connect selected business application data, agree shared definitions and create role-focused reporting.', tech: 'Dynamics 365 · Microsoft Fabric · Power BI' },
    { sector: 'Professional services · Illustrative scenario', title: 'Making a recurring approval process easier to manage', problem: 'A manual, email-led process created avoidable hand-offs and limited visibility for teams.', approach: 'A possible approach could map the workflow, introduce a governed Power Platform experience and monitor adoption.', tech: 'Power Apps · Power Automate · Dataverse' },
    { sector: 'Distribution · Illustrative scenario', title: 'Improving information flow between business systems', problem: 'Point-to-point connections made change difficult and provided limited insight into failures.', approach: 'A possible approach could establish API and messaging patterns with centralised monitoring and clear ownership.', tech: 'Azure Functions · Service Bus · API Management' },
  ];
  return <>
    <PageHero kicker="Success stories" title="Outcomes begin with understanding." text="We believe useful outcomes come from understanding the people, processes and platforms involved. This page uses illustrative scenarios only; no client results are claimed." />
    <section className="section page-content-section"><div className="container"><PageIntro kicker="Illustrative scenarios" title="Examples of challenges we can help explore." text="These scenarios demonstrate possible approaches and are not real customer engagements or guarantees of results." />
      <div className="scenario-list">{scenarios.map((scenario, index) => <article key={scenario.title}><div className={`scenario-graphic scenario-graphic-${index + 1}`}><span>SCENARIO / 0{index + 1}</span><div className="scenario-graphic-lines" /><span className="scenario-graphic-shape" /></div><div className="scenario-content"><span className="eyebrow">{scenario.sector}</span><h2>{scenario.title}</h2><dl><div><dt>Challenge</dt><dd>{scenario.problem}</dd></div><div><dt>Possible approach</dt><dd>{scenario.approach}</dd></div><div><dt>Relevant technologies</dt><dd>{scenario.tech}</dd></div></dl></div></article>)}</div>
      <p className="demo-disclaimer">Illustrative demonstration content. Replace with approved, verifiable customer stories when available.</p>
    </div></section><ContactCta />
  </>;
}

export function InsightsPage() {
  return <>
    <PageHero kicker="Insights" title="Ideas for the decisions ahead." text="Explore practical perspectives on business applications, cloud, data and AI. The examples on this page are demonstration content." />
    <section className="section page-content-section"><div className="container"><PageIntro kicker="The latest thinking" title="Technology, without the jargon." text="Sample topics are shown to establish the content experience. Replace these with genuine articles and confirmed publication dates." />
      <div className="insight-list-grid">{insights.map((item, index) => <article className="insight-list-card" key={item.title}><div className={`insight-list-art insight-list-art-${index + 1}`}><span>{item.category}</span><b>0{index + 1}</b></div><div className="insight-meta"><span>{item.category}</span><span>{item.date}</span></div><h2>{item.title}</h2><p>{item.text}</p><span className="demo-article-link">Demonstration article</span></article>)}</div>
      <p className="demo-disclaimer">All articles and dates are placeholders for demonstration purposes.</p>
    </div></section><ContactCta title="Have a topic you’re working through?" text="Start a conversation about your organisation’s priorities and the decisions ahead." />
  </>;
}

export function AboutPage() {
  const principles = [
    { icon: Compass, title: 'Start with context', text: 'Understand the business, the people and the practical constraints before recommending technology.' },
    { icon: Layers3, title: 'Connect the pieces', text: 'Look across applications, cloud, data and process—not just one product or platform.' },
    { icon: Clock3, title: 'Make progress visible', text: 'Break complex change into clear decisions, achievable steps and shared ownership.' },
    { icon: ShieldCheck, title: 'Build for the long term', text: 'Consider security, governance, support and adoption from the beginning.' },
  ];
  return <>
    <PageHero kicker="About JKA InfoTech" title="A technology partner with business in mind." text="We bring technical thinking and business understanding together to help organisations make considered progress. JKA InfoTech is the business identity; service credentials and company claims should be confirmed before publication." />
    <section className="section page-content-section"><div className="container about-intro-layout"><div><span className="eyebrow">Our point of view</span><h2>Technology should make meaningful work easier.</h2></div><div><p>Our ambition is to help organisations simplify complexity and make better use of the tools, data and teams they already have—then build thoughtfully toward what comes next.</p><p>We aim to be clear about what is known, what is still a question and how progress can be measured. No invented credentials, customer claims or one-size-fits-all promises.</p></div></div>
      <div className="principle-grid">{principles.map(({ icon: Icon, title, text }, index) => <article key={title}><span>0{index + 1}</span><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className="about-note"><div className="container"><LockKeyhole size={21} /><div><span className="eyebrow">A note on our identity</span><p>Business details, team information, contact information, partner status and credentials must be supplied and verified before launch. No client relationships or certifications are represented here.</p></div></div></section>
    <ContactCta />
  </>;
}

export function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => body.append(key, String(value)));
    body.set('form-name', 'contact');
    setSubmissionStatus('sending');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) {
        setSubmissionStatus('error');
        return;
      }

      form.reset();
      setSubmissionStatus('success');
    } catch {
      setSubmissionStatus('error');
    }
  };
  return <>
    <PageHero kicker="Contact us" title="Good conversations start with a question." text="Tell us a little about what you’re looking to achieve. We’ll use these details to understand your enquiry and respond to you." />
    <section className="contact-section"><div className="container contact-layout">
      <div className="contact-aside"><span className="eyebrow">Let’s get started</span><h2>What would you like to make possible?</h2><p>Share a challenge, an idea or a question. We can explore what the right next step might look like.</p><div className="contact-aside-note"><CircleHelp size={18} /><p>Send us your enquiry using the form, or email us directly at <a href="mailto:info@jkainfotech.com">info@jkainfotech.com</a>.</p></div><div className="contact-aside-detail"><span className="contact-aside-icon"><Mail size={17} /></span><div><small>Email us</small><a href="mailto:info@jkainfotech.com">info@jkainfotech.com</a></div></div><div className="contact-aside-detail"><span className="contact-aside-icon"><MapPin size={17} /></span><div><small>Office address</small><address>The Leeming Building, Ludgate Hill,<br />Leeds, England, LS2 7HZ</address></div></div>
      </div>
      <form className="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div hidden><label>Leave this field empty: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
        <div className="form-heading"><h2>Tell us about your project</h2><p>Fields marked with an asterisk are required.</p></div>
        <div className="form-row"><label>Full name *<input name="name" autoComplete="name" required minLength={2} placeholder="Your name" /></label><label>Business email *<input type="email" name="email" autoComplete="email" required placeholder="you@company.com" /></label></div>
        <div className="form-row"><label>Company name *<input name="company" autoComplete="organization" required minLength={2} placeholder="Your organisation" /></label><label>Service of interest<select name="service" defaultValue=""><option value="">Choose an area</option>{services.map((service) => <option value={service.shortTitle} key={service.path}>{service.shortTitle}</option>)}<option value="Other">Other / not sure yet</option></select></label></div>
        <label>How can we help? *<textarea name="message" required minLength={10} rows={5} placeholder="A few details about your goals or challenge…" /></label>
        <label className="consent-checkbox"><input type="checkbox" name="consent" required /><span>I agree that JKA InfoTech may use these details to respond to my enquiry. See our <Link to="/privacy">Privacy Policy</Link>. *</span></label>
        <button className="button form-submit" type="submit" disabled={submissionStatus === 'sending'}>{submissionStatus === 'sending' ? 'Sending…' : 'Submit enquiry'} <ArrowRight size={16} /></button>
        <p className="form-demo-note"><ShieldCheck size={15} />Your enquiry will be sent securely to our team.</p>
        {submissionStatus === 'success' && <p className="form-status" role="status">Thank you. Your enquiry has been sent, and our team will be in touch.</p>}
        {submissionStatus === 'error' && <p className="form-status form-status-error" role="alert">We couldn’t send your enquiry. Please try again or email <a href="mailto:info@jkainfotech.com">info@jkainfotech.com</a>.</p>}
      </form>
    </div></section>
  </>;
}

export function PolicyPage({ kind }: { kind: 'privacy' | 'cookies' }) {
  const isPrivacy = kind === 'privacy';
  return <>
    <PageHero kicker={isPrivacy ? 'Privacy' : 'Cookie policy'} title={isPrivacy ? 'Your information, handled with care.' : 'Clear choices about cookies.'} text={`${isPrivacy ? 'A plain-language starting point for how an organisation may handle personal information.' : 'An overview of storage used by this demonstration site.'} This policy is a template and must be reviewed against actual business practices before publication.`} />
    <section className="section policy-section"><div className="container policy-layout"><aside className="policy-aside"><ShieldCheck size={22} /><span className="eyebrow">Transparency first</span><p>Template policy · Review and update before launch</p></aside><div className="policy-copy">
      {isPrivacy ? <>
        <h2>About this policy</h2><p>This is a starter template for JKA InfoTech, a placeholder business identity. It is not legal advice. Before publication, confirm the organisation’s legal identity, contact details, lawful bases, retention periods, processors and applicable privacy requirements.</p>
        <h2>Information you choose to provide</h2><p>When you submit the contact form, the information you provide is sent through Netlify Forms so JKA InfoTech can respond to your enquiry. Before launch, confirm Netlify’s processing terms, access controls and retention settings and update this notice with the organisation’s verified privacy practices.</p>
        <h2>Cookies and local storage</h2><p>This site stores your cookie preference in your browser’s local storage so it can remember your selection. No analytics or advertising integrations are active in this demonstration. Update this policy if analytics, embedded media or other non-essential technologies are introduced.</p>
        <h2>Your choices and rights</h2><p>Applicable rights depend on your location and the organisation’s role. Provide verified contact information and instructions for privacy requests before launch.</p>
      </> : <>
        <h2>Storage used on this site</h2><p>This demonstration website uses browser local storage to remember your cookie preference. The preference is not sent to a server. No analytics or advertising cookies are currently configured.</p>
        <h2>Essential storage</h2><p>Essential storage supports site functionality and remembering your preference. This demonstration does not use a backend session or account system.</p>
        <h2>Optional categories</h2><p>The preference interface includes optional analytics and personalisation categories for future integrations. Turning them on does not activate any service in this demo. Integrate and disclose a service before relying on these settings.</p>
        <h2>Change your preference</h2><p>Use the “Cookie preferences” link in the footer to update or withdraw your saved selection. Clearing this site’s browser storage also removes the saved preference.</p>
      </>}
      <p className="policy-updated">Template content — review date to be confirmed.</p>
    </div></div></section>
  </>;
}
