var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = randomNumber1 + ".png";

var randomsource1 = randomImage1;

var image = document.querySelectorAll("img")[0];

image.setAttribute("src", randomsource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = randomNumber2 + ".png";

var randomsource2 = randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomsource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}