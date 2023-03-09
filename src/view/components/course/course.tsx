import { FC, ReactElement } from "react"
import './style.scss'

interface CourseProps {
  children: JSX.Element[],
  url?: string
}

function Course({ children, url }: CourseProps) {
  return (<>
    {url ? (
      <a className="courses__item" href={url} target="_blank">
        {children}
      </a> 
    ) : (
      <div className="courses__item-no">
        {children.map((elem) =>
          elem
        )}
      </div>
      )
    }
  </>)
}

export default Course