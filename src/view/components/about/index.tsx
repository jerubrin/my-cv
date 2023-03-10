import { createRef, useEffect, useRef } from "react";
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function About() {
  const { lng } = useLangStore();

  return (
    <section className="about" id="about">
      <h3 className="about__title">{lang[lng]["about"]}</h3>
      <div className="about__wrapper">
        <p dangerouslySetInnerHTML={{ __html: lang[lng]["about1"] }}></p>
        <p dangerouslySetInnerHTML={{ __html: lang[lng]["about2"] }}></p>
        <p dangerouslySetInnerHTML={{ __html: lang[lng]["about3"] }}></p>
        <p dangerouslySetInnerHTML={{ __html: lang[lng]["about4"] }}></p>
      </div>
    </section>
  )
}

export default About