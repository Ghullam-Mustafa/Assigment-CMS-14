// import "./coursesStyle.css"

import Header from '../(components)/header/header'
import TextCard from './(components)/textCard'
import ImageCard from './(components)/imageCard'
function Courses() {
  return (
    <>
      <Header title="OUR COURSES" />

      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <TextCard title="Undergraduate Programs" />
          <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" />
        </div>
      </section>



      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <ImageCard src="/course1.png" title="Web Development" />
          <ImageCard src="/course2.png" title="Artificial Intelligence" />
          <ImageCard src="/course3.png" title="Data Science" />

        </div>
      </section>



    </>
  )
}
export default Courses