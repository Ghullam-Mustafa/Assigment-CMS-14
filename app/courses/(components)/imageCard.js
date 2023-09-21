import Image from "next/image"

export default function ImageCard(props) {
    return (
        <div className="facilities-col">
            <Image width={300} height={300} src={props.src} alt="" />
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
            </p>
        </div>
    )
}
