import logo from '../../images/shared/foto_personale.png';
import PointSpinner from '../loader_pointSpinner/PointSpinner';
import RowIndicator from '../loader_rowIndicator/RowIndicator';
import TicTacToe from '../game_ticTacToe/TicTacToe';
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
          <code>Work in progress, stay tuned!</code>
        </p>
      </header>
      <body className="App-body">
        <p className='descr'>In the meantime you can play something</p>
        <RowIndicator />
        <div className='firstComponent'>
          <TicTacToe />
        </div>
      </body>
    </div>
  );
}

export default App;
