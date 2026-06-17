// skills
const skillsData = [
  {
    group: "Langages",
    items: [
      { name: "TypeScript", tier: "Confirmé" },
      { name: "JavaScript", tier: "Confirmé" },
      { name: "Node.js", tier: "Confirmé" },
    ],
  },
  {
    group: "Front-end",
    items: [
      { name: "Vue 3 / Nuxt 4", tier: "Confirmé" },
      { name: "React / Next.js", tier: "Intermédiaire" },
      { name: "Tailwind v4", tier: "Confirmé" },
    ],
  },
  {
    group: "Back-end & API",
    items: [
      { name: "NestJS", tier: "Confirmé" },
      { name: "Express", tier: "Confirmé" },
      { name: "RabbitMQ", tier: "Confirmé" },
    ],
  },
  {
    group: "Sécurité",
    items: [
      { name: "HMAC / APIToken", tier: "Confirmé" },
      { name: "Bearer JWT", tier: "Confirmé" },
      { name: "SSO", tier: "Confirmé" },
      { name: "ACL", tier: "Confirmé" },
    ],
  },
  {
    group: "Data & DevOps",
    items: [
      { name: "PostgreSQL / MariaDB", tier: "Confirmé" },
      { name: "MongoDB", tier: "Intermédiaire" },
      { name: "GitLab CI/CD", tier: "Confirmé" },
      { name: "Docker", tier: "Confirmé" },
      { name: "Debian Linux", tier: "Confirmé" },
      { name: "Bash", tier: "Confirmé" },
    ],
  },
];
SkillCreator.initialize(document.getElementById("skills-id"), skillsData);

// timeline professionnal career
new TimelineEvents(document.getElementById("professional-experiences"), [
  {
    startDate: "sept. 2025",
    endDate: "aujourd'hui",
    title: "Développeur Fullstack TypeScript, Architecture & Sécurité",
    company: "Gestion Pratique",
    location: "Puget-sur-Argens",
    localize: { city: "Puget-sur-Argens", country: "FRANCE" },
    description: [
      {
        element: "ul",
        children: [
          "Conception d'APIs internes / externes (NestJS) et architecture microservices, échanges via RabbitMQ.",
          "Authentification : HMAC et APIToken entre microservices, Bearer JWT côté utilisateurs, mise en place du SSO.",
          "Front Vue 3 / Nuxt 4 / Next.js (Tailwind v4), back Node.js / NestJS / Express en TypeScript.",
          "Packages NPM versionnés (semantic versioning, conventional commits) couverts par des tests unitaires.",
          "GitLab CI/CD, Docker, durcissement VPS Debian ; reprise et fiabilisation de code existant.",
        ],
      },
    ],
  },
  {
    startDate: "juin 2025",
    endDate: "juillet 2025",
    title: "Développeur web front-end",
    company: "Flying Eye",
    companyUrl: "https://www.flyingeye.fr/",
    location: "Biot",
    localize: { city: "Biot", country: "FRANCE" },
    description: [
      {
        element: "ul",
        children: ["Refonte de Flying Hub (Vue 3.5) : migration Option API vers Composition API + TypeScript, état vers Pinia.", "Tests Vitest, service API Axios (Auth, CSRF), conformité OWASP / ANSSI."],
      },
    ],
  },
  {
    startDate: "avril 2022",
    endDate: "février 2024",
    title: "Développeur frontend JavaScript / TypeScript",
    company: "ExAssess (VTEST)",
    companyUrl: "https://www.vtest.com/",
    location: "Paris",
    localize: { city: "Paris", country: "FRANCE" },
    description: [
      {
        element: "ul",
        children: ["Refonte de Young Learner (VanillaJS vers Vue 3 + TypeScript) avec tests d'intégration.", "Migration de 3 apps Vue 2 & 3 vers Nuxt 3 ; collaboration backend NestJS, déploiement AWS."],
      },
    ],
  },
  {
    startDate: "oct. 2021",
    endDate: "déc. 2021",
    title: "Développeur web fullstack JavaScript",
    company: "Skyview innovation",
    companyUrl: "https://www.skyviewinnovation.fr/",
    location: "Menton",
    localize: { city: "Menton", country: "FRANCE" },
    description: [
      {
        element: "ul",
        children: ["Dashboard d'administration et de modération (Vue + API Express) avec gestion des rôles par ACL.", "Interface responsive et sécurisée pour une plateforme communautaire."],
      },
    ],
  },
]);

// formations & certifications
const formationsData = [
  {
    title: "Bachelor Concepteur développeur d'applications",
    org: "O'clock",
    year: "2024",
  },
  {
    title: "Certifications développeur",
    org: "DYMA",
    year: "2025",
  },
  {
    title: "Titre pro. Développeur web & mobile",
    org: "GRETA",
    year: "2020",
  },
];
FormationCreator.initialize(document.getElementById("passed-certifications"), formationsData);
