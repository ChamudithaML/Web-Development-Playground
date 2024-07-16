console.log("Script modifying loaded");


// Modifying Classes

document.querySelector("h1").className = "new-class"

document.querySelector("h1").classList
document.querySelector("h1").classList.add("new-class")
document.querySelector("h1").classList.remove("new-class")
document.querySelector("h1").classList.toggle("new-class")
document.querySelector("h1").classList.replace("old-class","new-class")



// Modifying Attributes

document.querySelector("img").attributes  // selecting attributes of element


document.querySelector("img").hasAttribute("src")  // returns true or false
document.querySelector("img").getAttribute("alt")  // getting an attribute value
document.querySelector("img").setAttribute("alt", "cat image") // adding value to attribute
document.querySelector("img").setAttribute("newAttribute","value for it") // adding new attribute
document.querySelector("img").removeAttribute("attributeToRemove")  // remove attribute 


// Modifying inline Styles

document.querySelector(".site-title").style    // select style property

document.querySelector(".site-title").style.color    // gets the color
document.querySelector(".site-title").style.color = "newColor"   // sets new color
document.querySelector(".site-title").style.backgroundColor = "newColor"   // sets background new color

document.querySelector(".site-title").style.cssText  // this cssText holds all styles in string format
document.querySelector(".site-title").style.cssText="color:rebeccapurple; background-color: pink;"   // can change styles like this too


