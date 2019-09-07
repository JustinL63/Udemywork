import React from "react"
import burgerlogo from "../../Assets/Images/burger-logo.png"
import classes from "./Logo.css"

const logo =(props) => (
    <div className={classes.Logo}>
        <img src={burgerlogo} alt="Myburger"/>
    </div>
)

export default logo