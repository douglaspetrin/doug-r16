import React from 'react';

const aux = (props) => props.children;

export default aux;


// HOC -> higher order component: they are not representational wrap other components to add certain functionality

// we also can use a bultin "Aux" comp. called "fragment"

// the fragment can be implemented as <> <> instead of <Aux> and </Aux>. they have the same functionality

// or we can use <React.Fragment>...</React.Fragment> or define a const

//-->> const Fragment = React.Fragment and use <Fragment> </Fragment>

// import React from 'react';
// ...
// <React.Fragment>...</React.Fragment>

// if we don't need DOM nodes instead of <div> we use <Fragment>