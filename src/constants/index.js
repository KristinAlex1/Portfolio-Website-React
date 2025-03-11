import project1 from "../assets/Netflix.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/Fin-Track.png"

export const HERO_CONTENT = `I am a passionate full-stack developer with a keen interest in building dynamic and scalable web applications. With hands-on experience in React, React-Native, Javascript, Redux, Firebase, and Tailwind CSS for front-end development, and Node.js and Stripe for seamless back-end integration, I specialize in creating intuitive user interfaces and robust functionalities. My goal is to leverage my expertise in modern web technologies to develop innovative solutions that enhance user experience and drive digital transformation.`;






export const PROJECTS = [
  {
    title: "Fin-Track: Personal Finance Tracker",
    image: project3,
    description:
      "Fin-Track is a smart finance management app for students, designed to track expenses, optimize budgets, and provide savings insights. It analyzes spending patterns, offers personalized financial tips, and alerts users about upcoming deals, helping students make informed financial decisions effortlessly.",
    technologies: ["React", "Redux", "Firebase","Tailwind CSS","Charts.js"],
    link: "https://fin-tracker-318d8.web.app/"
  },
  {
    title: "Netflix Clone",
    image: project1,
    description:
      "Netflix Clone – A full-stack streaming platform built with React, Redux, Firebase, Tailwind CSS, and Stripe. It features secure authentication, movie browsing, subscription plans with Stripe payments, and a fully responsive UI. Users can sign in, explore content, and subscribe to premium plans. Deployed with Firebase Hosting.",
    technologies: ["React", "Tailwind", "Firebase","Stripe", "Redux"],
    link: "https://netflix-clone-b312c.web.app/"
  },
  {
    title: "Currency Calculator",
    image: project2,
    description:
      "A React Native app for converting CAD to multiple currencies. Features a FlatList for easy currency selection, real-time calculations, and user-friendly design. Perfect for quick and accurate conversions!",
    technologies: ["React-Native", "Typescript", "CSS"],
    link: "https://github.com/KristinAlex1/Currency-Calculator-React-Navtive-App"
  },
  
];

export const CONTACT = {
  address: "35 Crowell Dr, Wolfville, NS , Canada",
  phoneNo: "+1 343 989 6022",
  email: "kristinalex2001@gmail.com",
};