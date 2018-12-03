import React,{Component} from 'react';

 
import './style.css';

 

class CreateComponent extends Component {
    constructor(props) {
        super(props); 
      }
    
   
      openCity(cityName) {
        var i;
        var x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";  
        }
       console.log(cityName)
        document.getElementById(cityName).style.display = "block";  
    }
      

    render() { 
        return ( 
            <div className="container-fluid">
               <div className="container pt100">
                   <div className="tabs-menu-container">
                        <div className="menu-item" id="address" onClick={() => this.openCity('aras')}>1</div>
                        <div className="menu-item" id="info" onClick={() => this.openCity('javid')}>2</div>
                        <div className="menu-item" id="image" onClick={() => this.openCity('yasi')}>3</div>
                   </div>
               </div>

               <div className="container">
                    <div id="aras" className="basic-tab city"><p>adress</p></div>
                    <div id="javid" className="basic-tab city"><p>info</p></div>
                    <div id="yasi" className="basic-tab city"><p>images</p></div>

               </div>
 
            </div>
         );
    }
}
 
export default CreateComponent;