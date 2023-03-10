import contacts from "../../../data/contacts"
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import Left from "../left";
import Right from "../right";
import './style.scss'

function Print() {
  const { lng } = useLangStore();

  return (
    <section className="print-section">
      <Left />
      <Right />
    </section>
  )
}

export default Print