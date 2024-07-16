
const content = `My name is Chamuditha`

const pEle = document.createElement("p");
const mainEle = document.querySelector("main");

pEle.innerHTML = content;

mainEle.appendChild(pEle);