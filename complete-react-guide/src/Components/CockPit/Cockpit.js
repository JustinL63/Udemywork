import React, {useEffect, useRef, useContext} from "react"
import AuthContext from "../Context/Auth-Context"

const CockPit = (props) => {
    const toggleButtonRef = useRef(null)
    const authContext = useContext(AuthContext)

    console.log(authContext.authenticated)
    
    useEffect(() => {
        console.log("[Cockpit.js] useEffect")
        //http request
        toggleButtonRef.current.click()
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
                ref={toggleButtonRef}
                onClick={props.clicked} >Toggle Persons
            </button>
            <br/>
            <button onClick={authContext.login}>Log In</button>
        </div>
    )
}

export default React.memo(CockPit)