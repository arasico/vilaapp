import React,{Component} from 'react';
import './style.css';


class LandLoard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid " >
                <div id="#furnished" className="container pt100 ">
                    <h1>Rent out your </h1>
                    <h1>furnished apartment</h1>
                </div>
            </div>
         );
    }
}
 
export default LandLoard;