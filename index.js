let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let currentScoreH = 0;
let currentScoreG = 0;
let score = document.getElementsByClassName("score")

function initial(){
  currentScoreH = 0;
  currentScoreG = 0;
  scoreHome.textContent = currentScoreH;
  scoreGuest.textContent = currentScoreG;
}

function plusOneH(){
    currentScoreH += 1;
    scoreHome.textContent = currentScoreH;
}

function plusTwoH(){
    currentScoreH += 2;
    scoreHome.textContent = currentScoreH;
}

function plusThreeH(){
    currentScoreH += 3;
    scoreHome.textContent = currentScoreH;
}


function plusOneG(){
    currentScoreG += 1;
    scoreGuest.textContent = currentScoreG;
}

function plusTwoG(){
    currentScoreG += 2;
    scoreGuest.textContent = currentScoreG;
}

function plusThreeG(){
    currentScoreG += 3;
    scoreGuest.textContent = currentScoreG;
}


