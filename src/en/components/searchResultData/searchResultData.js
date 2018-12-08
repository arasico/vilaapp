import React from 'react';
import pic from './../../../assets/img/pic.svg'
import './searchResultData.css'

const searchResultData = (props) => {
    return (
        <div className="data-parent" >
            <div className="data-child" >
            <div style={{backgroundImage:'url(' + pic + ')' ,width: '180px' , height : '200px' , backgroundSize: 'cover'   }} >

            </div>
                {/* <img src={pic} alt={props.alt} /> */}
                <div className="data-description" >{props.description}Great and lovely loft in Sternschanze</div>
                <div className="data-price-box" >
                    <span className="data-price">Price</span>
                    <span className="data-price-number" >{props.price}150,000 Toamn / Month</span>
                </div>
                <div className="data-details">
                    <div className="data-room">
                        <i class="fas fa-door-closed"></i>
                        <span>{props.room}1 Room</span>
                    </div>
                    <div className="data-bed" >
                        <i class="fas fa-bed"></i>
                        <span>{props.bed}1 Bed</span>
                    </div>
                    <div className="data-mm">
                        <i class="far fa-building"></i>
                        <span>{props.mm}45 M</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default searchResultData;
