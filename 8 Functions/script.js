console.log("Script loaded")

// classic function
function changeCol() {
    let box5 = document.querySelector("table .five");
    // console.log(box1.innerHTML)
    let k = parseInt(box5.innerHTML);
    k = ++k;
    // console.log(k)
    box5.innerHTML = k;
}

// Arrow function
const changeBgCol7 = () => {
    let box7 = document.querySelector("table .seven");
    box7.style.backgroundColor = "blue";

    //  ---- try below as well ------
    // box7.classList.toggle("myBlue");
    // console.log(document.querySelector("table"))
}


const changeBgCol9 = () => {
    let box9 = document.querySelector("table .last");
    box9.style.backgroundColor = "blue";
}

// Function expression
const remCol9 = function () {
    let box7 = document.querySelector("table .last");
    // box7.className="";
    box7.style.backgroundColor = "";
}

document.getElementById("bt1").addEventListener("click", changeCol);
document.querySelector("table .five").addEventListener("click", changeCol);
document.querySelector("table .seven").addEventListener("click", changeBgCol7);
document.querySelector("table .last").addEventListener("mouseover", changeBgCol9);
document.querySelector("table .last").addEventListener("mouseleave", remCol9);

// document.getElementById("btn1").style.backgroundColor="blue"

// immediately invoked functions
// this function will run without calling
(function(){
    let imVar1 = 1;
    imVar1++;
    console.log("Immediate function out: "+imVar1);
})();

// ---------- if condtions ----------

const ifDemo = (value) => {

    if(value>5){
        console.log("Great");
    }else{
        console.log("Not Great");
    }

    // above if condition can be written as below
    // these are called ternary operators

    console.log(value>5? "Great 2":"Not Great 2");

}

// ifDemo(3);

// ------------------------------------------------------------------------------------

/**
 * Method is to set row color to odd numbers
 */
const changeRowBackground = () => {
    const rows = document.querySelectorAll("table tr");

    let counter = 0;
    rows.forEach((row) => {
        
        if (counter % 2 == 0){
            row.style.backgroundColor = "#E0FFFF";
        }else{
            row.style.backgroundColor = "rgb(250, 249, 246)"
        }
        counter++;
    })
}

// changeRowBackground();


// ------------------------------------------------------------------------------------
