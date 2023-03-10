import contacts from "../../../data/contacts"
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'
import photo from '../../../assets/img/my-photo-print.png'
import PContacts from "../contacts";
import PLanguages from "../languages";
import PSkills from "../skills";

function Left() {
  const { lng } = useLangStore();

  return (
    <div className="p-left">
      <img className="p-photo" src={photo} width="130px" height="157px" />
      <div className="p-title-left">{lang[lng]["contacts"]}</div>
      <PContacts />
      <div className="p-title-left">{lang[lng]["languages"]}</div>
      <PLanguages />
      <div className="p-title-left">{lang[lng]["skills"]}</div>
      <PSkills />
    </div>
  )
}

export default Left;
