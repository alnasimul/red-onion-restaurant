import React from 'react';
import './ProductDetails.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const ProductDetails = () => {
    let { productKey } = useParams();
    let product = fakeData.find(pd => pd.key === productKey);
    const [quantity, setQuantity] = useState(0);
    const { title, description, img, price,key } = product;

    // quantity subtraction method

    const handelSub = () => {
        quantity !== 0 && setQuantity(quantity -1);
    }

    // quantity adding method

    const handelAdd = () => {
        setQuantity(quantity + 1);
    }

    // product adding method in cart

    const addToCart = () => {
        quantity > 0 && addToDatabaseCart(key,quantity);
    }
    return (
        <div className="container productDetails">
            <div className="productInfo">
                <div>
                    <h1>{title}</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea explicabo fugit maiores dolores, vitae alias enim, eum accusantium magni modi dolorum numquam? Nisi cupiditate quasi optio nulla eius beatae nemo!</p>
                </div>
                <div className="productPriceQuantity">
                    <div className="price">
                        <h2>${price}</h2>
                    </div>
                    <div className="quantity">
                        <FontAwesomeIcon className="minusIcon" icon={faMinus} onClick={handelSub} />
                        <input className="form-control" id="quantityNumber" type="text" value={quantity}></input>
                        <FontAwesomeIcon className="plusIcon" icon={faPlus} onClick={handelAdd} />
                    </div>
                </div>
                <br />
                <button onClick={addToCart} className="btn btn-danger" style={{padding:'10px 10px',width:'100px',borderRadius:'50px',border:'none'}}><FontAwesomeIcon style={{color:'#fff'}} icon={faShoppingCart}/> Add</button>
            </div>
            <div className="productImage">
                <img src={img} alt=""/>
            </div>
        </div>
    );
};

export default ProductDetails;