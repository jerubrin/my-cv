import skills from "../../../data/skills"
import './style.scss'

function Skills() {
  return (
    <section className="skills" id="skills">
      <h3 className="skills__title">SKILLS</h3>
      <ul className="skills__list">
        {skills.map((skill) => 
          <li
            className={`skills__item skills__item_${skill.id}`}
            style={{ background: `linear-gradient(94.69deg, ${skill.colors[0]} 0%, ${skill.colors[1]} 100%)` }} >
            <div
              className="skills__icon"
              style={{ 
                backgroundImage: `url(${skill.icon})`,
                width: skill.width ? `${skill.width}px` : "33px",
              }} />
            <p className="skills__text">{skill.name}</p>
          </li>
        )}
          {/* 
          { 
            name: "HTML",
            icon: iconHtml,
            iconBw: iconHtmlBw,
            colors: [ "#E44D26", "#F16529" ],
            width: 28.3,
          },
          <li className="skills__item skills__item_html">
              <div className="skills__icon"></div>
              <p className="skills__text">HTML</p>
          </li>
          <li className="skills__item skills__item_css">
              <div className="skills__icon"></div>
              <p className="skills__text">CSS</p>
          </li>
          <li className="skills__item skills__item_js">
              <div className="skills__icon"></div>
              <p className="skills__text">JavaScript</p>
          </li>
          <li className="skills__item skills__item_ts">
              <div className="skills__icon"></div>
              <p className="skills__text">TypeScript</p>
          </li>
          <li className="skills__item skills__item_webpack">
              <div className="skills__icon"></div>
              <p className="skills__text">webpack</p>
          </li>
          <li className="skills__item skills__item_sass">
              <div className="skills__icon"></div>
              <p className="skills__text">sass</p>
          </li>
          <li className="skills__item skills__item_less">
              <div className="skills__icon"></div>
              <p className="skills__text">less</p>
          </li>
          <li className="skills__item skills__item_git">
              <div className="skills__icon"></div>
              <p className="skills__text">git</p>
          </li>
          <li className="skills__item skills__item_node">
              <div className="skills__icon"></div>
              <p className="skills__text">Node.js</p>
          </li>
          <li className="skills__item skills__item_mongo">
              <div className="skills__icon"></div>
              <p className="skills__text">MongoDB</p>
          </li>
          <li className="skills__item skills__item_react">
              <div className="skills__icon"></div>
              <p className="skills__text">React</p>
          </li>
          <li className="skills__item skills__item_redux">
              <div className="skills__icon"></div>
              <p className="skills__text">Redux</p>
          </li>
          <li className="skills__item skills__item_docker">
              <div className="skills__icon"></div>
              <p className="skills__text">Docker</p>
          </li>
          <li className="skills__item skills__item_cicd">
              <div className="skills__icon"></div>
              <p className="skills__text">CI/CD</p>
          </li>
          <li className="skills__item skills__item_figma">
              <div className="skills__icon"></div>
              <p className="skills__text">Figma</p>
          </li>
          <li className="skills__item skills__item_json">
              <div className="skills__icon"></div>
              <p className="skills__text"></p>
          </li>
          <li className="skills__item skills__item_bem">
              <div className="skills__icon"></div>
              <p className="skills__text">BEM</p>
          </li>
          <li className="skills__item skills__item_stylus">
              <div className="skills__icon"></div>
              <p className="skills__text">Stylus</p>
          </li>
          <li className="skills__item skills__item_zustand">
              <div className="skills__icon"></div>
              <p className="skills__text">Zustand</p>
          </li> */}
      </ul>
  </section>
  )
}

export default Skills