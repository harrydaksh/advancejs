'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const arr = [1,2,3]
// const[x,,z] = arr;
// console.log(x,z)
// let [first, ,second] =restaurant.categories;

// console.log(first, second);

// const temp= first;
// first = second;
// second = temp;
// console.log(first, second)
/// switching to array element
// [first, second] = [second,first];
// console.log(first, second)

// const[starter , main]= restaurant.order(2,0)
// console.log(starter,main)

// const nested = [1, 2, [5, 6]];

// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i,,[j,k]]=nested;
// console.log(i,j,k)

//////////////////////////////////////////////////////////////destructuring objects
// const {openingHours,name,categories}= restaurant;
// console.log(openingHours,name,categories)

// const {
//   openingHours:hours,
//   name:restaurantName,
//   categories:tags,
// }= restaurant;
// console.log(hours,restaurantName,tags)

// const { fri:{open:o,close:c} } = restaurant.openingHours;
// console.log(o,c);
//////////////////////////////////////////////////////////////////////////////spread operator
// const arr = [7,8,9]
// const badNewArr = [1,2,arr[0],arr[1],arr[2]];
// console.log(badNewArr);

// const newArr = [ 1,2,...arr];
// console.log(newArr);

// const newArray1 = [...restaurant.mainMenu,"gnocci"]
// console.log(newArray1)

// const mergeArray = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(mergeArray)
// const str = 'Harry';
// const letter = [...str,' ','s'];
// console.log(letter)

///////////////////////////difference between rest and spread
//spread, because on right side of = (equal operator)
// const arr = [1,2,...[3,4]];

//rest , because on left side of = (equal operator)
// const [a,b,...others] = [1,2,3,4,5]
// console.log(a,b,others)

// const [pizza, Risotto,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu]
// console.log(pizza,Risotto,otherFood)

// const {sat,...weekday} = restaurant.openingHours
// console.log(weekday)

// const add = function (...numbers) {
//   let sum = 0;
//   // console.log(numbers[3])
//   for(let i=0; i< numbers.length;i++){
//     sum += numbers[i];}
//     console.log(sum)

//   // console.log(numbers);
// };
// add(1, 2);
// add(3, 4, 6);
// add(1, 2, 3, 4, 5, 6);

// restaurant.numGuests =0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests??10;
// console.log(guestsCorrect)

const rest1 = {
  name: 'capri',
  numGuests: 0,
};
const rest2 = {
  name: 'harry',
  lastName: 'daksh',
};

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);
