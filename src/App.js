import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Doug', age: 28 },
      { name: 'Carol', age: 32 },
      { name: 'Laise', age: 26 }

    ]
  }
  
  switchNameHandler = () => {
  //console.log('It was clicked!');

      this.setState( {
          persons: [
            { name: 'Douglas', age: 15},
            { name: 'Carol', age: 12 },
            { name: 'Laise', age: 26 }
          ]
      })

  }

  
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Click me</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> Aqui ta entrando o props.children e nos outros não</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
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