import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
    state = {
      persons: [
        { name: 'Doug', age: 28 },
        { name: 'Carol', age: 32 },
        { name: 'Laise', age: 26 }
      ],
      showPersons: false
  }
  
  switchNameHandler = (newName) => {
       this.setState( {
          persons: [
            { name: newName, age: 15},
            { name: newName, age: 12 },
            { name: 'Laise', age: 26 }
          ]
      })
  }


deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}


togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
  this.setState({
      showPersons: !doesShow
  });
}

  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '5px',
      
    };


    let persons = null; //starts with it

    if(this.state.showPersons) { // if it's true show me persons
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
            <Person 
            click={() => this.deletePersonHandler(index)} 
            name={person.name}
            age={person.age}/> //rendering the list of persons
             
            )
          })}
        </div>
      );
    }


    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is really working!</p>

        <button style={style}
        onClick={this.switchNameHandler.bind(this, 'opa')}>Click me</button>

        <button style={style} onClick={this.togglePersonsHandler}> Click to toggle</button>

        {persons}
      
      </div>
    );
  }
}

export default App;


// {this.state.persons[0].age} 

/* 

this refers to the Class, persons is the array which has a list of objects {},
and the [0] is the index,
state is a property of the Class.

*/ 

/*
<Person name={this.state.persons[0].name}
age={this.state.persons[0].age}> Aqui ta entrando o props.children e nos outros não</Person>

<Person name={this.state.persons[1].name}
click={this.switchNameHandler.bind(this, 'uuuuu')}
  age={this.state.persons[1].age}/>

<Person name={this.state.persons[2].name}
changed={this.nameChangeHandler}
  age={this.state.persons[2].age}/>
  <hr />

  */

  /* 
  
  nameChangeHandler = (event) => {
  this.setState({
    persons: [
      {name: 'Doug', age: 28},
      { name: event.target.value, age: 32 },
      { name: 'Laise', age: 26 }
    ]
  })
}
  
  */