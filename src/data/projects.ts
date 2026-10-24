export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  overview: string;
  objective: string;
  approach: string;
  typography: string;
  colorPalette: string[];
  tags: string[];
  image: string;
  images: string[];
  year: string;
  type: string;
  conceptNote?: string;
}

export const projects: Project[] = [
  {
    id: 'event-posters',
    number: '01',
    title: 'Event Poster Design',
    category: 'Poster Design / Visual Communication',
    subtitle: 'Designing posters that command attention',
    description:
      'A series of event posters crafted to maximize visual impact through bold typography, strategic color use, and deliberate hierarchy that guides the viewer from headline to details.',
    overview:
      'Event posters need to work hard — they compete for attention in crowded spaces and busy feeds. This collection focuses on creating posters that stop people mid-scroll and communicate event energy instantly.',
    objective:
      'Create posters that balance aesthetic appeal with clear information delivery, ensuring event details are immediately accessible while the overall design captures the event\'s personality.',
    approach:
      'Each poster starts with the event\'s core energy and translates it into a visual language — choosing typefaces that match the tone, colors that set the mood, and compositions that create natural reading paths.',
    typography: 'Space Grotesk + Inter',
    colorPalette: ['#0099DD', '#E0405B', '#111111', '#F2F0EA', '#C9C9C4'],
    tags: ['Poster Design', 'Typography', 'Visual Hierarchy', 'Print Design'],
    image: '/projects/project-01.jpg',
    images: ['/projects/project-01.jpg'],
    year: '2024',
    type: 'Event Design',
  },
  {
    id: 'robotics-club',
    number: '02',
    title: 'RoboForge Workshop Poster',
    category: 'Event Poster / Technical Creative',
    subtitle: 'Hands-on robotics workshop visual campaign for PW Institute of Innovation',
    description:
      'Promotional workshop poster and digital creative designed for ROBOFORGE — a hands-on event teaching students to build their first line follower robot, organized by the Robotics Club.',
    overview:
      'Technical workshop creatives require high clarity, energetic composition, and instant information hierarchy. This poster balances bold industrial robotics visuals with clear session schedules and registration cues.',
    objective:
      'Drive student turnout and sign-ups for a hands-on technical workshop through an impactful, technology-forward poster design with clear typographic hierarchy.',
    approach:
      'Integrated high-contrast hardware imagery, bold angled headline typography, and structured info modules to present date, venue, and registration links cleanly without visual clutter.',
    typography: 'Anton + Space Grotesk',
    colorPalette: ['#FF1738', '#111111', '#FFFFFF', '#72726E', '#F2F0EA'],
    tags: ['Workshop Poster', 'Technical Event', 'Visual Hierarchy', 'Event Branding'],
    image: '/projects/project-02.jpg',
    images: ['/projects/project-02.jpg'],
    year: '2024',
    type: 'Poster Design',
  },
  {
    id: 'hackathon-creatives',
    number: '03',
    title: 'Hackathon & Tech Event Creatives',
    category: 'Event Marketing / Digital Design',
    subtitle: 'Energizing the developer community through design',
    description:
      'Promotional graphics, social announcements, and event branding for hackathons and developer meetups, designed to build anticipation and drive registrations.',
    overview:
      'Hackathons thrive on energy and community excitement. These creatives capture that intensity through dynamic compositions, bold color combinations, and typography that conveys urgency and innovation.',
    objective:
      'Build visual hype around tech events that translates into registrations and genuine community engagement, while maintaining a cohesive event identity across all touchpoints.',
    approach:
      'Used high-contrast color schemes, dynamic angular compositions, and code-inspired visual elements to create graphics that feel native to the developer community while standing out in social feeds.',
    typography: 'Space Grotesk + Fira Code',
    colorPalette: ['#FF3D00', '#1A1A1A', '#F5F0EB', '#CCFF00', '#FFD600'],
    tags: ['Hackathon Graphics', 'Developer Events', 'Digital Design', 'Event Promotion'],
    image: '/projects/project-03.jpg',
    images: ['/projects/project-03.jpg', '/projects/project-03-detail.jpg'],
    year: '2024',
    type: 'Event Marketing',
  },
  {
    id: 'social-media',
    number: '04',
    title: 'Social Media Campaigns',
    category: 'Digital Design / Content Strategy',
    subtitle: 'Multi-platform promotional suites and high-retention social creatives',
    description:
      'A cohesive series of high-engagement social media graphics spanning commercial hiring announcements, festive greetings, product launches, e-commerce promotions, and educational masterclasses.',
    overview:
      'Social feeds demand designs that stop the scroll within milliseconds. This suite demonstrates versatility across diverse commercial verticals — from tech product debuts to cultural celebrations — with distinct visual identities.',
    objective:
      'Create high-converting, scroll-stopping social creative templates that establish instant visual hierarchy, clear typography, and strong brand credibility on Instagram and LinkedIn.',
    approach:
      'Crafted modular square and 4:5 compositions combining expressive focal imagery, clean typographic contrast, and tailored color harmonies tuned to each campaign\'s mood and commercial intent.',
    typography: 'Space Grotesk + Inter',
    colorPalette: ['#FF1738', '#D4AF37', '#00838F', '#111111', '#FFFFFF'],
    tags: ['Social Media Suite', 'Instagram Creatives', 'Campaign Design', 'Visual Hierarchy'],
    image: '/projects/project-04.jpg',
    images: ['/projects/project-04.jpg'],
    year: '2024',
    type: 'Social Media Design',
  },
  {
    id: 'branding',
    number: '05',
    title: 'Branding & Visual Identity',
    category: 'Concept Project / Self-initiated',
    subtitle: 'Exploring brand systems and visual languages',
    description:
      'Logo explorations, brand marks, typography systems, color palettes, and mockups created as a self-initiated concept project to explore the fundamentals of visual identity design.',
    overview:
      'A deep dive into branding fundamentals — understanding how logos, type systems, and color palettes work together to create a cohesive identity that communicates values and personality at a glance.',
    objective:
      'Build a comprehensive brand identity system from scratch, exploring the relationship between strategy, visual language, and practical application across different touchpoints.',
    approach:
      'Started with brand values and positioning, then translated abstract concepts into visual elements — testing mark variations, refining typography pairings, and validating the system across real-world mockups.',
    typography: 'Custom logotype + Inter',
    colorPalette: ['#111111', '#F2F0EA', '#FF1738', '#C9C9C4', '#4A4A46'],
    tags: ['Logo Design', 'Brand Identity', 'Typography Systems', 'Visual Language'],
    image: '/projects/project-05.jpg',
    images: ['/projects/project-05.jpg'],
    year: '2024',
    type: 'Branding',
    conceptNote:
      'This is a self-initiated concept project created to explore branding and visual identity design. It does not represent work done for an actual client.',
  },
  {
    id: 'experimental',
    number: '06',
    title: 'Character Design & Mascot Art',
    category: 'Illustration / Mascot Design',
    subtitle: 'Expressive character systems & mascot rosters for Web3 ecosystems',
    description:
      'Custom character designs and stylized mascot rosters created for Jupiter and Meteora ecosystems — featuring iconic chibi silhouettes, futuristic cyberpunk accessories, and detailed digital rendering.',
    overview:
      'Mascots give digital products and decentralized communities an approachable, memorable face. These character sets blend retro-futuristic cyberpunk motifs, warrior armor, and distinct silhouette language into cohesive mascot squads.',
    objective:
      'Design charismatic character lineups that stand out across avatars, community stickers, promotional artwork, and ecosystem merchandising.',
    approach:
      'Focused on bold silhouette recognition, energetic color contrasts (neon greens, cyan, ultraviolet against matte obsidian), and signature prop details (glowing visors, mecha suits, and stylized armor).',
    typography: 'Anton + Space Grotesk',
    colorPalette: ['#00E5FF', '#22C55E', '#FF4655', '#9333EA', '#111111'],
    tags: ['Character Design', 'Mascot Art', 'Digital Illustration', 'Web3 Community'],
    image: '/projects/project-06.jpg',
    images: ['/projects/project-06-jupiter.png', '/projects/project-06-meteora.png'],
    year: '2024',
    type: 'Character Illustration',
  },
];

export const services = [
  {
    title: 'Event Posters & Promotional Graphics',
    description:
      'Eye-catching posters and promotional materials that drive attendance and communicate event energy through bold typography and strategic visual hierarchy.',
  },
  {
    title: 'Social Media Creatives',
    description:
      'Consistent, scroll-stopping social media graphics that build brand presence and engage audiences across platforms.',
  },
  {
    title: 'Brand Identity & Logo Design',
    description:
      'Thoughtful brand systems including logos, typography, color palettes, and visual guidelines that give ideas a memorable personality.',
  },
  {
    title: 'Campaign Visuals',
    description:
      'Cohesive visual campaigns that tell a story across multiple touchpoints and drive meaningful engagement.',
  },
  {
    title: 'Digital Marketing Graphics',
    description:
      'Performance-driven digital assets optimized for web, email, and advertising that convert attention into action.',
  },
  {
    title: 'Creative Concepts & Art Direction',
    description:
      'Strategic creative direction and concept development that aligns visual execution with communication goals.',
  },
];

export const skills = [
  'Graphic Design',
  'Poster Design',
  'Typography',
  'Layout & Composition',
  'Social Media Design',
  'Visual Storytelling',
  'Branding & Identity',
  'Creative Concept Development',
  'Event Promotion',
  'Digital Design',
];

export const tools = [
  'Photoshop',
  'Illustrator',
  'Figma',
  'Canva',
  // TODO: Replace with your actual tools
];
