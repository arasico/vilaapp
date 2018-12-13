import React from 'react';

import './InputGroup.css';



const input = (props) => {


    return (
        <div className="Inputbox">

            <div  className="input-label">
                <textarea    type={props.type}
                          onClick={props.clicked} 
                          placeholder=" "
                          onChange={props.changed}
                          name={props.name}
                          required
                          />
                <span className="span-label">{props.placeHolder }</span>
                <span className="input-error-text" >{props.error}</span>
            </div>


        </div>
    )
}

export default input;