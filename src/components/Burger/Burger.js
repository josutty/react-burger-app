import React from 'react';
import classes from './../Burger/Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
    let modifiedIngredient = Object.keys(props.receipeIngredient.ings)
    .map((igKey) => {
        return [...Array(props.receipeIngredient.ings[igKey])]
        .map((_,i) => {
            return <BurgerIngredients key={igKey + i} type={igKey}/>
        })
    })
    .reduce((preval, currentVal) => {
        return preval.concat(currentVal)
    },[])

    if(modifiedIngredient.length === 0) {
        modifiedIngredient = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {modifiedIngredient}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}

export default burger;