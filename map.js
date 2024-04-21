//MAP FUNCTION-> Create a new array by performing some operations on each array element
// Note!!Comparing to for each map creats new array

let arr = [25,65,29];
// arr.map(value,index,array)
let a =arr.map((vale,index,arr)=>{
    console.log(vale,index,arr);
    return vale+index;
    
})
console.log(a);