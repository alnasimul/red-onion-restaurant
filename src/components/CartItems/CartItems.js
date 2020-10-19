import React, { useState } from 'react';
import fakeData from '../../fakeData';

const CartItems = (props) => {

    const {name,price,quantity,image,id} = props.currentFood;
    const [quantityCount,setQuantityCount] = useState(quantity);

    const handelAdd = clickedId => {
        const foods = fakeData;
        console.log(foods)
       // const currentFood = fakeData.find()
    }
    return (
        <div>
            
        </div>
    );
};

export default CartItems;