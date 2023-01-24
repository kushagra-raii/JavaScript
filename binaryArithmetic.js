function binaryToDecimal(binary) {
    let mul =1;
    let ans = 0;
    let newno;
  while (binary!=0) {
    newno = binary%10;
    binary = Math.floor(binary / 10);
    ans = ans + (newno * mul);
    mul*=2;
  } 
  return ans; 
}



function decimalToBinary(decimal) {
    let mul =1;
    let ans = 0;
    let newno;
  while (decimal!=0) {
    newno = decimal%2;
    decimal = Math.floor(decimal/2); 
    ans = ans + (newno * mul);
    mul*=10;
  } 
  return ans; 
}

// binary1 = 11001 // binary entry
// binary2 = 101 // binary entry

binary1 = prompt("Binary 1"); // binary entry
binary2 = prompt("Binary 2"); // binary entry

// binary to decimal
let decimal1 = binaryToDecimal(binary1);
let decimal2 = binaryToDecimal(binary2);

console.log("decimal 1 = ",decimal1,"decimal 2",decimal2);

let sum = decimal1 + decimal2;
let sub = decimal1 - decimal2;
let div = decimal1 / decimal2;
let mul = decimal1 * decimal2;

let sumInBinary = decimalToBinary(sum);
let subInBinary = decimalToBinary(sub);
let divInBinary = decimalToBinary(div);
let mulInBinary = decimalToBinary(mul);

console.log("Sum = ",sumInBinary);
console.log("Sub = ",subInBinary);
console.log("Div = ",divInBinary);
console.log("Mul = ",mulInBinary);

document.write("Sum = ",sumInBinary ,"")
document.write("Sub = ",subInBinary ,"")
document.write("Div = ",divInBinary ,"")
document.write("Mul = ",mulInBinary ,"")
