import React from 'react';
import classes from './Cockpit.module.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClasses = classes.Button;
    
    if (props.showPersons) {
        btnClasses = [classes.Button, classes.Red].join(' ');
    }
    

    if (props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // turns it red an it is using module classes
    }

    if (props.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }

    
    return (
        <Aux>
        <h1>Hello</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p> 
    
      {/* join brings the if classes: red and bold */}

        <button 
        className={btnClasses} 
        
        onClick={props.clicked}> Click to toggle</button>
        </Aux>
    );
};

export default cockpit;

// className={classes.btnClasses} 
// key='algo'
// onClick={this.switchNameHandler.bind(this, 'opa')}>Click me</button>&nbsp;&nbsp;