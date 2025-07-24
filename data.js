// skills
const skillsData = [
  { name: "Docker", level: "2 ans", stars: "★★★★☆", dots: true },
  { name: "Linux/BASH", level: "+10 ans", stars: "★★★★☆", dots: true },
  { name: "VanillaJS", level: "6 ans", stars: "★★★★★", dots: true },
  { name: "NodeJS", stars: "★★★★☆", dots: true },
  { name: "TypeScript", level: "2 ans", stars: "★★★☆☆", dots: true },
  {
    name: "Ecosystème Vue.js",
    uppercase: true,
    children: [
      { name: "Vue v2 & 3", level: "5 ans", stars: "★★★★★", dots: true },
      { name: "Nuxt v3", level: "1 an", stars: "★★★☆☆", dots: true },
      {
        name: "Bibliothèques de composants:",
        children: [
          { name: "VueUse", stars: "★★★★★", dots: true },
          { name: "BootstrapVue", stars: "★★★★★", dots: true },
          { name: "Vuetify", stars: "★★★★★", dots: true },
          { name: "Quasar", stars: "★★★☆☆", dots: true },
          { name: "NaiveUI", stars: "★★★☆☆", dots: true },
        ],
      },
    ],
  },
  {
    name: "Ecosystème React.js",
    uppercase: true,
    children: [
      { name: "React v19", level: "débutant", stars: "★☆☆☆☆", dots: true },
      { name: "Next v15", level: "débutant", stars: "★☆☆☆☆", dots: true },
      {
        name: "Bibliothèques de composants:",
        children: [
          { name: "HeroUI (NextUI)", stars: "★☆☆☆☆", dots: true },
          { name: "Prime React", stars: "★☆☆☆☆", dots: true },
          { name: "Mui", stars: "☆☆☆☆☆", dots: true },
        ],
      },
    ],
  },
  {
    name: "CSS",
    uppercase: true,
    children: [
      { name: "Css3", stars: "★★★★☆", dots: true },
      { name: "Bootstrap v5", stars: "★★★★☆", dots: true },
      { name: "Tailwind v3 v4", stars: "★★★☆☆", dots: true },
    ],
  },
  {
    name: "ORM / ODM / QB",
    uppercase: true,
    children: [
      { name: "Sequelize", stars: "★★★★☆", dots: true },
      { name: "TypeORM", stars: "★★★☆☆", dots: true },
      { name: "Prisma", stars: "★★★☆☆", dots: true },
      { name: "Mongoose (mongoDB)", stars: "★★★☆☆", dots: true },
    ],
  },
];
SkillCreator.initialize(document.getElementById("skills-id"), skillsData);

// timeline professionnal career
new TimelineEvents(document.getElementById("professional-experiences"), [
  {
    startDate: "juin 2025",
    endDate: "juillet 2025",
    title: "Développeur web front-end",
    legalStatus: "",
    company: "Flying Eye",
    companyUrl: "https://www.flyingeye.fr/",
    location: "Biot (100% télétravail)",
    localize: { city: "Biot", country: "FRANCE" },
    description: [
      {
        element: "p",
        content: "Audit et refonte de Flying Hub (Vue.js 3.5), développée avec Option API sans TypeScript et global properties ($root) au lieu de Pinia ou Vuex.",
      },
      {
        element: "ul",
        children: [
          "Initiation de la refactorisation d'état vers Pinia.",
          "Modernisation des composants avec Composition API et TypeScript, respectant le Principe de Responsabilité Unique.",
          "Mise en place de tests unitaires/integrations avec Vitest.",
          "Création d'un service API (Axios, interceptors Auth et CSRF).",
          "Alignement sur les bonnes pratiques modernes et de sécurité (OWASP, conformité ANSSI).",
        ],
      },
    ],
  },
  {
    startDate: "avril 2022",
    endDate: "février 2024",
    title: "Développeur frontend JavaScript",
    legalStatus: "SAS",
    company: "ExAssess (VTEST)",
    companyUrl: "https://www.vtest.com/",
    location: "Paris (100% télétravail)",
    localize: { city: "Paris", country: "FRANCE" },
    description: [
      {
        element: "p",
        content: `Développement de Young Learner, une application d’évaluation d’anglais pour les 7–15 ans. Fonctionnalités clés :`,
      },
      {
        element: "ul",
        children: [
          `Première version en VanillaJS (sans TypeScript), puis refonte complète sous Vue 3 avec TypeScript et tests d’intégration`,
          `Fonctionnalités techniques (capture micro, cache audio, drag & drop, timers interactifs) avec un souci constant d’optimisation de l’UX`,
          `Migration de 3 apps Vue (Vue 2 & 3) vers une app unifiée sous Nuxt 3 (TypeScript)`,
          `Développement de fonctionnalités avancées sur 3 apps existantes (Vue 2 et Vue 3)`,
          `Collaboration avec l’équipe backend (NestJS), déploiement sur AWS, gestion de projet via ClickUp`,
        ],
      },
    ],
  },
  {
    startDate: "octobre 2021",
    endDate: "décembre 2021",
    title: "Développeur web fullstack JavaScript",
    company: "Skyview innovation",
    companyUrl: "https://www.skyviewinnovation.fr/",
    location: "Menton",
    localize: { city: "Menton", country: "FRANCE" },
    description: [
      {
        element: "p",
        content: `Développement d’un dashboard Vue.js avec API Express pour l’administration et la modération d’une plateforme de rencontre, incluant gestion des utilisateurs et rôles via ACL (admin, modérateur), avec une interface responsive et sécurisée.`,
      },
    ],
  },

  {
    startDate: "mai 2020",
    endDate: "juillet 2020",
    title: "Développeur web fullstack",
    company: "Les petits sabots 64",
    companyUrl: "https://www.societe.com/societe/monsieur-didier-supervielle-792272056.html",
    location: "Monein (100% télétravail)",
    localize: { city: "Monein", country: "FRANCE" },
    description: [
      {
        element: "p",
        content: `Développement d’un site web optimisé SEO (Nuxt.js v2 + API Symfony v5) pour remplacer un site existant peu flexible, avec gestion autonome des chevaux (CRUD) et des images (conversion WebP), ainsi que rappels automatisés pour les soins vétérinaires (vermifuge, ferrage, etc.) par SMS et Email.`,
      },
    ],
  },
]);

// certifications
new TimelineEvents(document.getElementById("passed-certifications"), [
  {
    startDate: "septembre 2024",
    endDate: "février 2025",
    company: "DYMA",
    companyUrl: "https://dyma.fr/",
    location: "Formation e-learning",
    descriptionClasses: ["custom-div-flex1"],
    description: [
      {
        element: "p",
        content: `Certifiées: ${["Linux & BASH", "GIT", "Docker", "Typescript", "React 19", "Next 15"].join(", ")}`,
      },
    ],
  },
  {
    startDate: "11 avril 2022",
    endDate: "3 février 2024",
    title: "Bachelor Concepteur développeur d'applications",
    company: "O'clock",
    companyUrl: "https://oclock.io/",
    location: "En ligne",
    descriptionClasses: ["custom-div-flex1"],
    description: [
      {
        element: "p",
        content: `Diagramme UML, programmation orientée objet, déploiement intégration continue, docker, tests unitaires, typescript, API`,
      },
    ],
  },
  {
    startDate: "1 décembre 2019",
    endDate: "30 aout 2020",
    title: "Titre professionnel développeur web & web mobile",
    company: "GRETA",
    location: "Nice",
    localize: { city: "Nice", country: "FRANCE" },
    descriptionClasses: ["custom-div-flex1"],
    description: [
      {
        element: "p",
        content: `Symfony 5, PHP, JS, base de données SQL et conception`,
      },
    ],
  },
]);
