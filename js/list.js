
console.log("Skriv dit Javascript her")

// Dette returnere kun et element.
let a = document.getElementById("one");
console.log(a);

let tagName = document.getElementsByTagName("li");
console.log(tagName);



let newLiElement = document.createElement("li")
newLiElement.setAttribute("class", "hot")
let newTextElement = document.createTextNode("Apple")
newLiElement.appendChild(newTextElement)
document.getElementById("firstul").append(newLiElement)

let myClass = document.getElementByClassName("hot")
console.log(myClass)

console.log("slut på JavaScript")
