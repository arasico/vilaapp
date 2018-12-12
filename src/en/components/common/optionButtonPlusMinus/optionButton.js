import React, {Component} from 'react';

import './optionButton.css';
//
// import Icons --------------------------------------->
//
import minus from '../../../../assets/icons/minus.svg'
import pluse from '../../../../assets/icons/pluse.svg'




class OptionButtonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentVal:0
         }

         this.pluseButton = this.pluseButton.bind(this);
    }

    pluseButton(val,oprator){ 

            if(oprator ==='min')
                return this.setState({currentVal: min(val)})
            else if(oprator ==='plus')
                return this.setState({currentVal: plus(val)})

            function min(val){
               let sum = val - 1;
               if (sum > 0)
                return sum
                else return 0
            }

            function plus(val){
                return val + 1
            }      
        
    }



    oprationButton(val , oprator){ 

        if(oprator === 'min')
            return this.setState({currentVal: min(val)})
        else if(oprator === 'plus')
            return this.setState({currentVal: plus(val)})

        function min(val){
           let sum = val - 1;
           if (sum > 0)
            return sum
            else return 0
        }

        function plus(val){
            return val + 1
        }      
    
}


    render() { 
        return ( 
            <div className="container-option-button">
                <div className="option-flex-line">
                    <div className="option-flex-item">
                        <div className="btn-circle-option btn-minus-icon"  onClick={() => this.pluseButton(this.state.currentVal,'min') }></div>
                    </div>
                    <div className="option-flex-item">
                        <input className="option-input-component" 
                           value={this.state.currentVal}   />
                    </div>
                    <div className="option-flex-item">
                        <div className="btn-circle-option btn-plus-icon" onClick={() => this.pluseButton(this.state.currentVal,'plus') }  ></div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default OptionButtonComponent;