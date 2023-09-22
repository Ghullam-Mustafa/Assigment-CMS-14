// import "./coursesStyle.css"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"

import Header from '../(components)/header/header'
import TextCard from './(components)/textCard'
import ImageCard from './(components)/imageCard'


const fetchServices = async () => {
  const course = await client.fetch(`*[_type == "courseWeOffer"]`, {}, { cache: 'no-cache' });
  return course
}


async function Courses() {
  const course = await fetchServices();
  return (
    <>
      <Header title="OUR COURSES" />

      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          {
            course.map((card) => {
              return (
                <>

                  <TextCard title={card.title} description={card.description} />
                  {/* <TextCard title="Graduate Programs" />
          <TextCard title="Adult Learning & Degree Completion" /> */}


                </>
              )
            })
          }
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