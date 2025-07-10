import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bootstrap,
  firebase,
  next,
  web3,
  docker,
  tapout,
  yiess,
  lens,
  gastos,
  todo,
  cafe,
  blog,
  startup,
  portfolio,
  bootstrapProject,
  flamatech,
  profitSecured,
  shadcn,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "techs",
    title: "My Stack",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
  {
    title: "Fast learner",
    icon: backend,
  },
  {
    title: "Adaptable to changes",
    icon: creator,
  },
];

const technologies = [
  {
    name: "html 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Shadcn UI",
    icon: shadcn,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  // {
  //   name: "Git",
  //   icon: git,
  // },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Tapout Perú",
    icon: tapout,
    iconBg: "#000",
    date: "March 2021 - April 2021",
    points: [
      "Make a new home page following a PSD file to make a UI with a pixel-perfect fit",
      "Use WordPess and the page builder WPBakery to construct the interface",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Front-end/Blockchain developer",
    company_name: "Yiess",
    icon: yiess,
    iconBg: "#fff",
    date: "September 2021 - March 2023",
    points: [
      "In charge of the creation of front-end components, as well as in the refactoring of the code",
      "Assisting with the NFTs minting page as well as the purchasing system for sell the images using metaplex and the Candy Machine Contract.",
      "Review and perform functions to connect to the project's smart contract",
      "Create new functionalities for the project, like allow the users to create NFTs, give like to them, and to sell them",
      "Developing and maintaining the web applications of the project using React.js/Next.js, Javascript/Typescript and other related technologies.",
      "Collaborating with cross-functional teams and other developers to create a good product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full-stack/Bot/Blockchain developer",
    company_name: "FlamaTech",
    icon: flamatech,
    iconBg: "#fff",
    date: "March 2023 - July 2025",
    points: [
      "In charge of the creation of front-end components, as well as in the refactoring of the code",
      "I worked on the back-end of the project by implementing new features through the creation of endpoints in node.js",
      "Creation of telegram and discord bots using node.js",
      "Creation of telegram mini-apps",
      "Use bots to collect data and display it on a website",
      "Create new functionalities for the project using telegram or discord bots, like give a discord role based on the blockchain activity that have a user",
      "Implementing blockchain features for bots and web pages using libraries such as viem.js, ether.js and wagmi.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Profit Secured FX project",
    description: `I built a landing page for a client that provided an algorithmic trading bot.`,
    tags: [
      {
        name: "next",
        color: "text-white",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "pink-text-gradient",
      },
    ],
    image: profitSecured,
    project_link: "https://profit-secured.vercel.app/",
  },
  {
    name: "Expense management application",
    description:
      "This is a web application that enables users to manage their expenses. Users can categorize their expenses and see where their money is being spent.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: gastos,
    source_code_link: "https://github.com/HereFrank/expenseManager",
    project_link: "https://app-lista-gastos-cc4bf.web.app/",
  },
  {
    name: "Restaurant website",
    description: "A home page of a restaurant website",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "text-yellow-500",
      },
    ],
    image: cafe,
    source_code_link: "https://github.com/HereFrank/Restaurant",
    project_link: "https://herefrank.github.io/Restaurant/",
  },
  {
    name: "Blog website",
    description: "A home page of a blog website",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/HereFrank/blog",
    project_link: "https://herefrank.github.io/blog/",
  },
  {
    name: "Startup website",
    description: "A home page of a startup website",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: startup,
    source_code_link: "https://github.com/HereFrank/startup",
    project_link: "https://herefrank.github.io/startup/",
  },
];

export { services, technologies, experiences, testimonials, projects };
