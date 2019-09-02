import React from "react"

const CockPit = (props) => {
    const style = {
        backgroundColor: "white", 
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: "pointer"
  
      }
  
    return(
        <div style={style}>
            <h1>Hi, I'm a React App!</h1>
            <p>Another Heading</p>
            <button
                onClick={props.clicked} >Toggle Persons
            </button>
        </div>
    )
}

export default CockPit