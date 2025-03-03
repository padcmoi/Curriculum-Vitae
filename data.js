// skills
const skillsData = [
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
        children: [{ name: "Mui", stars: "☆☆☆☆☆", dots: true }],
      },
    ],
  },
  {
    name: "CSS",
    uppercase: true,
    children: [
      { name: "Css3", stars: "★★★★☆", dots: true },
      { name: "Bootstrap v5", stars: "★★★★☆", dots: true },
      { name: "Tailwind v4", stars: "★★☆☆☆", dots: true },
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
    startDate: "11 avril 2022",
    endDate: "29 février 2024",
    title: "Développeur frontend JavaScript (Contrat de professionnalisation)",
    legalStatus: "SAS",
    company: "ExAssess (VTEST)",
    companyUrl: "https://www.vtest.com/",
    location: "Paris (100% télétravail)",
    localize: { city: "Paris", country: "FRANCE" },
    description: [
      {
        element: "p",
        content: `Développement d'une application en VanillaJS permettant d’évaluer les compétences en anglais d’un candidat sur quatre aspects : oral, écoute, écriture et lecture.`,
      },
      { element: "p", content: `Fonctionnalités de l'application :` },
      {
        element: "ul",
        children: [
          `Capture en direct du micro de l'utilisateur.`,
          `Mise en cache des sons écoutés pour garantir leur disponibilité.`,
          `Déplacement des éléments en Drag and Drop.`,
          `Utilisation d'un timer pour guider l'utilisateur à travers différents exercices et évaluer la rapidité avant de sauvegarder les résultats vers l'API.`,
        ],
      },
      { element: "p", content: `Étroitement collaboré avec l’équipe backend sur les endpoints, avec des contributions sur l’API NestJS.` },
      { element: "custom", content: `<div class="my-1"></div>` },
      {
        element: "p",
        content: `Gestion de projet sur ClickUp, réunions quotidiennes et déploiement sur AWS (DevOps). Création de composants sur une application Nuxt 3 avec TypeScript et correctifs.`,
      },
    ],
  },
  {
    startDate: "octobre 2021",
    endDate: "décembre 2021",
    title: "Développeur web fullstack JavaScript (Freelance)",
    company: "Skyview innovation",
    companyUrl: "https://www.skyviewinnovation.fr/",
    location: "Menton",
    localize: { city: "Menton", country: "FRANCE" },
    description: [
      {
        element: "p",
        content: `Création d'un Dashboard avec Vue.js et une API Express pour un service de rencontre en ligne, incluant la gestion des utilisateurs et des ACLs pour les autorisations (admin/modérateur).`,
      },
    ],
  },
  {
    startDate: "mai 2020",
    endDate: "juillet 2020",
    title: "Développeur web fullstack (Stage pour le titre professionnel)",
    company: "Les petits sabots 64",
    companyUrl: "https://www.societe.com/societe/monsieur-didier-supervielle-792272056.html",
    location: "Monein (100% télétravail)",
    localize: { city: "Monein", country: "FRANCE" },
    description: [
      {
        element: "p",
        content: `
        Lors de ce stage, j'ai collaboré avec un centre équestre qui rencontrait des difficultés avec son site web. 
Leur agence web facturait chaque ajout d'images, ce qui posait problème pour le centre équestre.
        `,
      },
      { element: "custom", content: `<div class="my-1"></div>` },
      {
        element: "p",
        content: `J'ai donc développé un site web complet avec Nuxt.js v2(optimisé pour la SEO) et une API Symfony v5, permettant au client de gérer facilement les images et les informations des chevaux. Les fonctionnalités incluaient :`,
      },
      {
        element: "ul",
        children: [`Gestion des images et conversion au format webp (plus leger).`, `Gestion des chevaux (ajout, modification, suppression).`, `Rappels pour les soins des chevaux (vermifuge, ferrage, etc.).`],
      },
      { element: "p", content: "Malgré des mesures de sécurité rigoureuses (API), le client a souhaité retirer l'application par crainte de fuite de données." },
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
    description: [
      {
        element: "p",
        content: `Symfony 5, PHP, JS, base de données SQL et conception`,
      },
    ],
  },
]);
