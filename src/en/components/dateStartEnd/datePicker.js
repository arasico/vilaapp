/*
Example documantion . . . . >

http://airbnb.io/react-dates/?selectedKind=DateRangePicker%20%28DRP%29&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel

*/

import React,{Component} from 'react';
import './datePicker.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker,
    //  SingleDatePicker, 
    //  DayPickerRangeController 
    } from 'react-dates';

import moment from 'moment'
 


class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            startDate:moment(new Date()),
            endDate:moment(new Date()) 
        }
    }

    // Example button ------------->
    // callData(){
    //     alert("see your console log");
    //     console.log(this.state.focusedInput);
    //    // console.log(this.state.endDate._d);
    // }


    Change = async(value) => {

        console.log("Date picker called!")
        await this.setState({ focusedInput:value })
        if(this.state.startDate && this.state.endDate)
            this.props.change(this.state.startDate,this.state.endDate);
        }




    render() { 

     
        return ( 
            <div className="container-date-picker">
            
               <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="01/01/2018" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="02/02/2018" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.Change(focusedInput)} // PropTypes.func.isRequired,
                    numberOfMonths={this.props.month}
                    hideKeyboardShortcutsPanel={true} 
                    noBorder={true} 
                    isOutsideRange={() => false} 
                    />

                    {/* <button onClick={this.callData.bind(this)}>Click</button> */}
        
 

            </div>
         );
    }
}
 
export default DatePicker;