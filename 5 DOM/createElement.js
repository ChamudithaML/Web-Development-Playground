console.log("Script createElement loaded");

const myContent = "<p>This is paragraph</p>"

const newDiv = document.createElement("div");  // to create new element on the document
newDiv.classList.add("new-div");
newDiv.setAttribute("id", "new-div1");
newDiv.innerHTML = myContent;

const outerDiv = document.querySelector(".outer-div");
outerDiv.append(newDiv);


//  appendChild :- this will also return the appended element. so it can easily modified if needed

/*
Other methods
prepend
insertBefore
insertAdjacentElement() :- can use to put element to exact location. read for more
replaceChild
*/


// https://developer.mozilla.org/en-US/docs/Web/API/Element/append
