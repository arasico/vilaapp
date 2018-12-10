import React from 'react';
import Radium from 'radium'
import './Button.css';

const button = (props) => (
    <div className="button-box">
        <button className="button-style" 
                onClick={props.click} 
                style={{backgroundColor : props.bgcolor , ':hover' : {backgroundColor : props.hoverbgcolor}} } >
                {props.title}
        </button>

    </div>
);

export default Radium(button);