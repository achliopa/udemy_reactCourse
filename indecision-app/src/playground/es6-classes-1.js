
 // Car 
 //  - make
 //  - model
 //  - vin
 //  - getDescription() 

 class Person {
 	//parameter defaults
 	constructor(name = 'Anonymous', age = 0) {
 		this.name = name;
 		this.age = age;
 	}
 	getGreeting() {
 		return `Hi I am ${this.name}!`;
 	}
 	getDescription() {
 		return `${this.name} is ${this.age} year(s) old.`;
 	}
 }

 // Subclass

 class Student extends Person {
 	constructor(name, age, major) {
 		super(name,age); // we call the parent contructor
 		this.major = major;
 	}
 	hasMajor() {
 		return !!this.major;
 	}
 	getDescription() {
 		let description = super.getDescription();

 		if(this.hasMajor()) {
 			description += ` Their major is ${this.major}.`;
 		}

 		return description;
 	}
 }

 class Traveler extends Person {
 	constructor(name, age, homeLocation) {
 		super(name,age);
 		this.homeLocation = homeLocation;
 	}
 	getGreeting() {
 		let greeting = super.getGreeting();

 		if(this.homeLocation) {
 			greeting += ` I'm visiting from ${this.homeLocation}.`;
 		}
 		return greeting;
 	}
 }

// const me = new Student('Andrew Mead', 26, 'Computer Science');
// console.log(me);
// console.log(me.getGreeting());
// console.log(me.getDescription());
// console.log(me.hasMajor());

// const other = new Student();
// console.log(other.getGreeting());
// console.log(other.getDescription());
// console.log(other.hasMajor());

const me = new Traveler('Andrew Mead', 26, 'New York');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());