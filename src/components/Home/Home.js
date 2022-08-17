import './Home.css';

import TicTacToe from '../game_ticTacToe/TicTacToe';
import logo from '../../images/foto_personale.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging, faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

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
                    <div className='under-construction'>
                        <FontAwesomeIcon icon={faPersonDigging} beat size="2x"/>
                    </div>
                </div>
                <div onClick={() => window.location.replace("/#tictactoe")} >
                    <p>
                        <code>In the meantime you can play something</code>
                    </p>
                    <FontAwesomeIcon icon={faArrowDownLong} bounce size="2x" className='indicator'/>
                </div>
            </div>
            <div className="second">
                <TicTacToe />
            </div>
        </div>
    );
}

export default Home;