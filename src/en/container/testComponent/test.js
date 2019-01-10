

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
import DoubleDate from '../../components/doubleDateSelector/doubleDateSelector';
import Googlemapcircle from '../../components/googleMapCircle/googleMapCircle'

 


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

Change = async(value) => {

        console.log(value)
   
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
           
 
 
                <Googlemapcircle     lat={36.9439259} lng={ 50.6451447} zoom={17} lang={'fa'} />
                
            </div>
        );
    }
}
 
export default TestComponent;

 
 