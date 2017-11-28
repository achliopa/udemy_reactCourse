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

## Lecture 119 - Install Enzyme 

* yarn add enzyme@3.0.0 enzyme-adapter-react-16@1.0.0 raf@3.3.2
* create js file $project_root/src/tests/setupTests.js
* add the following to setupTests.js
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
   adapter: new Adapter()
});

* add jest.config.json file to project root dir
* add the following to the jest.confi.json file
{
    "setupFiles": [
        "raf/polyfill",
        "<rootDir>/src/tests/setupTests.js"
    ]
}

* modify test script entry in package.json :: "test": "jest --config=jest.config.json"
* Snapshots of Jest dont work with enzyme wrapped components. lead to fails. need to add a library
* yarn add enzyme-to-json@3.0.1
* import toJSON from 'enzyme-to-json';
* const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot(); => expect(toJSON(wrapper)).toMatchSnapshot();
* add "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ] to jest.config.json file. That way we dont need toJSON everytime. we can remove it

## Lecture 120 - Snapshot testing of Dynamic Components

* to dynamic test redux connected react components I need their unconnected version as 
  I want me to pass the props and to autopass them from redux store. so i make named 
  exports of unconnected react components for testing purposes.

## Lecture 121 - Mock 3rd party libraries in Jest

* when 3rd party libraries caus test to fail we can mock the test by adding the
<modulename>.js file in <rootDir>/tests/__mocks__/ folder.
* in this file we import the actual module and we export a mocked version of the obkects or functions used in our components.
* e.g. const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};

## Lecture 123 - Mocked Functions AKA Spies

* Pattern:     const onSubmitSpy = jest.fn(); //spy func
    onSubmitSpy();
    expect(onSubmitSpy).toHaveBeenCalled();

const onSubmitSpy = jest.fn(); //spy func
    onSubmitSpy('Andrew','Philadelphia');
    expect(onSubmitSpy).toHaveBeenCalledWith('Andrew','Philadelphia');

## lEcture 124 - map dispatch to props

* easier testing, adding spies. clear code
* syntax : const mapDispatchToProps = (dispatch) => {
    return {
      onSubmit: (expense) => dispatch(addExpense(expense))
    };
};

// export default connect()(AddExpensePage);

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

# Section 13 - Deploy

## Lecture 133 _ Prepare for Production

* create two separate build entries in package.json
      "build:dev": "webpack",
    "build:prod": "webpack -p",
* make webpack.config.js to export not an object but a faunction returning an object where we can pass 
  as parameter the environment (https://webpack.js.org/configuration/configuration-types/)
* pass env as parameter module.exports = (env) => {... by calling the build command with a second argument
  e.g.    "build:prod": "webpack -p --env production",
* check in cofig function if env is production and use the proper dev tool
  devtool: isProduction? 'source-map' : 'cheap-module-eval-source-map',
  (https://webpack.js.org/configuration/devtool/)

## Lecture 134 - Export CSS to Separate Files for fast loading

* use extract-text-webpack-plugin:  yarn add extract-text-webpack-plugin@3.0.0
* modify weback.config.js
  const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = ExtractTextPlugin('styles.css');
replace use: .... with 
	use: CSSExtract.extract({
					use: [
						'css-loader',
						'sass-loader'
					]
				})
add: 		plugins: [
			CSSExtract
		],
* source-maps work in production but no in development
* replace cheap-module-eval-source-map with inline-source-map in devtools
* change css loaders to objects enabling sourcemap option
						// 'css-loader',
						// 'sass-loader'
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}

# Section 14 - Firebase

## LEcture 142 - Installing Firebase (google realtime Nosql db)

* make new app
* go to console
* develop => database => create realtime database
* in rules set read,write true
* go to overview => add firebase to your web app
* install firebase with npm => yarn add firebase@4.2.0
* add new folder to <rootdir>/src -> firebase
* add firebase.js in folder
* add import * as firebase from 'firebase'; in file (import ALL named exports and add them to the firebase object)
* configure and initialize db by copypasting google code snippets
* add import './firebase/firebase'; to app.js
* test by setting a val 
firebase.database().ref().set({
	name: 'Andrew Mead'
});

* restart server
* go to firabase db console and see the data

## LEcture 143 - Write to DB

* write with set (read with get?)
* id i dont pass something to ref all objects are attached to the root
* set to root overwrites!
* set an attribute passing reference to it

db.ref().set({
	name: 'Andrew Mead',
	age: 26,
	isSingle: false,
	location: {
		city: 'Philadelphia',
		country: 'USA'
	}
});

// db.ref().set('This is my data');

db.ref('age').set(27); // changes only the age
db.ref('location/city').set('New York'); //set a value two levels deep
if i se with reference something that is not existing it is added

## Lecture 144 - ES^ Promises

* Nothing new. Firebase supports promises. no cb wraping

## Lecture 145 - 148 Set,Remove,Update,Get Data

* Set - Write Data:
** ref(someRef).set(data) .can pass complete objects.
** ref().set sets to root
** set(null) erases data

* Remove
** ref(someRef).remove()

* Update
** ref(someRef).update(object). usually object with updates.
** nested objects updates erase other childs.
** targeting specific childs with 'father/child': new value

* All data methods return promises

* We get data by asking with the key or by susbscribing to changes

* we fetch data once with the once method. syntax

// db.ref('job/title')
// 	.once('value')
// 	.then((snapshot)=> {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e)=>{
// 		console.log("error fetching data:",e);
// 	});

* we subscribe unsubscribe with the on/off method. Syntax : 

// const onValueChange = (snapshot) => {
// 	console.log(snapshot.val());
// };

// db.ref().on('value', onValueChange);


// setTimeout(() => {
// 	db.ref('location/country').set('Greece');
// }, 3500);

// setTimeout(() => {
// 	// db.ref().off();
// 	db.ref().off(onValueChange);
// }, 7500);

// setTimeout(() => {
// 	db.ref('location/country').set('USA');
// }, 10500);

## lecture 149-150 - Work with arrays

* Firebase does not support arrays. only objects with object children
* a way to store arrays is using push

db.ref('notes').push({
	title: 'Second Note',
	body: 'This is another note'
});

* a way to retrieve data as arrays is 

db.ref('expenses')
	.on('value', (snapshot) => {
		const expenses = [];
		snapshot.forEach((childSnapshot) => {
			expenses.push({
				id: childSnapshot.key,
				...childSnapshot.val()
			});
		});

		console.log(expenses);
	});

* other functions supported except from 'value' for value changed for subscribing are , child_added, child_removed, child_changed

# Section 15 - Firebase with Redux

## Lecture 152 - Async Reedux Actions

* component calls action generator
action generator return object
component dispatches object
redux store changes

with firebase component calls action generator
action generator returns function
component dispaches function (?)
function runs (has the ability to dispatch other actions and do whatever it wants)

* redux doesn't allow functions. thus we use redux-thunk
* yarn add redux-thunk@2.2.0
* modify configStore to add thunk as redux middleware and add it to the devtools
* export databse object from firebase to use it in actions
* make a function to replace addExpense and refactor

// export const addExpense = (
// 	{
// 		description = '', 
// 		note = '', 
// 		amount = 0, 
// 		createdAt = 0 
// 	} ={}
// ) => ({
// 	type: 'ADD_EXPENSE',
// 	expense: {
// 		id: uuid(),
// 		description,
// 		note,
// 		amount,
// 		createdAt
// 	}
// });

export const addExpense = (expense) => ({
	type: 'ADD_EXPENSE',
	expense
});

export const startAddExpense = (expenseData = {}) => {
	return (dispatch) => {
		const {
			description = '', 
			note = '', 
			amount = 0, 
			createdAt = 0 
		} = expenseData;
		const expense = { description, note, amount, createdAt };
		database.ref('expenses').push(expense).then(() => {
			dirpatch(addExpense(expense));
		});
	};
};

## Lecture 153 - Testing Redux Async Actions

* we use redux-mock-store to create a mockup redux store for testing
* we pass done in params to tell jest this is async  test and wait ot finish
* we use promices and promise chaining
	import configureMockStore from 'redux-mock-store';
	import thunk from 'redux-thunk';
	const createMockStore = configureMockStore([thunk]);
	const store = createMockStore({});
	store.dispatch(startAddExpense(expenseData)).then(() => {
		expect(true).toBe(false);
		done();
	});

## Lecture 155 - Setup Test DB

* use cross-env to set env
* change test script "test": "cross-env NODE_ENV=test jest 
* modify the webpack.config.js file adding the following
	process.env.NODE_ENV = process.env.NODE_ENV || 'development';

	if (process.env.NODE_ENV === 'test') {

	} else if (process.env.NODE_ENV === 'development') {
		
	}
* add .env.test and .env.development files and add the config variables as KEY+VLUE pairs
* install dotenv
* add config in env switch in wepack.config
	if (process.env.NODE_ENV === 'test') {
		require('dotenv').config({ path: '.env.test' });
	} else if (process.env.NODE_ENV === 'development') {
		require('dotenv').config({ path: '.env.development' });
	}
* add a custom plugin to webpack to parse the env variables
		plugins: [
			CSSExtract,
			new webpack.DefinePlugin({
				'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
				'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
				'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
				'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
				'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
				'process.env.FIREBASE_MESSAGIN_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGIN_SENDER_ID)

			})
* import webpack into webpack.config
* replace hardcoded config params with process.env.PARAMS in firebase config object
* add in setupTests.js
import DotEnv from 'dotenv';
DotEnv.config({ path: '.env.test' }); 

## LEcture 157 - Load DB for testing

* before each loads db with test data from fixtures
* as it is async we use done to make sure that setting database is complete before testing
beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = { description, note, amount, createdAt };
	});
	database.ref('expenses').set(expensesData).then(() => done());
});

## Lecture 158 - Fetch Expenses

* we need to load expenses from DB prior to rendering

# Section 16

## Lecture 162 - Add authentication to Expensify APp

* go to expensify firebase db console
* check authentication tab 
* setup sign-up method
* select google set enable
* in firebase.js add:
	const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
	export {firebase, googleAuthProvider, db as default};
* add stab function to test authentication in app.js
	firebase.auth().onAuthStateChange((user) => {
	if(user) {
		console.log('log in');
	} else {
		console.log('log out');
	}
});
* create new action file auth.js to implement auth
	import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin  = () => {
	return () => {
		return firebase.auth().signInWithPopup(googleAuthProvider);
	};
};
* wire up function in Loginpage click action
		
export const LoginPage = ({startLogin}) => (
	<div>
		<button onClick={startLogin}>Login</button>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

## Lecture 164 - Add React Routing outside of a React Component

* react router works with browsing history behind the scenes as it is
  innate to BrowserRouter ReactComponent
* yarn add history@4.7.2
* in AppRouter we switch from BroswerRouter to simple Router React Component to which we can pass a sustom history prop
* the benefit of creating and using a custom history object is that we can export ity to non React component.
* we use history with import createHistory from 'history/createBrowserHistory';
	export const history = createHistory();
	    <Router history={history}>
* first attempt to mplement authentication by hooks in app.js failure.

## Lecture 165 - Auth Reducer

* best way is to add authentication to redux store
* add a reducer for auth actions (login,logut)
* add login, logout actions to set unset uid
* connect reducer to store
* dicpatch login,logout in app.js after importing them
* check correctness in redux dev tools

## Lecture 166 - Set Routes Private

* We use in approuter PrivateRoute instead of Route
* is a wrapper component we create in src/routers folder
* we use extensively object destructuring to extract props we want to pass to the Route compnetn through the PrivateROute.
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ 
	isAuthenticated, 
	component: Component,
	...rest //when destructuring ...rest(orr ...anyrging) contains all the rest that we did not destructure 
}) => (
	<Route {...rest} component={(props)=> (
		isAuthenticated ? (
			<div>
				<Header />
				<Component {...props} />
			</div>
		) : (
			<Redirect to="/" />
		)
	)}/>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);

## Lecture 168 - Private Firebase Data

* need to refactor db like this
	const db = {
	users: {
		uid1: {
			expenses: {
				expid1: {

				},
				expid2: {

				}
			}
		}
	}
};
* in startAddExpense action return database.ref('users/someuid/expenses')
* asybc actions in thunk get apart from dispatch all the getState parameter to get the redus store state. we use this to get uid in sthe startAddExpense function to usi it in the db path
* const uid = getState().auth.uid;
* return database.ref(`users/${uid}/expenses`)
* data are not still private in db,
* in db console rules (docs=>guides=>realtime database=>securityandrules=>secureuserdata=>userid)
	{
  "rules": {
    ".read": false,
    ".write": false,
      "users": {
        "$user_id": {
          ".read": "$user_id === auth.uid",
          ".write": "$user_id === auth.uid"
        }
      }
  }
}
* complete set of firebase validator rules

{
  "rules": {
    ".read": false,
    ".write": false,
      "users": {
        "$user_id": {
          ".read": "$user_id === auth.uid",
          ".write": "$user_id === auth.uid",
          "expenses": {
            "$expense_id": {
              ".validate": "newData.hasChildren(['description', 'note', 'amount', 'createdAt'])",
              "description": {
                ".validate": "newData.isString() && newData.val().length > 0"
              },
              "note": {
                ".validate": "newData.isString()"
              },
              "amount": {
                ".validate": "newData.isNumber()"
              },
              "createdAt": {
                ".validate": "newData.isNumber()"
              },
              "$other": {
                ".validate": false
              }
            }
          },
          "$other": {
            ".validate": false
          }
        }
      }
  }
}

* deploy to heroku
* enable authorization from heroku in firebase
* authenticatio -> sign in method tab -> authorized domain (localhost is default)
* add heroku url to authorized domains

# Section 17 - Styling React

## Lecture 171 - Style Login Page

* add components folder in styles
* add _box-layout.scss file (partial file)
* add boxlayout class in div at Login Page
* add images in public/image folder
* we import partial in styles.scss with @import './components/box-layout'
* .box-layout {
    background: url('/images/bg.jpg');
}
* this creates only a line of image
* solved with 
	    background-size: cover;
    height: 100vh;
    width: 100vw;

## Lecture 172 - Style Buttons

* Refactor Header component
* remove navlinks leave only homepage as Link wrapped around h1

## Lecture 175 - SCSS Inheritance

* use @extend to inherit from another element
	.select {
	@extend .text-input;
	}
* style direct children of an element with > , * means all
	.form {
	display: flex;
	flex-direction: column;
	> * {
		margin-bottom: $m-size;
	}
}

## Lecture 180 - Babel Polyfill

* test the app on different browsers with browserstack.com
* if older browser doesnt suppor ES5 we are in trouble
* we use babel polyfill to fix this
* install it :  yarn add babel-polyfill@6.26.0
* add it to webpack.config by modifying entry
			entry: './src/app.js', =>
			entry: ['babel-polyfill','./src/app.js'],
