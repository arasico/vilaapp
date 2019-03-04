import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import  './style.css';

 
const AnyReactComponent = ({ text }) => <div>
      <div  className="pin">{text}</div>
      <div className='pulse'></div>
  </div>;


class GoogleMapPin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            center: [this.props.lat || 0, this.props.lng || 0],
            zoom: 9,
            draggable: true,
            lat: this.props.lat ,
            lng: this.props.lng ,
            dragable: this.props.dragable
          };

          this.onCircleInteraction = this.onCircleInteraction.bind(this)
          this.onCircleInteraction3 = this.onCircleInteraction3.bind(this)
    }
    

    componentWillMount =async() => {
        console.log(this.props.lat)
       await this.setState({
          lat: this.props.lat,
          lng: this.props.lng,
          center: [this.props.lat, this.props.lng],
        })
    }
 
    onCircleInteraction = (childKey, childProps, mouse) => {
      console.log("pick click")
      // function is just a stub to test callbacks
      this.setState({
        draggable: false,
        lat: mouse.lat,
        lng: mouse.lng,
        dragable:true
      });
     
      console.log('onCircleInteraction called with', childKey, childProps, mouse);
    }
    
    onCircleInteraction3 =(childKey, childProps, mouse) => {
      console.log('onCircleInteraction called with 2', childKey, childProps, mouse);
      // this.setState({ draggable: true,  dragable:false });
      this.setState({
         dragable : false
      })

      // function is just a stub to test callbacks  
     // console.log('onCircleInteraction called with', childKey, childProps, mouse);
      
    }
      _onChange = ({center, zoom}) => {
        this.setState({
          center: center,
          zoom: zoom,      
        });
      }
    


      componentWillUpdate = async (nextProps, nextState) => {
        // console.log(nextProps)
        // console.log(nextState)

        if(nextProps.lat !== nextState.lat && this.state.dragable === false){
          await  this.setState({
                lat: this.props.lat,
                lng: this.props.lng,
                center: [this.props.lat, this.props.lng],
            })
        }
    }

    render() { 
        return ( 
           
             
                <div style={{ height: '50vh', width: '100%' }}>
                  <GoogleMapReact 
                        bootstrapURLKeys={{ 
                          key:'AIzaSyB30Tn1GF2svvF3eDvpjYlwVbf49vO0EN8', 
                          language: this.props.lang,
                          region: this.props.lang, 
                      }}
                          draggable={false}
                          onChange={this._onChange}
                          center={this.state.center}
                          // zoom={this.state.zoom}
                          onChildMouseDown={this.onCircleInteraction}
                          onChildMouseUp={this.onCircleInteraction3}
                          onChildMouseMove={this.onCircleInteraction}    
                          onChildClick={() => console.log('child click')}
                          onClick={() => console.log('mapClick')}
                          defaultZoom={this.props.zoom}
                          options={{ 
                              scrollwheel: true, 
                              disableDefaultUI: true
                          }}
                  >
                  {this.props.showingPin ?     <AnyReactComponent 
                          lat={this.state.lat } 
                          lng={this.state.lng }
                          text={''} /> : '' }
                  
                          
                      
                  </GoogleMapReact>
                </div>
            
         );
    }
}
 
export default GoogleMapPin;




/* ======================================================================
                Example to use the Component of Google map

                <Googlemapcircle     
                    lat={36.9439259} 
                    lng={ 50.6451447} 
                    zoom={17} 
                    lang={'fa'} />



=========================================================================*/