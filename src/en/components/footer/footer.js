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
                    <img src={LogoBlack} alt="VilaApp Logo" />
                    <hr />
                     <div className="footer-menu-container">
                        <div className="menu-item">
                            <p>More</p>
                            <ul>
                                <li>For Landlords</li>
                                <li>Expert search</li>
                                <li>About Us</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div className="menu-item"></div>
                        <div className="menu-item"></div>
                     </div>
                </div>
            </div>
         );
    }
}
 
export default FooterComponent;