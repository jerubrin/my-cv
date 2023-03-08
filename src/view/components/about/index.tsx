import './style.scss'

function About() {
  return (
    <section className="about" id="about">
      <h3 className="about__title">ABOUT</h3>
      <div className="about__wrapper">
        <p>Я начинающий <span>frontend разработчик</span> c хорошим опытом разработки учебных проектов.</p>
        <p>В процессе обучения мою было выполнено более десятка различных работ, в рамках учебного курса <span>Rolling Scopes School</span>.</p>
        <p>Имеется опыт работы с различными <span>инструментами</span> и <span>библиотеками</span>, опыт командной разработки, согласно методологии <span>git-flow</span>.</p>
        <p>Мои работы имеют высокую оценку, как среди других студентов, так и среди менторов школы.</p>
      </div>
    </section>
  )
}

export default About