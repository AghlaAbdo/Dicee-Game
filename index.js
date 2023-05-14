
var randomNum1;
var randomNum2;
var imgContainer1;
var imgContainer2;

function whoWins() {
    randomNum1 = Math.random();
    randomNum2 = Math.random();
    imgContainer1 = document.querySelector(".img-container1");
    imgContainer2 = document.querySelector(".img-container2");
    randomNum1 = Math.floor(randomNum1 * 6 + 1);
    randomNum2 = Math.floor(randomNum2 * 6 + 1);
    
    if(randomNum1 === 1) {
        imgContainer1.style.backgroundImage = "url(images/dice1.png";
    }
    else if( randomNum1 === 2) {
        imgContainer1.style.backgroundImage = "url(images/dice2.png";
    }
    else if( randomNum1 === 3) {
        imgContainer1.style.backgroundImage = "url(images/dice3.png";
    }
    else if( randomNum1 === 4) {
        imgContainer1.style.backgroundImage = "url(images/dice4.png";
    }
    else if( randomNum1 === 5) {
        imgContainer1.style.backgroundImage = "url(images/dice5.png";
    }
    else if( randomNum1 === 6) {
        imgContainer1.style.backgroundImage = "url(images/dice6.png";
    }

    if(randomNum2 === 1) {
        imgContainer2.style.backgroundImage = "url(images/dice1.png";
    }
    else if( randomNum2 === 2) {
        imgContainer2.style.backgroundImage = "url(images/dice2.png";
    }
    else if( randomNum2 === 3) {
        imgContainer2.style.backgroundImage = "url(images/dice3.png";
    }
    else if( randomNum2 === 4) {
        imgContainer2.style.backgroundImage = "url(images/dice4.png";
    }
    else if( randomNum2 === 5) {
        imgContainer2.style.backgroundImage = "url(images/dice5.png";
    }
    else if( randomNum2 === 6) {
        imgContainer2.style.backgroundImage = "url(images/dice6.png";
    }
    changeText();
}
function changeText() {
    var heading = document.querySelector("h1");
    var href = document.querySelector("a");
    if(randomNum1 > randomNum2) {
        heading.innerHTML = " Player <span>1</span> Wins <i class='fa-solid fa-face-smile-wink' style='color: #faf1d8;'></i>";
    }
    else if(randomNum1 < randomNum2) {
        heading.innerHTML = "Player <span>2</span> Wins <i class='fa-solid fa-face-smile-wink' style='color: #faf1d8;'></i>";
    }   else {
        heading.innerHTML = "No One Wins ! <i class='fa-solid fa-face-rolling-eyes' style='color: #faf1d8;'></i>"
    }
    href.textContent = "Play Again";
}
