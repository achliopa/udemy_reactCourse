'use strict';

console.log('App.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer'

  // JSX - Javascript XML
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

// create atemplateTwo expression
//div
//  h1 -> your name
// p-> age: 26
// p location: philad
// render templateTwo instead of template

// var user = {
//   name: '                   Andrew          ',
//   age: 26,
//   location: 'Philadelphia'
// };
// var templateTwo = (
//   <div>
//     <h1>{user.name.trim()}</h1>
//     <p>Age: {user.age}</p>
//     <p>Location: {user.location}</p>
//   </div>
// );

//RENDER
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo,appRoot);
