import './Home.css';
import TicTacToe from '../game_ticTacToe/TicTacToe';
import RowIndicator from '../loader_rowIndicator/RowIndicator';
import logo from '../../images/shared/foto_personale.png';

function Home() {
    return (
        <div className="Home">
            <div className="first">
                <div className='head'>
                    <img 
                        src={logo} 
                        className="fotoPersonale"
                        alt="foto_personale" />
                    <p className='work-in-progress'>Work in progress, stay tuned!</p>
                </div>
                <div className='indicator' onClick={() => window.location.replace("/#tictactoe")} >
                    <p>
                        <code>In the meantime you can play something</code>
                    </p>
                    <RowIndicator />
                </div>
            </div>
            <div className="ticTacToe">
                <TicTacToe />
            </div>
        </div>
    );
}

export default Home;