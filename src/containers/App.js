import React, { Component } from 'react';
import './App.css';
//import Person from '../components/Persons/Person/Person';
import classes from './App.module.css';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import PropTypes from 'prop-types';
import Person from '../components/Persons/Person/Person';
import CryptList from '../components/Cryptos/Binance/CryptoList';
import WebSocket from '../components/Cryptos/Binance/WebSocket';
import ProductDetail from '../components/Cryptos/Binance/WS';
import NewsApi from '../components/NewsApi/NewsApi';


export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      persons: [
        { id: '1', name: 'Doug', age: 28 },
        { id: '2', name: 'Carol', age: 32 },
        { id: '3', name: 'Laise', age: 26 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
  }
  }


loginHandler = () => {
  this.setState({ authenticated: true});
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

    //person.name = event.input.value;

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
    this.setState( ( prevState, props) => {
    return {
      showPersons: !doesShow,
      toggleClicked: prevState.toggleClicked + 1 // it counts how many clicks we do
    }
      
  });
}
  
  render() {
    let persons = null; //starts with it
    
    if(this.state.showPersons) { // if it's true show me persons
      persons =  <Persons 
            persons={this.state.persons} //they are going to the Persons.js
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            // isAuthenticated={this.state.authenticated}
            />;
    }

    // let classes = ['red', 'bold'].join(' ') // equals to red bold


    return (
      
      
      <React.Fragment>
        <button onClick={() => { this.setState( { showPersons: true } ) }}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
        {persons}
        </AuthContext.Provider>
        <CryptList />
        <NewsApi />
      </React.Fragment>
      
     
    );
  }
}


export default withClass(App, classes.App);


// // {this.state.persons[0].age} 

// /* 

// this refers to the Class, persons is the array which has a list of objects {},
// and the [0] is the index,
// state is a property of the Class.

// */ 

// /*
// <Person name={this.state.persons[0].name}
// age={this.state.persons[0].age}> Aqui ta entrando o props.children e nos outros não</Person>

// <Person name={this.state.persons[1].name}
// click={this.switchNameHandler.bind(this, 'uuuuu')}
//   age={this.state.persons[1].age}/>

// <Person name={this.state.persons[2].name}
// changed={this.nameChangeHandler}
//   age={this.state.persons[2].age}/>
//   <hr />

//   */

// {/* 
  

//       {this.state.persons.map((person, index) => {
//         return (
//         <ErrorBoundary key={person.id}> {/* the key always need to be in the outer tag when using the map()*/}
//    {/*   
//         <Person 
//         click={() => this.deletePersonHandler(index)} 
//         name={person.name}
//         age={person.age}
//         changed={(event) => this.nameChangeHandler(event, person.id)}
//         /> {/*rendering the list of persons*/}
//     {/*   </ErrorBoundary> */}
//   {/*   )
// })} */}


// {/*

//         <h1>Hello</h1>
//         <p className={assignedClasses.join(' ')}>This is really working!</p> 
    
//       {/* join brings the if classes: red and bold */}
// {/*
//       <button
//       className={btnClasses} 
//       key='algo'
//       onClick={this.switchNameHandler.bind(this, 'opa')}>Click me</button>&nbsp;&nbsp;

//       <button 
//       className={btnClasses} 
//       key='outro ag' 
//       onClick={this.togglePersonsHandler}> Click to toggle</button>



// */}

// <div className={classes.App}>

{/* <WithClass classes={classes.App}> antes era div */}