import { useState } from "react";
import work from "../../../data/work";
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state";
import './style.scss';

function Work() {
  const { lng } = useLangStore();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="work" id="work">
      <h3 className="work__title">{lang[lng]["work"]}</h3>
      <div className="work__list">
        {work.map((job, i) => (
          <div key={i} className="work__item">
            <div
              className={`work__logo-wrapper ${job.description ? 'work__logo-wrapper--clickable' : ''}`}
              onClick={job.description ? () => toggleExpand(i) : undefined}
            >
              {job.logo ? (
                <img src={job.logo} alt={job.company} className="work__logo" />
              ) : (
                <div className="work__logo-placeholder">{job.company.charAt(0)}</div>
              )}
            </div>
            <div className="work__right-wrapper">
              <div className="work__company">
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="work__company-link">
                    {lang[lng][job.company] || job.company}
                  </a>
                ) : (
                  lang[lng][job.company] || job.company
                )}
              </div>
              <div className="work__position">
                {lang[lng][job.position] || job.position}
              </div>
              <div className="work__period">
                {lang[lng][job.startDate] || job.startDate} - {lang[lng][job.endDate] || job.endDate}
              </div>
              {job.description && lang[lng][job.description] && (
                <div className={`work__description ${expandedIndex === i ? 'work__description--expanded' : ''}`}>
                  <div className="work__description-inner" dangerouslySetInnerHTML={{ __html: lang[lng][job.description] }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
