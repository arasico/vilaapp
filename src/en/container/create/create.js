import React,{Component} from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
 
import './style.css';
import Pin from '../../../assets/icons/pin.svg';
import arrow from '../../../assets/icons/arrow-down.svg'
import Magnifier from '../../../assets/icons/magnifier.svg'

 

class CreateComponent extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            startDate: '',
            selectCity:'Select City',
            person:''
          };
        this.onSelectCity = this.onSelectCity.bind(this);
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
      

    onSelectCity({ key }) {  
        this.setState({selectCity:key})
      }
      

    render() { 

        const SelectCityMenu = (
            <Menu onSelect={this.onSelectCity}>
               
              <MenuItem key="Kish" style={{fontSize: 16}}>Kish</MenuItem>
              <Divider />
              <MenuItem key="Tehran" style={{fontSize: 16}}>Tehran</MenuItem>
              <Divider />
              <MenuItem key="Babolsar" style={{fontSize: 16}}>Babolsar</MenuItem>
            </Menu>
          );
        


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
                            <div className="search-box-create-container">
                                <ul>
                                    <li> <img src={Pin} alt="pin" /></li>
                                    <li><span> Where is your apartment? </span></li>
                                    <li>
                                    <Dropdown
                                        trigger={['click']}
                                        overlay={SelectCityMenu}
                                        animation="slide-up" 
                                    >
                                        <div className="drop-down-list">{this.state.selectCity}<img src={arrow} style={{paddingLeft:10, paddingTop:5, height:11, width:11, float:'right' }}  alt="arrow"/> </div>
                                    </Dropdown>
                                    </li>
                                    <li> <input type="text" placeholder="Street No., zip code, City" /> </li>
                                    <li>5</li>
                                </ul>
                            </div>
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