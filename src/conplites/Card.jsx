import Button from "./Button";

function Card({ title, info, price }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{info}</p>
      <h4>{price}</h4>
      <Button text="Sotib olish" rang="orange" />
    </div>
  );
}

export default Card;