

 

import React,{Component} from 'react';
import Geosuggest from 'react-geosuggest';
import GogoleMapPin from '../../components/googleMapPin/googleMapPin';

import './style.css'

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stylePath: 'style.css',
            lat:36.2262393,
            lng:52.53186040000003,
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

                    location={new google.maps.LatLng(this.state.lat, this.state.lng)}
                    radius="20" />
            
{/* 
                    <GogoleMapPin     
                                        lat={this.state.lat } 
                                        lng={this.state.lng } 
                                        zoom={10} 
                                        lang={'fa'}
                                        dragable={false} /> */}

<GogoleMapPin     
                    lat={36.9439259} 
                    lng={ 50.6451447} 
                    zoom={17} 
                    lang={'fa'} />   
                
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

 
 