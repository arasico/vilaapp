import React,{Component} from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';

 
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
                        <div className="menu-item" id="address" onClick={() => this.openCity('aras')}>
                        <div className="tabs-circle-container">
                            <span>1</span>
                        </div>
                        </div>
                        <div className="menu-item" id="info" onClick={() => this.openCity('javid')}>2</div>
                        <div className="menu-item" id="image" onClick={() => this.openCity('yasi')}>3</div>
                   </div>
               </div>

               <div className="container-fluid">
                    <div id="aras" className="basic-tab city">
                        <Map width="100%"  onAPIAvailable={function () { console.log('API loaded'); }} center={[40.754734, 40.583314]} zoom={10}>
                            <Marker lat={40.783379} lon={40.775575}  lang={'tr-TR'} >
                                <MarkerLayout>
                                    <div style={{borderRadius: '50%', overflow: 'hidden'}}>
                                        <img src="http://loremflickr.com/80/80"/>
                                    </div>
                                </MarkerLayout>
                            </Marker>
                        </Map>


                        <div className="map-search-container">

                        </div>
                    </div>
                    <div id="javid" className="basic-tab city"><p>info</p></div>
                    <div id="yasi" className="basic-tab city"><p>images</p></div>

               </div>
 
            </div>
         );
    }
}
 
export default CreateComponent;