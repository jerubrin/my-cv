import contacts from "../../../data/contacts"
import lang from "../../../data/lang";
import projects from "../../../data/projects";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'
import deployIcon from "../../../assets/svg/deploy-print.svg"
import githubIcon from "../../../assets/svg/github-print.svg"

function PProjects() {
  const { lng } = useLangStore();

  return (
    <div className="p-projects">
      {projects.filter((proj) => proj.forPrint).map((project) =>
        <div className="p-projects__item" key={project.name}>
          <div className="p-projects__name">{lang[lng][project.name]}</div>
          <div className="p-projects__desc" dangerouslySetInnerHTML={{__html: lang[lng][project.shortDescription]}} />
          <div className="p-projects__deploy">
            <img className="p-projects__deploy-icon" src={deployIcon} />
            <div className="p-projects__deploy-text">{project.url.substring(8)}</div>
          </div>
          <div className="p-projects__github">
            <img className="p-projects__github-icon" src={githubIcon} />
            <div className="p-projects__github-text">{project.gitUrl.substring(8)}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PProjects;
