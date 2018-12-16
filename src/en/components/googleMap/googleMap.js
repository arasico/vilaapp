/*

for get bootstrapURLKeys visit this linke : https://console.cloud.google.com/apis/credentials?project=swift-synthesis-192211

example of marker : http://google-map-react.github.io/google-map-react/map/balderdash


*/

import React,{Component} from 'react';
import './googleMap.css';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;



class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };


    render() { 
        return ( 
            <div>
                <p>Google component</p>

                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAh2AUoq2zDLhJpZFQfk_3rmAhTR-wqtCE' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />
                    </GoogleMapReact>
                </div>



            </div>
         );
    }
}
 
export default GoogleMap;