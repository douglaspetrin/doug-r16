import React from 'react';
import './Person.css';
import classes from './Person.module.css';


const person = (props) => {

    return (
        <div className={classes.Person}>

            <p onClick={props.click}>I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} placeholder={props.name}></input>

        </div>
    )
};

export default person;