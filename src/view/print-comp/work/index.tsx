import work from "../../../data/work";
import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state";
import './style.scss';

function PWork() {
  const { lng } = useLangStore();

  const formatDateForPrint = (date: string): string => {
    if (lng === 'ru') {
      return date
        .replace('Январь', 'Янв')
        .replace('Февраль', 'Фев')
        .replace('Март', 'Мар')
        .replace('Апрель', 'Апр')
        .replace('Май', 'Май')
        .replace('Июнь', 'Июн')
        .replace('Июль', 'Июл')
        .replace('Август', 'Авг')
        .replace('Сентябрь', 'Сен')
        .replace('Октябрь', 'Окт')
        .replace('Ноябрь', 'Ноя')
        .replace('Декабрь', 'Дек');
    } else {
      return date
        .replace('January', 'Jan')
        .replace('February', 'Feb')
        .replace('March', 'Mar')
        .replace('April', 'Apr')
        .replace('May', 'May')
        .replace('June', 'Jun')
        .replace('July', 'Jul')
        .replace('August', 'Aug')
        .replace('September', 'Sep')
        .replace('October', 'Oct')
        .replace('November', 'Nov')
        .replace('December', 'Dec');
    }
  };

  return (
    <div className="p-work">
      {work.map((job, i) => {
        const startDate = lang[lng][job.startDate] || job.startDate;
        const endDate = lang[lng][job.endDate] || job.endDate;
        return (
          <div className="p-work__item" key={i}>
            <div className="p-work__header">
              <div className="p-work__right">
                <div className="p-work__company">
                  {lang[lng][job.company] || job.company}
                </div>
                <div className="p-work__position">
                  {lang[lng][job.position] || job.position}
                </div>
              </div>
              <div className="p-work__period">
                {formatDateForPrint(startDate)} - {formatDateForPrint(endDate)}
              </div>
            </div>
            {job.description && lang[lng][job.description] && (
              <div className="p-work__description" dangerouslySetInnerHTML={{ __html: lang[lng][job.description] }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default PWork;

