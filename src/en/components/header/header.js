import React, {Component} from 'react';
import { NavLink  } from 'react-router-dom';

 
import './header.css'

import LogoWhit from '../../../assets/img/logo-vilaap-fff.png'
import LogoColorly from '../../../assets/img/logo-colorly.svg'


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: false }
    }

    
//     componentDidMount(){
//         var xx =  window.location.pathname;
//         console.log(xx + "its is -----")
//         if(xx !== '/')
//         this.setState({currentPage:true})
//         else
//         this.setState({currentPage:false})
//   }
    render() { 

      
        return ( 
            <div className="header-container">
                <div className="logo-container">
                   {/* {this.state.currentPage ?  <img src={LogoColorly} className="logo" alt="VilaApp logo"/> :  <img src={LogoWhit} className="logo" alt="VilaApp logo"/>} */}
                   <img src={LogoColorly} className="logo" alt="VilaApp logo"/>
                   
                </div>
                <div className="navbar-container">
                    <ul>
                        <li><a href="#home">Log in/Sign up</a></li> 
                        <li><NavLink to="/home">Contact us</NavLink></li> 
                        <li><NavLink to="/landlord" href="#home">Become a landlord</NavLink></li> 
                    </ul>
                    <div className="drawerMenu">

                    </div>
                </div>
            </div>
         );
    }
}
 
export default HeaderComponent;

        //                