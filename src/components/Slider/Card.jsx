import extractNameFromSRC from "../utils/extractNameFromSRC";

function Card({ card }) {
  return (
    <div className="card">
      <img src={card.imgSrc} alt={extractNameFromSRC(card.imgSrc)} />
      <h3>
        {card.title}
      </h3>
      <p>
        {card.desc}
      </p>
    </div>
  );
}

export default Card;
