// console.log("Script selectors loaded");

const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "lightbulb",
    "usb drive",
    "mouse",
    "glasses"
];

// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors

// --------- Using querySelector ---------

function textWriter() {
    for (let val = 0; val < deskArray.length; val++) {
        // console.log(val);
        document.querySelector(`.arrayBox div:nth-child(${val + 2})`).innerHTML = "";
        document.querySelector(`.arrayBox div:nth-child(${val + 1})`).innerHTML = deskArray[val];

        // console.log(deskArray);
    }
}

const deleteItem = () => {
    let text = document.querySelector("#form1 input").value;
    // console.log(text);
    if (text == "") {
        return;
    }

    if (deskArray.indexOf(text) === -1) {
        document.querySelector("#form1 input").value = "";
        return;
    }

    deskArray.splice(deskArray.indexOf(text), 1);
    // console.log(deskArray.indexOf(text));
    // console.log(deskArray);
    document.querySelector("#form1 input").value = "";
    textWriter();
}

textWriter();


// More using querySelector

const arrayBoxLastDiv = document.querySelector(".arrayBox div:last-child");
// console.log(arrayBoxLastDiv);

const arrayBoxFifthDiv = document.querySelector(`.arrayBox div:nth-child(${5})`);
// console.log(arrayBoxFifthDiv);


// --------- Using querySelectorAll ---------

const arrayBoxDivs = document.querySelectorAll(".arrayBox div");
// console.log(arrayBoxDivs);

// can do things like below
// uncomment to see the effect

/*
arrayBoxDivs.forEach((item) => {
    // item.style.backgroundColor = "red";  
    console.log(item);
})
*/

// ------------- Old methods -------------

const eleById = document.getElementById("fifth");
// eleById.style.backgroundColor = "red";

document.getElementsByClassName("form-1")
