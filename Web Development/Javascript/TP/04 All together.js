var readlineSync = require('readline-sync');

var userName = readlineSync.question('Give me your name ');
// console.log(userName); // Ctrl + / Cmd + /

var welcomeMessage = "Welcome " + userName; // string concatenation
console.log(welcomeMessage)
