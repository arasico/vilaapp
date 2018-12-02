import React, {Component} from 'react';
import './style.css'
import LogoBlack from '../../../assets/img/logo-vilaapp-000.svg'

import fb from '../../../assets/icons/facebook.svg'
import insta from '../../../assets/icons/instagram.svg'
import tw from '../../../assets/icons/twitter.svg'

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
                        <div className="menu-item">
                            <p>Contact</p>
                            <ul>
                                <li>+98 021 888 56 32</li>
                                <li>info@vilaapp.ir</li> 
                            </ul>
                        </div>
                        <div className="menu-item">
                            <p>Social</p>
                            <ul>
                                <li>
                                    <a href="#" ><img src={fb} alt="vilaapp facebook"/> </a>
                                    <a href="#" ><img src={insta} alt="vilaapp instagram"/> </a>
                                    <a href="#" ><img src={tw} alt="vilaapp twitter"/> </a>
                                </li>
                             
                            </ul>
                        </div>
                     </div>
                </div>
            </div>
         );
    }
}
 
export default FooterComponent;