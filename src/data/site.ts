import {
  Activity, ArrowUpRight, Boxes, BrainCircuit, Cloud, Database, Factory,
  Headset, Layers3, LineChart, Link2, PackageCheck, ShoppingBag, Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  shortTitle: string;
  path: string;
  icon: LucideIcon;
  description: string;
  intro: string;
  capabilities: string[];
  technologies: string[];
  useCases: string[];
  challenges: string[];
  approach: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    title: 'Microsoft Dynamics 365',
    shortTitle: 'Dynamics 365',
    path: '/services/dynamics-365',
    icon: Layers3,
    description: 'Bring finance, operations, sales and service into a more connected business platform.',
    intro: 'Make your core business applications work harder. We help teams shape, implement and improve Dynamics 365 around the way their organisation operates.',
    capabilities: ['Finance and operations transformation', 'Sales and customer service', 'Implementation and configuration', 'Data migration and integration', 'Extensions, security and governance', 'Post-go-live support and optimisation'],
    technologies: ['Dynamics 365 Finance', 'Supply Chain Management', 'Sales', 'Customer Service', 'Dataverse', 'Power Platform'],
    useCases: ['Unifying financial and operational processes', 'Creating a clearer customer and sales view', 'Improving order-to-cash workflows'],
    challenges: ['Fragmented systems and duplicate data', 'Legacy processes that slow teams down', 'Low visibility across finance and operations'],
    approach: ['Understand goals, people and processes', 'Design a fit-for-purpose solution', 'Deliver in clear, governed increments', 'Support adoption and continuous improvement'],
    faqs: [
      { question: 'Can you support an existing Dynamics 365 environment?', answer: 'Yes. An engagement can start with a focused review of configuration, integrations, performance and user needs, followed by a prioritised improvement plan.' },
      { question: 'Do you handle data migration?', answer: 'Migration planning and delivery can be part of the project, including data quality, mapping, rehearsal and validation.' },
      { question: 'What happens after go-live?', answer: 'Support can include issue triage, knowledge transfer, optimisation and a roadmap for future releases. Scope is agreed for each engagement.' },
    ],
  },
  {
    title: 'Power Platform and Automation',
    shortTitle: 'Power Platform',
    path: '/services/power-platform',
    icon: Workflow,
    description: 'Turn repetitive work into connected, governed digital processes.',
    intro: 'Empower teams to improve the way work gets done with the right balance of low-code speed, sound architecture and sustainable governance.',
    capabilities: ['Canvas and model-driven Power Apps', 'Dataverse data modelling', 'Power Automate workflows', 'Power Pages experiences', 'Power BI reporting', 'Copilot Studio and platform governance'],
    technologies: ['Power Apps', 'Dataverse', 'Power Automate', 'Power Pages', 'Power BI', 'Copilot Studio'],
    useCases: ['Digitising approval and case workflows', 'Replacing fragile spreadsheet processes', 'Building governed self-service experiences'],
    challenges: ['Manual processes that create avoidable rework', 'Unmanaged apps and disconnected environments', 'Limited visibility into process performance'],
    approach: ['Discover priority processes and users', 'Set environment, security and ALM foundations', 'Build and validate in short iterations', 'Enable owners to operate and improve solutions'],
    faqs: [
      { question: 'Can we start with one process?', answer: 'Yes. A focused pilot can validate the user experience and governance approach before expanding to additional workflows.' },
      { question: 'How do you prevent app sprawl?', answer: 'Environment strategy, ownership, deployment controls and lifecycle management are designed alongside the solution.' },
      { question: 'Can Power Platform connect to existing systems?', answer: 'Integration options depend on the systems, data and licensing in place. These are assessed during discovery.' },
    ],
  },
  {
    title: 'Azure and Cloud Services',
    shortTitle: 'Azure & Cloud',
    path: '/services/azure-cloud',
    icon: Cloud,
    description: 'Modernise cloud foundations and build secure, reliable services.',
    intro: 'Move beyond lift-and-shift thinking. Plan practical cloud improvements that align architecture, security, reliability and the needs of your teams.',
    capabilities: ['Cloud readiness and migration planning', 'Application modernisation', 'Azure Functions and Logic Apps', 'Identity and security design', 'Monitoring and reliability', 'Ongoing cloud optimisation'],
    technologies: ['Azure Functions', 'Logic Apps', 'Azure Service Bus', 'Azure API Management', 'Microsoft Entra ID', 'Azure Monitor'],
    useCases: ['Modernising a legacy application safely', 'Automating cloud-based business processes', 'Improving resilience and observability'],
    challenges: ['Aging platforms with rising support overhead', 'Inconsistent identity and security controls', 'Cloud costs or reliability that are hard to explain'],
    approach: ['Assess workloads, constraints and risks', 'Define an incremental target architecture', 'Migrate and modernise with validation', 'Monitor, tune and transfer knowledge'],
    faqs: [
      { question: 'Do all applications need to move to cloud?', answer: 'No. Recommendations should account for business value, technical constraints, risk and total cost rather than assume a single destination.' },
      { question: 'Can you work with our existing Azure setup?', answer: 'An initial assessment can identify strengths, risks and practical next steps in the current environment.' },
      { question: 'How are security and reliability addressed?', answer: 'They are considered from discovery and design through deployment, monitoring and operational handover.' },
    ],
  },
  {
    title: 'AI and Copilot Solutions',
    shortTitle: 'AI & Copilot',
    path: '/services/ai-copilot',
    icon: BrainCircuit,
    description: 'Apply AI thoughtfully to knowledge, decisions and everyday work.',
    intro: 'Find responsible, valuable ways to bring AI into business operations, grounded in trusted data, clear controls and real user needs.',
    capabilities: ['AI readiness and opportunity discovery', 'Enterprise knowledge retrieval', 'AI agents and workflow automation', 'Copilot Studio solutions', 'Responsible AI and access controls', 'Measurement and adoption planning'],
    technologies: ['Microsoft Copilot Studio', 'Azure AI services', 'Microsoft 365 Copilot', 'Microsoft Fabric', 'Power Platform', 'Microsoft Entra'],
    useCases: ['Finding answers across approved business knowledge', 'Supporting routine service and operations tasks', 'Augmenting workflow steps with AI assistance'],
    challenges: ['Unclear AI opportunities and ownership', 'Knowledge that is hard to find or trust', 'Concerns about privacy, security and governance'],
    approach: ['Assess readiness, users and data boundaries', 'Select a bounded, measurable use case', 'Prototype with human oversight and controls', 'Evaluate outcomes and scale responsibly'],
    faqs: [
      { question: 'Will AI make decisions without human review?', answer: 'The level of autonomy is a design decision. Higher-impact workflows should include appropriate human oversight and controls.' },
      { question: 'How do you protect business information?', answer: 'Access boundaries, data handling and security requirements are established before selecting and building a solution.' },
      { question: 'Do you guarantee productivity gains?', answer: 'No. Outcomes depend on the use case and adoption. We establish measures to evaluate value rather than promise unsupported results.' },
    ],
  },
  {
    title: 'Data Analytics and Microsoft Fabric',
    shortTitle: 'Data & Analytics',
    path: '/services/data-analytics',
    icon: Database,
    description: 'Create trusted data foundations for clearer reporting and decisions.',
    intro: 'Connect data from across the organisation, improve confidence in reporting and give teams a stronger foundation for analytics and AI.',
    capabilities: ['Data strategy and architecture', 'Data engineering and integration', 'Microsoft Fabric foundations', 'Power BI models and reporting', 'Data quality and governance', 'Analytics adoption and enablement'],
    technologies: ['Microsoft Fabric', 'OneLake', 'Power BI', 'Azure Data Factory', 'Azure SQL', 'Dataverse'],
    useCases: ['Bringing operational data into a trusted view', 'Modernising reporting and analytics platforms', 'Preparing well-governed data for AI'],
    challenges: ['Conflicting reports and definitions', 'Data pipelines that are difficult to maintain', 'Limited confidence in business-critical metrics'],
    approach: ['Map decisions, data sources and users', 'Design a governed data foundation', 'Build pipelines and semantic models iteratively', 'Enable teams to use and maintain insights'],
    faqs: [
      { question: 'Can you help us move from existing Power BI reports?', answer: 'Yes. Existing reports and models can be reviewed and prioritised for consolidation, improvement or migration.' },
      { question: 'Is Microsoft Fabric required?', answer: 'Not necessarily. Platform choices should fit the existing environment, requirements and operating model.' },
      { question: 'How do you improve trust in metrics?', answer: 'Clear ownership, definitions, quality checks and shared semantic models help make reporting more consistent.' },
    ],
  },
  {
    title: 'Enterprise Integration',
    shortTitle: 'Integration',
    path: '/services/enterprise-integration',
    icon: Link2,
    description: 'Connect applications and data with integration patterns built to last.',
    intro: 'Reduce friction between business systems with integration architecture that is observable, secure and designed for change.',
    capabilities: ['Integration strategy and architecture', 'API design and management', 'Event-driven integration', 'Azure Functions and Logic Apps', 'Service Bus messaging', 'Monitoring, support and reliability'],
    technologies: ['Azure API Management', 'Azure Service Bus', 'Azure Functions', 'Logic Apps', 'Dataverse', 'Microsoft Entra ID'],
    useCases: ['Connecting Dynamics 365 with core systems', 'Improving order and customer data flows', 'Replacing brittle point-to-point interfaces'],
    challenges: ['Disconnected applications and duplicate entry', 'Fragile integrations with limited monitoring', 'Difficulty adding new systems or partners'],
    approach: ['Map systems, data and integration needs', 'Choose secure patterns and clear ownership', 'Implement with monitoring and failure handling', 'Document and support the operating model'],
    faqs: [
      { question: 'Can you work with non-Microsoft systems?', answer: 'Yes. The right integration pattern depends on the systems, interfaces, data sensitivity and operational constraints involved.' },
      { question: 'Do you provide managed support?', answer: 'Support arrangements can be scoped to the integration estate and the organisation’s operating needs.' },
      { question: 'How do you handle integration failures?', answer: 'Reliability patterns, monitoring, alerting and recovery procedures are considered as part of the design.' },
    ],
  },
];

export const industries = [
  { title: 'Manufacturing', icon: Factory, text: 'Connect planning, production and supply chain information to support more coordinated operations.' },
  { title: 'Retail & e-commerce', icon: ShoppingBag, text: 'Bring customer, commerce and inventory processes closer together across channels.' },
  { title: 'Financial services', icon: LineChart, text: 'Support governed processes, trusted data and clearer operational reporting.' },
  { title: 'Healthcare', icon: Headset, text: 'Explore secure, practical ways to connect workflows and improve information access.' },
  { title: 'Logistics & distribution', icon: PackageCheck, text: 'Improve visibility across orders, fulfilment and the flow of operational data.' },
  { title: 'Professional services', icon: Boxes, text: 'Reduce administration and connect client, project and finance processes.' },
];

export const insights = [
  { category: 'Dynamics 365', date: 'Demonstration content', title: 'Planning a Dynamics 365 implementation around business outcomes', text: 'A practical starting point for aligning scope, stakeholders and process change.' },
  { category: 'Power Platform', date: 'Demonstration content', title: 'A thoughtful approach to Power Platform governance', text: 'How ownership, environments and lifecycle practices can support sustainable low-code delivery.' },
  { category: 'AI & data', date: 'Demonstration content', title: 'Preparing enterprise knowledge for responsible AI', text: 'Considerations for access, trust and user experience before introducing AI-assisted work.' },
  { category: 'Azure', date: 'Demonstration content', title: 'Choosing integration patterns for a changing business', text: 'A guide to thinking about APIs, events and workflow automation in context.' },
  { category: 'Data & analytics', date: 'Demonstration content', title: 'Building a more trusted foundation for analytics', text: 'Why definitions, data ownership and quality matter as much as platform choices.' },
  { category: 'Transformation', date: 'Demonstration content', title: 'Making digital transformation practical', text: 'Turn a broad ambition into a manageable sequence of decisions and improvements.' },
];

export const navigationGroups = [
  {
    title: 'Services',
    path: '/services',
    links: services.map(({ title, path, description }) => ({ title, path, description })),
  },
  {
    title: 'Industries',
    path: '/industries',
    links: industries.map(({ title }, index) => ({ title, path: '/industries', description: ['Manufacturing and supply chain', 'Connected customer experiences', 'Governed, data-led operations', 'Secure digital workflows', 'Logistics and distribution visibility', 'Professional services operations'][index] })),
  },
  {
    title: 'Solutions',
    path: '/services',
    links: [
      { title: 'Business applications', path: '/services/dynamics-365', description: 'Connect core processes' },
      { title: 'Cloud modernisation', path: '/services/azure-cloud', description: 'Build for what comes next' },
      { title: 'Intelligent automation', path: '/services/power-platform', description: 'Make work flow better' },
      { title: 'Data and AI', path: '/services/data-analytics', description: 'Turn information into insight' },
    ],
  },
];

export const capabilityIcons = [Activity, Cloud, Database, BrainCircuit, ArrowUpRight];
