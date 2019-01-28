

 

import React,{Component} from 'react';
import Geosuggest from 'react-geosuggest';



class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {stylePath: 'style.css'};
       
 
    }

     
 
 

 
    render() { 
        var fixtures = [
            {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
            {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
            {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
          ];


        return (  
            <div className="container-fluid">
                <div className="view">
    
                <Geosuggest
                    ref={el=>this._geoSuggest=el}
                    placeholder="Start typing!"
                    initialValue="Hamburg"
                    fixtures={fixtures}
                    onSuggestSelect={this.onSuggestSelect}
                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                    radius="20" />
            
                
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

 
 