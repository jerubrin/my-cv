import { createRef, useEffect, useRef } from "react";
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import { usePopMenuStore } from "../../../hooks/pop-up-state";
import './style.scss'

function PopMenu() {
  const { lng } = useLangStore();
  const { isShowing, hidePopMenu } = usePopMenuStore();

  return (
    <aside className="pop-menu" id="pop" style={{ left: isShowing ? 0 : "-100%"}}>
      <nav className="pop-menu__nav">
        <ul className="pop-menu__links">
          <li className="pop-menu__close">
            <button className="pop-menu__close-btn"
              onClick={hidePopMenu}/>
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#about" onClick={hidePopMenu}>{lang[lng]["about"]}</a>
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#skills">{lang[lng]["skills"]}</a>
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#languages">{lang[lng]["languages"]}</a>
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#education">{lang[lng]["education"]}</a>
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#courses">{lang[lng]["courses"]}</a>
          </li>
          <li className="pop-menu__link" onClick={hidePopMenu}>
            <a href="#projects">{lang[lng]["projects"]}</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default PopMenu;
