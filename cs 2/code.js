//1 - Sum Zero 

function addToZero (arr){
    let result = false
    
      for(let i = 0; i<arr.length; i++){
          for(let j =arr.length; j>-1; j--){
             if (arr[i] + arr[j] === 0){
              result = true
             }
          }
        
      }  
    console.log(result)
  }

//   Time complexity: O(n^2)
// space complexity: O(n)
    addToZero([1]);
// // -> False

// 2) Unique Characters
function hasUniqueChars(str){
    let uniqueChars = new Set([]);
    for (let i =0; i < str.length; i++){
        uniqueChars.add(str[i]);
    }
    return uniqueChars.size === str.length;
}
// For example:
hasUniqueChars("Monday");
// -> True
hasUniqueChars("Moonday");
// -> False
console.log(hasUniqueChars('Monday'));
console.log(hasUniqueChars('Moonday'));
// The space complexity is 0(n) 
//The solution runtime is 0(n)

// Problem 3
// runtime 0(n)
// space complexity O(n)
const pangram = (string) => new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;
console.log(pangram("The quick brown fox jumps over the lazy dog!"))

// Problem 4
// space complexity 
function findLongestWord(arr) {
    let longWordLength = 0
    for(let i=0; i< arr.length; i++) {
        if(arr[i].length > longWordLength) {
            longWordLength = arr[i].length
        }
    }
    return longWordLength
}

console.log(findLongestWord(["zoo", "kangaroo"]))