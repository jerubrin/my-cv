import contacts from "../../../data/contacts"
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function Top() {
  const { lng } = useLangStore();

  return (
    <section className="top" id="top">
      <h1 className="top__name">{lang[lng]["Alexey Kuptsov"]}</h1>
      <h2 className="top__job">{lang[lng]["frontend developer"]}</h2>
      <div className="top__location">
          <div className="top__location-img"></div>
          <p className="top__location-text">{lang[lng]["Kazakhstan, Karaganda"]}</p>
      </div>
      <div className="top__contacts">
        {contacts.map((contact) => 
          (<a 
            className={`top__${contact.id}-btn`}
            style={{ backgroundImage: `url(${contact.icon})` }}
            href={contact.url}
            target="_blank"
          ></a>)
        )}
      </div>
      <div className="top__image"></div>
    </section>
  )
}

export default Top