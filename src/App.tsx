import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { CookieConsent, Footer, Header } from './components/Layout';
import { HomePage } from './components/HomePage';
import { AboutPage, ContactPage, IndustriesPage, InsightArticlePage, InsightsPage, PolicyPage, ServicePage, ServicesPage, StoriesPage } from './pages/Pages';
import { insights, services } from './data/site';

const SITE_ORIGIN = 'https://www.example.com';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const titleMap: Record<string, [string, string]> = {
      '/': ['JKA InfoTech | Technology that transforms business', 'Business-led technology consulting across Microsoft business apps, cloud, integration, data and AI.'],
      '/services': ['Technology Consulting Services | JKA InfoTech', 'Explore business applications, cloud, automation, data, AI and integration services.'],
      '/industries': ['Industry Solutions | JKA InfoTech', 'Explore practical technology perspectives for manufacturing, retail, finance and more.'],
      '/success-stories': ['Success Stories | JKA InfoTech', 'Examples of business technology challenges and how we approach them.'],
      '/insights': ['Insights | JKA InfoTech', 'Articles on Dynamics 365, Power Platform, Azure integration, data and AI.'],
      '/about': ['About JKA InfoTech', 'Our business-led approach to enterprise technology consulting.'],
      '/contact': ['Contact JKA InfoTech', 'Start a conversation about your business technology priorities.'],
      '/privacy': ['Privacy Policy | JKA InfoTech', 'How JKA InfoTech collects, uses and protects personal information.'],
      '/cookies': ['Cookie Policy | JKA InfoTech', 'What this website stores in your browser and how to change your preference.'],
    };
    const service = services.find((item) => item.path === pathname);
    const article = insights.find((item) => pathname === `/insights/${item.slug}`);
    const [title, description] = service
      ? [`${service.title} | JKA InfoTech`, service.description]
      : article
        ? [`${article.title} | JKA InfoTech`, article.text]
        : titleMap[pathname] ?? ['JKA InfoTech | Technology that transforms business', 'Business-led technology consulting for connected, intelligent organisations.'];
    document.title = title;
    let descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.content = description;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_ORIGIN}${pathname}`;
    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;
    let ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = description;
  }, [pathname]);
  return null;
}

function NotFound() {
  return <main className="not-found"><div><span className="eyebrow">404 / Not found</span><h1>This page isn’t here.</h1><p>The address may have changed, or the page may no longer exist.</p><a className="button" href="/">Back to home</a></div></main>;
}

export default function App() {
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  return (
    <>
      <ScrollToTop />
      <Seo />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          {services.map((service) => <Route key={service.path} path={service.path} element={<ServicePage service={service} />} />)}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/success-stories" element={<StoriesPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PolicyPage kind="privacy" />} />
          <Route path="/cookies" element={<PolicyPage kind="cookies" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer onCookiePreferences={() => setPreferencesOpen(true)} />
      <CookieConsent preferencesOpen={preferencesOpen} onClosePreferences={() => setPreferencesOpen(false)} />
    </>
  );
}
