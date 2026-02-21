// Логотипы компаний должны быть размещены в src/assets/img/
// Импортируйте их здесь, как в courses.ts
import company1Logo from "../assets/img/epam-logo.png";
import company2Logo from "../assets/img/ecitty-logo.png";
import company3Logo from "../assets/img/cupcake-logo.png";

const work = [
  {
    company: "EPAM Anywhere",
    position: "Trainee Software Engineer (Frontend)",
    logo: company1Logo,
    url: "https://www.epam.com/",
    startDate: "Декабрь 2022",
    endDate: "Февраль 2023",
    description: "EPAM Anywhere Desc",
  },
  {
    company: "Ecitty",
    position: "Full Stack Developer",
    logo: company2Logo,
    url: "https://promo.ecitty.com/",
    startDate: "Февраль 2023",
    endDate: "Декабрь 2024",
    description: "Ecitty Desc",
  },
  {
    company: "Cupcake Development",
    position: "Fullstack and Mobile Engineer",
    logo: company3Logo,
    url: "https://cupcakedev.com/",
    startDate: "Декабрь 2024",
    endDate: "настоящее время",
    description: "Cupcake Development Desc",
  },
];

export default work;

