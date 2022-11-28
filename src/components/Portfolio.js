import React from "react";
import Project from "./Project";
import sparkle from '../assets/sparkle.gif'

const projects = [
  {
    id: 0,
    title: "Weather-Dashboard",
    languages: "HTML, CSS, JS",
    technology: "Bootstrap, Jquery, FontAwesome",
    image: "/img/weather-dashboard.png",
    description: "Provides weather data based on field city search",
    repo: "https://github.com/JFritsch04/06-weather-dashboard",
    live: "https://jfritsch04.github.io/06-weather-dashboard/",
  },
  {
    id: 1,
    title: "Team Profile Generator",
    languages: "HTML, JS",
    technology: "Handlebars, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "/img/team-profile.png",
    description: "Generated team profiles - for companies",
    repo: "https://github.com/JFritsch04/10-team-profile-generator",
    live: "https://floating-thicket-72381.herokuapp.com/",
  },
  {
    id: 2,
    title: "Flareon Flip (Group Collab)",
    languages: "HTML, CSS, JS",
    technology: "Express, MySQL, Sequelize, Bootstrap, SweetAlert2, Handlebars, Elfsight",
    image: "/img/Flareon-flip.png",
    description: "Game application roughly based on Voltorb Flip from Pokemon HeartGold and SoulSilver. This was a group project in bootcamp; I created the styling and formatted the game itself.",
    // Website for this one is currently not active, due to the owner deactivating the site
    live: "https://flareon-flip-production.up.railway.app/",
    repo: "https://github.com/wlk-dev/flareon-flip",
  },
  {
    id: 3,
    title: "MVC Tech Blog",
    languages: "HTML, CSS, JS",
    image: "/img/mvc.png",
    technology: "node.js, inquirer, SQL & Sequelize, Express, Insomnia, Handlebars, JawsDB and Bootstrap",
    description: "Blog website with login, create/delete/edit posts",
    repo: "https://github.com/JFritsch04/14-tech-blog",
    live: "https://peaceful-taiga-97767.herokuapp.com/login",
  },
  {
    id: 4,
    title: "Workday Scheduler",
    languages: "HTML, CSS, JS",
    technology: "jQuery, Bootstrap, Moment.js",
    image: "/img/workday.png",
    description: "A simple calendar application that allows a user to save events for each hour of the day.",
    repo: "https://github.com/JFritsch04/05-workday-schedule",
    live: "https://jfritsch04.github.io/05-workday-schedule/",
  },
  {
    id: 5,
    title: "Personal Portfolio (Unfinished)",
    languages: "HTML, CSS",
    technology: "",
    image: "/img/portfolio.png",
    description: "An ongoing project for my own stylist personal portfolio",
    repo: "https://github.com/JFritsch04/my-portfolio",
    live: "https://jfritsch04.github.io/my-portfolio/",
  },
  {
    id: 6,
    title: "Ingredient Search (Group Collab)",
    languages: "HTML, CSS, JS",
    technology: "",
    image: "/img/apple.png",
    description: "Group project made during bootcamp, I create raw CSS styling & HTML for the Recipe Page.",
    repo: "https://github.com/Glitch0320/group03",
    live: "https://glitch0320.github.io/group03/",
  },
  {
    id: 7,
    title: "Coding Quiz",
    languages: "HTML, CSS, JS",
    technology: "",
    image: "/img/quiz.png",
    description: "Group project made during bootcamp, I create raw CSS styling & HTML for the Recipe Page.",
    repo: "https://github.com/JFritsch04/04-code-quiz-assignment",
    live: "https://jfritsch04.github.io/04-code-quiz-assignment/",
  },
];

function Portfolio() {
  return (
    <div>
      
      <p className="info"> Example Works </p>
      <img className="sparkle" src={sparkle} alt="emote" />
      
      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;