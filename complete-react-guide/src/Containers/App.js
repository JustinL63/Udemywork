import React, { Component } from 'react';
import Persons from "../Components/Persons/Persons";
import CockPit from "../Components/CockPit/Cockpit"
import withClass from "../Components/Hoc/withClass"
import Aux from "../Components/Hoc/Auxillary"
import AuthContext from "../Components/Context/Auth-Context"
import classes from './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    console.log("[App.js] constructor")
  }
  state = {
    persons: [
      { name: "Justin", age: 37, },
      { name: "Harper", age: 2, },
      { name: "Kelsey", age: 27, }
    ],
    showCockpit: true,
    authenticated: false

  }

  static getDeriviedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props)
    return state
  }

  componentDidMount() {
    console.log(' [App.js] componentDidMount')
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("[App.js] componentDidUptate")
    return true

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  loginHandler = () => {
    this.setState({ authenticated: !this.state.authenticated })
  }

  render() {
    console.log("App.js render")
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated} />
      )
    }


    return (
      <Aux>
        <button onClick={() => { this.setState({ showCockpit: !this.state.showCockpit }) }}>Remove CockPit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
          {this.state.showCockpit ? (<CockPit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />) : null
          }
          {persons}
        </AuthContext.Provider>
      </Aux>
    );

    // return React.createElement('div', {className: "App"}, React.createElement("h1", null, "Hi I'm a React App!!"))

  }
}

export default withClass(App, classes.App);
