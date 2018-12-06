import React from 'react';

const searchResultData = (props) => {
    return (
        <div className="data-parent" >
            <div className="data-child">
                <img src={props.image} alt={props.alt} />
                <div>{props.description}</div>
                <div>
                    <span>Price</span>
                    <span>{props.price} Toamn / Month</span>
                </div>
                <div>
                    <div>
                        <i class="fas fa-door-closed"></i>
                        <span>{props.room}</span>
                    </div>
                    <div>
                        <i class="fas fa-bed"></i>
                        <span>{props.bed}</span>
                    </div>
                    <div>
                        <i class="far fa-building"></i>
                        <span>{props.mm}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default searchResultData;
