import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {
    constructor(props) {
        super(props);
        this.lastPersonRef = React.createRef();
    }

    componentDidMount(){
        this.lastPersonRef.current.focus();
    }
    
    render() {
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)} 
                position={index} //pass the index to Person.js
                name={person.name}
                age={person.age}
                ref={this.lastPersonRef}
                // authenticated={this.props.isAuthenticated}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        } );
    }
}

export default Persons;


// const persons = (props) =>  props.persons.map((person, index) => {
//     return <Person
//         click={() => props.clicked(index)} 
//         name={person.name}
//         age={person.age}
//         key={person.id}
//         changed={(event) => props.changed(event, person.id)} />
// } );