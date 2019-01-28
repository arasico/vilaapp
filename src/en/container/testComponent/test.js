

 

import React,{Component} from 'react';
import Geosuggest from 'react-geosuggest';
import GogoleMapPin from '../../components/googleMapPin/googleMapPin';

import './style.css'

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stylePath: 'style.css',
            lat:0,
            lng:0,
        };
       
 
    }

   
    
    onFocus(){
        console.log("on foucus")
    }

    onBlur(){
        console.log("on blur")
    }
 

    onChange(value){
        console.log(value)
    }
    onSuggestSelect = async(suggest) => {
        console.log(suggest);
        console.log(suggest.location.lat);
        console.log(suggest.location.lng);

      await  this.setState({
            lat: suggest.location.lat,
            lng : suggest.location.lng
        })
    }

    componentWillUpdate(nextProps, nextState){
        console.log(nextProps)
        console.log(nextState)
    }

  
    render() { 
        var fixtures = [
            // {label: 'Tehran, Tehran, Iran', location: {lat: 35.7248416, lng: 51.38165300000003}},
            // {label: 'Amol, Mazandaran, Iran', location: {lat: 53.5495629, lng: 9.9625838}},
            // {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
          ];
       

        return (  
            <div className="container-fluid">
                <div className="view">
    
                <Geosuggest
                    ref={el=>this._geoSuggest=el}
                    placeholder="Start typing!"
                    // initialValue="iran" 
                    fixtures={fixtures}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onSuggestSelect={this.onSuggestSelect} 

                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                    radius="20" />
            

                    <GogoleMapPin     
                                        lat={this.state.lat} 
                                        lng={this.state.lng} 
                                        zoom={14} 
                                        lang={'fa'}
                                        dragable={false} />

                                        
                
                    {/* <button onClick={()=>this._geoSuggest.focus()}> Focus </button>
                    <button onClick={()=>this._geoSuggest.update('New Zealand')}> Update </button>
                    <button onClick={()=>this._geoSuggest.clear()}> Clear </button>
                    <button onClick={()=>this._geoSuggest.selectSuggest()}> Search </button> */}

                </div>
            </div>
        );
    }
}
 
export default TestComponent;

 
 