
let isPalindrome=function (word){
   const len=word;
  const len2=word.split("").reverse().join("");
 
  console.log(len===len2);
    
  }
//   const start=word.substring(0,Math.floor(len/2)).toLowerCase();
//   const end = word.substring(len - Math.floor(len/2)).toLowerCase();
// console.log(start, end);

isPalindrome("abba");
isPalindrome("racecar");
isPalindrome("robot");
isPalindrome("a");

isPalindrome("ab");


  // Write your algorithm here

//isPalindrome(abba);


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;
