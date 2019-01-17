
/*
    Price input 3.000.000 Toman example
*/

import React, { Component } from 'react';
import './priceInput.css';


class PriceInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '0' }
    }


    onChange(event) {
        // get number and make digit 3 to 3 part like 3.000.000.000
        function Totoman(str) {
            str = str.replace(/\,/g, '');
            let objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');
            while (objRegex.test(str)) {
                str = str.replace(objRegex, '$1,$2');
            }
            return str;
        }

        if (event.target.value !== '0')
            this.setState({
                value: Totoman(event.target.value)
            })
        // console.log(event.target.value)
    }

    // when focus in input dete text box
    onFocus(event) {
        if (event.target.value === '0')
            this.setState({
                value: ''
            })
    }
    // when left the textbox insert 0
    onBlur(event) {
        if (event.target.value === '')
            this.setState({
                value: '0'
            })

    }

    // Get Props name and make upper case like name => NAME
    renderUperCase(value) {
        return value.toUpperCase()
    }

    render() {



        return (
            <div className="container-price-input notCloseMenuLand">
                <div className="container-price-input-child notCloseMenuLand">
                    <div className="price-input-items notCloseMenuLand">
                        <span className="title-price-input notCloseMenuLand">{this.renderUperCase(this.props.name)}</span>
                    </div>
                    <div className="price-input-items flex-item notCloseMenuLand">
                        <div className="price-input-items-child left notCloseMenuLand">
                            <input className="input-price notCloseMenuLand"
                                value={this.props.price}
                                onChange={this.props.changePriceTablet}
                                onFocus={this.onFocus.bind(this)}
                                onBlur={this.onBlur.bind(this)}
                                maxLength="9"
                                name={this.props.name}
                            />
                        </div>
                        <div className="price-input-items-child right notCloseMenuLand">
                            <span className="toman-span notCloseMenuLand">Toman</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PriceInput;