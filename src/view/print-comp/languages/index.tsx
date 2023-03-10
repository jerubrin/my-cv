import contacts from "../../../data/contacts"
import lang from "../../../data/lang";
import languiges from "../../../data/languiges";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function PLanguages() {
  const { lng } = useLangStore();

  return (
    <div className="p-lang">
      {languiges.map((language) => 
        <div className="p-lang__item">
          <div className="p-lang__name">{lang[lng][language.name]}</div>
          <div className="p-lang__level">{lang[lng][language.level]}</div>
        </div>
      )}
    </div>
  )
}

export default PLanguages;
