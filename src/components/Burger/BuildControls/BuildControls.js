import React from 'react'
import BuildControl from './../BuildControls/BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price : <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                moreIngredient={() => props.ingredientsAdded(ctrl.type)}
                lessIngredient={() => props.ingredientsRemoved(ctrl.type)} 
                disabled = {props.disabled[ctrl.type]}/>
        ))}
        <button disabled={!props.purchasable} onClick = {props.ordered} className={classes.OrderButton}>ORDER NOW</button>
    </div>
)

export default buildControls;