import React from 'react';

import pic from './../../../assets/img/pic.svg'
import rooms from '../../../assets/icons/rooms.svg'
import persons from '../../../assets/icons/persons.svg'
import beds from '../../../assets/icons/beds.svg'

import './searchResultBox.css'


const styles = {
    image: {
        backgroundImage: 'url(' + pic + ')',
        backgroundSize: 'cover',
    }
}

const searchResultBox = (props) => {
    return (
        <div className="data-parent-box" >
            <div className="data-child-box" >
                <div className="close-result-box" onClick={props.closeResultBox} ></div>
                <div style={styles.image} className="result-image" >

                </div>
                <div className="child1">
                    <div className="data-description-box" >{props.description}Great and lovely loft in Sternschanze</div>
                    <div className="data-price-boxs" >
                        <span className="data-price-box1">Price </span>
                        <span className="data-price-number-box" >{props.price}  150,000 Toman / Month</span>
                    </div>
                    <div className="data-details-box">
                        <div className="data-room-box">
                            <img src={rooms} alt="rooms"/>
                            <span>{props.room}1 Room</span>
                        </div>
                        <div className="data-bed-box" >
                            <img src={beds} alt="beds"/>
                            <span>{props.bed}1 Bed</span>
                        </div>
                        <div className="data-mm-box">
                            <img src={persons} alt="area"/>
                            <span>{props.mm}3 Person</span>
                        </div>
                    </div>
                    <div className="show-more-btn">
                        <p>Show More</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default searchResultBox;
