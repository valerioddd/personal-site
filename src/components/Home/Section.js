import './Section.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Section(props) {
    return (
        <div className='section-info grid-table'>
            <div>
                <FontAwesomeIcon icon={props.leftIcon} size="3x"/>
                <h1 className='title'>{props.title}</h1>
            </div>
            <div className="grid-table-inner">
                {
                    props.list.map((data, index) => {
                        return (
                            <div
                                key={index} 
                                onClick={() => props.onClick(
                                    data.place
                                    , data.activity
                                    , data.duration
                                    , data.where
                                    , data.description)}>
                                <div className='place'>{data.place}</div>
                                <div className='activity'>{data.activity}</div>
                                <div className='where'>{data.where}</div>
                                <div className='duration'>{data.duration}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Section;