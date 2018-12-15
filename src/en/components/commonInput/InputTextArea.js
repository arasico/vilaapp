import React from 'react';

import './InputTextArea.css';



const textarea = (props) => {


    return (
        <div className="Textarea">

            <div  className="textarea-label">
                <textarea    type={props.type}
                          onClick={props.clicked} 
                          placeholder=" "
                          onChange={props.changed}
                          name={props.name}
                          required
                          />
                <span className="span-label">{props.placeHolder }</span>
                <span className="textarea-error-text" >{props.error}</span>
            </div>


        </div>
    )
}

export default textarea;