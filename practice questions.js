
// 1. Filter even numbers from an array
function even(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result.push(arr[i]); 
    }
  }
  return result;
}
console.log("1. Even Numbers:", even([10,3,2,14,4,9,8,11,20])); 



// 2. Return first and last item in an array
function firstandlast(arr) {
  if (arr.length == 0) {
    return [];
  }
  let firstItem = arr[0];
  let lastItem = arr[arr.length - 1];
  return [firstItem, lastItem];
}
console.log("2. First and Last:", firstandlast(["Trishia", "Joy", "Kobumanzi"])); 



// 3. Find total age of all users
function TotalAge(usersArray) {
  let total = 0;
  for (let i = 0; i < usersArray.length; i++) {
    total = total + usersArray[i].age; 
  }
  return total;
}
const usersList = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
console.log("3. Total Age:", TotalAge(usersList)); 




// 4. Find a specific item in an array
function finditem(arr, targetValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == targetValue) {
      return arr[i]; 
    }
  }
  return missing; 
}
const items = ["gold", "silver", "bronze"];
console.log("4. Find Item (Found):", finditem(items, "silver")); 



// 5. Reverse an array
function reversethearray(arr) {
  let reversedResult = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedResult.push(arr[i]);
  }
  return reversedResult;
}
console.log("5. Reversed Array:", reversethearray([1, 2, 3, 4])); 



// 6. Check if a number is even
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("6. Is 4 even?:", isEven(4)); 
console.log("6. Is 7 even?:", isEven(7)); 