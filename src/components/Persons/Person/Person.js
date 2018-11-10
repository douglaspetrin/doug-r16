import React, { Component } from 'react';
import './Person.css';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';


class Person extends Component {
    render() {
            return (
                
                <React.Fragment>
        
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} placeholder={this.props.name}></input>
        
                    </React.Fragment>
            )
        }
    }


export default withClass(Person, classes.Person);

// const person = (props) => {

//     return (
//         <div className={classes.Person}>

//             <p onClick={props.click}>I'm {props.name} and I am {props.age}</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} placeholder={props.name}></input>

//         </div>
//     )
// };

