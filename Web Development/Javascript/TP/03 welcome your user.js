var readlinesync= require('readline-sync');
var username= readlinesync.question('May I have your name please ? ');
console.log(username);

var welcomemessage= "Welcome " + username + " We are very happy to have you here";
console.log(welcomemessage);
