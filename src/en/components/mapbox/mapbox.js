/* global window */
import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';

import ControlPanel from './control-panel';
import Pin from './pin';

// ReactMapGLmapboxgl.accessToken = 'pk.eyJ1IjoiYXJhc2ljbyIsImEiOiJjanFyb3dkeDEwbmNjNDJxZ2RobHIyMWkzIn0.xu1DO-vRGaEVWu3tKvmM9w';
const TOKEN = 'pk.eyJ1IjoiYXJhc2ljbyIsImEiOiJjanFyb3dkeDEwbmNjNDJxZ2RobHIyMWkzIn0.xu1DO-vRGaEVWu3tKvmM9w';


const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
  };

class MapBox extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          viewport: {
            latitude: 37.785164,
            longitude: -100,
            zoom: 3.5,
            bearing: 0,
            pitch: 0
          },
          marker: {
            latitude: 37.785164,
            longitude: -100,
          },
          events: {}
        };
      }


 

      _updateViewport = (viewport) => {
        this.setState({viewport});
      }
    
      _logDragEvent(name, event) {
          console.log(event.lngLat)
        this.setState({
          events: {
            ...this.state.events,
            [name]: event.lngLat,
          }
        })
      }
    
      _onMarkerDragStart = (event) => {
        this._logDragEvent('onDragStart', event);
      };
    
      _onMarkerDrag = (event) => {
        this._logDragEvent('onDrag', event);
      };
    
      _onMarkerDragEnd = (event) => {
        this._logDragEvent('onDragEnd', event);
        this.setState({
          marker: {
            longitude: event.lngLat[0],
            latitude: event.lngLat[1],
          }
        });

      
      };




    render() { 
        const {viewport, marker} = this.state;


        const { lng, lat, zoom } = this.state;
    
        return (
                <div style={{width:'100%', height:900}}>
                    <MapGL
                        {...viewport}
                        width="100%"
                        height="100%"
                        mapStyle="mapbox://styles/mapbox/dark-v9"
                        onViewportChange={this._updateViewport}
                        mapboxApiAccessToken={TOKEN} >
                        <Marker 
                        longitude={marker.longitude}
                        latitude={marker.latitude}
                        draggable
                        onDragStart={this._onMarkerDragStart}
                        onDrag={this._onMarkerDrag}
                        onDragEnd={this._onMarkerDragEnd} >
                        <Pin size={20} />
                        </Marker>

                        <div className="nav" style={navStyle}>
                        <NavigationControl onViewportChange={this._updateViewport} />
                        </div>

                        <ControlPanel
                        containerComponent={this.props.containerComponent}
                        events={this.state.events}
                        />
                    </MapGL>
                </div>
          );
    }
}
 
export default MapBox;