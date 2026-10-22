export interface SubOffering {
  title: string;
  text: string;
  points: string[];
}

export interface Offering {
  id: string;
  name: string;
  short: string;
  path: string;
  tagline: string;
  summary: string;
  image: string;
  alt: string;
  tags: string[];
  highlights: { value: string; label: string }[];
  subOfferings: SubOffering[];
}

export const offerings: Offering[] = [
  {
    id: 'dynamics',
    name: 'Microsoft Dynamics 365',
    short: 'Dynamics 365',
    path: '/services/dynamics-365',
    tagline: 'One connected platform for finance, supply chain, sales and service.',
    summary: 'Replace disconnected systems with Dynamics 365 business applications that give every team the same, current view of customers, orders, inventory and money.',
    image: '/images/office-space.jpg',
    alt: 'A bright contemporary office with collaborative desks.',
    tags: ['Finance', 'Supply Chain', 'Sales', 'Customer Service', 'Dataverse'],
    highlights: [{ value: '6', label: 'Dynamics 365 application areas' }, { value: 'End-to-end', label: 'Implement, integrate, support' }],
    subOfferings: [
      { title: 'Finance & Operations', text: 'Modern ERP for financial management, procurement, project accounting and operations.', points: ['General ledger, AP/AR and fixed assets', 'Budgeting, cash and bank management', 'Multi-entity and multi-currency reporting'] },
      { title: 'Supply Chain Management', text: 'Plan, produce, warehouse and deliver with greater visibility.', points: ['Demand planning and master planning', 'Warehouse and transport management', 'Manufacturing and inventory control'] },
      { title: 'Sales & Customer Service', text: 'Give customer-facing teams a single view and guided workflows.', points: ['Lead-to-cash pipeline management', 'Omnichannel case management', 'Knowledge and service-level tracking'] },
      { title: 'Implementation & Data Migration', text: 'Structured delivery with governance, data quality and training built in.', points: ['Fit-gap analysis and solution design', 'Data cleansing, mapping and rehearsal', 'Testing, cut-over and hyper-care'] },
      { title: 'Extensions & Integration', text: 'Extend the platform without making upgrades painful.', points: ['X++ and Power Platform extensions', 'API and event-based integration', 'Security roles and audit controls'] },
    ],
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    short: 'Azure',
    path: '/services/azure-cloud',
    tagline: 'Secure, scalable cloud foundations and modern applications.',
    summary: 'Plan and run cloud workloads with sound architecture, strong security and clear cost control, from first migration to continuous optimisation.',
    image: '/images/network-infrastructure.jpg',
    alt: 'Illuminated server racks representing cloud infrastructure.',
    tags: ['Landing zones', 'Functions', 'Logic Apps', 'Service Bus', 'Entra ID'],
    highlights: [{ value: '4', label: 'Stage migration approach' }, { value: '24/7', label: 'Monitoring and operations options' }],
    subOfferings: [
      { title: 'Cloud Migration & Landing Zones', text: 'Assess workloads and move them safely onto a well-governed Azure foundation.', points: ['Readiness and cost assessment', 'Landing zone and network design', 'Lift, shift and re-platform patterns'] },
      { title: 'Application Modernisation', text: 'Evolve legacy applications to cloud-native patterns at a sensible pace.', points: ['App Service, containers and AKS', 'Azure Functions and serverless', 'Database modernisation'] },
      { title: 'Integration & Messaging', text: 'Reliable connections between applications, partners and data.', points: ['API Management and Logic Apps', 'Service Bus and Event Grid', 'Monitoring and failure handling'] },
      { title: 'Security & Identity', text: 'Protect identities, data and workloads with defence in depth.', points: ['Microsoft Entra ID and conditional access', 'Defender for Cloud and policy', 'Key management and secrets'] },
      { title: 'Operations & FinOps', text: 'Keep cloud reliable, observable and cost-effective.', points: ['Azure Monitor and alerting', 'Backup and disaster recovery', 'Cost reporting and optimisation'] },
    ],
  },
  {
    id: 'm365',
    name: 'Microsoft 365',
    short: 'Microsoft 365',
    path: '/services/microsoft-365',
    tagline: 'A secure, connected workplace that people actually use.',
    summary: 'Bring communication, content and security together in Microsoft 365, and prepare your organisation to use Copilot responsibly.',
    image: '/images/people-team.jpg',
    alt: 'Colleagues collaborating around a table.',
    tags: ['Teams', 'SharePoint', 'Exchange', 'Intune', 'Purview', 'Copilot'],
    highlights: [{ value: '5', label: 'Workplace service areas' }, { value: 'Adoption-led', label: 'Training and change included' }],
    subOfferings: [
      { title: 'Collaboration with Teams & SharePoint', text: 'Structured workspaces, intranet and document management that are easy to find and govern.', points: ['Information architecture and site design', 'Teams governance and lifecycle', 'Intranet and knowledge portals'] },
      { title: 'Tenant Migration & Consolidation', text: 'Move mail, files and identities with minimal disruption.', points: ['Exchange and file-share migration', 'Tenant-to-tenant consolidation', 'Cut-over planning and user comms'] },
      { title: 'Security, Compliance & Endpoint', text: 'Protect data and devices without slowing people down.', points: ['Conditional access and MFA', 'Intune device management', 'Purview labelling and data loss prevention'] },
      { title: 'Microsoft 365 Copilot Readiness', text: 'Make sure Copilot works with the right content and permissions.', points: ['Permissions and oversharing review', 'Content and label clean-up', 'Use-case and adoption planning'] },
      { title: 'Adoption & Change', text: 'Help teams build new habits around the tools.', points: ['Role-based training', 'Champion networks', 'Usage insight and improvement'] },
    ],
  },
  {
    id: 'java',
    name: 'Java Enterprise',
    short: 'Java Enterprise',
    path: '/services/java-enterprise',
    tagline: 'Resilient enterprise applications and APIs on modern Java.',
    summary: 'Engineer and modernise mission-critical Java systems with Spring, microservices and automated delivery, running on-premises or on Azure.',
    image: '/images/computer-workspace.jpg',
    alt: 'A person using a laptop at a desk with code on screen.',
    tags: ['Java 21', 'Spring Boot', 'Jakarta EE', 'Kafka', 'Kubernetes'],
    highlights: [{ value: 'LTS', label: 'Current Java release focus' }, { value: 'CI/CD', label: 'Automated build, test and deploy' }],
    subOfferings: [
      { title: 'Spring Boot & Microservices', text: 'Well-structured, testable services built for change.', points: ['Domain-driven service design', 'REST, GraphQL and gRPC APIs', 'Resilience and observability patterns'] },
      { title: 'Legacy Modernisation', text: 'Upgrade Java EE and ageing runtimes with a staged roadmap.', points: ['Java EE to Jakarta EE migration', 'Monolith decomposition', 'Automated regression safety nets'] },
      { title: 'Cloud-native on Azure', text: 'Containerise and operate Java workloads on Azure.', points: ['Docker, AKS and Azure Container Apps', 'Azure Spring Apps and App Service', 'Managed databases and messaging'] },
      { title: 'Integration with Microsoft platforms', text: 'Connect Java systems to Dynamics 365, Dataverse and Microsoft 365.', points: ['Dynamics 365 and Dataverse APIs', 'Microsoft Graph integration', 'Entra ID single sign-on'] },
      { title: 'DevSecOps & Support', text: 'Ship safely and keep production healthy.', points: ['Pipelines with quality and security gates', 'Performance and load testing', 'Run support and incident response'] },
    ],
  },
];

export const goalPaths = [
  { goal: 'Streamline finance and operations', offering: 'dynamics' },
  { goal: 'Move to the cloud', offering: 'azure' },
  { goal: 'Modernise how people collaborate', offering: 'm365' },
  { goal: 'Modernise a Java application', offering: 'java' },
  { goal: 'Prepare for Copilot and AI', offering: 'm365' },
  { goal: 'Connect systems with APIs', offering: 'java' },
];

export const heroSlides = [
  { kicker: 'Microsoft Dynamics 365', title: 'Run your business on one connected platform.', text: 'Finance, supply chain, sales and service working from the same data.', offering: 'dynamics', image: '/images/office-space.jpg' },
  { kicker: 'Microsoft Azure', title: 'Build the cloud foundation for what comes next.', text: 'Secure landing zones, modern applications and reliable operations.', offering: 'azure', image: '/images/network-infrastructure.jpg' },
  { kicker: 'Microsoft 365', title: 'A workplace where people collaborate securely.', text: 'Teams, SharePoint, security and Copilot readiness designed for adoption.', offering: 'm365', image: '/images/people-team.jpg' },
  { kicker: 'Java Enterprise', title: 'Engineer enterprise software that lasts.', text: 'Spring, microservices and DevSecOps for resilient, modern Java systems.', offering: 'java', image: '/images/computer-workspace.jpg' },
];

export const stats = [
  { value: 4, suffix: '', label: 'Core Microsoft & Java platforms' },
  { value: 8, suffix: '', label: 'Service areas' },
  { value: 20, suffix: '', label: 'Specialist offerings' },
  { value: 6, suffix: '', label: 'Industry perspectives' },
];
