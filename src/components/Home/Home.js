import './Home.css';
import React, { useState } from 'react';

import logo from '../../images/foto_personale.png';
import school from '../../data/school.json'
import work from '../../data/work.json'

import Modal from '../Modal/Modal';
import Section from './Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong
    , faArrowUpLong
    , faGraduationCap
    , faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Home() {
    const [show, setShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalActivity, setModalActivity] = useState("");
    const [modalDuration, setModalDuration] = useState("");
    const [modalWhere, setModalWhere] = useState("");
    const [modalDescription, setModalDescription] = useState("");

    function showModal(title, activity, duration, where, description) {
        setModalTitle(title);
        setModalActivity(activity);
        setModalDuration(duration);
        setModalWhere(where);
        setModalDescription(description);
        setShow(true)
    }

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
                <Section
                    title="School"
                    leftIcon={faGraduationCap}
                    list={school}
                    onClick={showModal}
                    />
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
                <Section
                    title="Work"
                    leftIcon={faBriefcase}
                    list={work}
                    onClick={showModal}
                    />
            </div>
            <Modal 
                show={show}
                title={modalTitle}
                activity={modalActivity}
                duration={modalDuration}
                where={modalWhere}
                description={modalDescription}
                onClose={() => setShow(false)} 
                />
        </div>
    );
}

export default Home;