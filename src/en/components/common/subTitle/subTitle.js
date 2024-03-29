import React  from 'react';

import './style.css';

 

const Subtitle = (
  {
    label,
    ...props
  }  
) => (

  <div {...props} className="subtitle-container">
     <h1 className="lbl-subtitle"  >{label}</h1>
     <hr />
    
  </div>

)

export default Subtitle



/*
example using:

 <SubTitle label="name of title" />

*/