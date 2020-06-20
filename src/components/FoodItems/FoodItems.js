import React from 'react';

const FoodItems = (props) => {
    console.log(props.product)
    const { img, title, description, price } = props.product;
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src={img} className="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <h3>{price}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodItems;