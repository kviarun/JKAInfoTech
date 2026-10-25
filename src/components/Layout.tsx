import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { navigationGroups, services } from '../data/site';

function Brand() {
  return (
    <Link to="/" className="brand" aria-label="JKA InfoTech home">
      <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
      <span className="brand-name">JKA<span>InfoTech</span></span>
    </Link>
  );
}

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <>
    <div className="tcs-utility">
      <div className="container tcs-utility-inner">
        <span>Microsoft Dynamics 365 · Azure · Microsoft 365 · Java Enterprise</span>
        <div><a href="mailto:info@jkainfotech.com">info@jkainfotech.com</a><Link to="/contact">Contact us</Link></div>
      </div>
    </div>
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
        <nav id="primary-navigation" className={`primary-nav ${mobileOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Home</NavLink>
          {navigationGroups.map((group) => (
            <div className={`nav-group${activeMenu === group.title ? ' menu-open' : ''}`} key={group.title}>
              <button
                className="nav-link nav-trigger"
                type="button"
                aria-expanded={activeMenu === group.title}
                aria-controls={`menu-${group.title.toLowerCase()}`}
                onClick={() => setActiveMenu((current) => current === group.title ? null : group.title)}
              >
                {group.title}<ChevronDown size={14} aria-hidden="true" />
              </button>
              <div className="mega-menu" id={`menu-${group.title.toLowerCase()}`} hidden={activeMenu !== group.title}>
                <div className="mega-menu-heading">
                  <span className="eyebrow">Explore {group.title.toLowerCase()}</span>
                  <p>Practical expertise for what your business needs next.</p>
                  <Link className="text-link" to={group.path}>View all {group.title.toLowerCase()} <ArrowRight size={14} /></Link>
                </div>
                <div className="mega-menu-links">
                  {group.links.map((item) => (
                    <Link to={item.path} className="mega-menu-item" key={item.title}>
                      <span>{item.title}</span><small>{item.description}</small>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <NavLink to="/insights" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Insights</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>About Us</NavLink>
          <Link to="/contact" className="mobile-contact-link">Contact Us</Link>
        </nav>
        <Link to="/contact" className="button button-small header-cta">Let’s talk <ArrowRight size={15} /></Link>
      </div>
      {activeMenu && <button className="menu-scrim" aria-label="Close menu" onClick={() => setActiveMenu(null)} />}
    </header>
    </>
  );
}

export function Footer({ onCookiePreferences }: { onCookiePreferences: () => void }) {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-intro">
          <Brand />
          <p>We help organisations connect business applications, cloud, data and AI to move work forward.</p>
          <Link to="/contact" className="text-link text-link-light">Start a conversation <ArrowRight size={15} /></Link>
        </div>
        <div className="footer-column">
          <h2>Services</h2>
          {services.slice(0, 5).map((service) => <Link key={service.path} to={service.path}>{service.shortTitle}</Link>)}
          <Link to="/services">All services</Link>
        </div>
        <div className="footer-column">
          <h2>Company</h2>
          <Link to="/industries">Industries</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="footer-column footer-contact">
          <h2>Let’s connect</h2>
          <p>Serving organisations in the UK and internationally.</p>
          <a href="mailto:info@jkainfotech.com">info@jkainfotech.com</a>
          <address>The Leeming Building<br />Ludgate Hill<br />Leeds, England, LS2 7HZ</address>
          <Link to="/contact" className="footer-contact-link">Send an enquiry <ArrowRight size={14} /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} JKA InfoTech. All rights reserved. Company number: 07710462</span>
        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/cookies">Cookies</Link>
          <button type="button" onClick={onCookiePreferences}>Cookie preferences</button>
        </div>
      </div>
    </footer>
  );
}

interface CookiePreferences {
  analytics: boolean;
  personalisation: boolean;
}

const CONSENT_KEY = 'jka-cookie-preferences';

export function CookieConsent({ preferencesOpen, onClosePreferences }: { preferencesOpen: boolean; onClosePreferences: () => void }) {
  const [visible, setVisible] = useState(() => localStorage.getItem(CONSENT_KEY) === null);
  const [preferences, setPreferences] = useState<CookiePreferences>({ analytics: false, personalisation: false });
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (preferencesOpen) setShowSettings(true);
  }, [preferencesOpen]);

  const save = (next: CookiePreferences) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
    setPreferences(next);
    setVisible(false);
    setShowSettings(false);
    onClosePreferences();
  };

  if (!visible && !showSettings) return null;
  return (
    <div className="consent-layer" role="presentation">
      {showSettings && <button className="consent-scrim" onClick={() => { setShowSettings(false); onClosePreferences(); }} aria-label="Close cookie preferences" />}
      <section className={`consent-panel${showSettings ? ' consent-settings' : ''}`} role={showSettings ? 'dialog' : 'region'} aria-modal={showSettings || undefined} aria-labelledby="cookie-title">
        <div className="consent-copy">
          <span className="eyebrow">Your privacy matters</span>
          <h2 id="cookie-title">{showSettings ? 'Cookie preferences' : 'A small note about cookies'}</h2>
          <p>Essential storage keeps this site working. No analytics or advertising cookies are currently used. You can choose whether to allow optional categories for future integrations.</p>
          {showSettings && (
            <div className="preference-options">
              <label><span><strong>Essential</strong><small>Required for core site functionality.</small></span><input type="checkbox" checked disabled aria-label="Essential storage always active" /></label>
              <label><span><strong>Analytics</strong><small>Helps understand aggregate site usage if configured.</small></span><input type="checkbox" checked={preferences.analytics} onChange={(event) => setPreferences((current) => ({ ...current, analytics: event.target.checked }))} /></label>
              <label><span><strong>Personalisation</strong><small>Remembers optional preferences if configured.</small></span><input type="checkbox" checked={preferences.personalisation} onChange={(event) => setPreferences((current) => ({ ...current, personalisation: event.target.checked }))} /></label>
            </div>
          )}
        </div>
        <div className="consent-actions">
          {!showSettings ? (
            <>
              <button className="button button-outline button-light" onClick={() => save({ analytics: false, personalisation: false })}>Essential only</button>
              <button className="button button-light" onClick={() => save({ analytics: true, personalisation: true })}>Allow optional</button>
              <button className="consent-settings-link" onClick={() => setShowSettings(true)}>Preferences</button>
            </>
          ) : (
            <>
              <button className="button button-outline button-light" onClick={() => save({ analytics: false, personalisation: false })}>Essential only</button>
              <button className="button button-light" onClick={() => save(preferences)}>Save preferences</button>
              <button className="consent-settings-link" onClick={() => { setShowSettings(false); onClosePreferences(); }}>Cancel</button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
