import React from 'react';
import './priceMinMax.css'

const priceMinMax = (props) => {
    return (
            <div className="price-min-max">
                <div className="price-min-max-box notCloseMenuLand" >
                    <span className="min-label notCloseMenuLand" >Min</span>
                    <input className="min-price-input notCloseMenuLand" onChange={props.changed}  />
                    <span className="min-max-toman notCloseMenuLand" >Toman</span>
                </div>
                <div className="price-min-max-box notCloseMenuLand" >
                    <span className="max-label notCloseMenuLand" >Max</span>
                    <input className="max-price-input notCloseMenuLand" onChange={props.changed}  />
                    <span className="min-max-toman notCloseMenuLand" >Toman</span>
                </div>
            </div>
    );
};

export default priceMinMax;
