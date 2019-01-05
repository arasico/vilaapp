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
            endDate: null,
            selectCity:'Select City',
            person:''
          };
          this.handleChange = this.handleChange.bind(this);
          this.onSelect = this.onSelect.bind(this);
          this.onSelectCity = this.onSelectCity.bind(this);
          this.change = this.change.bind(this);
          this.onClickSearch = this.onClickSearch.bind(this);
    }


    callState() {
        console.log(`
        ====================================
        |      All State for checking      |
        ====================================
        startDate:      ${this.state.startDate} 
        ------------------------------------
        endDate:        ${this.state.endDate} 
        ------------------------------------
        selectCity:     ${this.state.selectCity} 
        ------------------------------------
        person:         ${this.state.person} 
        ------------------------------------
        `)
    }

    componentWillUpdate(nextProps, nextState){
        this.callState();
        console.log(nextProps)
        console.log(nextState)
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
        this.setState({selectCity:key});
        console.log(this.state.selectCity)
    }

      // Get props from children Date picker component
    change(startDate,endDate){

        // when the props change it will be called . . .
        this.setState({
            startDate: this.dateShorter(startDate),
            endDate:this.dateShorter(endDate)
        }); 

         
      
        console.log(this.state.startDate)
        console.log(this.state.endDate)
 
    }

    // convert long date to short date of number example ==> 01/01/2018
    dateShorter(date){
        return new Intl.DateTimeFormat('en-US').format(date)
    }


    onClickSearch() {
        window.location.pathname = '/search-result'
    }



    // insert paramter key in URL
    insertParam(key, value) {
        key = encodeURI(key); value = encodeURI(value);
        var kvp = document.location.search.substr(1).split('&');
        var i = kvp.length; var x; while (i--) {
            x = kvp[i].split('=');

            if (x[0] === key) {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }


        if (i < 0) { kvp[kvp.length] = [key, value].join('=') }
        // slice & to url ---->
        function getAnd() {
            if (window.location.href.indexOf('?') - window.location.href.trim().length === -1 || window.location.href.indexOf('?') === -1)
                return kvp.join('')
            else
                return kvp.join('&')
        }
        // add params in url ----->
        let url = this.props.history;
        url.push({
            ...url,
            pathname: '/',
            search: getAnd()
        })
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
                    <div className=" checkin-similar checkin1">
                        <Dropdown
                            trigger={['click']}
                            overlay={SelectCityMenu}
                            animation="slide-up" 
                        >
                            <div className="drop-down-list">{this.state.selectCity}<img src={arrow} style={{marginRight:5,marginLeft:10, height:11, width:11 }}  alt="arrow"/> </div>
                        </Dropdown>
                    </div>
                    
                    <div className="checkin">
                            <DatePickerRC change={this.change} />
                    </div>
 
                    <div className="checkin-similar checkin3">
                        <Dropdown
                            trigger={['click']}
                            overlay={menu}
                            animation="slide-up" 
                        >
                            <div className="drop-down-list">{this.state.person} Person <img src={arrow} style={{marginRight:5,marginLeft:10, height:11, width:11 }} alt="arrow" /> </div>
                        </Dropdown>
                    </div> 
                <button type="button" onClick={this.onClickSearch} className="btn-search"><span className="search-text-show" >Search</span><i className="fas fa-search search-icon-show"></i></button>
            </div>
         );
    }
}
 
export default SearchIndex;