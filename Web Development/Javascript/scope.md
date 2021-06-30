Overview
● Scope determines the accessibility (visibility). A scope in JavaScript
defines what variables you have access to. There are two kinds of scope –
global scope and local scope.

Purpose
● JavaScript has a feature called Scope. Though the concept of scope is
not that easy to understand for many new developers, Understanding
scope will make the code stand out, reduce errors and help make
powerful design patterns with it.

Concept Details
Scope defines where variables and functions are accessible inside of your
program.
1. Global Scope - There's only one Global scope in the javaScript document.
The area outside all the functions is considered the global scope and the
variables defined inside the global scope can be accessed and altered in
any other scopes.
Example:
//global scope
var fruit = 'apple'
console.log(fruit); //apple
function getFruit(){
console.log(fruit); //fruit is accessible here
}
getFruit(); //apple

© 2006-2020 HighRadius Corporation | Confidential and Proprietary

2. Local Scope
Variables declared inside the functions become Local to the function and
are considered in the corresponding local scope. Every Functions has its
own scope. Same variable can be used in different functions because
they are bound to the respective functions and are not mutually visible.
Example:
//global scope
function foo1(){
//local scope 1
function foo2(){
//local scope 2
}
}
//global scope
function foo3(){
//local scope 3
}
//global scope
Local scope can be divided into function scope and block scope. The
concept of block scope is introduced in ECMAscript 6 (ES6) together with
the new ways to declare variables -- const and let.
A. Function Scope
Whenever a variable is declared in a function, the variable is visible
only within the function. It can't be accessed outside the function.
var is the keyword to define variables for a function-scope
accessibility.
Example:
function foo(){
var fruit ='apple';
console.log('inside function: ',fruit);
}

© 2006-2020 HighRadius Corporation | Confidential and Proprietary

foo(); //inside function: apple
console.log(fruit); //error: fruit is not defined

B. Block Scope
A block scope is the area within if, switch conditions or for and while
loops. In ES6, const and let keywords allow developers to declare
variables in the block scope, which means those variables exist only
within the corresponding block.
Example:
function foo(){
if(true){
var fruit1 = 'apple'; //exist in function scope
const fruit2 = 'banana'; //exist in block scope
let fruit3 = 'strawberry'; //exist in block scope
}
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
}
foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined

3. Lexical Scope
Another point to mention is the lexical scope. Lexical scope means the
children scope has access to the variables defined in the parent scope.
The children functions are lexically bound to the execution context of their
parents.

© 2006-2020 HighRadius Corporation | Confidential and Proprietary

In simple words , it means that a variable defined outside a function can
be accessible inside another function defined after the variable
declaration.But the opposite is not true; the variables defined inside a
function will not be accessible outside that function.

Example:

function foo1(){
var fruit1 = 'apple';
const fruit2 = 'banana';
let fruit3 = 'strawberry';
function foo2(){
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
}
foo2();
}
foo1();
//result:
//apple
//banana
//strawberry

Hands-on
Practice questions:
1. What will be the typeof a and typeof b;
function foo() {
let a = b = 0;
a++;
return a;
}

© 2006-2020 HighRadius Corporation | Confidential and Proprietary

foo();
typeof a; // => ???
typeof b; // => ???
2. Output in this case will be?
let x = 1;
{
let x = 2;
}
console.log(x);
3. Output for this code will be?
let x0 = 0;
(function autorun1(){
let x1 = 1;
(function autorun2(){
let x2 = 2;
(function autorun3(){
let x3 = 3;
console.log(x0 + " " + x1 + " " + x2 + " " + x3);
})();
})();
})();
