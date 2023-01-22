// Search a number in an Array (Linear Search)

let a = 17;
let b;
let arr = [12,15,18,22,27]
for (let i = 0; i < arr.length; i++) {
    if (a == arr[i]) {
        console.log("Number found");
        b = 1;
        break;
    }  
}
if (b!=1) {
   console.log("Not Found"); 
}