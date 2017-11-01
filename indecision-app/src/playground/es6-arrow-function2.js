// arguments object - no longer bound with arrow function

// const add = function(a,b) {
// 	console.log(arguments); //ok in ES5
// 	return a + b;
// }

// const add = (a,b) => {
// 	console.log(arguments); //not ok in ES6
// 	return a + b;
// }


// console.log(add(55,1));

//this keyword - no longer bound with arrow function

const user = {
	name: 'Andrew',
	cities: ['Phil', 'NY', "London"],

	// if i replace this function with arrow it will brake as this will refer to the global object
	// printPlacesLived: () => {
	// es6 method syntax keeps the this binding logic like es5 functions
	// printPlacesLived: function() {
	printPlacesLived() {
		// console.log(this.name);
		// console.log(this.cities);

		// this.cities.forEach(function(city) {
		// 	console.log(this.name + ' has lived in ' + city); //this is out of scope 'two level nesting'
		// });

		// es5 workaround
		// const that = this;
		// this.cities.forEach(function(city) {
		// 	console.log(that.name + ' has lived in ' + city); //this is out of scope 'two level nesting'
		// });

		// es6 arrow gets its parent scope soo no need for workaround
		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city); //this is out of scope 'two level nesting'
		// });
		
		const cityMessages = this.cities.map((city) => {
			return this.name  + ' has lived in ' + city + '!';
		});
		return cityMessages;
	}
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
	// numbers array of numbers
	// multiplyBy - single number
	numbers: [233, 4545, 555, 2, 55, 86, 10],
	multiplyBy(x) {
		const multipliedNums = this.numbers.map((num) => num * x);
		return multipliedNums;
	}
}

console.log(multiplier.multiplyBy(3));