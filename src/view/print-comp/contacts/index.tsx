import contacts from "../../../data/contacts"
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function PContacts() {
  const { lng } = useLangStore();

  return (
    <div className="p-contacts">
      {contacts.map((cont, i) =>
        <div className="p-contacts__item" key={i}>
          <img className="p-contacts__icon" src={cont.iconBw} width="16px" height="16px" />
          <div className="p-contacts__text">{cont.text}</div>
        </div>
      )}
    </div>
  )
}

export default PContacts;
