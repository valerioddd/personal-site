import './Contacts.css';

import linkedInLogo from '../../icons/linkedin.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contacts(props) {
    return (
        <>
        <div className='title-div contacts'>
            <h1 className='title'>Contacts</h1>
            <p className='subtitle'>
                <code>All my contacts here</code>
            </p>
        </div>
        <div className="component contacts">
            <div className="firstComponent">
                <div
                    className='block contacts' 
                    onClick={() => 
                        window.open('mailto:https://www.linkedin.com/in/valerio-ditta/', '_blank')}>
                    <img 
                        src={linkedInLogo} 
                        className="icon"
                        alt="linkedin" />
                    <p className='info'>valerioditta96@gmail.com</p>
                </div>
                <div 
                    className='block contacts'
                    onClick={() => 
                        window.open('https://www.linkedin.com/in/valerio-ditta/', '_blank')}>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className='icon'/>        
                    <p className='info'>Valerio Ditta</p>
                </div>
                <iframe 
                    title="Mappa"
                    className='mappa'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d723024.3417503344!2d8.2717235!3d44.9372877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47877431ed416505%3A0xd647f5990f0c62d9!2sAlessandria%2C%20Province%20of%20Alessandria!5e0!3m2!1sen!2sit!4v1660726634594!5m2!1sen!2sit" 
                    width="600" 
                    height="450"     
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
        </>
    );
}

export default Contacts;