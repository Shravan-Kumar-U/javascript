let arr = [6,1,2,3,4,5,7,8];
let n = arr.reduce((h,w)=>{
    return h+w;
})
console.log(n)
// Elli ondu ondu index add aagikondu hogtade i.e(6+1,7+2,11+3)edhe thara last ge array alli erva full element na sum sigthade


let arrone = [1,2,3,4];
let mul = arrone.reduce((i,j)=>{
    return i*j;
})
console.log(mul);

// To find the largest number in the given array using reduce method.

let large = [1,2,3,4,5,6,7,8,9,14,46];
let y = large.reduce((one,two)=>{
    return one>two?one:two;

})
console.log("largest number in the array is"+y);

// To find the smallest number in the given array using reduce method.

let low =[0,1,2,3,4];
let l = low.reduce((m,n)=>{
    return m<n?m:n;
})
console.log(l);