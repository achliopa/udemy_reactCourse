console.log('person.js is running');

// const isAdult = (age) => age>=18;
// const canDrink = (age) => age>=17;

// export { isAdult, canDrink };

export const isAdult = (age) => age>=18;
export const canDrink = (age) => age>=17;

export default (age) => age>=65;