import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// // Injecting JSX in React Component
// // a) via standard props

// const Layout = (props) => {
//   return (
//       <div>
//         <p>header</p>
//         {props.content}
//         <p>footer</p>
//       </div>
//       );  
// };

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
//     );


// ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));

// // Injecting JSX in React Component
// // b) Inline via props.children

// const Layout = (props) => {
//   return (
//       <div>
//         <p>header</p>
//         {props.children}
//         <p>footer</p>
//       </div>
//       );  
// };

// ReactDOM.render((
//     <Layout>
//         <div>
//             <h1>Page Title</h1>
//             <p>This is my page</p>
//         </div>
//     </Layout>
//     ), document.getElementById('app'));

// USING THE NEW (experimental) CLASS ATTRIBUTES

// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi. My name is ${this.name}`;
//   }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// // ----------------------------

// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return `Hi. My name is ${this.name}`;
//   };
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());