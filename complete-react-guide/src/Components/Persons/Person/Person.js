import React, { Component } from "react"
import classes from "./Person.css"
import Aux from "..//../Hoc/Auxillary"
import withClass from "../../Hoc/withClass"
import PropTypes from "prop-types"

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }
    componentDidMount() {
        this.inputElementRef.current.focus()
    }
    render() {
        console.log("[Person.js] rendering")
    return (
        <Aux>
            <div className="Person">
                <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    key="i3"
                  //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </div>
        
        </Aux>
    )
    }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person)