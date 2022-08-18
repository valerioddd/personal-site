import './Home.css';

import logo from '../../images/foto_personale.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong
    , faArrowUpLong
    , faGraduationCap
    , faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <div className="Home">
            <div className="section" id="first">
                <div>
                    <img 
                        src={logo} 
                        className="fotoPersonale"
                        alt="foto_personale" />
                    <p className='main-text title'>Welcome!</p>
                </div>
                <div onClick={() => window.location.replace("/#second")} >
                    <p>
                        <code>Something about me</code>
                    </p>
                    <FontAwesomeIcon icon={faArrowDownLong} bounce size="2x" className='arrow'/>
                </div>
            </div>

            <div className="section" id="second">
                <div onClick={() => window.location.replace("/#first")} >
                    <FontAwesomeIcon icon={faArrowUpLong} bounce size="2x" className='arrow'/>
                    <p><code>Go to previous</code></p>
                </div>
                <div className='section-info grid-table'>
                    <div>
                        <FontAwesomeIcon icon={faGraduationCap} size="3x"/>
                        <h1 className='title'>Who I am</h1>
                        <p className='subtitle'><code>School</code></p>
                    </div>
                    <div className="grid-table-inner">
                        <div>
                            <div className='place'>ITIS A. Volta</div>
                            <div className='description'>High school</div>
                            <div className='where'>Alessandria (Italy)</div>
                            <div className='duration'>2010-2015</div>
                        </div>
                        <div>
                            <div className='place'>UniUPO</div>
                            <div className='description'>Bachelor degree in IT</div>
                            <div className='where'>Alessandria (Italy)</div>
                            <div className='duration'>2015-2019</div>
                        </div> 
                    </div>
                </div>
                <div onClick={() => window.location.replace("/#third")} >
                    <p><code>Something more</code></p>
                    <FontAwesomeIcon icon={faArrowDownLong} bounce size="2x" className='arrow'/>
                </div>
            </div>

            <div className="section" id="third">
                <div onClick={() => window.location.replace("/#second")} >
                    <FontAwesomeIcon icon={faArrowUpLong} bounce size="2x" className='arrow'/>
                    <p><code>Go to previous</code></p>
                </div>
                <div className='third section-info grid-table'>
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} size="3x"/>
                        <h1 className='title'>Who I am</h1>
                        <p className='subtitle'><code>Work</code></p>
                    </div>
                    <div className="grid-table-inner">
                        <div>
                            <div className='place'>Accenture</div>
                            <div className='description'>Developer</div>
                            <div className='where'>Milan (Italy)</div>
                            <div className='duration'>2021-<b>Present</b></div>
                        </div> 
                        <div>
                            <div className='place'>HPE CDS</div>
                            <div className='description'>Developer</div>
                            <div className='where'>Milan (Italy)</div>
                            <div className='duration'>2019-2021</div>
                        </div> 
                        <div>
                            <div className='place'>Hewlett Packard Enterprise</div>
                            <div className='description'>Stage</div>
                            <div className='where'>Milan (Italy)</div>
                            <div className='duration'>2018-2019</div>
                        </div> 
                        <div>
                            <div className='place'>McDonalds</div>
                            <div className='description'>Crew</div>
                            <div className='where'>Alessandria (Italy)</div>
                            <div className='duration'>2017-2018</div>
                        </div> 
                        <div>
                            <div className='place'>Food Lab</div>
                            <div className='description'>Waiter</div>
                            <div className='where'>Essex Road, London (UK)</div>
                            <div className='duration'>2014</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;