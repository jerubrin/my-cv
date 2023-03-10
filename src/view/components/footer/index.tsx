import contacts from "../../../data/contacts";
import lang from "../../../data/lang";
import { trans, useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function Footer() {
  const { lng, setRu, setEn } = useLangStore();

  return (
    <section className="footer">
      <div className="footer__up">
        <nav className="footer__left">
          <ul className="footer__links">
              <li className="footer__link">
                  <a href="#about">{lang[lng]["about"]}</a>
              </li>
              <li className="footer__link">
                  <a href="#skills">{lang[lng]["skills"]}</a>
              </li>
              <li className="footer__link">
                  <a href="#languages">{lang[lng]["languages"]}</a>
              </li>
              <li className="footer__link">
                  <a href="#education">{lang[lng]["education"]}</a>
              </li>
              <li className="footer__link">
                  <a href="#courses">{lang[lng]["courses"]}</a>
              </li>
              <li className="footer__link">
                  <a href="#projects">{lang[lng]["projects"]}</a>
              </li>
          </ul>
        </nav>
        <ul className="footer__right">
            <li className="footer__ru">
                {lng == trans.ru ? <div>ru</div> : <a onClick={setRu}>ru</a>}
            </li>
            <li className="footer__en">
                {lng == trans.en ? <div>en</div> : <a onClick={setEn}>en</a>}
            </li>
            <button className="footer__print" onClick={window.print}></button>
        </ul>
      </div>
      <div className="footer__down">
        <ul className="footer__contacts">
          {contacts.map((contact) => 
            <li className="footer__contact-item">
              <a href={contact.url} target="_blank">
                <div
                  className="footer__contact-icon"
                  style={{ backgroundImage: `url(${contact.icon})` }} />
                <div className="footer__contact-text">{contact.text}</div>
              </a>
            </li>
          )}
        </ul>
        <nav className="footer__left-mobile">
          <ul className="footer__links">
              <li className="footer__link">
                  <a href="#about">{lang[lng]["about"]}</a>
              </li>
              <li className="footer__link">
                  <a href="#skills">{lang[lng]["skills"]}</a>
              </li>
              <li className="footer__link">
                  <a href="#languages">{lang[lng]["languages"]}</a>
              </li>
              <li className="footer__link">
                  <a href="#education">{lang[lng]["education"]}</a>
              </li>
              <li className="footer__link">
                  <a href="#courses">{lang[lng]["courses"]}</a>
              </li>
              <li className="footer__link">
                  <a href="#projects">{lang[lng]["projects"]}</a>
              </li>
          </ul>
        </nav>
        <a className="footer__rs-logo" href="https://rs.school/" target="_blank" />
        <p className="footer__designed-by">designed by Alexey Kuptsov</p>
      </div>
      <div className="footer__bottom-mobile">
        <a className="footer__rs-logo-mobile" href="https://rs.school/" target="_blank" />
        <p className="footer__designed-by-mobile">designed by Alexey Kuptsov</p>
      </div>
    </section>
  )
}

export default Footer