import React, {Component} from 'react';
import './singleDate.css';
import { DayPickerSingleDateController } from 'react-dates';
 
 

    class Popup extends React.Component {

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
            this.props.change(date); // call back date to parent component
          }

          onFocusChange() {
            // Force the focused states to always be truthy so that date is always selectable
            this.setState({ focused: true });
           
          } 
 

        render() {
          return (
            <div   className="popup " onClick={this.props.closePopup}>
              <div className='popup_inner slideInUp'>
                <div className="single-date-container ">
                    <DayPickerSingleDateController 
                        onDateChange={this.onDateChange}
                        onFocusChange={this.onFocusChange}
                        focused={this.state.focused}
                        date={this.state.date}
                        hideKeyboardShortcutsPanel={true} 
                        noBorder={true} 
                        />
                </div>
              </div>
            </div>
          );
        }
      }



class SingleDate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showPopup: false,
            date:''
         }
         
    }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
   
      }


    Change = async(value) => {
    
        // convert timestamp to date format : dd/mm/yyyy ------>
        function timeConverter(value){
            var a = new Date(value);
            return a.getDate() + '/' + a.getMonth() +'/' + a.getFullYear();
          } 

        if(this.state.date !== null)
            this.setState({date : timeConverter(value)})
        this.togglePopup(); // close popup after select time
        console.log("Date picker called!")
 
     }
    // Get Props name and make upper case like name => NAME
    renderUperCase(value){
        return   value.charAt(0).toUpperCase() + value.slice(1);
    } 


    render() { 
        return ( 
            <div className="container-single-date">
                   {this.state.showPopup ? 
                        <Popup 
                            closePopup={this.togglePopup.bind(this)} 
                            change={this.Change} 
                        />
                        : null
                        }

            <div className="container-single-date-child ">
                <div className="single-date-items">
                     <span className="title-single-date">{this.renderUperCase(this.props.name)}</span>
                </div>
                <div className="price-single-date flex-item" >
                     <div className="single-date-items-child left">
                        <input placeholder="DD.MM.YYYY" name={this.props.name} value={this.state.date} onChange={this.Change.bind(this)} className="single-date" onClick={this.togglePopup.bind(this)} />
                     </div>
                </div>
            </div>
         </div>
         );
    }
}
 
export default SingleDate;



