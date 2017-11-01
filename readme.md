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