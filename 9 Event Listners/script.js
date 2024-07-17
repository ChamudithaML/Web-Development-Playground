console.log("Loaded script")

const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");

const textBox = document.querySelector("p");

const cat = `Cats are beloved pets known for their playful and
                independent nature. They are skilled hunters, often 
                chasing toys and small creatures. With their graceful
                movements and expressive eyes, cats provide companionship
                and comfort. Their purring and soft fur make
                them delightful additions to any home`

const dog = "Dogs are loyal companions known for their affectionate \
nature and diverse breeds. They excel as family pets and working animals,\
offering companionship, protection, and assistance. With their playful\
demeanor and trainable abilities, dogs enrich lives through their\
unconditional love and varied roles in human society"

const rabbit = "Rabbits are gentle herbivores valued as pets for \
their docile temperament and adorable features. Known for their \
agility and social behaviors, rabbits thrive in safe environments \
where they enjoy hopping, exploring, and socializing. They captivate \
with their soft fur, expressive eyes, and endearing habits like twitching \
noses and playful leaps"

function myFunc1() {
    box1.classList.toggle("red");
    textBox.innerHTML = cat;
    textBox.style.backgroundColor = "rgb(237, 49, 49)"
}

function myFunc2() {
    box2.classList.toggle("yellow");
    textBox.innerText = dog;
    textBox.style.backgroundColor = "rgb(199, 170, 42)"
}

function myFunc3() {
    box3.classList.toggle("pink");
    textBox.innerText = rabbit;
    textBox.style.backgroundColor = "pink"
}

box1.addEventListener("click", myFunc1);
box2.addEventListener("mouseenter", myFunc2);
box3.addEventListener("mouseleave", myFunc3);



// -------------- Mouse Location --------------

let posX = document.querySelector(".mouse-loc p:nth-child(1)");
let posY = document.querySelector(".mouse-loc p:nth-child(2)");

// console.log(posY);

const mousePosition = (event) => {
    posX.innerText = "Axis X : " + event.pageX;
    posY.innerText = "Axis Y : " + event.pageY;

    // event is automatically passed by the addEventListener
    // by console logging, it will show all the things like pageX, PageY
    // also there is attribute called path and it will show how the event is trigerred 

    // console.log(event);
};


/**
 * added event listner to window
 * event is mousemove
 * mousePosition is callback function
 * false is not necessary to provide
 */
window.addEventListener("mousemove", mousePosition, false);


// -------------- More --------------

const grid1 = document.querySelector("#grid-1");
const grid2 = document.querySelector("#grid-2");
const grid3 = document.querySelector("#grid-3");
const grid4 = document.querySelector("#grid-4");
const grid5 = document.querySelector("#grid-5");
const grid6 = document.querySelector("#grid-6");
const grid7 = document.querySelector("#grid-7");
const grid8 = document.querySelector("#grid-8");
const grid9 = document.querySelector("#grid-9");

// adding arrow function
// also know that arrow function doesn't work with this. it will give error
grid1.addEventListener("mouseover", (event) => {
    console.log(event);
    this.classList.toggle("pink");
});

// this keyword works with classic function declaration
grid2.addEventListener("mouseover", function (event) {
    console.log(event);
    this.classList.toggle("pink");
});


// -------- accessing object attributes directly using {} --------
import objArr from "./objects.js";

const modifyGrid3 = () => {
    let outId = 1;

    // find is not returning if explicitly not returned
    let foundObj = objArr.find(({ id }) => {
       return id === outId;
    });

    // no need return when written without curly braces. 
    let foundObj2 = objArr.find(({ id }) => id === outId);

    grid3.innerText = foundObj2.name;
}

grid3.addEventListener("click", modifyGrid3);

// -------- passing parameters to callback funtion --------

let myArg = "Passed arg"

// callback function with parameter
const modifyGrid4 = (myArg) => {
    grid4.classList.toggle("orange");

    if(grid4.innerText == myArg){
        grid4.innerText="";
    }else{
        grid4.innerText = myArg;
    }    
}

// passing parameter
grid4.addEventListener("click", () => {
    modifyGrid4(myArg);
});

// callback function with parameter event. event can also be used
const modifyGrid5 = (event, myArg) => {
    grid5.classList.toggle("purple");

    if(grid5.innerText == myArg){
        grid5.innerText="";
    }else{
        grid5.innerText = myArg;
    }

    console.log(event);
}

// passing parameter event and custom arg
grid5.addEventListener("click", () => {
    modifyGrid5(event, myArg);
});

