import React, {useEffect} from "react"

const CockPit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.js] useEffect")
        //http request
        setTimeout(() => {
            alert("Saved data to cloud")
        }, 1000)
        return () => {
            console.log("[Cockpit.js] cleanup work")
        }
    }, [])

  
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

export default React.memo(CockPit)