var readlinesync = require('readline-sync');

// input
var yourage= readlinesync.question("Am I older than 20? ");

console.log("You entered "+ yourage)


// processing
if (yourage==='yes')
{
  // output
  console.log('You are right');
}
else 
{
   // output
  console.log('You are wrong')
}

