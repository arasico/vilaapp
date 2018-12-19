import React,{Component} from 'react';
import {  
    // SingleDatePicker, 
    // DayPickerRangeController , 
    // DateRangePicker,
    DayPickerSingleDateController } from 'react-dates'; 

 
 
import './doubleDateSelector.css'

class DoubleDate extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            focused: true, 
         }

        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
                
    } 


    onDateChange(date) {
        this.setState({ date }); // focuse in select date of day

        // convert timestamp to date format : dd/mm/yyyy ------>
        function timeConverter(value){
            var a = new Date(value);
            return a.getDate() + '/' + a.getMonth() +'/' + a.getFullYear();
        } 

        this.props.change(timeConverter(date)); // call back date to parent component
      }

      onFocusChange() {
        // Force the focused states to always be truthy so that date is always selectable
        this.setState({ focused: true });
       
      } 

    render() { 
        return ( 
            <div> 
                <DayPickerSingleDateController 
                            onDateChange={this.onDateChange}
                            onFocusChange={this.onFocusChange}
                            focused={this.state.focused}
                            date={this.state.date}
                            hideKeyboardShortcutsPanel={true} 
                            noBorder={true} 
                            isOutsideRange={() => false} 
                        /> 
            </div>
         );
    }
}
 
export default DoubleDate;