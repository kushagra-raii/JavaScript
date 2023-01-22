// bubble sort array

let num = [2,1,3,5,4];
for (let i = 0; i < num.length; i++) {
    for(let j = 0;j < num.length - i - 1; j++){
        if (num[j] > num[j + 1])
        {
           let temp = num[j];
           num[j] = num[j + 1];
           num[j + 1] = temp;
        }
    }
}
console.log(num);
