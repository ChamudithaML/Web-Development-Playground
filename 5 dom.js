console.log("this is 5 dom")

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

function myFunc1(){
    box1.classList.toggle("red");
    textBox.innerHTML = cat;
    textBox.style.backgroundColor="rgb(237, 49, 49)"
}

function myFunc2(){
    box2.classList.toggle("yellow");
    textBox.innerText = dog;
    textBox.style.backgroundColor="rgb(199, 170, 42)"
}

function myFunc3(){
    box3.classList.toggle("pink");
    textBox.innerText = rabbit;
    textBox.style.backgroundColor="pink"
}

box1.addEventListener("click",myFunc1);
box2.addEventListener("mouseenter",myFunc2);
box3.addEventListener("mouseleave",myFunc3);

