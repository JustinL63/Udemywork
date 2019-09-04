import React from "react"
import Person from "./Person/Person"

class Persons extends React.Component {
   // static getDervidedStateFromProps(props, state) {
     //   console.log("[Persons.js] getDervivedStateFromProps")
 //       return state
  //  }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.js] shouldComponentUpdate")
        if (nextProps.persons !==  this.props.persons) {
            return true
        }
        else {
            return false
        }
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapShotBeforeUpdate")
        return { message: "Snapshot"}
    }

    componentDidUpdate() {
        console.log("[Persons.js], componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("[Persons.js] componentWillUnmount")
    }
    render() {
        return this.props.persons.map((person, index) => {
            console.log("[Persons.js] rendering...")
        return (
            <Person 
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                isAuth={this.props.isAuthenticated}/>
        )
      })
    }

     
        }


export default Persons