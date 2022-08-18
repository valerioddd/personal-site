import './Modal.css';
import Button from 'react-bootstrap/Button';

function Modal(props) {
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                    <Button 
                        variant="danger"
                        onClick={props.onClose}
                        >
                        X
                    </Button>
                </div>
                <div className="modal-body">
                    <div className='modal-duration'>{props.duration}</div>
                    <div className='modal-where'>{props.where}</div>
                    <br />
                    <div className='modal-activity'>{props.activity}</div>
                    <div className='modal-description'>{props.description}</div>
                </div>
            </div>

        </div>
    );
}

export default Modal
