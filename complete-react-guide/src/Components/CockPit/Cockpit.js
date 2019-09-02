import React from "react"

const CockPit = (props) => {
    return(
        <div className={classes.CockPit}>
            <h1>Hi, I'm a React App!</h1>
            <p>Another Heading</p>
            <button
                style={style}
                onClick={props.togglePersonsHandler} >Toggle Persons
            </button>
        </div>
    )
}

export default CockPit