import './Card.css';

function Card({ caption, description, image }) {
  return (
    <div className="card">
      <img className="card-image" src={image}/>
      <div>
        <h3 className="card-caption">{caption}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;