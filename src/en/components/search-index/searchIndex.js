import React,{Component} from 'react';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
 
import arrow from '../../../assets/icons/arrow-down.svg'

import './style.css'
import DatePickerRC from '../../components/dateStartEnd/datePicker';



class SearchIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            selectCity:'Select City',
            person:''
          };
          this.handleChange = this.handleChange.bind(this);
          this.onSelect = this.onSelect.bind(this);
          this.onSelectCity = this.onSelectCity.bind(this);
          this.change = this.change.bind(this);
          this.onClickSearch = this.onClickSearch.bind(this);
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

      // Get props from children Date picker component
    change(startDate,endDate){
          // when the props change it will be called . . .
        this.setState({
            startDate: startDate,
            endDate:endDate
        });
        // consol log after chagne state  . . .
        console.log(this.state.startDate)
        console.log(this.state.endDate)
 
    }


    onClickSearch() {
       alert("search its called!")

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
                
                 
                    <div className="checkin">
                        <Dropdown
                            trigger={['click']}
                            overlay={SelectCityMenu}
                            animation="slide-up" 
                        >

                            <div className="drop-down-list">{this.state.selectCity}<img src={arrow} style={{marginRight:5,marginLeft:10, height:11, width:11 }}  alt="arrow"/> </div>
                        </Dropdown>
                    </div>
                    
                    <div className="checkin">
                        {/* <span className="lbl-date" style={{paddingLeft:'10px'}}>Check in</span> */}
                            <DatePickerRC change={this.change} />
                        {/* <DatePicker className="date-down"
                            selected={this.state.startDate}
                            onChange={this.handleChange} 
                        /> */}
                    </div>


                    {/* <li className="checkout">
                        <span  className="lbl-date"  style={{paddingLeft:'10px'}}>Check Out</span>

                            <DatePicker className="date-down"
                                selected={this.state.startDate}
                                onChange={this.handleChange} 
                                 
                            />
                    </li> */}
                    
                    <div className="checkin">
                        <Dropdown
                            trigger={['click']}
                            overlay={menu}
                            animation="slide-up" 
                        >

                            <div className="drop-down-list">{this.state.person} Person <img src={arrow} style={{marginRight:5,marginLeft:10, height:11, width:11 }} alt="arrow" /> </div>

                        </Dropdown>
                    </div> 
                 
                <button type="button" onClick={() => this.onClickSearch('/view')} className="btn-search"><span className="search-text-show" >Search</span><i className="fas fa-search search-icon-show"></i></button>
            </div>
         );
    }
}
 
export default SearchIndex;