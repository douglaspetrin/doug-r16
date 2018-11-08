import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import classes from './Button.module.css';


class App extends Component {
    state = {
      persons: [
        { id: '1', name: 'Doug', age: 28 },
        { id: '2', name: 'Carol', age: 32 },
        { id: '3', name: 'Laise', age: 26 }
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

nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const persons = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }


deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons]; //... copies first and then it is ready to be deleted
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
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}
            /> //rendering the list of persons
             
            )
          })}
        </div>
      );
      style.backgroundColor = 'blue';
      style.color = 'white';      
    }

    // let classes = ['red', 'bold'].join(' ') // equals to red bold

    const assignedClasses = [];

    if (this.state.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // turns it red an it is using module classes
    }

    if (this.state.persons.length<= 1) {
      assignedClasses.push( classes.bold );
    }

    return (
      
      <div className="App">
        <h1>Hello</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p> 
    
      {/* join brings the if classes: red and bold */}

        <button style={style} key='algo'
        onClick={this.switchNameHandler.bind(this, 'opa')}>Click me</button>&nbsp;&nbsp;

        <button style={style} key='outro ag' onClick={this.togglePersonsHandler}> Click to toggle</button>

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
  

  
  */