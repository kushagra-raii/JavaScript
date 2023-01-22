let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function (element) {
    console.log(element);
})

let j = 0;
while (j<arr.length) {
    console.log(arr[j]);
    j++;
}
let k =0;
do {
    console.log(arr[k]);
    k = k+1;
} while (k<arr.length);