
const content2 = `My name is Chamuditha`

const pEle2 = document.createElement("p");
const mainEle2 = document.querySelector("main");

pEle2.innerHTML = content2;

mainEle2.appendChild(pEle2);
