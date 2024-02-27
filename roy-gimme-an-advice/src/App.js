import './App.css';
import sunrise from './images/sunrise.jpg';
import cryingGirl from './images/cryingGirl.jpg'

function App() {
  return (
    <div className="App">
      <header>...Roy, gimme an advice...</header>
      <figure className="TopHomeImg">
        <img className="Sunrise" src={sunrise} alt="Sunrise by Roy Lichtenstein (1965)" title="Sunrise by Roy Lichtenstein (1965)"/>
      </figure>
      <main>
        <div className="ContainerBubble">
          <div className="Bubble">Leandro Nascimento da Silva Barreto</div>
        </div>
        <div className="ContainerButton"></div>
      </main>
      <figure className="BottomHomeImg">
        <img className="CryingGirl" src={cryingGirl} alt="Crying Girl by Roy Lichtenstein (1965)" title="Crying Girl by Roy Lichtenstein (1965)"/>
      </figure>
      <footer></footer>
    </div>
  );
}

export default App;
