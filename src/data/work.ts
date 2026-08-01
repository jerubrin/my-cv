// Логотипы компаний должны быть размещены в src/assets/img/
// Импортируйте их здесь, как в courses.ts
import company1Logo from "../assets/img/epam-logo.png";
import company2Logo from "../assets/img/wooppay-logo.png";
import company3Logo from "../assets/img/ecitty-logo.png";
import company4Logo from "../assets/img/cupcake-logo.png";

const work = [
  {
    company: "EPAM Anywhere",
    position: "Trainee/Junior Software Engineer",
    logo: company1Logo,
    url: "https://www.epam.com/",
    startDate: "Август 2020",
    endDate: "Февраль 2021",
    description: "EPAM Anywhere Desc",
  },
  {
    company: "Wooppay",
    position: "Frontend/Fullstack Engineer",
    logo: company2Logo,
    url: "https://wooppay.com/",
    startDate: "Февраль 2021",
    endDate: "Январь 2023",
    description: "Wooppay Desc",
  },
  {
    company: "Ecitty",
    position: "Full Stack Developer",
    logo: company3Logo,
    url: "https://promo.ecitty.com/",
    startDate: "Январь 2023",
    endDate: "Ноябрь 2024",
    description: "Ecitty Desc",
  },
  {
    company: "Cupcake Development",
    position: "Fullstack and Mobile Engineer",
    logo: company4Logo,
    url: "https://cupcakedev.com/",
    startDate: "Ноябрь 2024",
    endDate: "настоящее время",
    description: "Cupcake Development Desc",
  },
];

export default work;
