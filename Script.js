// Change text
function changeText() {
    document.getElementById("title").innerText = "Welcome, Hope you are having a wonderful day!";
}

// Change background
function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Variables & conditionals
let student = "Mark Ian";
let marks = 78;

function checkGrade() {
    if (marks >= 80) {
        document.getElementById("paragraph").innerText = student + " (" + marks + ") You have PASSED!!!";
    } else {
        document.getElementById("paragraph").innerText = student + " (" + marks + ") You have FAILED!!!";
    }
}

// Function 1: Greet user
function greetUser(title) {
    return "Welcome to, " + title + "!";
}

// Function 2: Square of a number
function square(num) {
    return num * num;
}

// Loops
function showSquares() {
    let list = document.getElementById("list");
    list.innerHTML = ""; // clear list

    // For loop
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.innerText = "Square of " + i + " is " + square(i);
        list.appendChild(li);
    }

    // While loop
    let x = 1;
    while (x <= 3) {
        console.log("While loop count:", x);
        x++;
    }
}

// DOM interaction: Change heading automatically when page loads
document.getElementById("title").innerText = greetUser("JavaScript Page");
