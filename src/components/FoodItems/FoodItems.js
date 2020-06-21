import React from 'react';
import './FoodItems.css'

const FoodItems = (props) => {
    console.log(props.product)
    const { img, title, description, price } = props.product;
    return (

           <div className="foodDetails" id="foodDetails">
                <div className="foodImage">
                    <img src={img} alt=""/>
                </div>
                <div className="foodInfo">
                    <h6>{title}</h6>
                    <p>{description}</p>
                    <h4>${price}</h4>
                </div>
           </div>
        
    );
};

export default FoodItems;