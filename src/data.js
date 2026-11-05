export const profile = {
  name: 'Shitanshu Shekhar',
  email: 'shekharshitanshu8@gmail.com',
  phone: '+91 8210925990',
  location: 'Ara, Bihar, India',
  github: 'https://github.com/Shitanshu-Shekhar',
  linkedin: 'https://www.linkedin.com/in/shitanshu-shekhar-52a170333/',
  leetcode: 'https://leetcode.com/u/Shitanshu_1234/',
};

export const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Journey', 'journey'],
  ['Contact', 'contact'],
];

export const skills = [
  { title: 'Languages', icon: '01', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C++'] },
  { title: 'Frontend', icon: '02', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { title: 'Backend', icon: '03', items: ['Node.js', 'Express.js', 'REST APIs'] },
  { title: 'Databases', icon: '04', items: ['MongoDB', 'MySQL', 'SQLite'] },
  { title: 'Computer science', icon: '05', items: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'] },
  { title: 'Tools', icon: '06', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Vercel'] },
];

export const projects = [
  {
    id: 'cinema',
    number: '01',
    category: 'FULL-STACK APPLICATION',
    title: 'CinemaHub Lite',
    description: 'A full-stack movie ticket booking platform with interactive seat selection, authentication, an admin dashboard, payment processing, and a rewards system.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['Interactive seat selection', 'User authentication', 'Role-based admin dashboard', 'Payment processing and rewards system'],
    url: 'https://cinema-hub-black.vercel.app/',
  },
  {
    id: 'code2hire',
    number: '02',
    category: 'PLACEMENT PREPARATION PLATFORM',
    title: 'Code2Hire',
    description: 'A placement preparation platform that helps students track DSA progress, record solved questions, explore coding contests, and follow personalized preparation roadmaps.',
    stack: ['React.js', 'TypeScript', 'Express.js', 'SQLite', 'REST APIs'],
    features: ['Student-specific progress tracking', 'Question-solving records', 'Interactive analytics dashboard', 'Personalized preparation roadmaps', 'Coding contest information'],
    url: 'https://code2-hire-placement-preparation-pl.vercel.app/',
  },
  {
    id: 'meshpay',
    number: '03',
    category: 'OFFLINE PAYMENT DEMONSTRATION',
    title: 'MeshPay',
    description: 'An offline payment demonstration exploring how payment instructions can be queued during network loss and settled after backend verification.',
    stack: ['Offline payment flow', 'Browser-local queue', 'Backend verification'],
    features: ['Wallet dashboard with demo balances and ledger activity', 'Offline mode with a browser-local payment queue', 'Mesh devices and transaction activity views', 'Live demo presents queued payments as pending until backend verification'],
    url: 'https://upi-offline-mesh-demo-s2ar.onrender.com/',
  },
];

export const education = [
  { date: '2024 — 2028', title: 'B.E. Computer Science Engineering', institution: 'Chandigarh University', result: 'CGPA 8.32', current: true },
  { date: '2023', title: 'Class XII', institution: 'Bihar School Examination Board', result: '79%' },
  { date: '2021', title: 'Class X', institution: 'Central Board of Secondary Education', result: '94.2%' },
];

export const certifications = [
  { title: 'AI Foundations: Prompt Engineering with ChatGPT', issuer: 'Arizona State University · Coursera' },
  { title: 'Python for Data Science & AI Development', issuer: 'IBM · Coursera' },
  { title: 'GenAI Powered Data Analytics Job Simulation', issuer: 'Forage' },
];
