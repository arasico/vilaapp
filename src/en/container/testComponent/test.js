// import React,{Component} from 'react';

// import  './style.css';

// import OptionButton from '../../components/common/optionButtonPlusMinus/optionButton';


 


// class TestComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             inputValue:'now is null'
//          } 
        
 
//     }




     
// onclcikbutton = (event) => {
//     event.preventDefault();
   
//     console.log(this.state.inputValue)
   
//   };
  

// handleChange = event => {
//     console.log(event.target)
//     this.setState({
//       inputValue: event.target.value
//     });
//   };


//     render() { 

  
          

//         return (  
//             <div className="test-container" onChange={this.handleChange} >
                 
//                 <OptionButton   />

//                     <p>Text is :   {this.state.inputValue}</p>
//                 <button type="button" onClick={this.onclcikbutton} >Send</button>

//             </div>
//         );
//     }
// }
 
// export default TestComponent;















import React,{Component} from 'react';

import  './style.css';

import {InputComponent} from '../../components/common/optionButtonPlusMinus/optionButton';


 


class TestComponent extends Component {
    constructor(props) {
        super(props);
       
         this.handleFilterUpdate = this.handleFilterUpdate.bind(this);
         this.shoMessage = this.shoMessage.bind(this);
         this.usernameCall = this.usernameCall.bind(this);
            this.state={person:0,username:1}
    }




     
    handleFilterUpdate(newVal) {
        this.setState({
            person: newVal
        });
  }

  usernameCall(newVal) {
    this.setState({
          username: newVal
    });
}


  shoMessage(){
    alert(this.state.person)
  }

    render() { 



        return (  
            <div className="test-container">
                 
                

                    
                    <InputComponent change={this.handleFilterUpdate} name={this.state.person}  />
                    <p>{this.state.person}</p>
                    <button onClick={this.shoMessage}>seeee</button>
                    <hr />

                 
                    <InputComponent change={this.handleFilterUpdate} name={this.state.username}  />
                    <p>{this.state.username}</p>
                    <button onClick={this.shoMessage}>seeee</button>
                    <hr />

                

            </div>
        );
    }
}
 
export default TestComponent;

 
 