export interface Insight {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  text: string;
  sections: { heading: string; paragraphs: string[] }[];
  takeaways: string[];
}

export const insights: Insight[] = [
  {
    slug: 'planning-a-dynamics-365-implementation',
    category: 'Dynamics 365',
    date: '14 October 2026',
    readTime: '6 min read',
    title: 'Planning a Dynamics 365 implementation around business outcomes',
    text: 'Why the most successful programmes start with the process and the people, and treat the platform as the last decision rather than the first.',
    sections: [
      {
        heading: 'Start with the problem, not the product',
        paragraphs: [
          'Most Dynamics 365 programmes begin with a feature list. The more useful starting point is a plain description of what is going wrong today: orders that are keyed twice, month-end close that depends on a spreadsheet, or a sales team that cannot see what service has promised a customer.',
          'Writing down three to five of these problems, with the people who feel them, gives the project a reference point. When scope discussions get difficult later, the question becomes simple: does this change help with one of the problems we agreed to solve?',
        ],
      },
      {
        heading: 'Decide who owns each process',
        paragraphs: [
          'Dynamics 365 forces consistency. If three regions raise a purchase order three different ways, the system will expose that. Someone has to decide which way is right, or agree where a genuine local variation is justified.',
          'Name a process owner for each major area such as order-to-cash, procure-to-pay and customer service. They do not need to be technical. They need the authority to make decisions and the time to attend design sessions.',
        ],
      },
      {
        heading: 'Plan data early',
        paragraphs: [
          'Data migration is usually the activity that surprises teams most. Duplicate customers, inconsistent product codes and unclear history all take time to resolve, and they are rarely visible until the first trial load.',
          'Agree what history genuinely needs to move, assign a business owner for data quality, and schedule at least two full rehearsals before cutover. It is almost always cheaper to archive old records than to clean and migrate them.',
        ],
      },
      {
        heading: 'Deliver in increments people can react to',
        paragraphs: [
          'A long design phase followed by a single big reveal makes it hard to correct course. Working in smaller increments with real users trying real scenarios surfaces gaps while they are still inexpensive to fix.',
          'Build in time for training and adoption as part of delivery, not as an afterthought. A system that is technically complete but poorly understood will not deliver the outcomes the business case promised.',
        ],
      },
    ],
    takeaways: [
      'Agree the business problems before comparing features.',
      'Give every major process a named owner with decision-making authority.',
      'Treat data migration as a workstream of its own, with rehearsals.',
      'Release in increments so users can shape the result.',
    ],
  },
  {
    slug: 'power-platform-governance',
    category: 'Power Platform',
    date: '2 October 2026',
    readTime: '5 min read',
    title: 'A thoughtful approach to Power Platform governance',
    text: 'How ownership, environments and lifecycle practices help low-code delivery stay useful as it grows.',
    sections: [
      {
        heading: 'Governance is what lets adoption continue',
        paragraphs: [
          'Power Platform tends to spread quickly because it is approachable. A team builds an app to replace a spreadsheet, another team follows, and within a year there are hundreds of apps and flows that nobody has a full picture of.',
          'Good governance is not about slowing people down. It is about making it clear what is safe to build, where it should live and who is responsible when something stops working.',
        ],
      },
      {
        heading: 'Separate environments by purpose',
        paragraphs: [
          'A simple, consistent environment strategy removes much of the risk. Many organisations use a personal productivity environment for individual experimentation, shared environments for team solutions, and a controlled development, test and production path for anything the business depends on.',
          'Data loss prevention policies then apply different rules to each. Personal environments may restrict connectors tightly, while production environments allow the specific connections a solution requires.',
        ],
      },
      {
        heading: 'Make ownership visible',
        paragraphs: [
          'Every solution should have an owner and a backup. When someone leaves, flows that run under their account can quietly fail. Using service accounts and solution-aware flows for business-critical automation avoids that dependency on an individual.',
          'A lightweight register of what exists, who owns it and which systems it touches is more valuable than a long policy document that nobody reads.',
        ],
      },
      {
        heading: 'Support the makers',
        paragraphs: [
          'Governance works best when it is paired with enablement. Short guidance on naming, reusable components and when to ask for help makes it easier for makers to do the right thing by default.',
          'A small central team, or a community of practice, can review higher-risk solutions and help good ideas graduate from a team tool into a supported service.',
        ],
      },
    ],
    takeaways: [
      'Use environments to separate experimentation from business-critical solutions.',
      'Apply data policies that match the purpose of each environment.',
      'Record owners and backups so solutions outlive individual people.',
      'Pair controls with training so makers can move quickly and safely.',
    ],
  },
  {
    slug: 'preparing-knowledge-for-responsible-ai',
    category: 'AI & data',
    date: '19 September 2026',
    readTime: '7 min read',
    title: 'Preparing enterprise knowledge for responsible AI',
    text: 'What to check about access, accuracy and ownership before an AI assistant starts answering questions from your documents.',
    sections: [
      {
        heading: 'An assistant is only as good as what it can read',
        paragraphs: [
          'AI assistants that answer questions from internal content, including Microsoft 365 Copilot and custom solutions built on Azure, are very good at surfacing information that already exists. That is also the risk. If a document is overshared, out of date or contradicts another, the assistant will find it.',
          'Before rolling out an assistant widely, it is worth spending time on the content it will draw from.',
        ],
      },
      {
        heading: 'Review permissions first',
        paragraphs: [
          'Copilot respects the access a user already has. Where SharePoint sites, Teams or shared drives have grown broad permissions over the years, people may suddenly find content they were technically allowed to see but never knew about.',
          'A permissions review of sensitive areas such as HR, finance, legal and board material is a sensible first step. Sensitivity labels and site access reviews help keep the result sustainable.',
        ],
      },
      {
        heading: 'Decide what counts as the source of truth',
        paragraphs: [
          'Policies, product information and procedures often exist in several versions. Agree which location is authoritative, retire or archive the rest, and make sure documents carry an owner and a review date.',
          'This is less glamorous than building a chatbot, but it is the work that most affects whether answers can be trusted.',
        ],
      },
      {
        heading: 'Start with a focused use case',
        paragraphs: [
          'Choose one scenario with a clear audience, such as answering internal IT or HR questions, summarising meetings, or helping service agents find the right procedure. Measure what changes for the people using it and gather feedback on wrong or missing answers.',
          'Be clear with users about what the assistant can and cannot do, and how to flag a problem. Trust is built through predictable behaviour, not through ambitious claims.',
        ],
      },
    ],
    takeaways: [
      'Audit permissions before widening access to an AI assistant.',
      'Name the authoritative source for each type of content.',
      'Begin with a single, well-bounded use case and a feedback route.',
      'Be transparent with users about limits and how to report issues.',
    ],
  },
  {
    slug: 'choosing-integration-patterns',
    category: 'Azure',
    date: '4 September 2026',
    readTime: '6 min read',
    title: 'Choosing integration patterns for a changing business',
    text: 'A practical way to decide between APIs, events and scheduled workflows when connecting business applications.',
    sections: [
      {
        heading: 'Why point-to-point connections become fragile',
        paragraphs: [
          'Direct connections between systems are quick to build and often reasonable for the first one or two interfaces. As the number of systems grows, each change begins to ripple. A field renamed in one application breaks three others, and nobody is certain which.',
          'Choosing a small set of agreed patterns reduces that uncertainty and makes new connections faster to deliver.',
        ],
      },
      {
        heading: 'Use APIs when a caller needs an answer now',
        paragraphs: [
          'Request and response APIs suit situations where one system needs data or confirmation from another straight away, such as checking stock before accepting an order. Azure API Management can provide a consistent front door with authentication, throttling and versioning.',
          'The trade-off is coupling in time. If the called system is unavailable, the caller is affected, so timeouts and sensible fallbacks matter.',
        ],
      },
      {
        heading: 'Use events and queues when systems can work independently',
        paragraphs: [
          'When something has happened and other systems need to know, for example an order has shipped, messaging through Azure Service Bus or Event Grid lets each consumer react in its own time. If a consumer is down, messages wait rather than being lost.',
          'This approach needs more thought about ordering, duplicates and how failures are handled, but it gives the estate more room to change.',
        ],
      },
      {
        heading: 'Keep scheduled batch where it genuinely fits',
        paragraphs: [
          'Not everything needs to be real time. Nightly financial postings or large reference data updates are often better served by a scheduled process that is easy to reason about and re-run.',
          'Whichever pattern is chosen, build in monitoring from the start: correlation identifiers, alerts on failures and a clear route for support teams to replay or investigate messages.',
        ],
      },
    ],
    takeaways: [
      'Pick a few standard patterns rather than designing each interface from scratch.',
      'Use APIs for immediate answers and messaging for decoupled reactions.',
      'Batch is still a good choice for large, non-urgent transfers.',
      'Design for monitoring and replay before the first interface goes live.',
    ],
  },
  {
    slug: 'trusted-foundation-for-analytics',
    category: 'Data & analytics',
    date: '21 August 2026',
    readTime: '5 min read',
    title: 'Building a more trusted foundation for analytics',
    text: 'Why shared definitions and clear data ownership matter as much as the choice of reporting platform.',
    sections: [
      {
        heading: 'Two reports, two answers',
        paragraphs: [
          'A familiar scenario: sales and finance both report revenue for last quarter and the numbers differ. The cause is rarely a technical fault. One team counts orders when they are placed, the other when they are invoiced.',
          'Until those definitions are agreed and recorded, any new dashboard simply adds another version of the truth.',
        ],
      },
      {
        heading: 'Agree a small set of shared measures',
        paragraphs: [
          'Start with the ten or so measures that leadership uses to run the business. For each, document the definition, the source system, the owner and how often it refreshes.',
          'In Power BI and Microsoft Fabric these definitions can then live in a governed semantic model, so that reports across the organisation draw on the same calculation rather than rebuilding it.',
        ],
      },
      {
        heading: 'Give data a named owner',
        paragraphs: [
          'Quality problems are most often fixed at the point where data is created. A named owner for customer, product and supplier data can set standards, resolve duplicates and decide what to do when sources disagree.',
          'This does not have to be a large data office. It can be a few people with a clear remit and a regular, short review.',
        ],
      },
      {
        heading: 'Build confidence gradually',
        paragraphs: [
          'Certify a first set of reports, show where the data came from and make it easy to ask questions. When people see the same figure in the meeting and the dashboard, adoption follows naturally.',
          'From there, more advanced use such as forecasting or AI becomes far more credible, because the foundations underneath it are understood.',
        ],
      },
    ],
    takeaways: [
      'Resolve definition differences before building more dashboards.',
      'Document each key measure with a source, owner and refresh pattern.',
      'Fix quality issues where data is created, with named owners.',
      'Certify a trusted core of reports and extend from there.',
    ],
  },
  {
    slug: 'making-digital-transformation-practical',
    category: 'Transformation',
    date: '7 August 2026',
    readTime: '5 min read',
    title: 'Making digital transformation practical',
    text: 'How to turn a broad ambition into a sequence of decisions and improvements that teams can actually deliver.',
    sections: [
      {
        heading: 'Break the ambition into outcomes',
        paragraphs: [
          '"Digital transformation" is a useful headline and a poor plan. Teams need something more specific: reduce the time to onboard a customer, give field staff the information they need on a phone, or retire a system that is expensive to support.',
          'Each outcome can be described, measured and assigned to someone. That makes progress visible and decisions easier to defend.',
        ],
      },
      {
        heading: 'Sequence by value and dependency',
        paragraphs: [
          'Some improvements are quick and independent, such as automating a manual approval. Others depend on foundations like a clean customer record or a reliable integration layer. A good roadmap interleaves both, so the organisation sees benefit early while the groundwork continues.',
          'Revisit the order regularly. Priorities change, and a plan that cannot adapt will be ignored.',
        ],
      },
      {
        heading: 'Involve the people doing the work',
        paragraphs: [
          'The people closest to a process usually know where the delays and workarounds are. Involving them early produces better designs and builds the sense of ownership that adoption relies on.',
          'Plan for change management alongside the technology: communication, training, and time for teams to adjust how they work.',
        ],
      },
      {
        heading: 'Review and adjust',
        paragraphs: [
          'After each release, check whether the outcome you intended has actually moved. If it has not, learn why before moving on. A short, regular review keeps the programme honest and keeps funding conversations grounded in evidence.',
        ],
      },
    ],
    takeaways: [
      'Express the ambition as specific, measurable outcomes.',
      'Mix quick wins with the foundations they will later rely on.',
      'Bring in the people who do the work from the start.',
      'Review results after every release and adjust the plan.',
    ],
  },
];
