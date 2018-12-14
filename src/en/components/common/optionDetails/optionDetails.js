//
// option Deatil is for crreate landloard ---->
//

import React  from 'react';
import   './style.css';
//
// import Icons --------------------------------------->
//
import minus from '../../../../assets/icons/minus.svg'
import pluse from '../../../../assets/icons/pluse.svg'
 

export default class OptionDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentVal:0
         }
         this.onPluse = this.onPluse.bind(this);
         this.onMinus = this.onMinus.bind(this);
        //  this.handleChange = this.handleChange.bind(this);
         this.handelFocus = this.handelFocus.bind(this);
         this.handelBlur = this.handelBlur.bind(this); 

    }


onPluse(){
    var x = this.state.currentVal;
    console.log(x.Length)
    if(this.state.currentVal <= this.props.maxValue)
    this.setState({currentVal: this.state.currentVal +1 })
}

onMinus(){
    if(this.state.currentVal > 0)
    this.setState({currentVal: this.state.currentVal -1 })
}

// handleChange(event) {
     
//     if(event.target.value <= this.props.maxValue)
//     this.setState({currentVal:Number(event.target.value) });
//   }

Change = async(event) => {

      
       console.log(this.state.counter)
       console.log(event.target.name)

        if(event.target.name === 'max')
                await this.setState({currentVal: this.state.currentVal + 1}) 
                 
        else
            if(this.state.currentVal > 0)
                await this.setState({currentVal: this.state.currentVal - 1}) 
                    else
                        this.setState({currentVal: 0})
             
        this.props.change(this.state.currentVal);
        console.log(this.state.currentVal)


        


    }



    //
    // when try to type in input will be set state our curent number
    //
    handleChange = async(event) => {
        console.log("handel change")
        if(Number(event.target.value))
               await this.setState({currentVal:Number(event.target.value) });
                else return 0
                this.props.change(this.state.currentVal);
    }



  handelFocus(event){
      console.log(event.target.value)
      if(event.target.value === '0')
      event.target.value=""

      event.target.select();
  }

  handelBlur(event){
      console.log(event.target.value)
    if(event.target.value === '')
    this.setState({currentVal:0})
  }

 

    render() { 
        return ( 
            <div className="options-container">
                <div className="options-rol-silver">
                    <div style={{position:"absolute"}}>
                        <div className="options-icon-container">
                            <img src={this.props.img}  className="img-option-props" alt="roome" />
                        </div>
                    </div>
                    <div className="options-label-container" >
                        <span>{this.props.label}</span>
                    </div>
                    <div  className="option-details-container"> 
                        <div className="option-details-flex-line ">
                            <div className="option-details-flex-item">
                                <button name="min" className="btn-circle-option btn-minus-icon" onClick={this.Change} />
                            </div>
                            <div className="option-details-flex-item">
                                <input className="option-input-component-details" 
                                 value={this.state.currentVal}
                                         onChange={this.handleChange.bind(this)}
                                         onFocus={this.handelFocus.bind(this)} 
                                         onBlur={this.handelBlur.bind(this)} 
                                         maxLength={3}/>
                            </div>
                            <div className="option-details-flex-item">
                                <button name="max" className="btn-circle-option btn-plus-icon" onClick={this.Change} />
                            </div>
                        </div>
                    </div>

           
                </div>
            </div>
         );
    }
}
 
 





// <div className="butons-option-component-container">
// <div className="option-flex-line">
//     <div className="option-flex-item">
//         <button name="min" className="btn-circle-option btn-minus-icon" onClick={this.Change} />
//     </div>
//     <div className="option-flex-item">
//         <input className="option-input-component" 
//         value={this.state.currentVal}
//         onChange={this.handleChange.bind(this)}
//         onFocus={this.handelFocus.bind(this)} 
//         onBlur={this.handelBlur.bind(this)} 
//         maxLength={3} />
//     </div>
//     <div className="option-flex-item">
//         <button name="max" className="btn-circle-option btn-plus-icon" onClick={this.Change} />
//     </div>
// </div>
// </div>








/* Example use tis component ----------------------------------------->



<OptionButton img={Floors} maxLength={2} maxValue={20} label="Floors" />







-----------------------------------------------------------------------*/
























// { 
//     return ( 
//         <div className="options-container">
//             <div className="options-rol-silver">
//                 <div style={{position:"absolute"}}>
//                     <div className="options-icon-container">
//                         <img src={this.props.img}  className="img-option-props" alt="roome" />
//                     </div>
//                 </div>
//                 <div className="options-label-container" >
//                     <span>{this.props.label}</span>
//                 </div>

//                 <div className="option-button-container">
//                     <div className="option-button-oprator">
//                         <div className="button-circle-oprator" onClick={this.onMinus}>
//                             <img src={minus} alt="pluse" style={{width:20, height: 20, textAlign:'center'}} />
//                         </div>
//                     </div>
//                     <div className="option-button-input">
//                         <input type="text" className="input-option-type" 
//                         value={this.state.currentVal} 
//                         onChange={this.handleChange.bind(this)} 
//                         onFocus={this.handelFocus} 
//                         onBlur={this.handelBlur}
//                         maxLength={this.props.maxLength} />
//                     </div>
//                     <div className="option-button-oprator">
//                         <div className="button-circle-oprator" onClick={this.onPluse}>
//                             <img src={pluse} alt="pluse" style={{width:20, height: 20, textAlign:'center'}} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//      );
// }