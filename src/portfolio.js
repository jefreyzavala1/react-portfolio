const header = {
  homepage: "/",
  title: "JZ",
};

const about = {
  name: "Jefrey Zavala",
  role: "Full Stack Software Engineer",
  photo: "./images/headshot1.png",

  description:
    "I am a Full Stack Software Engineer and a continual learner who enjoys creating innovative technical solutions.Experienced with building strong relationships with clients,and teammates across multiple projects.Driven to solve challenging problems that positively impact people's everyday lives. ",
  resume:
    "https://docs.google.com/document/d/1GEhXsvHVDU8DQDqckNmegx5rBgI6wy5f_qI84Kw3phw/edit?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/jefreyzavala/",
    github: "https://github.com/jefreyzavala1",
  },
};

const projects = [
  {
    name: "Fallmart",
    description: "A full stack e-commerce website built in React.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    sourceCode: "https://github.com/jefreyzavala1/Walmart-MERN-APP",
    livePreview: "https://fallmart.jefreyzavala.me/",
    img: "https://i.imgur.com/OikVQxD.png",
  },
  {
    name: "Kickquest",
    description: "A full stack shoe selling website built in react.",
    stack: ["MongoDb", "Express", "React", "Node.js"],
    sourceCode: "https://github.com/jefreyzavala1/unit-3-project",
    livePreview: "https://kickquest.jefreyzavala.me/",
    img: "https://i.imgur.com/3iPp8e6.png",
  },
  {
    name: "Cinematica",
    description: "A Movie Search app using the omdb api built in react.",
    stack: ["React"],
    sourceCode: "https://github.com/jefreyzavala1/movie-search-api",
    livePreview: "https://cinematica-bfa5c42d8f9e.herokuapp.com/",
    img: "https://i.imgur.com/p40XydT.png",
  },
  {
    name: "PokeClash",
    description:
      "An interactive two-player pokemon battle game.Fight till the end!",

    stack: ["Html", "Css", "JavaScript"],
    sourceCode: "https://github.com/jefreyzavala1/unit-1-project",
    livePreview: "https://jefreyzavala1.github.io/unit-1-project/",
    img: "https://i.imgur.com/Txnoo0L.png",
  },
  {
    name: "Blogging",
    description: "A full stack user blog app ",
    stack: ["JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB", "Ejs"],
    sourceCode: "https://github.com/jefreyzavala1/simply-blogging",
    livePreview: "https://simply-blogging.herokuapp.com/",
    img: "https://i.imgur.com/cQUR9v5.png",
  },

  {
    name: "Appointy",
    description:
      "Full Stack app that enables users to manage their appointments.",
    stack: ["JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB", "Ejs"],
    sourceCode: "https://github.com/jefreyzavala1/appointment-mvc-auth",
    livePreview: "https://appointy-portal.herokuapp.com/",
    img: "https://i.imgur.com/HVKQCxc.png",
  },
  {
    name: "Course Platform",
    description:
      "Course management tool for adding removing and updating course information.",
    stack: ["JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB", "Ejs"],
    sourceCode: "https://github.com/jefreyzavala1/school-course-app",
    livePreview: "https://class-courses-app.herokuapp.com/",
    img: "https://i.imgur.com/0MTm3SC.png",
  },

  {
    name: "Puzzle Game",
    description: "Can you rearange the picture back to its orginal?",
    stack: ["Html", "Css", "JavaScript"],
    sourceCode: "https://github.com/jefreyzavala1/puzzlegame",
    livePreview: "https://jefreypuzzlegame.herokuapp.com/",
    img: "https://i.imgur.com/gBfa4PL.jpg",
  },
  {
    name: "NewsLetter App",
    description:
      "Using the Mailchimp API to subscribe users to a mailing list.",
    stack: ["Html", "Css", "Bootstrap", "Node.js", "Express", "JavaScript"],
    sourceCode: "https://github.com/jefreyzavala1/mailchimp-newsletter-api",
    livePreview: "https://safe-wildwood-38967.herokuapp.com/",
    img: "https://i.imgur.com/c3Y2VOU.png",
  },
  {
    name: "Task Tracker",
    description:
      "A full stack web application created to help users in efficiently managing their daily tasks and to-do.",
    stack: [
      "Html",
      "Css",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
    ],
    sourceCode: "https://github.com/jefreyzavala1/task-tracker",
    livePreview: "https://task-tracker-list-app.herokuapp.com/",
    img: "https://i.imgur.com/PzVYHIu.png",
  },
];

const skills = [
  "<i class='fab fa-html5 fa-2xl' style='color: #E44D26;'></i>",
  "<i class='fab fa-css3-alt fa-2xl' style='color: #2965F1;'></i>",
  "<i class='fab fa-js fa-2xl' style='color: #F0DB4F;'></i>",
  "<i class='fab fa-react fa-2xl' style='color: #61DAFB;'></i>",
  "<i class='fas fa-database fa-2xl' style='color: #47A248;'></i>",
  "<i class='fab fa-java fa-2xl' style='color: #007396;'></i>",
];

const contact = {
  email: "jefreyzavala1@gmail.com",
};

export { header, about, projects, skills, contact };
