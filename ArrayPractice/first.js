// Minimum And Maximum element in an Array 

let arr = [21,45,65,12,32];
let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
   if (max<arr[i]) {
    max = arr[i];
   }
   if (min>arr[i]) {
    min = arr[i];
   }
    
}

console.log("Greatest Element : ", max);
console.log("Smallest element : ",min);