const header = {
  homepage: "/",
  title: "JZ",
};

const about = {
  name: "Jefrey Zavala",
  role: "Software Engineer",
  photo: "./images/headshot.jpg",

  description:
    "I am a software engineer with a passion for creating innovative and useful projects!.Committed to building strong relationships with users, stakeholders, and teammates.Dedicated to creating impactful software solutions that seamlessly integrate into people’s lives, making tasks easier and driving positive change. ",
  resume:
    "https://docs.google.com/document/d/1GEhXsvHVDU8DQDqckNmegx5rBgI6wy5f_qI84Kw3phw/edit?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/jefreyzavala/",
    github: "https://github.com/jefreyzavala1",
  },
};

const projects = [
  {
    name: "Kickquest",
    description: "Full stack shoe selling website built in react.",
    stack: ["MongoDb", "Express", "React", "Node.js"],
    sourceCode: "https://github.com/jefreyzavala1/unit-3-project",
    livePreview: "https://kickquest.jefreyzavala.me/",
    // img: "https://i.imgur.com/nFmsf6D.png",
  },
  {
    name: "Cinematica",
    description: "Movie Search app using the omdapi.",
    stack: ["React"],
    sourceCode: "https://github.com/jefreyzavala1/movie-search-api",
    livePreview: "https://cinematica-bfa5c42d8f9e.herokuapp.com/",
    // img: "https://i.imgur.com/nFmsf6D.png",
  },
  {
    name: "PokeClash",
    description:
      "an interactive two-player battle game.Two players select a Pokemon and battle until one emerges victorious.",

    stack: ["Html", "Css", "JavaScript"],
    sourceCode: "https://github.com/jefreyzavala1/unit-1-project",
    livePreview: "https://jefreyzavala1.github.io/unit-1-project/",
    // img: "https://i.imgur.com/HIM5RhT.jpg",
  },
  {
    name: "Simply Blogging",
    description:
      "Full stack app that empowers users to create blogs and connect with others",
    stack: ["JavaScript", "Boostrap", "Node.js", "Express", "MongoDB", "Ejs"],
    sourceCode: "https://github.com/jefreyzavala1/simply-blogging",
    livePreview: "https://i.imgur.com/yLJCcry.jpg",
    // img: "https://i.imgur.com/yLJCcry.jpg",
  },

  {
    name: "Appointy",
    description:
      "Full Stack app that enables users to manage their appointments.",
    stack: ["JavaScript", "Boostrap", "Node.js", "Express", "MongoDB", "Ejs"],
    sourceCode: "https://github.com/jefreyzavala1/appointment-mvc-auth",
    livePreview: "https://appointy-portal.herokuapp.com/",
    // img: "https://i.imgur.com/xnF7NGU.jpg",
  },
  {
    name: "Course Platform",
    description:
      "created to help users effectively manage their courses by providing features for adding, removing, and updating course information",
    stack: ["JavaScript", "Boostrap", "Node.js", "Express", "MongoDB", "Ejs"],
    sourceCode: "https://github.com/jefreyzavala1/school-course-app",
    livePreview: "https://class-courses-app.herokuapp.com/",
    // img: "https://i.imgur.com/nspjbHZ.jpg",
  },

  {
    name: "Puzzle Game",
    description:
      "Game app where the objective is to rearrange nine images into their correct positions while strategizing to achieve the goal in the fewest possible steps",
    stack: ["HTML", "CSS", "JavaScript"],
    sourceCode: "https://github.com/jefreyzavala1/puzzlegame",
    livePreview: "https://jefreypuzzlegame.herokuapp.com/",
    // img: "https://i.imgur.com/gBfa4PL.jpg",
  },
  {
    name: "NewsLetter App",
    description: "Using the Mailchimp API to subscribe users to a mailing list",
    stack: ["Html", "Css", "Bootstrap", "Node.js", "Express"],
    sourceCode: "https://github.com/jefreyzavala1/mailchimp-newsletter-api",
    livePreview: "https://safe-wildwood-38967.herokuapp.com/",
    // img: "https://i.imgur.com/QU1nhuO.jpg",
  },
  {
    name: "Task Tracker",
    description:
      "A full stack web application created to help users in efficiently managing their daily tasks and to-do",
    stack: ["Html", "Css", "Bootstrap", "Node.js", "Express", "MongoDB"],
    sourceCode: "https://github.com/jefreyzavala1/task-tracker",
    livePreview: "https://task-tracker-list-app.herokuapp.com/",
    // img: "https://i.imgur.com/UJeoZvg.jpg",
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
