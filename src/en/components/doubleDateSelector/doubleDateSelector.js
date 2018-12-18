import React,{Component} from 'react';
import {  SingleDatePicker, 
    DayPickerRangeController , DateRangePicker, } from 'react-dates';
import moment from "moment";

 
 
import './doubleDateSelector.css'

class DoubleDate extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            startDate: moment(),
            endDate: moment(),
            focusedInput: null
         }
 
                
    } 


    handleDateChange = ({ startDate, endDate }) =>
    this.setState({ startDate, endDate });

  handleFocusChange = focusedInput => this.setState({ focusedInput });

  isOutsideRange = () => false;

    render() { 
        return ( 
            <div>
                <p>doubleDateSelector</p>
             

<DayPickerRangeController 
          onDatesChange={this.handleDateChange}
          onFocusChange={this.handleFocusChange}
          focusedInput={this.state.focusedInput}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />

        

            </div>
         );
    }
}
 
export default DoubleDate;