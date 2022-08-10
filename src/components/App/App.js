import logo from '../../images/foto_personale.png';
import PointSpinner from '../loader_pointSpinner/PointSpinner';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo} 
          className="fotoPersonale"
          alt="foto_personale" />
        <p>
          <code>Work in progress, stay tuned</code>
        </p>
        <PointSpinner />
      </header>
    </div>
  );
}

export default App;
