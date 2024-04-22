// Types of loops

let arr =[35,658,36,7,37,4,3,388];
for(i of arr){
    console.log(i);
}
for(i in arr){
    console.log(arr[i]);
}
// For each loop \

// To access the each element in the arrey
arr.forEach((element)=>{
    console.log(element**2);
})

// Arrey.from is used to create an arery from any other object
let nam="itachi";
let a = Array.from(nam);
console.log(a);