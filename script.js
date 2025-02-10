document.getElementById("yesButton").addEventListener("click", showAlert);

function showAlert() {
    alert("Ti amo amore mioooo <3");
}

var yesButton = document.getElementById("yesButton");
var no = document.getElementById("no");
var valentineImage = document.getElementById("valentineImage");

var noTexts = ["Sicura?", "No smettila", "Dai amoree", "Smettila", "Almeno provaci", "Non puoi"];
var imageSources = [
    "https://media.tenor.com/BP70qe8X0J8AAAAe/crycat-crying-cat.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9e71v7IfFLLS_1CfY2it3an-6XH1uROjTfU5c88AwRL8aRkqAYDmoFrm9gpbUqwNameo&usqp=CAU",
    "https://i.pinimg.com/736x/cb/d8/3b/cbd83b534a315e809a9da2b8cd3ac3bf.jpg",
    "https://assets.puzzlefactory.com/puzzle/302/740/original.jpg",
    "https://preview.redd.it/9fb4zjk73aw41.jpg?width=640&crop=smart&auto=webp&s=bed9f47b11d606ecfafe386d443ccb6b0c265118",
    "https://i.pinimg.com/236x/75/97/2b/75972b49095c180b7060afb98bbd5fb4.jpg"
];

no.addEventListener("click", change);

function change() {
    var randomIndex = Math.floor(Math.random() * noTexts.length);
    var randomText = noTexts[randomIndex];
    no.innerText = randomText;

    var i = Math.floor(Math.random() * 1000) + 1;
    var j = Math.floor(Math.random() * 700) + 1;
    no.style.left = i + "px";
    no.style.top = j + "px";

    var currentWidth = yesButton.offsetWidth;
    var currentHeight = yesButton.offsetHeight
    yesButton.style.width = currentWidth + 100 + "px";
    yesButton.style.height = currentHeight + 60 + "px";

    var randomImageIndex = Math.floor(Math.random() * imageSources.length);
    valentineImage.src = imageSources[randomImageIndex];
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💜";
    document.body.appendChild(heart);

    const startPos = Math.random() * window.innerWidth;
    heart.style.left = `${startPos}px`;

    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300);