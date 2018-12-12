// import React, {Component} from 'react';

// import './optionButton.css';
// //
// // import Icons --------------------------------------->
// //
// import minus from '../../../../assets/icons/minus.svg'
// import pluse from '../../../../assets/icons/pluse.svg'








  

// class OptionButtonComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             currentVal:0
//          }

//          this.pluseButton = this.pluseButton.bind(this);
//          this.handleChange = this.handleChange.bind(this);
//          this.handelFocus = this.handelFocus.bind(this);
//          this.handelBlur = this.handelBlur.bind(this);

//          this.exampleRef = React.createRef()

//     }

//     componentWillReceiveProps({currentVal}) {
//         this.setState({...this.state,currentVal})
//         console.log(currentVal)
//       }


//     pluseButton(val,oprator){ 

//             if(oprator ==='min')
//                 return this.setState({currentVal: min(val)})
//             else if(oprator ==='plus')
//                 return this.setState({currentVal: plus(val)})

//             function min(val){
//                let sum = val - 1;
//                if (sum > 0)
//                 return sum
//                 else return 0
//             }

//             function plus(val){
//                 return val + 1
//             }      
        
//     }

//     handelFocus(event){
//         if(event.target.value === '0')
//         event.target.value=""
  
//         event.target.select();
//     }

//     handelBlur(event){
//         console.log(event.target.value)
//       if(event.target.value === '')
//       this.setState({currentVal:0})
//     }

//     handleChange(event) {
     
//         if(Number(event.target.value))
//         this.setState({currentVal:Number(event.target.value) });
//         else return 0
//       }

//     oprationButton(val , oprator){ 

//         if(oprator === 'min')
//             return this.setState({currentVal: min(val)})
//         else if(oprator === 'plus')
//             return this.setState({currentVal: plus(val)})

//         function min(val){
//            if (val > 0)
//             return val
//             else return 0
//         }

//         function plus(val){
//             return val + 1
//         }      
    
// } 
//      render() { 


        
//         return ( 
//             <div className="container-option-button">
//                 <div className="option-flex-line">
//                     <div className="option-flex-item">
//                         <div className="btn-circle-option btn-minus-icon"  onClick={() => this.pluseButton(this.state.currentVal,'min') }></div>
//                     </div>
//                     <div className="option-flex-item">
//                         <input className="option-input-component" 
//                            ref={this.exampleRef}
//                            value={this.state.currentVal}
//                            onChange={this.handleChange}
//                            onFocus={this.handelFocus} 
//                            onBlur={this.handelBlur}  />
//                     </div>
//                     <div className="option-flex-item">
//                         <div className="btn-circle-option btn-plus-icon" onClick={() => this.pluseButton(this.state.currentVal,'plus') }  ></div>
//                     </div>
//                 </div>
//             </div>
//          );
//     }
// }
 
// export default OptionButtonComponent;



 


 

import React  from 'react';

import './optionButton.css';

export class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            conter: 0
      }  
    }

    Change = async(event) => {

      
    //    console.log(this.state.conter)
    //    console.log(event.target.name)

        if(event.target.name === 'max')
                await this.setState({conter: this.state.conter + 1}) 
                 
        else
            if(this.state.conter > 0)
                await this.setState({conter: this.state.conter - 1}) 
                    else
                        this.setState({conter: 0})
             
        this.props.change(this.state.conter);


        // Functional Program ------------------------------------->

        // if(event.target.name === 'min')
        // return this.setState({conter: min(this.state.conter)})
        // else if(event.target.name === 'plus')
        //     return this.setState({conter: plus(this.state.conter)})

        // function min(val){
        // if (val > 0)
        //     return val - 1
        //     else return 0
        // }

        // function plus(val){
        //     return val + 1
        // } 
        // this.props.change(this.state.conter); 

        // ---------------------------------------------------------->


    }


    //
    // when try to type in input will be set state our curent number
    //
    handleChange = async(event) => {
        console.log("handel change")
        if(Number(event.target.value))
               await this.setState({conter:Number(event.target.value) });
                else return 0
                this.props.change(this.state.conter);
    }


    //
    // When focus in input will be selected All text 
    //
    handelFocus(event){
        if(event.target.value === '0')
        event.target.value=""
  
        event.target.select();
    }


    //
    // whne left the input if input is empty will be set 0 
    //
    handelBlur(event){

        // console.log(event.target.value)
        if(event.target.value === '')
            this.setState({currentVal:0})
    }


    render() { 
        return (
                <div className="container-option-button">
                    <div className="option-flex-line">
                        <div className="option-flex-item">
                            <button name="min" className="btn-circle-option btn-minus-icon" onClick={this.Change} />
                        </div>
                        <div className="option-flex-item">
                            <input className="option-input-component" 
                            value={this.state.conter}
                            onChange={this.handleChange.bind(this)}
                            onFocus={this.handelFocus.bind(this)} 
                            onBlur={this.handelBlur.bind(this)} 
                            maxLength={3} />
                        </div>
                        <div className="option-flex-item">
                            <button name="max" className="btn-circle-option btn-plus-icon" onClick={this.Change} />
                        </div>
                    </div>
                </div>
        )
    }
}
  



 

/*
// Example to use Component ---------------------------------------------------------------------------->
//

<InputComponent change={this.handleFilterUpdate} name={this.state.person}  />
name is Importent to be uniq in any Component
 create handleFilterUpdate in paraent component and from props passing to child compoent


   
handleFilterUpdate(newValue) {
    this.setState({
        person: newValue
    });
}


*/// ----------------------------------------------------------------------------------------------------->


   

