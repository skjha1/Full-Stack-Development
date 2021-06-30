2+3
5
alert("hello");
undefined
typeof(123);
"number"
typeof(true)
"boolean"
typeof("SHivendra")
"string"
prompt("Whai is your name")
"shivendra "
var name = "shivendra";
undefined
alert(name)
undefined
var yourname = prompt("What is your name");
var yourname = prompt("What is your name");
var yourname = prompt("What is your name");
undefined
undefined
undefined

function foo() {
let a = b = 0;
a++;
return a;
}
undefined
foo();
typeof a; // => ???
typeof b; // => ???
"number"
foo();

typeof b; // => ???
"number"
typeof a;
"undefined"
let x = 1;
{
let x = 2;
}
console.log(x);
VM208:5 1
undefined
let x = 1;
{
let x = 2;
}
console.log(x);
VM213:5 1
undefined
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
VM219:8 0 1 2 3
