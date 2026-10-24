export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLinks {
  linkedin: string;
  behance: string;
  instagram: string;
  dribbble?: string;
}

export interface Profile {
  name: string;
  title: string;
  year: string;
  edition: string;
  headline: string;
  tagline: string;
  intro: string;
  email: string;
  phone: string;
  location: string;
  social: SocialLinks;
  resumeUrl: string;
  availability: string;
  navLinks: NavLink[];
}

export const profile: Profile = {
  name: 'Ritesh Yadav',
  title: 'GRAPHIC DESIGNER / VISUAL CREATIVE',
  year: '2026',
  edition: 'FOLIO ISSUE NO. 26 // BEHANCE ARCHIVE',
  headline: 'DESIGN THAT MAKES YOU LOOK TWICE.',
  tagline: 'DESIGN THAT MAKES YOU LOOK TWICE.',
  intro: "I'm a visual creative who enjoys turning ideas into striking graphics, bold compositions, and memorable visual experiences. From event posters and promotional designs to experimental typography and digital visuals, I believe every design should have a personality.",
  email: 'riteshhydv09@gmail.com',
  phone: '', // TODO: Add if desired
  location: 'India',
  social: {
    linkedin: 'https://linkedin.com/in/your-profile', // TODO: Replace
    behance: 'https://behance.net/your-profile', // TODO: Replace
    instagram: 'https://instagram.com/your-profile', // TODO: Replace
    dribbble: '', // TODO: Add if desired
  },
  resumeUrl: '/resume.pdf', // TODO: Place your resume PDF in the public/ folder
  availability: 'OPEN FOR COMMISSIONS & FULL-TIME ROLES',
  navLinks: [
    { label: 'Selected Works', href: '#work' },
    { label: 'The Designer', href: '#about' },
    { label: 'Capabilities', href: '#skills' },
    { label: 'Offerings', href: '#services' },
    { label: 'Start Project', href: '#contact' },
  ],
};

export default profile;
