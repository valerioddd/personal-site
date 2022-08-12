import './Contacts.css';

import { Instagram, Linkedin, Mail } from 'react-feather';

function Contacts(props) {
    return (
        <div className="Contacts">
            <div className="first">
                <h1 className='title'>Contacts</h1>
                <div onClick={() => 
                        window.open('mailto:https://www.linkedin.com/in/valerio-ditta/', '_blank')}>
                    <Mail color="rgb(192, 192, 192)" size={30}/>
                    <p className='info'>valerioditta96@gmail.com</p>
                </div>
                <div onClick={() => 
                        window.open('https://www.linkedin.com/in/valerio-ditta/', '_blank')}>
                    <Linkedin color="rgb(192, 192, 192)" size={30}/>
                    <p className='info'>Valerio Ditta</p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;