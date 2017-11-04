// // NAMED - DEFAULT FILE IMPORTS 

// // import './utils.js'
// import anythingIwant, { square, add } from './utils.js'


// console.log('app.js is running');

// console.log(square(3));
// console.log(add(3,4));
// console.log(anythingIwant(9,5));

// import isSenior, { isAdult, canDrink } from './person.js'
// console.log(isAdult(18));
// console.log(canDrink(14));
// console.log(isSenior(65));

// Install -> Import -> Use

// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

// const someString = 'sakis:c@fdfd.com'

// console.log(`${someString} is email? ${validator.isEmail(someString)}`);

// it will break . needs babel to translate
 const template = <p>Testing 12344</p>;
//const template = React.createElement('p', {}, 'testing 123');
ReactDOM.render(template, document.getElementById('app'));