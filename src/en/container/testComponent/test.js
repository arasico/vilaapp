

 

import React,{Component} from 'react';
import Geosuggest from 'react-geosuggest';
import GogoleMapPin from '../../components/googleMapPin/googleMapPin';
import MapPicker from '../../components/createLandLoard/mapPicker/mapPicker';


import './style.css'

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
      
        };
       
 
    }

   
  
    render() { 
 

        return (  
            <div className="container-fluid">

                    <MapPicker />

            </div>
        );
    }
}
 
export default TestComponent;

 
 