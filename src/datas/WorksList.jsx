const WorksList = [
  {
    projectName: "Art@home",
    description:
      "The aim of Art@home is to create a platform where contemporary artists (both emerging and established) can exhibit their work, giving the public the chance to discover a wide variety of artistic expression.",
    stack: {
      front: "JavaScript, React, Redux, Axios, Jest, JsDom",
      back: "PHP, Symfony, Nelmio",
    },
    url: "",
    src: [
      { front: "https://github.com/David-Besse/art-home-front" },
      { back: "https://github.com/David-Besse/art-home_back" },
    ],
    screenshot: "/images/arthome_mockup.png",
  },
  {
    projectName: "Portfolio",
    description: "My portfolio version 1",
    stack: {
      front:
        "Vite, React, Three, Tailwind, Zustand, Styled-components, React-Hook-Form, React-Alice-Carousel, Emailjs",
      back: "",
    },
    url: "",
    src: [{ front: "https://github.com/David-Besse/portfolio" }, { back: "" }],
    screenshot: "/images/portfolio_mockup.png",
  },
  {
    projectName: "Pokedex app",
    description:
      "This is a tiny project using Angular (version 17) and an Express API. I wanted to create an app that shows pokemons data and allows adding them while learning a new framework.",
    stack: {
      front: "Angular v17, TypeScript",
      back: "Express, Node.js, Swagger, PostgreSQL",
    },
    url: "",
    src: [
      { front: "https://github.com/David-Besse/angular-pokedex" },
      { back: "https://github.com/David-Besse/express-pokedex-api" },
    ],
    screenshot: "/images/pokedex_mockup.png",
  },
];

export default WorksList;
