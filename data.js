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
      { name: "LLM (Mistral)", tier: "Confirmé" },
    ],
  },
  {
    group: "Sécurité",
    items: [
      { name: "HMAC", tier: "Confirmé" },
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
          "Architecture SaaS B2B : front Vue 3 / Nuxt 4 / Next.js, back NestJS, microservices via RabbitMQ et Redis.",
          "Intégration d'un LLM (Mistral) pour l'extraction et la classification de documents, conforme RGPD.",
          "Publication de librairies npm TypeScript réutilisables et maintenables (authentification inter-services, semantic versioning, conventional commits), testées unitairement.",
          "Sécurité & cloisonnement : HMAC entre microservices, Bearer JWT et SSO utilisateurs, ACL.",
          "Infrastructure : mise en place et administration de serveurs VPS Debian (durcissement) ; Docker, déploiement continu GitLab CI/CD.",
        ],
      },
    ],
  },
  {
    startDate: "juin 2025",
    endDate: "juillet 2025",
    title: "Développeur front-end Vue.js",
    company: "Flying Eye",
    companyUrl: "https://www.flyingeye.fr/",
    location: "Biot",
    localize: { city: "Biot", country: "FRANCE" },
    description: [
      {
        element: "ul",
        children: ["Refonte de Flying Hub (Vue 3.5) : migration Options API vers Composition API + TypeScript, état centralisé Pinia.", "Tests Vitest, couche API Axios (authentification, CSRF), conformité OWASP / ANSSI."],
      },
    ],
  },
  {
    startDate: "2024",
    endDate: "2025",
    title: "Projets personnels & montée en compétences",
    description: [
      {
        element: "ul",
        children: ["Projets web personnels en TypeScript (Vue / Nuxt en front, NestJS en back).", "Spécialisation back-end, microservices et sécurité applicative."],
      },
    ],
  },
  {
    startDate: "avril 2022",
    endDate: "février 2024",
    title: "Développeur front-end JavaScript / TypeScript",
    company: "ExAssess (VTEST)",
    companyUrl: "https://www.vtest.com/",
    location: "Paris",
    localize: { city: "Paris", country: "FRANCE" },
    description: [
      {
        element: "ul",
        children: ["Conception et développement de Young Learner (Vue 3 + TypeScript) avec tests d'intégration.", "Migration de 3 applications Vue 2 / 3 vers Nuxt 3 ; collaboration back-end NestJS, déploiement AWS."],
      },
    ],
  },
  {
    startDate: "oct. 2021",
    endDate: "déc. 2021",
    title: "Développeur fullstack JavaScript",
    company: "Skyview innovation",
    companyUrl: "https://www.skyviewinnovation.fr/",
    location: "Menton",
    localize: { city: "Menton", country: "FRANCE" },
    description: [
      {
        element: "ul",
        children: ["Conception d'un dashboard d'administration et de modération (Vue + API Express), gestion fine des rôles par ACL.", "Interface responsive et sécurisée pour une plateforme communautaire."],
      },
    ],
  },
]);

// formations & certifications
const formationsData = [
  {
    title: "Certifications développeur web (JavaScript, Vue.js, Node.js)",
    org: "DYMA",
    year: "2025",
  },
  {
    title: "Bachelor Concepteur développeur d'applications",
    org: "O'clock",
    year: "2024",
  },
  {
    title: "Titre pro. Développeur web & mobile",
    org: "GRETA",
    year: "2020",
  },
];
FormationCreator.initialize(document.getElementById("passed-certifications"), formationsData);
