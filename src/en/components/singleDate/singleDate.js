import React, {Component} from 'react';
import './singleDate.css';


class SingleDate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

        // Get Props name and make upper case like name => NAME
        renderUperCase(value){
            return   value.charAt(0).toUpperCase() + value.slice(1);
        }

    render() { 
        return ( 
            <div className="container-single-date">
            <div className="container-single-date-child">
                <div className="single-date-items">
                     <span className="title-single-date">{this.renderUperCase(this.props.name)}</span>
                </div>
                <div className="price-single-date flex-item">
                     <div className="single-date-items-child left">
                       
                     </div>
                     <div className="single-date-items-child right">
                         <span className="toman-span">Toman</span>
                     </div>
                </div>
            </div>
         </div>
         );
    }
}
 
export default SingleDate;