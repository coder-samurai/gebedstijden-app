import { Link } from "react-router-dom";
import '../css/App.css';


function App() {
  return (
    <section className='App'>
      <div className='ContentContainer'>
        <div className='HeaderContainer'>
          <div className='TitleContainer'>
            <h1>Gebedstijden</h1>
          </div>
          <div className='DescriptionContainer'>
            <p>Deze website is gemaakt door <a href="https://github.com/coder-samurai" target="_blank">Anas</a>, en het is gemaakt in <a href="https://reactjs.org/" target="_blank">React JS</a> framework,<br/> en deze website is een beta versie.</p>
          </div>
        </div>
        <div className='FooterContainer'>
          <div className='ButtonsContainer'>
            <div className='ButtonContainer'>
              <button><Link to="/gebedstijden">Gebedstijden</Link></button>
            </div>
            <div className='ButtonContainer'>
              <button><Link to="/wie-ben-ik">Wie ben ik?</Link></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;