/** product: calculate the product of an array of numbers. */

function product(nums, idx =0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}
console.log(product([2, 3, 4])); // 24

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx =0, bigWord = 0) {
  if (idx === words.length) return bigWord;
  bigWord = Math.max(words[idx].length, bigWord);
  return longest(words, idx + 1, bigWord);
}
console.log(longest(["hello", "hi", "hola"])); // 5

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}
console.log(everyOther("hello")); // hlo

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("tacodog")); // false

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}
let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "cat")); // 1
console.log(findIndex(animals, "porcupine")); // -1


/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}
console.log(revString("porcupine")); // enipucrop

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}
let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};
console.log(gatherStrings(nestedObj)); // (4) ['Lester', 'Testowitz', 'you made it!', 'nice!']

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}
console.log(binarySearch([1,2,3,4],1)); // 0
console.log(binarySearch([1,2,3,4],3)); // 2
console.log(binarySearch([1,2,3,4],5)); // -1

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
