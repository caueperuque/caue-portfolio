import { data } from "./data"
import './style/CardImagesTech.scss'

export default function CardImagesTech() {
  return (
    <article className="cardImages__container">
      {data.map((image) => (
        <div>
          <a>
            <img src={image.image} className="cardImages__icon"/>
          </a>
        </div>
      ))}
    </article>
  )
}