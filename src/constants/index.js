import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  postgresql,
  git,
  nestjs,
  bootstrap,
  vuejs,
  next,
  web3,
  docker,
  southteams,
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
  prisma,
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
    title: "Full-Stack Developer",
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
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Shadcn UI",
    icon: shadcn,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Prisma",
    icon: prisma,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Front-end/Blockchain developer",
    company_name: "Yiess",
    icon: yiess,
    iconBg: "#fff",
    date: "September 2021 - February 2023",
    points: [
      "Built front-end components and refactored code for the project's views, using React.js/Next.js and JavaScript/TypeScript",
      "Helped build the NFT minting and sales system, using Metaplex and the Candy Machine contract",
      "Contributed to the SPL token sales system on the Solana blockchain",
      "Developed functions to connect the interface with the project's smart contract",
      "Added features such as letting users create, like and sell NFTs",
      "Implemented responsive design and cross-browser compatibility",
    ],
  },
  {
    title: "Full-stack/Bot/Blockchain developer",
    company_name: "FlamaTech",
    icon: flamatech,
    iconBg: "#fff",
    date: "March 2023 - October 2025",
    points: [
      "Developed front-end components and refactored code with scalable, maintainable design patterns",
      "Extended the back-end by creating new endpoints with Node.js and Next.js",
      "Worked with PostgreSQL through Prisma ORM and connected it to Telegram and Discord bots",
      "Built Telegram and Discord bots with Node.js, and helped create Telegram mini-apps for clients",
      "Stored the data collected by bots and displayed it as charts on the company website",
      "Implemented blockchain features for bots and web pages using Viem.js, Ether.js and Wagmi",
      "Handled asynchronous tasks with a BullMQ task queue",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Southteams | Qurable",
    icon: southteams,
    iconBg: "#fff",
    date: "October 2025 - Current",
    points: [
      "Building microservices with Nest.js and implementing the product's business logic",
      "Orchestrating asynchronous processes through RabbitMQ queues",
      "I worked with non-relational databases such as MongoDB, since many microservices needed to focus on storing data.",
      "Creating interfaces and components with Vue.js within a microfrontend architecture",
      "Working in the aviation industry for Sky Airline, on the returns and claims area, handling complex architectures and high data volumes",
      "Collaborating in a Scrum team of up to 7 people",
      "Using AI agents in the workflow to speed up development tasks",
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
