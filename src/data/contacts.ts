import whatsapp from "../assets/svg/whatsapp.svg";
import telegram from "../assets/svg/telegram.svg";
import linkedin from "../assets/svg/linkedin.svg";
import email from "../assets/svg/email.svg";
import github from "../assets/svg/github.svg";

import whatsappBw from "../assets/svg/whatsapp-bw.svg";
import telegramBw from "../assets/svg/telegram-bw.svg";
import linkedinBw from "../assets/svg/linkedin-bw.svg";
import emailBw from "../assets/svg/email-bw.svg";
import githubBw from "../assets/svg/github-bw.svg";

const contacts = [
  {
    id: "whatsapp",
    text: "+7 778 141 50 31",
    url: "https://wa.me/77781415031",
    icon: whatsapp,
    iconBw: whatsappBw,
  },
  {
    id: "telegram",
    text: "jerubrin",
    url: "https://t.me/jerubrin",
    icon: telegram,
    iconBw: telegramBw,
  },
  {
    id: "linkedin",
    text: "alexeykuptsov",
    url: "https://linkedin.com/in/alexeykuptsov",
    icon: linkedin,
    iconBw: linkedinBw,
  },
  {
    id: "email",
    text: "kuptsovalexey@mail.ru",
    url: "mailto:kuptsovalexey@mail.ru",
    icon: email,
    iconBw: emailBw,
  },
  {
    id: "github",
    text: "jerubrin",
    url: "https://github.com/jerubrin",
    icon: github,
    iconBw: githubBw,
  },
];

export default contacts;
