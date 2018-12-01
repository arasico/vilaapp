import React, {Component} from 'react';

import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

import './index.css'
import arrow from '../../../assets/icons/arrow-down.svg'


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
                            <div style={{ margin: 20 }}>
                                <div style={{ height: 100,  }}/>
                                <div>
                                    <Dropdown
                                        trigger={['click']}
                                        overlay={menu}
                                        animation="slide-up" 
                                    >
                                        <div className="drop-down-list">Person <img src={arrow} style={{paddingLeft:10, paddingTop:5, height:11, width:11, float:'right' }} /> </div>
                                    </Dropdown>
                                </div>
                            </div>


                </div>
            </div>
         );
    }
}
 
export default WelcomeHome;