# JKA InfoTech website

A responsive React, TypeScript and Vite website starter for JKA InfoTech. The business email and Leeds address have been supplied; the canonical domain, legal identity and sample content remain to be confirmed.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

```powershell
npm install
npm run dev
```

Vite prints the local development URL when the server starts.

## Pages

- Home
- Services overview and six service detail pages
- Industries
- Success stories (illustrative scenarios only)
- Insights (demonstration article content)
- About
- Contact
- Privacy policy and cookie policy templates

The site uses React Router for navigation, Lucide React for icons and Tailwind CSS tooling alongside a custom responsive stylesheet. The home page includes a keyboard-accessible interactive capability showcase with locally served photos for people, infrastructure, computers and office spaces.

## Image assets

The four showcase photos are locally stored under `public/images/` and were sourced from Unsplash. They are cropped and resized for the site:

- `people-team.jpg` — photo `1521737711867-e3b97375f902`
- `network-infrastructure.jpg` — photo `1558494949-ef010cbdcc31`
- `computer-workspace.jpg` — photo `1516321318423-f06f85e504b3`
- `office-space.jpg` — photo `1497366754035-f200968a6e72`

Source: [Unsplash](https://unsplash.com/license).

## Validate and build

```powershell
npm run build
npm run preview
```

The production build runs the TypeScript project check before Vite compiles the site.

## Configuration before launch

1. Replace `https://www.example.com` in `index.html`, `src/App.tsx`, `public/robots.txt` and `public/sitemap.xml` with the approved canonical domain.
2. Confirm the legal identity and any approved social profiles. The supplied contact email and Leeds address are displayed on the site.
3. Replace demonstration insight content and illustrative scenarios with real, reviewed material. No customer results, partner status, certifications or awards are claimed.
4. Review the privacy and cookie policy templates against actual business practices and legal requirements.
5. Configure a real contact form provider/API and update the form status behavior. Until connected, the form validates in the browser and explicitly reports that it has not sent the enquiry.
6. If adding analytics or other non-essential technologies, connect them to the consent choices and update the cookie policy. No analytics or advertising scripts are active by default.
7. Review the sample service capabilities against the services JKA InfoTech is confirmed to provide.

## Deployment

Run `npm run build` and deploy the generated `dist` directory to a static hosting provider with SPA fallback/rewrite behavior enabled so direct visits to nested routes resolve to `index.html`. Configure the final domain and sitemap before submitting it to search engines.
