import React from 'react';
import pic from './../../../assets/img/pic.svg'
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
                        <i className="fas fa-door-closed"></i>
                        <span>{props.room}1 Room</span>
                    </div>
                    <div className="data-bed" >
                        <i className="fas fa-bed"></i>
                        <span>{props.bed}1 Bed</span>
                    </div>
                    <div className="data-mm">
                        <i className="far fa-building"></i>
                        <span>{props.mm}45 M</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default searchResultData;
