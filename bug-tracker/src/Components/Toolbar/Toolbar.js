import React from "react"
import classes from "./Toolbar.module.css"
import NavigationItems from "../Navigation/NavigationItems/NavigationItems"

const toolbar =(props) => (
    <header className={classes.Toolbar}>
        <h2>Bug Tracker</h2>
        <nav className={classes.DesktopOnly}>
        <NavigationItems/>
        </nav>
    </header>
)

export default toolbar