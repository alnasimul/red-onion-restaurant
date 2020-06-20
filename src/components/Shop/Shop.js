import React from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import { useState } from 'react';
import { useEffect } from 'react';
import FoodItems from '../FoodItems/FoodItems';


const Shop = () => {

    const meals = fakeData;
    const [foods, setFoods] = useState([]);
    const [category, setCategory] = useState("lunch");

    useEffect(() => {
        setFoods(meals);
    }, []);

    const currentFood = foods.filter(food => food.category === category);



    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="manageCategory">
                        <ul className="d-flex justify-content-center">
                            <li onClick={() => setCategory('breakfast')}>
                                <a href=""  className={category === 'breakfast' ? 'active h6' : 'h6'}> Breakfast</a>
                            </li>
                            <li onclick={() => setCategory('lunch')}>
                                <a href="" className={category === 'lunch' ? 'active h6' : 'h6'}> Lunch</a>
                            </li>
                            <li onClick={() => setCategory('dinner')}>
                                <a href="" className={category === 'dinner' ? 'active h6' : 'h6'}>Dinner</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    currentFood.map(food => <FoodItems product={food} key={food.key}></FoodItems>)
                }
            </div>
        </div>
    );
};

export default Shop;