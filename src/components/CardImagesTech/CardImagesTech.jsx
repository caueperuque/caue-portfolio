import { data } from "./data"
import './style/CardImagesTech.css'

export default function CardImagesTech() {
  return (
    <article className="cardImages__container">
      { data.map((image) => (
        <div>
          <img src={image.image} className="cardImages__icon"/>
          {/* <p>{image.name}</p> */}
        </div>
      )) }
    </article>
  )
}