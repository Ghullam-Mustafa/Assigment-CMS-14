import Image from "next/image"

export default function testimonialCard(props) {
  return (
    <div className="testimonials-col">
    <Image src={props.src} width={100} height={100} alt="oo.."/>
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem
            praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a
            deserunt. In quia repellat maxime.</p>
        <h3>Student Name</h3>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
    </div>
</div>
  )
}
