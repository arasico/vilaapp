import React,{Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

import arrow from '../../../assets/icons/arrow-down.svg'

import './style.css'

 
 


// function 
  





class SearchIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            selectCity:'Select City',
            person:''
          };
          this.handleChange = this.handleChange.bind(this);
          this.onSelect = this.onSelect.bind(this);
          this.onSelectCity = this.onSelectCity.bind(this);
    }



    handleChange(date) {
        this.setState({
          startDate: date
        });
      }


      onSelect({ key }) {  
        this.setState({person:key})
      }

      onSelectCity({ key }) {  
        this.setState({selectCity:key})
      }
      

    render() { 


        const SelectCityMenu = (
            <Menu onSelect={this.onSelectCity}>
               
              <MenuItem key="Kish" style={{fontSize: 16}}>Kish</MenuItem>
              <Divider />
              <MenuItem key="Tehran" style={{fontSize: 16}}>Tehran</MenuItem>
              <Divider />
              <MenuItem key="Babolsar" style={{fontSize: 16}}>Babolsar</MenuItem>
            </Menu>
          );
        
          const menu = (
            <Menu onSelect={this.onSelect}>
               
              <MenuItem key="1" style={{fontSize: 16}}>1 person</MenuItem>
              <Divider />
              <MenuItem key="2" style={{fontSize: 16}}>2 person</MenuItem>
              <Divider />
              <MenuItem key="3" style={{fontSize: 16}}>3 person</MenuItem>
              <Divider />
              <MenuItem key="4" style={{fontSize: 16}}>4 person</MenuItem>
              <Divider />
            </Menu>
          );


        return ( 
            <div className="search-bx-container">
                <ul>
                    <li className="selectCity">
                        <Dropdown
                            trigger={['click']}
                            overlay={SelectCityMenu}
                            animation="slide-up" 
                        >
                            <div className="drop-down-list">{this.state.selectCity}<img src={arrow} style={{paddingLeft:10, paddingTop:5, height:11, width:11, float:'right' }}  alt="arrow"/> </div>
                        </Dropdown>
                    </li>
                    
                    <li className="chechin">
                        <span className="lbl-date" style={{paddingLeft:'10px'}}>Check in</span>
                        <DatePicker className="date-down"
                            selected={this.state.startDate}
                            onChange={this.handleChange} 
                        />
                    </li>

                    <li className="chechout">
                        <span  className="lbl-date"  style={{paddingLeft:'10px'}}>Check Out</span>
                            <DatePicker className="date-down"
                                selected={this.state.startDate}
                                onChange={this.handleChange} 
                                 
                            />
                    </li>
                    
                    <li className="peronSelection">
                        <Dropdown
                            trigger={['click']}
                            overlay={menu}
                            animation="slide-up" 
                        >
                            <div className="drop-down-list">{this.state.person} Person <img src={arrow} style={{paddingLeft:10, paddingTop:5, height:11, width:11, float:'right' }} alt="arrow" /> </div>
                        </Dropdown>
                    </li> 
                </ul>
                <button type="button" className="btn-search">Search</button>
            </div>
         );
    }
}
 
export default SearchIndex;