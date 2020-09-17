import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData'
import { getDatabaseCart } from '../../utilities/databaseManager';

const Cart = () => {

    const [cartFoods,setCartFoods] = useState([]);


    useEffect( () => {
        //console.log(fakeData);
        let previousCart = getDatabaseCart();
        const foodKeys = Object.keys(previousCart);

        const foods = foodKeys.map( key => {
            const food = fakeData.find ( singleFood => singleFood.key === key  );
            food.quantity = previousCart[key];
        
           console.log(food);

           return(food);
        })

        setCartFoods(foods);
       
    },[])

    let subtotal = 0;

    const calculateSubTotal = () => {
        cartFoods.map( food => subtotal = subtotal + (food.quantity * food.price));
        return subtotal.toFixed(2);
    }

    let tax = 0 ;

    const calculateTax = () => {
        tax = subtotal * 0.15;

        return tax.toFixed(2);
    }

    let deliveryFee = 0 ;

    const calculateDeliveryFee = () => {
        if( subtotal < 100 && subtotal > 70){
            deliveryFee = 0;
        }else if( subtotal < 70 && subTotal > 50){
            deliveryFee = 2;
        }
        else if( subtotal < 50 && subTotal > 30){
            deliveryFee = 5;
        }
        else if( subtotal < 30 && subTotal > 5){
            deliveryFee = 10;
        }else {
            deliveryFee = 0 ;
        }

        return deliveryFee;
    }

    console.log(cartFoods);
    return (
        <div>
            
        </div>
    );
};

export default Cart;