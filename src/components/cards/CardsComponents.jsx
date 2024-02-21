import laptop from "../../assets/images/laptop.jpg";
import "../../assets/styles/cards.css";

function CardComponent() {
  return (
    <div className="card-container">
      <div className="image">
        <img src={laptop} alt="" />
      </div>

      <div className="content">
        <h1 className="title--h2">Mac Book Air 512Gb</h1>
      </div>
    </div>
  );
}

export default CardComponent;
