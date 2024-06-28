
console.log("this is js 3")
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


function textWriter() {
    for (let val = 0; val < deskArray.length; val++) {
        // console.log(val);
        document.querySelector(`.arrayBox div:nth-child(${val+2})`).innerHTML = "";
        document.querySelector(`.arrayBox div:nth-child(${val+1})`).innerHTML = deskArray[val];
        
        // console.log(deskArray);
    }
}



const deleteItem = () => {
    let text = document.querySelector("#form1 input").value;
    // console.log(text);
    if(text==""){
        return;
    }

    if(deskArray.indexOf(text)===-1){
        document.querySelector("#form1 input").value="";
        return;
    }

    deskArray.splice(deskArray.indexOf(text), 1);
    // console.log(deskArray.indexOf(text));
    // console.log(deskArray);
    document.querySelector("#form1 input").value="";
    textWriter();
}

textWriter();