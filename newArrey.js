let n = prompt("Enter the number of element you want to enter in a array");
    n = Number.parseInt(n);
let arr=[]

for(i=1;i<=n;i++){
     arr[i-1] = i;
}   
console.log(arr);
let sum = arr.reduce((e,f)=>{
    return e+f;
})
console.log(sum);
let s = arr.reduce((e,f)=>{
    return e*f;
})
console.log(s);