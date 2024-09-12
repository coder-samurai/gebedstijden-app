import { Link } from "react-router-dom";
import "../css/Wie.css";


export default function Wie() {
  return (
    <section className="App">
      <div className="ContentContainer WCC">
        <div className="HeaderContainer WHC">
          <div className="WBC">
            <Link to={"/"}>Terug</Link>
          </div>
          <div className="IkImageContainer">
            <img src="./ik.jpg" alt="Mijn Foto" />
          </div>
          <div className="WieTextContainer">
            <h1>Wie ben ik?</h1>
            <p>een jonge man van 18 jaar die van web development houdt, ongeveer 3 jaar geleden begon ik met programmeren, met programming kan je alles maken daarom ben ik een programmeur.</p>
          </div>
        </div>
      </div>
    </section>
  );
};