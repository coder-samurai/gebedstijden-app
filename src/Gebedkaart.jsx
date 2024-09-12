/* eslint-disable react/prop-types */
import "./css/Gebedkaart.css";


export default function Gebedkaart({
  title,
  time,
  image,
  }) {
  return (
    <div className="Gebedkaart">
        <div className="KaartContainer">
          <div className="ImageContainer">
            <img src={image} alt="Gebed Foto"></img>
          </div>
          <div className="TextContainer">
            <h1>{title}</h1>
            <p>{time}</p>
          </div>
        </div>
    </div>
  );
};