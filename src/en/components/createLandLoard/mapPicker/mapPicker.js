

 

import React,{Component} from 'react';
import Geosuggest from 'react-geosuggest';
// custom map with google map in component folder ---->
import GogoleMapPin from '../../googleMapPin/googleMapPin';
import Button from '../../Button/Button';


import './style.css'

// import Icons -------------------------------------------------------->
import Pin from '../../../../assets/icons/pin.svg'; 
import Magnifier from '../../../../assets/icons/magnifier.svg'

class MapPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stylePath: 'style.css',
            lat:36.5386629,
            lng:52.67645429999993,
            zoomMap:17
        };
       
 
    }

   
    
    onFocus=()=>{
        console.log("on foucus")
     
       
    }

    onBlur(){
        console.log("on blur")
    }
 

    onChange =(value) => {
        console.log(value);
            this.setState({
                showingpin: false
            })
    }

    onSuggestSelect = async(suggest) => {
        console.log(suggest);
     
        if(suggest != undefined){
            console.log(suggest.location.lat);
            console.log(suggest.location.lng);
            await  this.setState({
                    lat: suggest.location.lat ,
                    lng : suggest.location.lng ,
                    showingpin: true
                })
        }
    }

    componentWillUpdate(nextProps, nextState){
        console.log(nextProps)
        console.log(nextState)
    }

  

    _callZoomOut = async() => {
        await this.setState({
            zoomMap : this.state.zoomMap - 1
        })
        console.log(this.state.zoomMap)
    }
    render() { 
        var fixtures = [
            {label: 'Tehran, Tehran, Iran', location: {lat: 35.7248416, lng: 51.38165300000003}},
            {label: 'Amol, Mazandaran, Iran', location: {lat: 36.4704068, lng: 52.34682429999998}},
            {label: 'Ramsar, Mazandaran Province, Iran', location: {lat: 36.9268274, lng: 50.64306579999993}}
          ];
       

        return (  
            <div className="container-fluid">

 
    
            <div className="map-search-bar">

            <div className="map-search-container">
                                <div className="search-box-create-container">
                                    <ul>
                                        <li> <img src={Pin} style={{ height: 25, width: 25 }} alt="pin" /></li>
                                        <li className="where-is" ><h1> Where is your apartment? </h1></li>
                                        <li style={{ paddingRight: 15 }}>
                                            {/* <Dropdown
                                                trigger={['click']}
                                                overlay={SelectCityMenu}
                                                animation="slide-up"
                                            >
                                                <div className="drop-down-list">{this.state.selectCity}<img src={arrow} style={{ marginTop: 5, height: 11, width: 11, float: 'right' }} alt="arrow" /> </div>
                                            </Dropdown> */}
                                        </li>
                                        <li className="input-create-search" >
                                            {/* <input type="text" className="create-input-location" placeholder="Street No., zip code, City" /> */}

                                            <Geosuggest
                                                ref={el=>this._geoSuggest=el}
                                                placeholder="Street No., zip code, City"
                                                // initialValue="iran" 
                                                fixtures={fixtures}
                                                onFocus={this.onFocus}
                                                onBlur={this.onBlur}
                                                onChange={this.onChange}
                                                onSuggestSelect={this.onSuggestSelect} 

                                                location={new google.maps.LatLng(this.state.lat, this.state.lng)}
                                                radius="20" />


                                        </li>
                                        <li style={{ float: "right", paddingTop: 5 }}>
                                            <div className="search-button" onClick={this.callSearch}>
                                                <img src={Magnifier} style={{ height: 20, width: 20 }} alt="arrow" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                            </div>



         
            </div>


         <GogoleMapPin     
                            lat={this.state.lat } 
                            lng={this.state.lng } 
                            zoom={this.state.zoomMap} 
                            lang={'en'}
                            dragable={false}
                            showingPin={this.state.showingpin} /> 

{/* <GogoleMapPin     
        lat={36.9439259} 
        lng={ 50.6451447} 
        zoom={17} 
        lang={'fa'} />    */}
    
        {/* <button onClick={()=>this._geoSuggest.focus()}> Focus </button>
        <button onClick={()=>this._geoSuggest.update('New Zealand')}> Update </button>
        <button onClick={()=>this._geoSuggest.clear()}> Clear </button>
        <button onClick={()=>this._geoSuggest.selectSuggest()}> Search </button>
 */}



{/* 
                <div className="zoomMap-container">
                    <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'-'}                                                      
                        bgcolor={'#f3f3f3'}                                                 
                        hoverbgcolor={'#f1f1f1'}                                          
                        click={this._callZoomOut}/>     
                                  <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'+'}                                                      
                        bgcolor={'#f3f3f3'}                                                 
                        hoverbgcolor={'#f1f1f1'}                                          
                        click={this._callZoomOut}/>   
                </div> */}

    

            </div>
        );
    }
}
 
export default MapPicker;

 
 