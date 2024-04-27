let arr = [3,4,5,6,8,9];
let a;
do{
    a = prompt("Enter a number");
    a = Number.parseInt(a);// To change the data type of the user entered number (string) to number
    arr.push(a);
}while(a != 0);
console.log(arr);
