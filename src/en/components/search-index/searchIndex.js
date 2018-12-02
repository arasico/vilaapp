import React,{Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import arrow from '../../../assets/icons/arrow-down.svg'

import './style.css'

 
 


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




class SearchIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: ''
          };
          this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
      }


    render() { 
        return ( 
            <div className="search-bx-container">
                <ul>
                    <li>
                        <Dropdown
                            trigger={['click']}
                            overlay={menu}
                            animation="slide-up" 
                        >
                            <div className="drop-down-list">Select City <img src={arrow} style={{paddingLeft:10, paddingTop:5, height:11, width:11, float:'right' }} /> </div>
                        </Dropdown>
                    </li>
                    
                    <li>
                        <span className="lbl-date" style={{paddingLeft:'10px'}}>Check in</span>
                        <DatePicker className="date-down"
                            selected={this.state.startDate}
                            onChange={this.handleChange} 
                        />
                    </li>

                    <li>
                        <span  className="lbl-date"  style={{paddingLeft:'10px'}}>Check Out</span>
                            <DatePicker className="date-down"
                                selected={this.state.startDate}
                                onChange={this.handleChange} 
                                title="www"
                            />
                    </li>
                    
                    <li>
                        <Dropdown
                            trigger={['click']}
                            overlay={menu}
                            animation="slide-up" 
                        >
                            <div className="drop-down-list">Person <img src={arrow} style={{paddingLeft:10, paddingTop:5, height:11, width:11, float:'right' }} /> </div>
                        </Dropdown>
                    </li> 
                </ul>
                <button type="button" className="btn-search">Search</button>
            </div>
         );
    }
}
 
export default SearchIndex;