import React from 'react';
import Radium from 'radium'
import './Button.css';

const button = (props) => (
    <div className="button-box">
        <button className="button-style" 
                onClick={props.click} 
                style={{backgroundColor : props.bgcolor , ':hover' : {backgroundColor : props.hoverbgcolor}} } >
                    {props.isLoading ? (
                        <div className="loader"></div>
                    ) : (
                            props.title
                    )}
                
        </button>

    </div>
);

export default Radium(button);



/*
=====================================================================================
How can use this button : ------->                                                  
                                                                                    
                                                                                    
           <Button                                                                  
                isLoading={this.state.isLoading}                                    
                title={'Send'}                                                      
                bgcolor={'#1FC056'}                                                 
                hoverbgcolor={'#1fc056cc'}                                          
                click={this.callSubmit}/>                                           
                                                                                    
                                                                                    
=====================================================================================

*/