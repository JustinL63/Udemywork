import React, { Component } from 'react';
import Persons from "../Components/Persons/Persons";
import CockPit from "../Components/CockPit/Cockpit"

import './App.css';


class App extends Component {
  state = {
    persons: [
      { name: "Justin", age: 37, },
      { name: "Harper", age: 2, },
      { name: "Kelsey", age: 27, }
    ]
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

  render() {

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
      )
    }


    return (
      <div className="App">
        <CockPit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}

      </div>
    );

    // return React.createElement('div', {className: "App"}, React.createElement("h1", null, "Hi I'm a React App!!"))

  }
}

export default App;
