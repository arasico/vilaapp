
/*
Price input 3.000.000 Toman example
*/

import React,{Component} from 'react';
import './priceInput.css';


class PriceInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value:'0' }
    }


    onChange (event){
        // get number and make digit 3 to 3 part like 3.000.000.000
        function Totoman(str) {
            str = str.replace(/\,/g, '');
                let objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');
                while (objRegex.test(str)) {
                    str = str.replace(objRegex, '$1,$2');
                }
                return str;
            }

        this.setState({
            value: Totoman(event.target.value)
        })
        // console.log(event.target.value)
    }




    render() { 




        return ( 
            <div className="container-price-input">
               <div className="container-price-input-child">
                   <div className="price-input-items">
                        <span className="title-price-input">Max</span>
                   </div>
                   <div className="price-input-items flex-item">
                        <div className="price-input-items-child left">
                            <input className="input-price"
                            value={this.state.value}
                            onChange={this.onChange.bind(this)}
                            />
                        </div>
                        <div className="price-input-items-child right">
                            <span className="toman-span">Toman</span>
                        </div>
                   </div>
               </div>
            </div>
         );
    }
}
 
export default PriceInput;