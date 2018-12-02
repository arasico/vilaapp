import React, {Component} from 'react';

// import Dropdown from 'rc-dropdown';
// import Menu, { Item as MenuItem, Divider } from 'rc-menu';
// import 'rc-dropdown/assets/index.css';

import './index.css'
import imgKish from '../../../assets/img/kish.jpg'
import imgTehran from '../../../assets/img/tehran.jpg'
import imgShiraz from '../../../assets/img/shiraz.jpg'
import imgEsfehan from '../../../assets/img/esfehan.jpg'



 
  




class WelcomeHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    
    render() { 
        return ( 
            <div className="container-fluid bg-gradient-red pb100">
                <div className="container pb50">
                    <h1 className="center pb50 pt50">Welcome home — anywhere, anytime</h1>
                 
                    <div className="images-container-index">
                        <div className="index-box-image">
                            <p className="title-image">Kish,Iran</p>
                            <img src={imgKish} style={{width:'100%', height:'100%'}} alt="Kish,Iran" />
                        </div>
                        <div className="two-images-container">
                            <div className="index-box-image-50">
                                <p className="title-image">Shiraz,Ira n</p>
                                <img src={imgShiraz} style={{width:'100%', height:'100%'}} alt="Shiraz,Iran" />    
                            </div>
                            <div className="index-box-image-50">
                                <p className="title-image">Tehran,Iran</p>
                                <img src={imgTehran} style={{width:'100%', height:'100%'}} alt="Tehran,Iran" />
                            </div>
                        </div>
                        <div className="index-box-image">
                            <p className="title-image">Esfehan,Iran</p>
                            <img src={imgEsfehan} style={{width:'100%', height:'100%'}}  alt="Esfehan,Iran" />
                        </div>

                    </div>

                </div>
            </div>
         );
    }
}
 
export default WelcomeHome;