import React from 'react';
import pic from './../../../assets/img/pic.svg'
import rooms from '../../../assets/icons/rooms.svg'
import persons from '../../../assets/icons/persons.svg'
import beds from '../../../assets/icons/beds.svg'

import './searchResultData.css'


const styles = {
    image: {
        backgroundImage: 'url(' + pic + ')',
        backgroundSize: 'cover',
    }
}

const searchResultData = (props) => {
    return (
        <div className="data-parent" >
            <div className="data-child" >
                <div style={styles.image} className="result-image-data" >

                </div>
                {/* <img src={pic} alt={props.alt} /> */}
                <div className="data-description" >{props.description}Great and lovely loft in Sternschanze</div>
                <div className="data-price-box" >
                    <span className="data-price">Price </span>
                    <span className="data-price-number" >{props.price}  150,000 Toman / Month</span>
                </div>
                <div className="data-details">
                    <div className="data-room">
                        <img src={rooms} alt="rooms"/>
                        <span>{props.room}1 Room</span>
                    </div>
                    <div className="data-bed" >
                        <img src={beds} alt="beds"/>
                        <span>{props.bed}1 Bed</span>
                    </div>
                    <div className="data-person">
                        <img src={persons} alt="person"/>
                        <span>{props.person}3 person</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default searchResultData;
