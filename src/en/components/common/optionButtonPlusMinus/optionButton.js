import React, {Component} from 'react';

import './optionButton.css';



class OptionButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-option-button">
                <div className="option-flex-line">
                    <div className="option-flex-item">
                        <div className="btn-circle-option"></div>
                    </div>
                    <div className="option-flex-item"></div>
                    <div className="option-flex-item"></div>
                </div>
            </div>
         );
    }
}
 
export default OptionButtonComponent;