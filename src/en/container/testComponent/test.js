

import TextInput from '../../components/createLandLoard/inputGroup';
import SubTitle from '../../components/common/subTitle/subTitle';
import Droplist from '../../components/common/typeOfDropList/typeOfDropList';
import OptionDetails from '../../components/common/optionDetails/optionDetails';
import DatePicker from '../../components/dateStartEnd/datePicker';
import PriceInput from '../../components/priceInput/priceInput';
 


import React,{Component} from 'react';


import InputComponent from '../../components/common/optionButtonPlusMinus/optionButton';
import OptionComponent from '../../components/common/optionDetails/optionDetails';
import SingleDate from '../../components/singleDate/singleDate';


 


class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {stylePath: 'style.css'};
       
         this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
         this.handelGetValue = this.handelGetValue.bind(this);
         this.shoMessage = this.shoMessage.bind(this);
         this.usernameCall = this.usernameCall.bind(this);
            this.state={person:0,floor:0}
    }

     
    handleFilterUpdate(newVal) {
        this.setState({
            person: newVal
        });
  }

  handelGetValue(newValue) {
    this.setState({
        floor: newValue
    });
}

  

  usernameCall(newVal) {
    this.setState({
          username: newVal
    });
}


  shoMessage(){
    alert(this.state.floor)
  }

  componentWillMount(){
      console.log("!!")
    if(navigator.userAgent.includes("Chro"))
      console.log("is Google")
    else if( navigator.userAgent.includes("Fir"))
        console.log("is Firfox")
  }
    render() { 

        return (  
            <div className="test-container">
            <link rel="stylesheet" type="text/css" href={this.state.stylePath} />

                <SingleDate name="from" />
                <SingleDate name="to" />
          
                
                
                <hr />


                <div style={{display:'flex'}}>
                    <PriceInput name="min" />
                    <PriceInput name="max" />
                </div>

            {/* <DatePicker /> */}


            <hr />
                 
                

{/*                     
                    <InputComponent change={this.handleFilterUpdate} name={this.state.person}  />
                    <p>{this.state.person}</p>
                    <button onClick={this.shoMessage}>seeee</button>
                    <hr /> */}

                 
                    {/* <OptionComponent change={this.handelGetValue} name={this.state.floor} maxLength={2} maxValue={20} label="Floors" />
                    <p>Fllors: {this.state.floor}</p>
                    <button onClick={this.shoMessage}>Get Valu</button>

                 */}

            </div>
        );
    }
}
 
export default TestComponent;

 
 