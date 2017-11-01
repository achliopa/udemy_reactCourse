// var nameVar = 'Andrew';
// var nameVar = 'Mike';
// console.log('nameVar', nameVar);

// let nameLet = 'Jen';
// let nameLet = 'Julie';
// console.log('nameLet', nameLet);

// const nameConst = 'Frank';
// nameConst = 'Bob';
// console.log('nameConst', nameConst);

function getPetName() {
	var petName = 'Stark'; //same for let,const
	return petName;
}

// Undefined
// getPetName();
// console.log(petName);

var petName = getPetName();
console.log(petName);

//block scoping

var fullName = 'Andrew Mead';

if(fullName) {
	var firstName = fullName.split(' ')[0]; //let,const are block scoped
	console.log(firstName);
}

console.log(firstName);