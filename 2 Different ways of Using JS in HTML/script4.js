
import mySelf from "./script3.js";

const mySelfContent = 
`name: ${mySelf.name}
age: ${mySelf.age}`;

const mySelfDiv = document.getElementById("mySelf");

mySelfDiv.innerText = mySelfContent;