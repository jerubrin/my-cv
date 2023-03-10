import contacts from "../../../data/contacts"
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'
import locationIcon from "../../../assets/svg/location.svg"
import PAbout from "../about";
import PEducation from "../education";
import PCourses from "../courses";
import PProjects from "../projects";

function Right() {
  const { lng } = useLangStore();

  return (
    <div className="p-right">
      <div className="p-right__full-name">{lang[lng]["Alexey Kuptsov"]}</div>
      <div className="p-right__job">{lang[lng]["frontend developer"]}</div>
      <div className="p-right__location">
        <img className="p-right__location-icon" src={locationIcon} width="16px" height="16px" />
        <div className="p-right__location-text">{lang[lng]["Kazakhstan, Karaganda"]}</div>
      </div>
      <div className="p-title-right">{lang[lng]["about"]}</div>
      <PAbout />
      <div className="p-hr" />
      <div className="p-title-right">{lang[lng]["education"]}</div>
      <PEducation />
      <div className="p-hr" />
      <div className="p-title-right">{lang[lng]["courses"]}</div>
      <PCourses />
      <div className="p-hr" />
      <div className="p-title-right">{lang[lng]["projects"]}</div>
      <PProjects />
    </div>
  )
}

export default Right;
