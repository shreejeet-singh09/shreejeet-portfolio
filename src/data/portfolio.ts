/** Central portfolio content. Keep personal details and learning status accurate here. */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Shreejeet Sorekar',
  displayName: 'Shreejeet Sorekar',
  firstName: 'SHREEJEET',
  seriesTag: 'THE SERIES',
  originalLabel: 'A SHREEJEET ORIGINAL',
  role: 'Computer Science Student | Applied AI & Data Science | Aspiring Developer',
  tagline: ['Computer Science Student', 'Applied AI & Data Science', 'Aspiring Developer'],
  intro: "I'm Shreejeet Sorekar, a Computer Science student pursuing a BS in Applied AI and Data Science at IIT Jodhpur alongside a B.Sc. in Computer Science. I'm exploring programming, web development and artificial intelligence while developing my technical foundations through coursework and practical projects. I enjoy turning ideas into useful products, exploring technology-driven business opportunities and creating documentary-style content about India's culture, history and lesser-known stories.",
  location: 'India',
  email: 'shreejeetsingh698@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/shreejeet-singh-938530384',
    youtube: 'https://www.youtube.com/@Cultify.creates.original',
    instagram: 'https://www.instagram.com/cultify_creates',
  },
  resumePdf: '',
  portrait: {
    src: '/assets/portrait-main.png',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait image placeholder',
  },
  interests: ['Applied AI & Data Science', 'Web Development', 'Documentary Storytelling'],
};

export const education = [
  { school: 'Indian Institute of Technology Jodhpur', place: 'Online / hybrid', degree: 'BS in Applied AI & Data Science', period: 'Pursuing · Expected 2029', score: 'Pursuing' },
  { school: 'Offline college name to be added', place: 'Offline programme', degree: 'Bachelor of Science in Computer Science (B.Sc. CS)', period: 'Pursuing · Expected 2028', score: 'Pursuing' },
];

export const experience: { company: string; role: string; place: string; period: string; points: string[] }[] = [];

export type Metric = { value: string; label: string };
export type Project = {
  id: string; title: string; year: string; genre: string; logline: string; stack: string[];
  build: string[]; features: string[]; metrics: Metric[]; github?: string; palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const projectPalettes: Palette[] = [
  { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
  { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
  { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
];

export const projects: Project[] = [
  {
    id: 'carepair', title: 'CarePair', year: 'Concept', genre: 'Clinic Management SaaS • Healthcare Technology',
    logline: 'A clinic-management product concept exploring ways to make everyday clinic workflows more organized.',
    stack: ['Product concept', 'Clinic workflows'],
    build: ['CarePair is a clinic-management product concept I am exploring. Its planned areas include appointment management, patient intake and history, receptionist workflows, prescriptions and potential integrations.'],
    features: ['Appointment booking and management (planned)', 'Patient intake and history (planned)', 'Receptionist workflows and queue management (planned)', 'Prescription management and integrations (planned)'],
    metrics: [], palette: projectPalettes[0], motif: 'shield',
  },
  {
    id: 'cultify-creates', title: 'Cultify Creates', year: 'Ongoing', genre: 'Documentary Storytelling • Digital Media',
    logline: "A content-creation brand exploring India's hidden, historical, cultural and disappearing stories.",
    stack: ['Research', 'Storytelling', 'Video creation'],
    build: ['I research topics, plan documentary-style stories, develop scripts, record and produce videos, and work on editing, thumbnails, titles and presentation. “Har District, Ek Nayi Kahani” is a planned recurring series exploring districts through local history, food, culture, people and stories.'],
    features: ['Hidden and lesser-known India', 'Culture, traditions and history', 'Documentary-style short and long-form videos', '“Har District, Ek Nayi Kahani” planned series'],
    metrics: [], palette: projectPalettes[1], motif: 'flow',
  },
  {
    id: 'personal-portfolio', title: 'Personal Portfolio', year: 'In progress', genre: 'Frontend Development • Personal Website',
    logline: 'A personalized portfolio presenting my education, learning journey, technical interests and projects.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    build: ['I am customizing this existing interactive portfolio to present my education, learning journey, technical interests and projects.'],
    features: ['Personal education and learning journey', 'Project and creative work presentation'],
    metrics: [], palette: projectPalettes[2], motif: 'tenants',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  { id: 'creative-research', title: 'Researching Stories', org: 'Cultify Creates', detail: 'Exploring local heritage, traditions, communities and lesser-known stories from India.', laurel: 'Creative practice' },
  { id: 'district-series', title: 'Har District, Ek Nayi Kahani', org: 'Planned content series', detail: 'A planned series concept exploring Indian districts through history, food, people, culture and local stories.', laurel: 'In development' },
  { id: 'learning-to-build', title: 'Learning to Build', org: 'Web development', detail: 'Developing programming fundamentals and exploring how modern web applications are built.', laurel: 'Learning journey' },
];
export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'languages', title: 'Programming', subtitle: 'Learning and developing fundamentals', skills: [
    { name: 'Python', mono: 'Py', note: 'Learning' }, { name: 'JavaScript', mono: 'Js', note: 'Developing fundamentals' },
    { name: 'SQL', mono: 'Sq', note: 'Learning' }, { name: 'HTML', mono: 'Ht', note: 'Learning' }, { name: 'CSS', mono: 'Cs', note: 'Learning' },
  ] },
  { id: 'frontend', title: 'Web Development', subtitle: 'Exploring modern web applications', skills: [
    { name: 'React', mono: 'Re', note: 'Exploring' }, { name: 'Tailwind CSS', mono: 'Tw', note: 'Exploring' },
    { name: 'Node.js', mono: 'No', note: 'Learning' }, { name: 'Express', mono: 'Ex', note: 'Learning' },
  ] },
  { id: 'backend', title: 'Databases & Concepts', subtitle: 'Learning application data workflows', skills: [
    { name: 'MongoDB', mono: 'Mg', note: 'Exploring' }, { name: 'Database concepts', mono: 'Db', note: 'Learning' },
    { name: 'CRUD operations', mono: 'Cr', note: 'Exploring' }, { name: 'Authentication concepts', mono: 'Au', note: 'Exploring' },
  ] },
  { id: 'infra', title: 'AI & Data Science', subtitle: 'Academic focus and learning areas', skills: [
    { name: 'Artificial Intelligence', mono: 'Ai', note: 'Fundamentals' }, { name: 'Data Science', mono: 'Ds', note: 'Fundamentals' },
    { name: 'Data analysis', mono: 'Da', note: 'Learning area' }, { name: 'Machine learning', mono: 'Ml', note: 'Learning area' },
  ] },
  { id: 'fundamentals', title: 'Computer Science', subtitle: 'Studying through my degree', skills: [
    { name: 'CS fundamentals', mono: 'Cs', note: 'Studying' },
  ] },
  { id: 'databases', title: 'Project technologies', subtitle: 'Used in this portfolio project', skills: [
    { name: 'React', mono: 'Re' }, { name: 'TypeScript', mono: 'Ts' }, { name: 'Tailwind CSS', mono: 'Tw' },
    { name: 'Framer Motion', mono: 'Fm' }, { name: 'Vite', mono: 'Vi' },
  ] },
  { id: 'interests', title: 'Creative Work', subtitle: 'Cultify Creates', skills: [
    { name: 'Research', mono: 'Rs' }, { name: 'Story planning', mono: 'St' }, { name: 'Documentary storytelling', mono: 'Do' },
  ] },
];
export const skillEvidence: Record<string, string[]> = {};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
const crimson = projectPalettes[0];
const amber = projectPalettes[1];
const ocean = projectPalettes[2];
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: 'Ongoing', synopsis: 'Computer Science studies and the development of programming fundamentals.', episodes: [
    { code: 'S01 E01', title: 'Computer Science', description: 'Studying Computer Science and building foundational programming knowledge.', tags: ['Computer Science', 'Programming'], runtime: 'Ongoing', palette: amber },
  ] },
  { number: 2, title: 'Exploring AI', period: 'Ongoing', synopsis: 'Pursuing a BS in Applied AI & Data Science at IIT Jodhpur.', episodes: [
    { code: 'S02 E01', title: 'Applied AI & Data Science', description: 'Studying in the online / hybrid BS programme at IIT Jodhpur; expected completion 2029.', tags: ['IIT Jodhpur', 'Applied AI', 'Data Science'], runtime: 'Pursuing', palette: violet },
  ] },
  { number: 3, title: 'Learning to Build', period: 'Ongoing', synopsis: 'Exploring web development and practicing programming through coursework and projects.', episodes: [
    { code: 'S03 E01', title: 'Web Development', description: 'Learning HTML, CSS and JavaScript, and exploring React and the MERN stack.', tags: ['HTML', 'CSS', 'JavaScript', 'React'], runtime: 'Learning', palette: ocean },
  ] },
  { number: 4, title: 'Building in Public', period: 'Ongoing', synopsis: 'Turning ideas into projects and developing practical technical skills.', episodes: [
    { code: 'S04 E01', title: 'CarePair', description: 'Exploring a clinic-management product concept and its potential workflows.', tags: ['Concept', 'Healthcare technology'], runtime: 'Concept', palette: crimson },
  ] },
  { number: 5, title: 'Creating Beyond Code', period: 'Ongoing', synopsis: 'Creating documentary-style content about India’s culture, history and lesser-known stories.', episodes: [
    { code: 'S05 E01', title: 'Cultify Creates', description: 'Researching, planning and creating documentary-style stories about India.', tags: ['Storytelling', 'Culture', 'History'], runtime: 'Ongoing', palette: jade },
  ] },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Studies', title: 'Applied AI & Data Science', detail: 'BS programme · IIT Jodhpur · Expected 2029', palette: violet },
  { label: 'Studies', title: 'Computer Science', detail: 'B.Sc. CS · Expected 2028', palette: ocean },
  { label: 'Product concept', title: 'CarePair', detail: 'Clinic-management workflows', palette: crimson },
  { label: 'Creative work', title: 'Cultify Creates', detail: 'Documentary storytelling about India', palette: amber },
  { label: 'Content series', title: 'Har District, Ek Nayi Kahani', detail: 'Planned recurring series', palette: jade },
  { label: 'Current focus', title: 'Learning to Build', detail: 'Programming and web development', palette: ocean },
  { label: 'Exploring', title: 'Artificial Intelligence', detail: 'Learning through Applied AI & Data Science studies', palette: violet },
  { label: 'Creative practice', title: 'Story planning', detail: 'Researching and developing documentary-style stories', palette: crimson },
  { label: 'Learning area', title: 'Data Science', detail: 'Developing foundations', palette: jade },
  { label: 'Personal project', title: 'This Portfolio', detail: 'A personalized existing web portfolio', palette: amber },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'Applied AI & Data Science', lines: ['BS programme · IIT Jodhpur · Online / hybrid', 'Pursuing · Expected completion 2029'] },
  { kicker: 'Education', title: 'Computer Science', lines: ['B.Sc. Computer Science · Offline college name to be added', 'Pursuing · Expected completion 2028'] },
  { kicker: 'Learning', title: 'Learning to Build', lines: ['Python · HTML · CSS · JavaScript', 'Exploring React, Tailwind CSS and the MERN stack'] },
  { kicker: 'Projects', title: 'Ideas in Progress', lines: ['CarePair — clinic-management product concept', 'Cultify Creates — documentary storytelling', 'Personal portfolio — existing site, personalized'] },
  { kicker: 'Creating', title: 'Cultify Creates', lines: ['Stories about India’s culture, history and lesser-known places', '“Har District, Ek Nayi Kahani” — planned series'] },
  { kicker: 'Creative practice', title: 'Beyond Code', lines: ['Researching topics · planning stories · creating videos'] },
  { kicker: 'Current mission', title: 'Learning. Building. Exploring.', lines: ['Computer Science · Applied AI · Web Development'] },
];

export type ProfileId = 'shreejeet' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'shreejeet', name: 'Shreejeet', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Education, projects & learning journey first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'developer', name: 'Developer', blurb: 'Projects, learning & tools first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'Storytelling & creative work first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Education & learning', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Studies, projects & interests', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Creative Practice', meta: `${achievements.length} Creative notes`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume preview', palette: violet },
};
