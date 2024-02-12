const $ = selector => document.querySelector(selector);  //selects elements with ids
var firstN = ""; //variables
var lastN = ""; //variables



document.addEventListener("DOMContentLoaded", () => {  //reacts to any input
    $("#add").addEventListener("click", () => { // reactions to a random color button
        document.body.style.backgroundColor = colorArray[getRandom(colorArray.length)]
    });  
    $("#reset").addEventListener("click", () => { //reset the background
        document.body.style.backgroundColor = "white";
    }) 
    $("#subits").addEventListener("click", () => { //waiting for the button to be clicked
        firstN = $("#fNames").value; //gets the text from the first and last names from the text boxes
        lastN = $("#lName").value; //gets the text from the first and last names from the text boxes
        var p = $("#printN"); // selects the <p> for first name
        for (let i = 0; i < firstN.length; i++){ // a loop that spells the first name individually 
            for (let j = 0; j < i+ 1; j++){
                var t = document.createTextNode(firstN.charAt(j));
                p.appendChild(t)

            }
            p.textContent += " " // seperate each character from words
        }
        var p = $("#printLn"); // selects the <p> in the last name
        for (let i = 0; i < lastN.length; i++){  // spells the last name individually
            for (let j = 0; j < i+ 1; j++){
                var t = document.createTextNode(lastN.charAt(j));
                p.appendChild(t)

            }
            p.textContent += " " // seperate each character from words
        }
    })
    $("#delName").addEventListener("click", () => { //waiting for button to be clicked then clears name
        $("#printN").textContent = "";
        $("#printLn").textContent = "";
    })

});
 const colorArray = ["red","orange","yellow","green","blue"]; // an array with colors to randomize the background
function getRandom(max){ //random number generator 
    return Math.floor(Math.random()*max); //randomizes the colors in the array
}




