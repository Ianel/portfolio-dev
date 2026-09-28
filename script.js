(() => {
  'use strict';

  const translations = {
    en: {
      skipContent: 'Skip to content',
      navLabel: 'Main navigation',
      homeLabel: 'Ianel Tombozafy — home',
      portraitAlt: 'Portrait of Ianel Tombozafy',
      navAbout: 'About',
      navProjects: 'Projects',
      navSkills: 'Skills',
      navJourney: 'Background',
      navTestimonial: 'Testimonial',
      navContact: 'Contact',
      talkProject: 'Let’s discuss your project',
      available: 'Open to ambitious collaborations',
      heroRole: 'Web Developer · Computer Engineering',
      heroTitle: 'I turn ideas into <span class="gradient-text">living experiences.</span>',
      heroBody: 'I’m <strong class="font-semibold text-ink">Ianel Tombozafy</strong>, a computer engineering graduate with a passion for science and technology. I design reliable, useful and polished web solutions built around real user needs.',
      viewProjects: 'View my projects',
      discover: 'Discover my world',
      quote: '“You have to want to do it to be able to do it.”',
      missionLabel: 'My mission',
      missionText: 'Help you achieve your goals — and bring you joy.',
      scienceCreativity: 'SCIENCE × CREATIVITY',
      explore: 'Explore',
      aboutEyebrow: '01 — About',
      aboutTitle: 'A mind for tech.<br><span class="text-mist">A heart for people.</span>',
      aboutP1: 'Curious by nature, I enjoy understanding how things work, connecting ideas and learning by building. To me, the web is where logic, aesthetics and human impact come together.',
      aboutP2: 'I aim for more than delivering an interface. I listen, clarify the need, simplify the experience and create something we can be proud of together.',
      qualitiesTitle: 'My qualities',
      qualityCurious: 'Curious',
      qualityPersistent: 'Persistent',
      qualityOpen: 'Open-minded',
      qualitySerious: 'Serious',
      qualityCommitted: 'Deeply committed <span class="text-energy">*</span>',
      qualityAuthentic: 'Authentic',
      qualityNote: '<span class="text-energy">*</span> In the best sense: present, involved and committed to the project through completion.',
      valuesTitle: 'My values',
      valueRespect: 'Respect',
      valueIntegrity: 'Integrity',
      valueHumility: 'Humility',
      valueMutualAid: 'Mutual support',
      projectsEyebrow: '02 — Selected work',
      projectsTitle: 'Projects that<br><span class="gradient-text">prove their value.</span>',
      projectsIntro: 'Applications, showcase websites and client products: every project is an opportunity to make an idea clearer, more useful and more beautiful.',
      clientProject: 'Client project',
      webApp: 'Web application',
      apiExploration: 'API exploration',
      movieSearch: 'Movie search',
      ophirDescription: 'A professional tour operator website: a clear, immersive digital presence designed for discovery.',
      weatherDescription: 'A fast weather application that provides the essential information for any city in moments.',
      rickDescription: 'An interface for exploring episodes, characters and dimensions from the cult animated series.',
      movieDescription: 'A simple and efficient search application for quickly finding movie information.',
      viewSite: 'View site',
      sourceCode: 'Source code',
      moreProjects: 'View 3 more projects',
      landingPage: 'Landing page',
      craftSite: 'Creative business website',
      healthLanding: 'Healthcare landing page',
      skillsEyebrow: '03 — Skills',
      skillsTitle: 'Strong foundations.<br><span class="text-mist">A versatile profile.</span>',
      skillsIntro: 'My background combines web development, content management, data and IT support. The proficiency levels shown here match those on my résumé.',
      intermediate: 'Intermediate',
      basic: 'Basic',
      dataTools: 'Data & tools',
      projectEcosystem: 'Project ecosystem',
      journeyEyebrow: '04 — Background',
      journeyTitle: 'From education<br><span class="gradient-text">to field experience.</span>',
      designLead: 'Design Lead',
      madagasyDescription: 'Improved the existing website design, organized content with WordPress and provided IT support to employees.',
      itIntern: 'IT Intern',
      bsaeDescription: 'Designed and integrated WordPress websites, provided technical support and trained students in IT.',
      developerConsultant: 'Developer Consultant',
      spoonDescription: 'Processed data for decision support, assisted with Oracle Fusion Cloud ERP and automated data workflows.',
      educationTitle: 'Education',
      computerScienceDegree: 'Bachelor’s degree in Computer Engineering',
      degreeDescription: 'ISSTM · Programming, algorithms, databases and information systems.',
      scienceBac: 'Scientific Baccalaureate',
      bacDescription: 'Lycée Saint Gabriel · Advanced scientific foundations.',
      languagesTitle: 'Languages',
      native: 'Native',
      french: 'French',
      fluent: 'Fluent',
      english: 'English',
      passionsTitle: 'Interests',
      technology: 'Technology',
      arts: 'Arts',
      metaphysics: 'Metaphysics',
      testimonialEyebrow: '05 — Testimonial',
      testimonialQuote: 'First, the website helped my page gain visibility and reach a broader potential audience. It also gave my product a more professional image.',
      testimonialRole: 'CEO · Bohemian accessories and décor',
      contactEyebrow: '06 — Contact',
      contactTitle: 'Have an idea?<br>Let’s bring it to life.',
      contactIntro: 'Tell me about your goal. Together, we’ll find the simplest, strongest and most creative way to turn it into a product.',
      writeMe: 'Write to me',
      phone: 'Phone',
      builtWithCuriosity: 'Built with curiosity.',
      backToTop: 'Back to top'
    }
  };

  const menuButton = document.querySelector('#menu-button');
  const mobileMenu = document.querySelector('#mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');
  const languageButtons = document.querySelectorAll('[data-lang]');
  const translatableElements = document.querySelectorAll('[data-i18n]');
  const altElements = document.querySelectorAll('[data-i18n-alt]');
  const ariaElements = document.querySelectorAll('[data-i18n-aria]');
  const frenchContent = new WeakMap();
  const frenchAlt = new WeakMap();
  const frenchAria = new WeakMap();
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const metadata = {
    fr: {
      title: 'Ianel Tombozafy — Développeur Web',
      description: 'Portfolio de Ianel Tombozafy, développeur Web diplômé en génie informatique, créateur de solutions modernes, fiables et centrées sur les utilisateurs.'
    },
    en: {
      title: 'Ianel Tombozafy — Web Developer',
      description: 'Portfolio of Ianel Tombozafy, a computer engineering graduate and Web Developer creating modern, reliable, user-focused solutions.'
    }
  };

  translatableElements.forEach((element) => frenchContent.set(element, element.innerHTML));
  altElements.forEach((element) => frenchAlt.set(element, element.getAttribute('alt')));
  ariaElements.forEach((element) => frenchAria.set(element, element.getAttribute('aria-label')));

  let currentLanguage = 'fr';
  try {
    currentLanguage = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr';
  } catch {}

  const updateMenuLabel = () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    const labels = currentLanguage === 'en'
      ? { open: 'Open menu', close: 'Close menu' }
      : { open: 'Ouvrir le menu', close: 'Fermer le menu' };
    menuButton.setAttribute('aria-label', isOpen ? labels.close : labels.open);
  };

  const setLanguage = (language) => {
    currentLanguage = language === 'en' ? 'en' : 'fr';
    document.documentElement.lang = currentLanguage;

    translatableElements.forEach((element) => {
      const key = element.dataset.i18n;
      element.innerHTML = currentLanguage === 'en' && translations.en[key]
        ? translations.en[key]
        : frenchContent.get(element);
    });

    altElements.forEach((element) => {
      const key = element.dataset.i18nAlt;
      element.setAttribute('alt', currentLanguage === 'en' && translations.en[key] ? translations.en[key] : frenchAlt.get(element));
    });

    ariaElements.forEach((element) => {
      const key = element.dataset.i18nAria;
      element.setAttribute('aria-label', currentLanguage === 'en' && translations.en[key] ? translations.en[key] : frenchAria.get(element));
    });

    document.title = metadata[currentLanguage].title;
    descriptionMeta.setAttribute('content', metadata[currentLanguage].description);
    languageButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === currentLanguage)));
    updateMenuLabel();

    try { localStorage.setItem('portfolio-language', currentLanguage); } catch {}
  };

  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    mobileMenu.classList.toggle('hidden', isOpen);
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    updateMenuLabel();
  });

  languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => event.key === 'Escape' && closeMenu());

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sections.forEach((section) => sectionObserver.observe(section));
  document.querySelector('#year').textContent = new Date().getFullYear();
  setLanguage(currentLanguage);
})();
