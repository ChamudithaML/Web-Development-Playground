console.log("Script loaded")

let animals = [
    'lion',
    'elephant',
    'tiger',
    'giraffe',
    'zebra',
    'monkey',
    'hippo',
    'crocodile',
    'penguin',
    'kangaroo'
];

// console.log(animals);

/**
 * --------- Basic array methods ---------
 */

const basicMethods = () => {
    animals[2] = "cat";
    console.log(animals);
    console.log(animals.join(" | "))
    console.log(animals.length);
    animals.push("dog");
    console.log(animals);
    animals.push("panda", "camel");
    console.log(animals);
    animals.unshift("dolphin")
    console.log(animals);
    animals.shift();
    console.log(animals);
    animals.pop();
    console.log(animals);
}

// basicMethods()

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

/**
 * --------- For Each ---------
 */

function forEach1() {
    animals.forEach(function (item) {
        const animals_div = document.querySelector(".animals");
        const para = document.createElement("p");
        para.innerHTML = item;
        animals_div.append(para);
        // console.log(item);
    })
}

const forEach2 = function () {
    animals.forEach((item) => {
        console.log(item);
    })
}

// this is to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const forEach3 = () => {
    animals.forEach((item) => {
        const animalDiv = document.querySelector(".animals");
        let p = document.createElement("p");
        p.innerHTML = item.toLocaleUpperCase();
        p.style.backgroundColor = getRandomColor();
        animalDiv.append(p);
        // console.log(item.toUpperCase());
    })
}

const forEach4 = () => {
    animals.forEach((item, index) => {
        console.log(`item upper: ${item.toUpperCase()} at index ${index}`);
    })
}

forEach3()

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

/**
 * --------- Find ---------
 */

const find1 = () => {
    let longItems = animals.find(function (item) {
        if (item.length >= 5) {
            return item;
        }
    });
    console.log("longItems: " + longItems);
}

const find2 = () => {
    let sixes = animals.find((item) => {
        if (item.length == 6) {
            return item;
        }
    })
    console.log(`sixes: ${sixes}`)
}

// wrong usecase of find. even it gives output, this is wrong
const find3 = () => {
    var string1 = "";
    animals.find(someProcess1)

    function someProcess1(item) {
        string1 = string1 + item + " "
        console.log(string1)
    }
}

// find1();

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

/**
 * --------- FindIndex ---------
 */

const findIndex1 = () => {
    let longItems = animals.findIndex(function (item) {
        if (item.length >= 5) {
            return item;
        }
    });
    console.log("longItems:", longItems);
}

// findIndex1();

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

/**
 * --------- For loops for arrays ---------
 */

const addAnimalsToPage = function () {
    const ul = document.createElement("ul");
    ul.classList.add("animal-li");
    ul.classList.add("animals-ul");

    for (let i = 0; i < (animals.length) / 2; i++) {
        const li = document.createElement("li");
        li.innerHTML = animals[i];
        ul.append(li);
    }

    const animalsNew = animals.slice((animals.length) / 2, animals.length);

    for (const i of animalsNew) {
        const li = document.createElement("li");
        li.innerHTML = i;
        ul.append(li);
    }

    document.querySelector(".animals").append(ul);

}

// addAnimalsToPage()

/**
 * Extra: calculating the width of ul box
 * taking width of longest item
 * below is two attempts and second one worked
 */

// --------------- first attempt ---------------

// window.onload = function() {
//     const animalsDiv = document.querySelector('.animals');
//     const listItems = animalsDiv.querySelectorAll('li');
//     let maxWidth = 0;

//     listItems.forEach((item) => {
//         // Get the start and end positions of the item
//         const start = item.getBoundingClientRect().left;
//         const end = item.getBoundingClientRect().right;

//         // Calculate the width
//         const itemWidth = end - start;

//         // Update maxWidth if the current item is wider
//         if (itemWidth > maxWidth) {
//             maxWidth = itemWidth;
//         }
//     });

//     console.log(maxWidth);
//     // Set the width of the parent div
//     animalsDiv.style.width = maxWidth + 'px';
// };

// --------------- second attempt ---------------

// window.onload = function() {
//     const animalsUl = document.querySelector('.animals-ul');
//     const listItems = animalsUl.querySelectorAll('li');
//     let maxWidth = 0;

//     listItems.forEach(item => {
//         // Create a temporary span element to measure the text width
//         const span = document.createElement('span');
//         span.style.visibility = 'hidden';
//         span.style.position = 'absolute';
//         span.style.whiteSpace = 'nowrap';
//         span.textContent = item.textContent;

//         document.body.appendChild(span);
//         const itemWidth = span.getBoundingClientRect().width;
//         document.body.removeChild(span);

//         // Update maxWidth if the current item is wider
//         if (itemWidth > maxWidth) {
//             maxWidth = itemWidth;
//         }
//     });

//     // Set the width of the parent div
//     animalsUl.style.width = maxWidth + 'px';
// };

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

/**
 * --------- For in for objects ---------
 */

const nestedObjects = {
    item01: {
        name: "chama",
        type: "pro",
        weight: 30,
    },
    item02: {
        name: "headlamp",
        type: "equipment",
        weight: 120,
    },
    item03: {
        name: "pen",
        type: "tool",
        weight: 30,
    },
    item04: {
        name: "pencil",
        type: "tool",
        weight: 30,
    },
    item05: {
        name: "eraser",
        type: "tool",
        weight: 40,
    },
    item03: {
        name: "water bottle",
        type: "equipment",
        weight: 1300,
    },
};

const objectAccess = () => {
    const ul2 = document.createElement("ul");

    for (const singleObject in nestedObjects) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `Name: ${nestedObjects[singleObject].name}`;
        ul2.append(listItem);
        // ul2.style.listStyleType="none"
        ul2.style.cssText = "list-style-type: none; padding: 0px;"
    }

    const objItems = document.querySelector(".object-items");

    objItems.style.padding = "0px"
    objItems.append(ul2);
    // console.log(ul2.style)
}

objectAccess();

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------


/**
 * --------- Using maps to arrays ---------
 */

const carBrands = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Hyundai"];

const mapUsage = () => {
    const carDiv = document.querySelector(".car-brands");
    const ul3 = document.createElement("ul");
    ul3.style.cssText = "list-style-type: none; padding: 0; margin: 0;";

    const carBrandsLi = carBrands.map((item) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = item;
        return listItem;
    })

    carBrandsLi.forEach((item) => {
        ul3.append(item);
    })

    carDiv.append(ul3);

    // console.log(carBrandsLi);

}

mapUsage();

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

/**
 * --------- Using splice to arrays ---------
 */
