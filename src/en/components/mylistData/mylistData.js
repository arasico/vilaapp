import React from 'react';
import pic from './../../../assets/img/pic.svg'
import rooms from '../../../assets/icons/rooms.svg'
import persons from '../../../assets/icons/persons.svg'
import beds from '../../../assets/icons/beds.svg'
import view from '../../../assets/icons/view.svg'

import './mylistData.css'


const styles = {
    image: {
        backgroundImage: 'url(' + pic + ')',
        backgroundSize: 'cover',
    }
}

let statustext =  ""
let statuscolor = {}

const mylistData = (props) => {

    if(props.status === 0){
        statustext ="Active"
        statuscolor = {color:'#1FC056'}
    }else if(props.status === 1){
        statustext = " In reviewing"
        statuscolor = {color:'#D4AB16'}
    }else if(props.status === 2){
        statustext = "Refuse"
        statuscolor = {color:'#C50143'}
    }

    return (
        <div className="mylist-data-parent" onClick={props.click} >
            <div className="mylist-data-child" >
                <div style={styles.image} className="result-image-mylist-data" >
                <img className="mylist-view" src={view} alt="view" />

                </div>
                {/* <img src={pic} alt={props.alt} /> */}
                <div className="mylist-data-description" >{props.description}Great and lovely loft in Sternschanze</div>
                <div className="mylist-data-price-box" >
                    <span className="mylist-data-price">Price </span>
                    <span className="mylist-data-price-number" >{props.price}  150,000 Toman / Month</span>
                </div>
                <div className="mylist-data-details">
                    <div className="mylist-data-room">
                        <img src={rooms} alt="rooms" />
                        <span>{props.room}1 Room</span>
                    </div>
                    <div className="mylist-data-bed" >
                        <img src={beds} alt="beds" />
                        <span>{props.bed}1 Bed</span>
                    </div>
                    <div className="mylist-data-person">
                        <img src={persons} alt="person" />
                        <span>{props.person}3 person</span>
                    </div>
                </div>
                <div className="myline"></div>
                
            </div>
            <div className="action-buttons" >
                    <div className="mylist-status" >
                        <span className="status-title">Status : </span>
                        <span className="status-text"
                            style={statuscolor}
                            status={props.status}>{statustext}</span>
                    </div>
                    <div className="mylist-edit-delete" >
                        <div className="mylist-edit" >Edit</div>
                        <div className="mylist-delete" >Delete</div>
                    </div>
                </div>
        </div>
    );
};

export default mylistData;
