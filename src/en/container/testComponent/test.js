

 

import React,{Component} from 'react';
import Geosuggest from 'react-geosuggest';
import GogoleMapPin from '../../components/googleMapPin/googleMapPin';

import './style.css'

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stylePath: 'style.css',
            lat:36.5386629,
            lng:52.67645429999993,
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

  
    render() { 
        var fixtures = [
            {label: 'Tehran, Tehran, Iran', location: {lat: 35.7248416, lng: 51.38165300000003}},
            {label: 'Amol, Mazandaran, Iran', location: {lat: 36.4704068, lng: 52.34682429999998}},
            {label: 'Ramsar, Mazandaran Province, Iran', location: {lat: 36.9268274, lng: 50.64306579999993}}
          ];
       

        return (  
            <div className="container-fluid">


<div className="view">
    
            <div className="map-search-bar">
            <Geosuggest
                    ref={el=>this._geoSuggest=el}
                    placeholder="Start typing!"
                    // initialValue="iran" 
                    fixtures={fixtures}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onSuggestSelect={this.onSuggestSelect} 

                    location={new google.maps.LatLng(this.state.lat, this.state.lng)}
                    radius="20" />
            </div>


         <GogoleMapPin     
                            lat={this.state.lat } 
                            lng={this.state.lng } 
                            zoom={16} 
                            lang={'fa'}
                            dragable={false}
                            showingPin={this.state.showingpin} /> 

{/* <GogoleMapPin     
        lat={36.9439259} 
        lng={ 50.6451447} 
        zoom={17} 
        lang={'fa'} />    */}
    
        <button onClick={()=>this._geoSuggest.focus()}> Focus </button>
        <button onClick={()=>this._geoSuggest.update('New Zealand')}> Update </button>
        <button onClick={()=>this._geoSuggest.clear()}> Clear </button>
        <button onClick={()=>this._geoSuggest.selectSuggest()}> Search </button>






    </div>

            </div>
        );
    }
}
 
export default TestComponent;

 
 