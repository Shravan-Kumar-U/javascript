// TYPES OF CONSOLES....

console.log(console);   
console.error("Hey this is an error"); // to show the error
console.assert(5<6) // not throw any error
console.assert(5>6) //In console it will show error
// console.clear() is used to clear the console
const obj = {
    a:1,
    b:2,
    c:3
};
console.table(obj);//console.table is used to create a table in console
console.warn("Hey dont betray your parents..!!!") // to show the warning in the console
console.info("This is place that i call home")
console.time("bgmi")
console.timeEnd("bgmi") //to caclulate the time diration between the console.time to console.timeEnd
//Q. To check the time duration between for and while loop
console.time("For")
for(let i=0;i<=5;i++){
    console.log(123);
}
console.timeEnd("For");
console.time("While")
let i=0;
while(i<=5){
    console.log(123);
    i++;
}
console.timeEnd("While");