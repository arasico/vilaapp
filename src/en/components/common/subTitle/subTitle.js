import React,{Component} from 'react';



import './style.css';

 

const TextFieldGroup = (
  {
    label,
    ...props
  } = { labelStyle: null, fontSize: 20},
) => (

  <div {...props} className="subtitle-container">
     <h1 className="lbl-subtitle"  >{label}</h1>
     <hr />
    
  </div>

)

export default TextFieldGroup