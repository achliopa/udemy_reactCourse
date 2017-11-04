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