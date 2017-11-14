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

# Section 9 - React Router

## Lecture 77 - Setting Up

* React Router enables client side routing in our app (faster, we dont have to go to the server to fetch data)
* We add react-router-dom with yarn to our project. This is for webapps, for native apps we use react-router-native
* we import the components i want to use in our main app js file.
import { BrowserRouter, Route } from 'react-router-dom';
* we set up some routes by adding the BrowserRouter component in our main jsx template. in the browser Router we add some Routes passing as props the path and the component to call
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditxpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
* the components to call can be react components
* path searching is not exact but subset by default /create calls / also. to avoid that we set exat={true} in the parent path
* webpack does server routing by default and searches for these html pages in the server. to enforce client side routing we add 
* a parameter(historyapifallpback in the webpack config file
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true
	}
* the parameter can be set instead in cli in the run script --history-api-fallback

## Lecture 78 - Using Switch to set default page

* we use react router component <Switch /> to wrap our routes adding a default route last. like
a switch case router goes one by one to find the match and end up in the default one

## Lecture 79 - Linking Routes

* Linking is done with Link Routes Component. Syntax: <Link to="/about">About</Link>
* For navlnks we use NavLink Routes Component. THis has the active link functionality common
  to navbars. Syntax: <NavLink activeClassName="is-active" to="/" exact={true}>Dashboard</NavLink>
* active class allows styling separately the active link
* Navlink has the same issue with non exact match solved with setting exact prop to true

## Lecture 81 - Routes have props

* Route React Components have a props object passed to the target React Component when called.
* THe prop object has params and id attributes where we can pash query strigns or ids. e.g 
  /edit/:id called as /edit/99 passes props.match.params.id =99

# Section 10 - Redux

## Lecture 84 - RIntro

* Redux introduces the app state (Redux State) a more elegant way of keeping track of the app state without passing it from componenct to component thus making components more
  decoupled and reusable. 
* Redux is recomended for complex apps where there is no single parrent componnet and where there are multiple leves of hirerchy

## Lecture 85 - Setting up Redux - Store

* Add redux with yarn : yarn add redux@3.7.2
* import createStore to create a app state store: import  { createStore } from 'redux';
* call create Store funct setting up deault state: const store =  createStore((state = {count: 10 }) => {
    return state;
});

* get the state with store.getState()

## Lecture 86 - Redux Actions 

* Actions : an object that gets sent to the store to change the state
** Actions are set in the createstore initialization function as second argument. a switch case will
   determine what will happen depending on the action type. usually a change in a state atribute.(return the modified state object)
  const store =  createStore((state = {count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
           return {
                count: state.count + 1
           }; 
        default:
           return state;  
    }
});

** actions are triggered by the store.dispatch calls where an object with the action type is passed
  store.dispatch({
    type: 'INCREMENT'
});

## Lecture 87 - Subscribing and DYnamic Actions

* Subscribing is a method to get notified anytime there is  a change in the state (e.g for rerendering)
** we subscribe by calling store.subscribe();
** this method returns a callback function for unsubscribing. e.g const unsubscribe = store.subscribe();
** we unsubscribe by calling the method. unsubscribe();

* Dynamic actions are achieved by passing a second attribute after the action type in dispatch
** we can check this attribute in the switchcase to alter our state modification or even pass a s an attribute a state atribute seting its value to a predetermined value

## Lecture 88 - ES6 Object Destructuring

* A way of simplifying reference to object attributes by extracting them eg. const obj = { attr1: 1, attr2: '2'}; const {attr1, attr2 } = obj;
** suports renaming with : e.g const {attr1: attribute1} = obj. attr1 cannot be reference anymore but obj.attr1 yes
** supports default value if attr is missing with = e.g const {attr1 = 'attribute1' } = obj

## Lecture 89 - ES6 Array Destructuring

* array destructuring is same as above but we use [] instead of {}
* there is no renaming. there are default values with = if value is missing
* order matters
* we can skip values with nothing between commas

## Lecture 90 = Action Generators

* Action Generators are preferable over inline action objects
** Typos lead to runtime errors 
** they return an object with the action type and parameter attribute
** they can have the extra parameter passes as a function parameter as a destructured object

## Lecture 91 - Reducers

// Reducers
// 1. Reducers are pure functions (their output is only defined by their input)
// 2. Never change state or action
// 3. createStore at previous lectures was a reducer

## Lecture 92 - Combining Reducers, Using Multiple REducers

* we use multiple reducers for complex apps with complex states (with multiple objects, arrays etc). usually each stateful object in state object has its own reducer. reducers are combined with combineReducers: const store = createStore(combineReducers({
	expenses: expensesReducer,
	filters: filtersReducer
	})

## Lecture 93 - ES6 Array Spread Operator

* in reducers we do not alter state but we return new state. ES^ spread operators and array concat help us in that direction. ES^ spread Array example. name = ['john','smith']  newname = [...name, 'Bob'] = ['john', 'smith'. 'bob'] . name stays the same

## Lecture 94 - ES6 Object Spread Operator

* object spread oerator has same syntax as array but with {}, it is experimental. so we need to add it with npm or yarn (babel-plugin-transform-object-rest-spread) and add it to .babelrc (transform-object-rest-spread) 

## Lecture 97

* for sorting out we use mdn array sort method

# Section 11 - React with Redux

## Lecture 100 - Higher Order Component

* HOC is a pattern to bind redux with react components
// High Order Component (HOC) = A component that renders another component
// Reuse code
// REnder hijacking
// Prop manipulation
// Abstract state
* it uses a wrapper function to wrap an existing React component into a higer order component 
* it is reusable as it can wrapp any component addign some more attributes to it.
* e.g const AuthInfo = requireAuthentication(Info);
* 
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated? <WrappedComponent {...props} /> : <p>Please log in</p>}
        </div>
    );  
};

## Lecture 101 - Connect Redux Store with React COmponents with React-Redux

* Integration is done with 2 exports of react-redux package: Provider and connect()
* Provider wraps top level React Component passing in redux store as a prop:
** Example: const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));

* Child React Components connect to the Redux State in store with the HOC pattern by wrapping with the connect function into a HOC which gets exported instead. the connect function gets state as input and connects it to the component props by passing it as return object. e.g 


// export default  connect((state) => {
//     return {
//         expenses: state.expenses  
//     };
// })(ExpenseList);

const mapStateToProps = (state) => {
  return {
      expenses: state.expenses,
      filters: state.filters
  }  
};

## Lecture 102 - Connect Recux actions to React Components. 

* actions are connected to react components with the HOC pattern using the dispatch method passed to component props. it can be used without mapstatetoprops.

e.g 
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
	<div>
		<h3>{description}</h3>
		<p>{amount}$ Created: {createdAt}</p>
		<button onClick={() => {
			dispatch(removeExpense({ id }));
		}}>Remove</button>
	</div>
);

export default connect()(ExpenseListItem);