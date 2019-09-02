import React, { Component } from 'react';
import Persons from "../Components/Persons/Persons";

import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: "Justin", age: 37, },
      {name: "Harper", age: 2, },
      {name: "Kelsey", age: 27, }
    ]
  }


nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id ===id
  })

  const person = {...this.state.persons[personIndex]
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
      this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({showPersons: !doesShow})
  }

  render() {  
    const style = {
      backgroundColor: "white", 
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"

    }

    let persons = null
      if (this.state.showPersons) {
          persons = (
            <div >
              <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}/>
          </div> 
          )
      }


    return (
      <div className="App">
       <h1>Hi, I'm a React App!</h1>
       <p>Another Heading</p>
       <button
       style={style}
       onClick={this.togglePersonsHandler} >Toggle Persons</button>
       {persons}    
      
      </div>
    );
    
     // return React.createElement('div', {className: "App"}, React.createElement("h1", null, "Hi I'm a React App!!"))

  }
}

export default App;
