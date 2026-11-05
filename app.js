const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

const projectDetails = {
  cinema: {
    kicker: '01 / FULL-STACK APPLICATION',
    title: 'CinemaHub Lite',
    description: 'A full-stack movie ticket booking platform. Explore the live application to see its booking experience and available functionality.',
    features: ['Interactive seat selection', 'User authentication and role-based admin dashboard', 'Payment processing and rewards system', 'React, Tailwind CSS, Node.js, Express.js, and MongoDB'],
    url: 'https://cinema-hub-black.vercel.app/'
  },
  code2hire: {
    kicker: '02 / PLACEMENT PREPARATION PLATFORM',
    title: 'Code2Hire',
    description: 'A preparation platform designed to give students a clear view of their DSA practice and help them plan what to work on next.',
    features: ['Student-specific progress and question-solving records', 'Interactive analytics dashboard', 'Personalized preparation roadmaps', 'Coding contest information', 'React.js, TypeScript, Express.js, SQLite, and REST APIs'],
    url: 'https://code2-hire-placement-preparation-pl.vercel.app/'
  },
  meshpay: {
    kicker: '03 / OFFLINE PAYMENT DEMONSTRATION',
    title: 'MeshPay',
    description: 'An offline payment demonstration exploring what happens when a payment is initiated without connectivity. Its demo workspace distinguishes instructions queued in the browser from transactions settled after backend verification.',
    features: ['Wallet dashboard with seeded demo balances and ledger activity', 'Offline mode and browser-local payment queue', 'Mesh devices, activity, settings, and help center views', 'No technology stack is listed because it is not identified in the available project information'],
    url: 'https://upi-offline-mesh-demo-s2ar.onrender.com/'
  }
};

const dialog = document.querySelector('.project-dialog');
document.querySelectorAll('[data-open]').forEach((button) => button.addEventListener('click', () => {
  const project = projectDetails[button.dataset.open];
  if (!project || !dialog) return;
  document.querySelector('#dialog-kicker').textContent = project.kicker;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-description').textContent = project.description;
  const featureList = document.createElement('ul');
  project.features.forEach((feature) => {
    const item = document.createElement('li');
    item.textContent = feature;
    featureList.append(item);
  });
  document.querySelector('#dialog-features').replaceChildren(featureList);
  const projectLink = document.querySelector('#dialog-link');
  projectLink.href = project.url;
  dialog.showModal();
}));

document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
