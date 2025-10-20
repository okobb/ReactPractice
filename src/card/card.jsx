import "./card.css";

function Card({src, description , category, price}) {
  return (
    <div className="card">
      <img alt="img" src = {src} />
      <p className="card-description" > Description : {description}</p>
      <p className="card-description"> Category : {category} </p>
      <p className="card-description"> Price : {price}</p>
    </div>
  );
}

export default Card;
