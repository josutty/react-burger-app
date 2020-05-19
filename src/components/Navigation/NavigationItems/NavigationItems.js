import React from 'react'
import classes from './NavigationItems.module.css'
import NavItems from './NavItems/NavItems';

const navigationItems = ()=> (
    <ul className={classes.NavigationItems}>
        <NavItems link="/" exact>Burger Builder</NavItems>
        <NavItems link="/orders">Orders</NavItems>
    </ul>
)

export default navigationItems