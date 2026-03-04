console.log("Script started");
function changeStyle() {
    console.log("click");

    // Get the p element and store it in a vaiable
    let p = document.getElementById("text");
    p.innerText = "The text has changed";

    // set styles
    p.style.color = "red";
    p.style.fontSize = "50px";
    p.style.textAlign = "center";
    p.style.backgroundColor = "cornflowerblue";
}
function resetStyle() {
    
}