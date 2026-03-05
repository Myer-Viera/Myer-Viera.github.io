function addToBody(text) {
    document.body.innerHTML += "<p>" + text + "</p>";
}

addToBody("It Works!");
let yourName = prompt("What is your name?");
addToBody("Hi" + yourName);

let temp = prompt("What is the temperature outside?");
temp = Number(temp);

if (temp < 32) {
    addToBody("It's freezing outside! Watch out for ice!");

} else if (temp < 80) {
    addToBody("It's hot outside! Enjoy the weather!");

} else {
    addToBody("Go to the beach! It's hot outside!");
}