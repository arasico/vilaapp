import React,{Component} from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
 
import './style.css';
// import Icons -------------------------------------------------------->
import Pin from '../../../assets/icons/pin.svg';
import arrow from '../../../assets/icons/arrow-down.svg'
import Magnifier from '../../../assets/icons/magnifier.svg'
import ArrowRight from '../../../assets/icons/arrow-right-light.svg'
import ArrowLeft from '../../../assets/icons/arrow-left.svg'

import Floors from '../../../assets/icons/floors.svg'
import Beds from '../../../assets/icons/beds.svg'
import Persons from '../../../assets/icons/persons.svg'
import Area from '../../../assets/icons/area.svg'
import Rooms from '../../../assets/icons/rooms.svg'

//
//  ---- End of Icons -------------------------------------------------->
//

import TextInput from '../../components/createLandLoard/inputGroup';
import Subtitle from '../../components/common/subTitle/subTitle';
import TypeOfList from '../../components/common/typeOfDropList/typeOfDropList';
import Chechbox from '../../components/common/checkbox/checkbox';
import OptionButton from '../../components/common/optionDetails/optionDetails';
import TextArea from '../../components/common/textArea/textArea';

 

class CreateComponent extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            startDate: '',
            selectCity:'Select City',
            person:''
          };
        this.onSelectCity = this.onSelectCity.bind(this);
        this.callSearch = this.callSearch.bind(this);
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
      
      callSearch(){
          alert("serch!")
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
                        <div className="menu-item" id="address" onClick={() => this.openCity('tabOne')}>
                            <div className="tabs-circle-container">
                                1
                            </div>
                            <div className="tabs-circle-container-text">Address</div>
                        </div>

                              <div className="menu-item" id="address" onClick={() => this.openCity('tabTwo')}>
                            <div className="tabs-circle-container">
                                2
                            </div>
                            <div className="tabs-circle-container-text">Information</div>
                        </div>

                              <div className="menu-item" id="address" onClick={() => this.openCity('tabThree')}>
                            <div className="tabs-circle-container">
                                3
                            </div>
                            <div className="tabs-circle-container-text">Images</div>
                        </div>
                   
                   </div>
               </div>

               <div className="container-fluid">
                    <div id="tabOne" className="basic-tab city">
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
                                    <li> <img src={Pin} style={{ paddingTop:15, height:25, width:25, paddingRight:10 }} alt="pin" /></li>
                                    <li><h1> Where is your apartment? </h1></li>
                                    <li style={{paddingRight: 15}}>
                                    <Dropdown
                                        trigger={['click']}
                                        overlay={SelectCityMenu}
                                        animation="slide-up" 
                                    >
                                        <div className="drop-down-list">{this.state.selectCity}<img src={arrow} style={{paddingLeft:10, paddingTop:5, height:11, width:11, float:'right' }}  alt="arrow"/> </div>
                                    </Dropdown>
                                    </li>
                                    <li className="input-create-search" > 
                                        <input type="text" className="create-input-location" placeholder="Street No., zip code, City" /> 
                                    </li>
                                    <li style={{  float:"right", paddingTop: 5}}>
                                       <div className="search-button" onClick={this.callSearch}>
                                        <img src={Magnifier} style={{ paddingTop:15, height:20, width:20 }}  alt="arrow"/>
                                       </div>
                                    </li>
                                </ul>
                            </div>

                      

                        </div>

                            <div className="create-map-footer">
                            <div className="btn-create-continu  btn-yellow">
                                <div className="create-btn-container">
                                    <span>Next Step</span>
                                    <img src={ArrowRight} alt="s" style={{float:"right", paddingLeft:20}} />
                                </div>
                            </div>
                          </div>

                           
                    </div>



                    <div id="tabTwo" className="basic-tab city">

                        <div className="create-form-container">
                            <Subtitle label="Basic Infromation" />

                            <TextInput 
                                label="Ttile"
                                placeholder="Please insert something like: Rent Great and lovely Flat in Kish"
                                error="Please insert you title!"
                                labelSecend=""
                            />
                            <TextInput 
                                label="Daily Price"
                                placeholder="please write correct and net price per a day"
                                error=""
                                labelSecend="Toman / Per Day"
                            />
                            <div className="create-basic-info-type-container">
                                <div className="create-basic-info-type-item">
                                    <TypeOfList label="Type of Place" />
                                </div>
                                <div className="create-basic-info-type-item">
                                    <OptionButton img={Floors} maxLength={2}  maxValue={20} label="Floors" />  
                                </div>

                            </div>

                            <Subtitle label="More details" />

                            <div className="create-basic-info-type-container">
                                <div className="create-basic-info-type-item">
                                    <OptionButton img={Rooms} maxLength={2} maxValue={20}  label="Total Rooms" />
                                </div>
                                <div className="create-basic-info-type-item">
                                    <OptionButton img={Beds} maxLength={2} maxValue={20}  label="Total Beds" />  
                                </div>
                            </div>
                            <div className="create-basic-info-type-container">
                                <div className="create-basic-info-type-item">
                                    <OptionButton img={Persons} maxLength={2} maxValue={20}  label="Max Persons" />
                                </div>
                                <div className="create-basic-info-type-item">
                                    <OptionButton img={Area} maxLength={4} maxValue={9999}  label="Total Area M²" />  
                                </div>
                            </div>

                              <Subtitle label="All Service" />

                            <div className="create-checkbox-container">
                                <ul>
                                    <li>
                                        <Chechbox label="Parking" Id="pool" />
                                    </li>
                                    <li>
                                        <Chechbox label="internet WIFI" Id="dool" />
                                    </li>
                                    <li>
                                        <Chechbox label="have a Lundray" Id="rool" />
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Chechbox label="Heating system" Id="zool" />
                                    </li>
                                    <li>
                                        <Chechbox label="Electrick" Id="kool" />
                                    </li>
                                    <li>
                                        <Chechbox label="have a Pool" Id="boon" />
                                    </li>
                                </ul>
                            </div>

                               <Subtitle label="Description" />

                                <TextArea label="About this listing" placeholder="please write something about your Home and condition of it . . ." />


                                <div className="create-btn-information-container">
                                <div className="create-btn-information-container-item">
                                    <div className="btn-create-continu  btn-silver">
                                            <div className="create-btn-container">
                                                <img src={ArrowLeft} alt="s" style={{float:"left", paddingRight:20}} />    
                                                <span style={{color:'#8C8C8C'}}>Back</span>
                                            </div>
                                        </div>
                                </div>
                                <div className="create-btn-information-container-item">
                                    <div className="btn-create-continu  btn-yellow">
                                        <div className="create-btn-container">
                                            <span>Next Step</span>
                                            <img src={ArrowRight} alt="s" style={{float:"right", paddingLeft:20}} />
                                        </div>
                                    </div>
                                </div>
                           
                                </div>
                        </div>
                
                    </div>
                    <div id="tabThree" className="basic-tab city">
                    
                    <p>Tabs 3</p>
                   
                    
                    </div>

               </div>
 
            </div>
         );
    }
}
 
export default CreateComponent;