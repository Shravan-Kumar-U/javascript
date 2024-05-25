const fn = ((addName)=>{
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(addName));
    document.querySelector(".language").appendChild(li);
})
fn("Python");
fn("C++");

//Edit
const nothing = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
newLi.appendChild(document.createTextNode("django"));
nothing.replaceWith(newLi);

//Edit
const js = document.querySelector("li:nth-child(1)");
js.outerHTML="<li>Typescript</li>"

//Edit

const last = document.querySelector("li:last-child");
last.remove();