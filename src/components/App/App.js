import logo from '../../images/shared/foto_personale.png';
import RowIndicator from '../loader_rowIndicator/RowIndicator';
import TicTacToe from '../game_ticTacToe/TicTacToe';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='main-image'>
          <img 
            src={logo} 
            className="fotoPersonale"
            alt="foto_personale" />
          <p>
            <code>Work in progress, stay tuned!</code>
          </p>
        </div>
        <div className='indicator'>
          <p className='descr'>In the meantime you can play something</p>
          <RowIndicator />
        </div>
      </header>
      <body className="App-body">
        <div className='firstComponent'>
          <TicTacToe />
        </div>
      </body>
    </div>
  );
}

export default App;
