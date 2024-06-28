
console.log("this is js 1")

function changeCol() {
    let box5 = document.querySelector("table .five");
    // console.log(box1.innerHTML)
    let k = parseInt(box5.innerHTML);
    k = ++k;
    // console.log(k)
    box5.innerHTML = k;
}

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

const remCol9 = function () {
    let box7 = document.querySelector("table .last");
    // box7.className="";
    box7.style.backgroundColor = "";
}

document.getElementById("bt1").addEventListener("click", changeCol)
document.querySelector("table .five").addEventListener("click", changeCol)
document.querySelector("table .seven").addEventListener("click", changeBgCol7)
document.querySelector("table .last").addEventListener("mouseover", changeBgCol9)
document.querySelector("table .last").addEventListener("mouseleave", remCol9)

// document.getElementById("btn1").style.backgroundColor="blue"

