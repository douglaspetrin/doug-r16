import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import classes from './Person.module.css';
import withClass from '../../../hoc/WithClass';
import {AuthContext} from '../../../containers/App';


class Person extends Component {
    constructor(props){
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        if (this.props.position === 0) {
            this.inputElement.current.focus();
       }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
            return (
                
                <React.Fragment>

                    {/* {this.props.authenticated ? <p>I'm authenticated!</p> : null} */}

                    <AuthContext.Consumer>
                    
                    {auth => auth ? <p>I am authenticated</p> : null}
                    
                    </AuthContext.Consumer>

                    <p onClick={this.props.click}>
                    
                    I'm {this.props.name} and I am {this.props.age}</p>
                    
                    <p>{this.props.children}</p>
                    
                    <input  
                        ref={ this.inputElement }
                        type="text"
                        onChange={this.props.changed} 
                        value={this.props.name}>
                    </input>
                    </React.Fragment>
            )
        }

    }

    // validation with PropTypes for dev not production

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass( Person, classes.Person );

// const person = (props) => {

//     return (
//         <div className={classes.Person}>

//             <p onClick={props.click}>I'm {props.name} and I am {props.age}</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} placeholder={props.name}></input>

//         </div>
//     )
// };

