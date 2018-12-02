import React, {Component} from 'react';
import './style.css'
import LogoBlack from '../../../assets/img/logo-vilaapp-000.svg'

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid footer-color-black ">
                <div className="container center pt50 pb50">
                    <img src={LogoBlack} />
                    <hr />
                    <h1>Footer is heere</h1>
                </div>
            </div>
         );
    }
}
 
export default FooterComponent;