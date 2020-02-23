// challenge: create a function that takes a string and returns a string with 
// its letters in alphabetical order using spread operator


function alphaOrder (str){
// split string into an array with spread operator
//   var strToArr = [...str];
// // sort the letters in the array
//   var strToSort = strToArr.sort();
// // join the array back into a string
//   var finalStr= strToSort.join('');
// // return alphabetized array
//   return finalStr;  
// all in one step
  return [...str].sort().join('');
}

console.log(alphaOrder('hello'));
console.log(alphaOrder('goodbye'));