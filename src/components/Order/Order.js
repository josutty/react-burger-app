import React from 'react';
import classes from './Order.module.css';

const order = (props) => (
    <div className={classes.Order}>
        <p>Ingredient</p>
<p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
    </div>
)

export default order;