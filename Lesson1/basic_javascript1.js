/**
 * Created by James Yeates on 9/24/15.
 *
 * This script was created to give me an outline of a lesson plan
 * for the first course in intro to javascript
 *
 * This can also be found at https://repl.it/BKbW/3
 */

// Intro to Programming using JavaScript


//console.log logs a message to the console... The thing over here ----->
console.log("Hello World!");

//console.log(hello);//ERROR hello is not defined!!!

//ok lets define it using the 'var' keyword
var hello;

//know we can log the variable hello, which stores the value undefined
console.log(hello);

//Ok lets 'assign' hello a value
hello = "hello";

console.log(hello);

//think of a variable as box.  A box that has a name and stores a value
//in this case our variable name is hello and it stores the string "hello".
//More on Strings later.

//Numbers and Math

//computers are really good at Math
console.log(2*3*45/3.342 -0.342*3423/23423+324);

//however they are not perfect
console.log(0.1 +0.2);//What??????

//And they do have some limits
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE * 1.000001);

console.log(Number.MAX_SAFE_INTEGER );
console.log(9007199254740991 +10);//Wrong

// basic operations + - *(multiplication) /(division)

console.log(1+1);
console.log(1-1);
console.log(2*2);
console.log(4/2);

//modulo - returns the reminder of division
console.log(5%2);

//There are many more math operations that you can do with the Math object
//http://www.w3schools.com/js/js_math.asp

// Strings - a sequence of characters surronded by quotes
"I am a string";


//Strings are a special 'Object' in JavaScript and have lots of predifinded
//methods and properties that we can access with dot notation

//lets create a variable and assign it a string
var myString = "I am string";

//just to prove that it is actually a string
console.log(typeof myString);

//dot notation looks like this we see this with console.log() as well)
console.log(myString.length);

//lets print it put it out in Upper Case.
//Notice how the .toUpperCase() has paranthesis. This lets you know it
//is a method
console.log(myString.toUpperCase());

//Note calling the method .toUpperCase() 'returns' a brand new String
//that is uppercase but does not change the actual value of myString
console.log(myString);

//If we want to change the value of myString to the 'returned' value of
//myString.toUpperCase() we need to do another assignement
myString = myString.toUpperCase();
console.log(myString);

//String Object
//http://www.w3schools.com/js/js_string_methods.asp
