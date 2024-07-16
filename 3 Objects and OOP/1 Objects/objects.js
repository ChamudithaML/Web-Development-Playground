console.log("Script loaded")

// Object creation
const mySelf = {
    name:"chama",
    age:55,
    height:6,
    gender:"Male",
    school:"RC",
    country:"Sri Lanka",

    changeName: function(name){
        this.name = name;
    },

    changeAge: function(age){
        this.age=age;
    },

    // method can written like this. but its hard to understand. so its better to write with function keyword
    changeCountry(country){
        this.country = country;
    }
}

// This is not related. just for demonstration
const objectContent = 
`<p>Name: ${mySelf.name}</p>
<p>Age: ${mySelf.age}</p>
<p>Height: ${mySelf.height}</p>
<p>School: ${mySelf.school}</p>`

const newDiv = document.createElement("div");
const btn1 = document.querySelector("#btn1");
let myBool = true;

const populate = () => {
    if(myBool){
        newDiv.innerHTML = objectContent;
    }else{
        newDiv.innerHTML ="";
    }

    myBool = !myBool;
    const parentDiv = document.querySelector(".object-content");
    parentDiv.appendChild(newDiv);
}

btn1.addEventListener("click",populate);

// Accessing object items

// Using Dot notation
console.log("------ Dot Notation ---------")
console.log("My age: "+mySelf.age);
console.log(`My height: ${mySelf.height}`);
console.log("My school:",mySelf.school);

// Using Bracket notation
console.log("------ Bracket Notation ---------")
console.log("My age: "+mySelf["age"]);
console.log(`My height: ${mySelf["height"]}`);
console.log("My school:",mySelf["school"]);

