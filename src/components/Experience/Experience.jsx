import React from 'react'
import { Link } from 'react-router-dom'

export default function Experience() {
  return (
    <>
      <div className="position-relative p-0 containerWidth col-md-10"style={{ marginLeft:250}}>
        <div style={{opacity: 1}}>
          <div id="experience" className="container py-5">
            <p className="experienceTitle">EXPERIENCE</p>
            <h2 className="experienceHeading">WORK EXPERIENCE</h2>
            <ul className="timeline">
    <li>
  <div className="timeline-badge"><i className="fa-solid fa-pencil"></i>
  </div>
      <div className="timeline-panel">
          <h2><Link to="#">Full Stack Developer</Link> <span>2017-2018</span></h2>
          <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
      </div>
    </li>
        <li>
      <div className="timeline-badge danger">
        <i className="fa-solid fa-pencil"></i>
      </div>
          <div className="timeline-panel">
            <h2><Link to="#">Front End Developer at Google Company</Link> <span>2017-2018</span></h2>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however Link small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
         </div>
       </li>
          <li>
        <div className="timeline-badge warning">
          <i className="fa-solid fa-pencil"></i>
        </div>
            <div className="timeline-panel">
                <h2><Link to="#">System Analyst </Link> <span>2017-2018</span></h2>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however Link small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
             </div>
            </li>
              <li>
                <div className="timeline-badge-end">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
