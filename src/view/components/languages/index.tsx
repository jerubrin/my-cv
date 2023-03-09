import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function Languages() {
  const { lng } = useLangStore();

  return (
    <section className="languages" id="languages">
      <h3 className="languages__title">{lang[lng]["languages"]}</h3>
      <div className="languages__list">
          <>
              <p className="languages__lang">Russian</p>
              <p className="languages__level">native</p>
              <div className="languages__points">
                  <div className="languages__point languages__point_check"></div>
                  <div className="languages__point languages__point_check"></div>
                  <div className="languages__point languages__point_check"></div>
                  <div className="languages__point languages__point_check"></div>
                  <div className="languages__point languages__point_check"></div>
                  <div className="languages__point languages__point_check"></div>
              </div>
          </>
          <>
              <p className="languages__lang">English</p>
              <p className="languages__level">intermediate (B1)</p>
              <div className="languages__points">
                  <div className="languages__point languages__point_check"></div>
                  <div className="languages__point languages__point_check"></div>
                  <div className="languages__point languages__point_check"></div>
                  <div className="languages__point"></div>
                  <div className="languages__point"></div>
                  <div className="languages__point"></div>
              </div>
          </>
      </div>
    </section>
  )
}

export default Languages