import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



 

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: '#fff', 
      background: 'rgba(111, 207, 151, 0.5)',
      height:200,
      width:200,
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      border:'7px solid #1FC056',
      transform: 'translate(-50%, -50%)',
      fontSize:20
    }}>
      {text}
    </div>
  );

class GoogleMapCircle extends Component {


    constructor(props) {
        super(props);
        this.state = {  }
    }


 


    render() { 
        return ( 
            <div>
             
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ 
                            key:'AIzaSyAh2AUoq2zDLhJpZFQfk_3rmAhTR-wqtCE', 
                            language: this.props.lang,
                            region: this.props.lang, 
                        }}
                        defaultCenter={{ 
                            lat:this.props.lat, 
                            lng: this.props.lng 
                        }}
                        defaultZoom={this.props.zoom}
                        options={{ 
                            scrollwheel: false, 
                            disableDefaultUI: true
                        }}>

                        <AnyReactComponent
                            lat={this.props.lat}
                            lng={this.props.lng}
                            text="200.000"
                        />
                    </GoogleMapReact>
                </div>
            </div>
         );
    }
}
 
export default GoogleMapCircle;




/* ======================================================================
                Example to use the Component of Google map

                <Googlemapcircle     
                    lat={36.9439259} 
                    lng={ 50.6451447} 
                    zoom={17} 
                    lang={'fa'} />



=========================================================================*/