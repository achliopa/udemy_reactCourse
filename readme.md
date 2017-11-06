# Course Notes

## Lecture 12

* Run Babel - babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

## Lecture 18

* React DOM Events - https://reactjs.org/docs/events.html
* We refernece event handler functions not call them as they are callbacks

## Lecture 23

React Components => Reusable UI Components. All under a parent component.

* Hierarchy Structurecd 

<IndecisionApp />
	<Header />

	<Action />

	<Options />

		<Option />

	<AddOption />

## Lecture 24-25

* ES6 Classes

Syntax: class SomeClass {
	constructor(param) {
		this.param = param;
	}
	someMethod() {
		return "Something";
	}
} 

* subClass 

Synstax: class SubClass extends SomeClass {
	constructor(param, newParam) {
		super(param);
		this.newParam = newParam;
	}
	someMethod() {
		let newSomething = super.someMethod();
		newSomething += " Added New Something";
		return newSomething;
	}
}

## Lecture 26 

* React Components are ES6 classes that extend React.Component and
extend the render() method where they return jsx.

* React Components are called from a jsx template by using the syntax <ClassName />

## Lecture 27

* Nesting React Components is simple. Just call them with their tag (e.g <SomeClass />) inside the jsx of their parent component.

## Lecture 28 -Component Props

* Component Props is a way to pass arguments into the React Components. Their syntax is
  like HTML attributes where the value is a JSX like object which can be anything e.g 
  <ReactComponent param={someParam} />. Inside the React Component JSX (render method) 
  the param is called like an attribute of the object this.props e.g. this.props.param

## Lecture 29 - Event Methods

Nothing new . Same like JSX event handlers. In this lecture all handlers wher in the component
referenced with this.handlerMethod

## Lecture 30 - Method Binding

handlers are call with method reference . tthe context is not transfered so if we call props
through this code will break. the solution is to transfer 'this' object with bind(this). THis 
can be done inline in JSX but its not efficient as JSX gets rerendered in REACT so it will be 
computational expensive. Amore elegant way is to extend React Component constructor adding there
the bind (e.g this.HhandlerMethod = this.handlerMethod.bind(this)). React Component constructor
takes props argument. coostructor(props) {super(props); ...}

## Lecture 31-32-33 Component States

* React Components can have states . To facilitate rerendering. events change the states. based on current states
  jsx rendering happens

* State is defined in the constructor as this.state = {someParam: initialValue}
* The value is rendered in JSX using {this.state.someParam}
* Event handlers change the state by calling this.setState((prevState) => return {someParam: prevState.someParam +1})
* if the action does not depent on prevState it is not passed as parameter e.g. this.steState(() => return {someParam: initialValue})
* So setState method is a React Component Calss method that gets the state object as parameter and returns it modified for the rendered and for the next setState call. state is a Component Class attribute.

## Lecture 36 - State and Subcomponents

* To use state in hierarchical structures with subcomponents the father component defines the state object as a class object.
  it defines also class methods that change the state. 
* These methods are defined as standard event methods. (bind in constructor, called as this.functionName etc). 
* They are passed as callbacks with the prop mechanism. the child component calls the parent method as a reference={this.props.functionName} this causes a stahge of state and subsequently a re-render. 
* Callback props is a way of upstream parameter passing and communicationg
* Upstream parameter passing is done with callback prop methods paramters which are defined in the parent component and changed in the child component.
* A component cannot change the prop attributes as they belong to the parent
* A prop change in the parent causes the child component to re-render

# Section 5 - Stateless Functional React Components

## Lecture 40 - Stateless Functional React Components

* faster
* easier to read
* easier to test
* best candidates are components with just a render method
* Syntax: const StatelessFuncComp = (props) => {
	return (/* Valid JSX to Render  e.g <p>{props.someParam}</p>*/);
	};
* Are called as regular React Components: 
  <StatelessFuncComp someParam={Some Parameter} />

 ## Lecture 41 - Default Props

 * default props is a way of setting default values to a component prop in case this is not defined int he component
 call in the JSX of its parent (of main render)
 * they give some sort of flexibility
 * they apply both in statefull class and statelss functional react components. 
 * e.g. DefaultProp OBject definition:: SomeComponent.defaultProps = {
 	someProp: InitialValue
 }

  setting a non-default prop value is done as always by passing some value in the prop in the component call in JSX <SomeComponent someProp={nonDefualtValue} />

 * in stateful components we can pass as prop using the defaultProp mechanism even a state attribute. in that case instead of giving the initial value in the default state definition we do it in the defaultProp definition giving the ability to the caller to give its own initial value.
 in the intiial state definition instead of 
 	this.state = { someProp: intialVal} we use this.state = { someProp: props.someProp} leaving the initialization to be done by the defaultProp object

## Lecture 42 - React Dev Tools

* react dev tools is a chrome extention. it adds a new tab in dev tools. nice debugging tool. try it on facebook.com to see its full glory

 ## Lecture 43 - Passiing callbacks down the component hierarchy tree

 * passing a callback down is done with the props as a reference as we saw earlier. however from 2nd level when we want to pass an argument from the grandchild component up to the grandfather we cannot pass is as e.g. onClick={props.someMethod(props.someParam)} it will break, we have to use a wrapper arrow function utilizing the e (event object) like this onClick={(e) => { props.someMethod(props.someParam) }}

## Lecture 44 - Lifecycle Methods (Available only to Stateful Class Components) (https://reactjs.org/docs/react-component.html)
  
* componentDidMount() - called one time when component is mount to ReactDOM
* componentDidUpdate(prevProps, prevState) - called every time component re-renders/state changes/props change
** has access to this.props and this.state
** gets as params the previous Props and State
* componentWillUnmount() - called one time when component is unmount from ReactDOM

## Lecture 45 - Persist data in localStorage

* localStorage is standard object that is session persistent. till window gets closed. you can store with keys and all data stored is String. JSON can be used to overcome this. methods: localStorage.setItem('key', 'value') localStorage.getItem('key') returns 'value' 

# Section 6 - Webpack

## Lecture 48 - What is Webpack

* Webpack bundles all project in a single bundle.js file to import in the html code. 
* It promises compression and performance while taking care of dependencies
* It requires proper project structure 
* It enforces modularity

## Lecture 49 - Avoid Global Modules

* Global modules live outside of project so break portability
** In yarn they need changing the path to run them
** Other people do not now which tools we use to build etc our project
** Versioning problems

* Rule of thumb. Install only locally , add scripts to package.json for running tools. bundle up the project

## Lecture 50 - Install webpack

* webpack is locally installed with yarn/npm
* webpack is called with script in package.json
* webpack to run needs webpack.config.js file in project root dir
* webpack.config.js is run by webpack with node.js
* webpack.config.js exports an obkect that conains:
	** entry point js file where app code resides
	** output point (bundle.js) that is imported into index.html with <script> tag

## Lecture 51 - Named exports


* Webpack uses ES6 style file named import/export.
	** Node Export: module.exports = { someObject, someFunction }
	** Webpack Export: export = { someObject, someFunction  }
	** alternatively individual exports: export const someFunction = ...
	** Node Import: const { someObject } = require('./someFile.js');
	** Webpack Import import { someObject, someFunction} from './someFile.js' 

## Lecture 51 - Default exports

* default exports are different from named in the following ways
	** we can have maximum 1 default export
	** default export is not name bound. we can call it by any name we want
	** the syntax is
		** Individual export: const someObject = { ... }; export default someObject; or anonymous: export default { ... };
		** group export export { someNamedFunc, defaultFunc as default};
		** IMport: import defaultFuncCalledAnyname, {someNamedFunc } from './someFile.js'

## Lecture 52 - Install NPM Modules

* easy. use ES6 syntax import using ususally default import (if we dont need something specific)
* we need to install first (e.g yarn add npmModule@version.subversion.minor)
* import React from 'react';

## Lecture 53 - Configure Webpack to use babel to translate jsx
	* webpack cannot translate jsx by itself, needs a loader -> babel
	* yarn add babel-core (like cli but made to be run from webpack)
	* yarn add babel-loader (the actual babel loader to be used by webpack to translate jsx)
	* add modules object to ewbpack config file
		module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/

		}]
	}
	* add .babelrc file in project root to add the presets in JSON style
	{
		"presets": [
			"env",
			"react"
		]
	}
	* rerun webpack (yarn run build script)

## Lecture 55 - Import React Components
	* ES6 class can be default exported dierectlu in individual export mode e.g export default class ReactComponent ....
	* using anonymous default export hinders debug with react dev tools as they appear 'Unknown' in the DOM tree. prefer 2 step named default export for e.g. stateless fucntional components

## Lecture 55 - Webpack Source Maps
	* debugging is a pain without proper tools.
	* code that runs is translated  bundled code in bundle.js. so bugs are difficult to track
	* in webpack.config.js we can set devtools entry for a proper tool like source-map which point bugs on the original code 
	thus facilitating our debugging
	code: 	devtool: 'cheap-module-eval-source-map'

## Lecture 56 - webpack dev-server
	* super-fast in-memory dev-server to facilitate development.
	* no need to run build(with watch for changes) script and live-server to biew our app in parallel. dev-server does both
	faster. 
	* Steps to add it: 
		** local install: $ yarn add webpack-dev-server
		** add object to webpack.config.js (e.g. same as output path)
			devServer: {
				contentBase: path.join(__dirname, 'public')
			}
		** set script in package.json
			    "dev-server": "webpack-dev-server"
		** run script $ yarn run dev-server

## Lecture 57 - Class Properties
	* Experimental - to be used we need babel to translate to old compatible code
	* install module: yarn add babel-plugin-transform-class-properties
	* add to babel params in .babelrc
		"plugins": [
		"transform-class-properties"
	]
	* removes the need for constructor and bind workaround for handlers

	class OldSyntax {
  constructor() {
    this.name = 'Mike';
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi. My name is ${this.name}`;
  }
}

// ----------------------------

class NewSyntax {
  name = 'Jen';
  getGreeting = () => {
    return `Hi. My name is ${this.name}`;
  };
}

## Lecture 60 Injecting JSX into React Components

* via standard props

const Layout = (props) => {
  return (
      <div>
        <p>header</p>
        {props.content}
        <p>footer</p>
      </div>
      );  
};

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
    );


ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));

* Inline via props.children

const Layout = (props) => {
  return (
      <div>
        <p>header</p>
        {props.children}
        <p>footer</p>
      </div>
      );  
};

ReactDOM.render((
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is my page</p>
        </div>
    </Layout>
    ), document.getElementById('app'));
    
# Section 8 - Styling React with SCSS

## Lecture 64 - Adding SCSS support  in Webpack

* First step is to add CSS support in webpack
** add style-loader and css-loader with yarn
** add a new rule in webpack to use these loaders for css files
  {
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				]
		}
** add the stylesheet no in the html file but in the app js file with import
 e.g import './styles/styles.scss';
* add support for scss to webpack
** add sass-loader and node-sass with yarn
** modify the rule in webpack config for css
    {
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
				]
		}
** change css stylesheet to scss
** change the import to scss
** restart webpack

## Lecture 65 - Styling with SCSS

* scss allows breaking stylesheets into multiple files
** we name the partial like _partial.scss
** we import the partial into the main stylesheet with @import 'somepath/partial'
** scss allows nesting of elements 
e.g div {
        
      h1 {
        
      }
    }

** scss allows use of rem instead of pixel
** css allows using variables for properties eg. 
  $brandcolor: red;
  h1 {
    color: $brandcolor;
  }
  
  h2 {
    color: $brandcolor;
  }
  
## Lecture 66 - Reset Browser 

* Use normalize.css
** add normalize.css with yarn
** import it to project js file with: import 'normalize.css/normalize.css';
** change webpack rule to support both css and scss with: test: /\.s?css$/, 
** enjoy...

## Lecture 67 - Variables and Themes
* SCSS variables are usually gathered in a settings parial which must be imported first
* we use vaiables for properties that get repeatedly used
* a container partial and class helps make a uniform styling of React components like sizing their width
* CSS classes in JSX are named className

## Lecture 68 - Buttons

* bem convention has a syntax for modifiers baseElement--modifier {}
* scss supports functions like darken(basecolor, percent)

## Lecture 72 - Media queries

* responsivbe to mobile
** add <meta name="viewport" content="width=device-width, initial-scale=1"> to html head
** use in stylesheets @media (min-width: $desktop-breakpoint ) { }
* add favicon 
** add a small 16*16 png image in the project
** add  	<link rel="icon" type="image/png" href="/images/favicon.png" /> to html header