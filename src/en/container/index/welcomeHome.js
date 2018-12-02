import React, {Component} from 'react';

import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

import './index.css'
import arrow from '../../../assets/icons/arrow-down.svg'
import imgKish from '../../../assets/img/kish.jpg'


function onSelect({ key }) {
    console.log(`${key} selected`);
  }
  
 
  
  const menu = (
    <Menu onSelect={onSelect}>
       
      <MenuItem key="1" style={{fontSize: 16}}>1 person</MenuItem>
      <Divider />
      <MenuItem key="2">2 persons</MenuItem>
      <Divider />
      <MenuItem key="3">3 persons</MenuItem>
    </Menu>
  );



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
                          <img src={imgKish} style={{width:'100%', height:'100%'}}  />
                         
                        </div>
                        <div className="two-images-container">
                            <div className="index-box-image-50"></div>
                            <div className="index-box-image-50"></div>
                        </div>
                        <div className="index-box-image"></div>

                    </div>

                </div>
            </div>
         );
    }
}
 
export default WelcomeHome;