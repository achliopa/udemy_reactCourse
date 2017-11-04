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
* So setState method is a React Component Calss method that gets the state object as parameter and returns it modified for the rendered
  and for the next setState call. state is a Component Class attribute.
