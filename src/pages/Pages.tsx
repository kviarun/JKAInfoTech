import { FormEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Check, ChevronDown, CircleHelp, Clock3, Compass, MapPin,
  Layers3, LockKeyhole, Mail, ShieldCheck, Sparkles, Target,
} from 'lucide-react';
import { OfferingDeepDive } from '../components/Interactive';
import { industries, insights, services, type Service } from '../data/site';
import type { Insight } from '../data/insights';

export function PageHero({ kicker, title, text, tone = 'light', children }: { kicker: string; title: string; text: string; tone?: 'light' | 'dark'; children?: React.ReactNode }) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="container page-hero-inner">
        <div><span className="eyebrow">{kicker}</span><h1>{title}</h1><p>{text}</p>{children}</div>
        <div className="page-hero-orb" aria-hidden="true"><span className="orb-ring orb-ring-a" /><span className="orb-ring orb-ring-b" /><span className="orb-ring orb-ring-c" /><span className="orb-core"><span /></span></div>
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
      <div className="service-note"><Sparkles size={18} /><p>Not sure which service fits? Describe the problem you’re trying to solve and we’ll suggest the most sensible place to start.</p></div>
    </div></section><ContactCta />
  </>;
}

const relatedSlugs: Record<string, string[]> = {
  '/services/dynamics-365': ['planning-a-dynamics-365-implementation', 'making-digital-transformation-practical'],
  '/services/power-platform': ['power-platform-governance', 'making-digital-transformation-practical'],
  '/services/ai-copilot': ['preparing-knowledge-for-responsible-ai', 'trusted-foundation-for-analytics'],
  '/services/azure-cloud': ['choosing-integration-patterns', 'making-digital-transformation-practical'],
  '/services/data-analytics': ['trusted-foundation-for-analytics', 'preparing-knowledge-for-responsible-ai'],
  '/services/enterprise-integration': ['choosing-integration-patterns', 'planning-a-dynamics-365-implementation'],
};

function relatedInsights(service: Service) {
  const slugs = relatedSlugs[service.path];
  const matches = slugs ? slugs.map((slug) => insights.find((item) => item.slug === slug)).filter((item): item is Insight => Boolean(item)) : [];
  return matches.length ? matches : insights.slice(0, 2);
}

export function ServicePage({ service }: { service: Service }) {
  const Icon = service.icon;
  return <>
    <PageHero kicker={`Services / ${service.shortTitle}`} title={service.title} text={service.intro}><div className="hero-actions page-hero-actions"><Link to="/contact" className="button">Discuss your goals <ArrowRight size={15} /></Link><Link to="/services" className="hero-secondary-link">All services <ArrowUpRight size={15} /></Link></div></PageHero>
    <section className="service-value-section"><div className="container service-value-layout"><span className="icon-frame icon-frame-large"><Icon size={26} /></span><div><span className="eyebrow">Where it usually starts</span><h2>Where {service.shortTitle} work begins.</h2></div><p>Teams usually come to us with {service.challenges.map((challenge) => challenge.charAt(0).toLowerCase() + challenge.slice(1)).join(', ')}.</p></div></section>
    <section className="section page-content-section"><div className="container service-detail-grid">
      <div><PageIntro kicker="What we deliver" title={`${service.shortTitle} capabilities.`} text={service.description} /><div className="capability-list">{service.capabilities.map((capability, index) => <div key={capability}><span>0{index + 1}</span><h3>{capability}</h3><Check size={15} /></div>)}</div></div>
      <aside className="technology-panel"><span className="eyebrow">Technologies</span><h3>What a {service.shortTitle} engagement typically involves.</h3><p>The final selection depends on the systems you already run and the requirements we agree together.</p><div className="technology-tags">{service.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></aside>
    </div></section>
    <OfferingDeepDive path={service.path} />
    <section className="related-band"><div className="container related-layout"><div><span className="eyebrow">Common use cases</span><h2>Start with the work to be done.</h2></div><div className="use-case-list">{service.useCases.map((useCase, index) => <div key={useCase}><span>0{index + 1}</span><p>{useCase}</p><ArrowUpRight size={16} /></div>)}</div></div></section>
    <section className="section page-content-section"><div className="container approach-layout"><div><PageIntro kicker="How we work" title={`How a ${service.shortTitle} project runs.`} text="Four stages, each finishing with an output you can review before the next one begins." /><div className="approach-steps">{service.approach.map((step, index) => <div key={step}><span>{['DISCOVER', 'DESIGN', 'DELIVER', 'EVOLVE'][index]}</span><p>{step}</p></div>)}</div></div><div className="why-panel"><div className="why-panel-icon"><Target size={20} /></div><span className="eyebrow">A typical first step</span><h3>Start with a focused conversation.</h3><p>A short discussion about {service.challenges[0].charAt(0).toLowerCase() + service.challenges[0].slice(1)} is usually the quickest way to define scope and agree what to tackle first.</p><Link to="/contact" className="text-link">Talk to our team <ArrowRight size={14} /></Link></div></div></section>
    <section className="faq-section"><div className="container faq-layout"><div><span className="eyebrow">Questions & answers</span><h2>Common questions about {service.shortTitle}.</h2><p>Points that usually come up before a project starts.</p></div><ServiceFaq service={service} /></div></section>
    <section className="related-insights"><div className="container related-insights-inner"><div><span className="eyebrow">Keep exploring</span><h2>Ideas connected to {service.shortTitle}.</h2></div><div>{relatedInsights(service).map((insight) => <Link to={`/insights/${insight.slug}`} key={insight.slug}><span>{insight.category} · {insight.date}</span><strong>{insight.title}</strong><ArrowRight size={15} /></Link>)}</div></div></section>
    <ContactCta title={`Make ${service.shortTitle} work for your business.`} />
  </>;
}

export function IndustriesPage() {
  return <>
    <PageHero kicker="Industries" title="Technology grounded in your world." text="Industry context matters. Explore how connected applications, cloud, data and automation can support the realities of different sectors." />
    <section className="section page-content-section"><div className="container"><PageIntro kicker="Industry perspectives" title="Where technology helps in each sector." text="Every sector has its own regulation, systems and pace of change. These are the kinds of problems we’re most often asked to look at." />
      <div className="industry-detail-grid">{industries.map(({ title, text, icon: Icon }, index) => <article key={title}><span className="industry-detail-number">0{index + 1} / INDUSTRY</span><Icon size={23} /><h2>{title}</h2><p>{text}</p><div className="industry-tags">{['Applications', 'Connected data', 'Automation'].slice(0, index % 2 ? 2 : 3).map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
    </div></section><ContactCta title="Bring us the challenge your industry is facing." />
  </>;
}

export function StoriesPage() {
  const scenarios = [
    { sector: 'Manufacturing', title: 'Connecting operational and finance information', problem: 'Different views of orders and operations made it harder to understand the status of work.', approach: 'Connect selected business application data, agree shared definitions and create role-focused reporting.', tech: 'Dynamics 365 · Microsoft Fabric · Power BI' },
    { sector: 'Professional services', title: 'Making a recurring approval process easier to manage', problem: 'A manual, email-led process created avoidable hand-offs and limited visibility for teams.', approach: 'Map the workflow, introduce a governed Power Platform experience and monitor adoption.', tech: 'Power Apps · Power Automate · Dataverse' },
    { sector: 'Distribution', title: 'Improving information flow between business systems', problem: 'Point-to-point connections made change difficult and provided limited insight into failures.', approach: 'Establish API and messaging patterns with centralised monitoring and clear ownership.', tech: 'Azure Functions · Service Bus · API Management' },
  ];
  return <>
    <PageHero kicker="Success stories" title="Outcomes begin with understanding."     text="Useful outcomes come from understanding the people, processes and platforms involved. These are the kinds of challenges we are typically asked to help with." />
        <section className="section page-content-section"><div className="container"><PageIntro kicker="Common challenges" title="Examples of problems we help solve." text="Each shows the situation we often meet and the approach we would normally take." />
      <div className="scenario-list">{scenarios.map((scenario, index) => <article key={scenario.title}><div className={`scenario-graphic scenario-graphic-${index + 1}`}><span>SCENARIO / 0{index + 1}</span><div className="scenario-graphic-lines" /><span className="scenario-graphic-shape" /></div><div className="scenario-content"><span className="eyebrow">{scenario.sector}</span><h2>{scenario.title}</h2><dl><div><dt>Challenge</dt><dd>{scenario.problem}</dd></div><div><dt>Approach</dt><dd>{scenario.approach}</dd></div><div><dt>Relevant technologies</dt><dd>{scenario.tech}</dd></div></dl></div></article>)}</div>
    </div></section><ContactCta />
  </>;
}

export function InsightsPage() {
  return <>
    <PageHero kicker="Insights" title="Ideas for the decisions ahead." text="Practical perspectives on business applications, cloud, integration, data and AI, written for the people making technology decisions." />
    <section className="section page-content-section"><div className="container"><PageIntro kicker="Latest articles" title="Technology, without the jargon." text="Guidance drawn from the kinds of questions that come up when organisations plan, build and run business technology." />
      <div className="insight-list-grid">{insights.map((item, index) =>       <article className="insight-list-card" key={item.slug}><div className={`insight-list-art insight-list-art-${index + 1}`}></div><div className="insight-meta"><span>{item.category}</span><span>{item.date} · {item.readTime}</span></div><h2>{item.title}</h2><p>{item.text}</p><Link to={`/insights/${item.slug}`} className="card-link">Read article <ArrowRight size={15} /></Link></article>)}</div>
          </div></section><ContactCta title="Working through a similar decision?" text="Tell us what you’re planning and we’ll share how we’d approach it." />
        </>;
      }

      export function InsightArticlePage() {
        const { slug } = useParams();
        const article = insights.find((item) => item.slug === slug);
        if (!article) return <main className="not-found"><div><span className="eyebrow">Insights</span><h1>We couldn’t find that article.</h1><p>It may have moved. Browse our latest articles instead.</p><Link className="button" to="/insights">All insights</Link></div></main>;
        const more = insights.filter((item) => item.slug !== article.slug).slice(0, 2);
        return <>
          <PageHero kicker={`Insights / ${article.category}`} title={article.title} text={`${article.date} · ${article.readTime} · JKA InfoTech`} />
          <section className="section policy-section"><div className="container policy-layout"><aside className="policy-aside"><span className="eyebrow">Key takeaways</span>{article.takeaways.map((point) => <p key={point}>{point}</p>)}</aside><div className="policy-copy">
            <p>{article.text}</p>
            {article.sections.map((section) => <div key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>)}
            <p><Link to="/insights" className="text-link">Back to all insights <ArrowRight size={14} /></Link></p>
          </div></div></section>
          <section className="related-insights"><div className="container related-insights-inner"><div><span className="eyebrow">Keep reading</span><h2>More from our team.</h2></div><div>{more.map((item) => <Link to={`/insights/${item.slug}`} key={item.slug}><span>{item.category} · {item.date}</span><strong>{item.title}</strong><ArrowRight size={15} /></Link>)}</div></div></section>
          <ContactCta title="Want to talk this through?" text="If this reflects a decision you’re facing, we’re happy to discuss it." />
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
    <PageHero kicker="About JKA InfoTech" title="A technology partner with business in mind." text="We bring technical thinking and business understanding together to help organisations make considered progress across Dynamics 365, Microsoft 365, Azure, Java and data." />
    <section className="section page-content-section"><div className="container about-intro-layout"><div><span className="eyebrow">Our point of view</span><h2>Technology should make meaningful work easier.</h2></div><div><p>Our ambition is to help organisations simplify complexity and make better use of the tools, data and teams they already have—then build thoughtfully toward what comes next.</p><p>We aim to be clear about what is known, what is still a question and how progress can be measured. Scope, assumptions and next steps are written down so everyone involved is working from the same picture.</p></div></div>
      <div className="principle-grid">{principles.map(({ icon: Icon, title, text }, index) => <article key={title}><span>0{index + 1}</span><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <section className="about-note"><div className="container"><LockKeyhole size={21} /><div><span className="eyebrow">Where we are</span><p>JKA InfoTech is based at The Leeming Building, Ludgate Hill, Leeds, and works with organisations in the UK and internationally. Registered in England and Wales, company number 07710462.</p></div></div></section>
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
    <PageHero kicker={isPrivacy ? 'Privacy' : 'Cookie policy'} title={isPrivacy ? 'Your information, handled with care.' : 'Clear choices about cookies.'} text={isPrivacy ? 'How JKA InfoTech collects, uses and protects the personal information you share through this website.' : 'What this website stores in your browser, and how to change your choice.'} />
        <section className="section policy-section"><div className="container policy-layout"><aside className="policy-aside"><ShieldCheck size={22} /><span className="eyebrow">{isPrivacy ? 'Privacy' : 'Cookies'}</span><p>Last updated 25 October 2026</p><p>Questions: <a href="mailto:info@jkainfotech.com">info@jkainfotech.com</a></p></aside><div className="policy-copy">
      {isPrivacy ? <>
            <h2>Who we are</h2><p>JKA InfoTech (company number 07710462) is based at The Leeming Building, Ludgate Hill, Leeds, England, LS2 7HZ. We are the controller of the personal information described in this notice. You can contact us at info@jkainfotech.com.</p>
            <h2>Information you provide</h2><p>When you submit the contact form we collect your name, business email address, company name, the service you are interested in and the message you write. The form is processed by Netlify, which hosts this website, and a notification is sent to our enquiries mailbox.</p>
            <h2>How we use it</h2><p>We use these details only to read and respond to your enquiry and to keep a record of the conversation. We do not sell your information or use it for unrelated marketing without your agreement.</p>
            <h2>How long we keep it</h2><p>Enquiry details are kept for as long as needed to respond and for a reasonable period afterwards, then deleted. If you become a client, information is handled under the terms of our engagement.</p>
            <h2>Cookies and local storage</h2><p>This site stores your cookie preference in your browser’s local storage. We do not currently use analytics or advertising cookies. See our cookie policy for details.</p>
            <h2>Your rights</h2><p>Under UK data protection law you can ask to access, correct or delete your personal information, object to its use, or ask us to restrict it. Email info@jkainfotech.com and we will respond. You also have the right to complain to the Information Commissioner’s Office at ico.org.uk.</p>
          </> : <>
            <h2>What this site stores</h2><p>This website stores a single item in your browser’s local storage to remember your cookie choice. It is not sent to a server. We do not currently use analytics or advertising cookies.</p>
            <h2>Essential storage</h2><p>Essential storage keeps the site working and remembers your preference. The site has no accounts or login sessions.</p>
            <h2>Optional categories</h2><p>The preference panel includes analytics and personalisation categories. Neither is active today. If we introduce them, we will update this page and only use them if you have allowed them.</p>
            <h2>Change your preference</h2><p>Use the “Cookie preferences” link in the footer to update or withdraw your selection. Clearing this site’s data in your browser also removes it.</p>
          </>}
        </div></div></section>
  </>;
}
