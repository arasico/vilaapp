import React,{Component} from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import './style.css'

 
 



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
           

                        <select className="drop-down">
                            <option>Select City</option>
                            <option>Tehran</option>
                            <option>Babolsar</option>
                            <option>Amol</option> 
  
                        </select>
                    </li>
                    
                    <li>
                        <span style={{paddingLeft:'10px'}}>Check in</span>
                        <DatePicker className="date-down"
                            selected={this.state.startDate}
                            onChange={this.handleChange} 
                        />
                    </li>

                    <li>
                        <span style={{paddingLeft:'10px'}}>Check Out</span>
                            <DatePicker className="date-down"
                                selected={this.state.startDate}
                                onChange={this.handleChange} 
                            />
                    </li>
                    
                    <li>

                        <select className="drop-down">
                            <option>1 Person</option>
                            <option>2 Person</option>
                            <option>3 Person</option>
                            <option>5 Person</option> 
                            <option>6 Person</option> 
                            <option>7 Person</option> 
                            <option>8 Person</option> 

                        </select>
                    </li> 
                </ul>
                <button type="button" className="btn-search">Search</button>
            </div>
         );
    }
}
 
export default SearchIndex;