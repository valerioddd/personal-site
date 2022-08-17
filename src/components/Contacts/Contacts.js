import './Contacts.css';

import linkedInLogo from '../../icons/linkedin.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contacts(props) {
    return (
        <>
        <div className='title-div'>
            <h1 className='title'>Contacts</h1>
            <p className='subtitle'>
                <code>All my contacts here</code>
            </p>
        </div>
        <div className="component">
            <div className="firstComponent">
                <div onClick={() => 
                        window.open('mailto:https://www.linkedin.com/in/valerio-ditta/', '_blank')}>
                    <img 
                        src={linkedInLogo} 
                        className="icon"
                        alt="linkedin" />
                    <p className='info'>valerioditta96@gmail.com</p>
                </div>
                <div onClick={() => 
                        window.open('https://www.linkedin.com/in/valerio-ditta/', '_blank')}>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className='icon'/>        
                    <p className='info'>Valerio Ditta</p>
                </div>
            </div>
        </div>
        <div>
            <script async 
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8368813446587107"
                crossorigin="anonymous">
            </script>
        </div>
        </>
    );
}

export default Contacts;