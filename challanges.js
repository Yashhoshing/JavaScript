//dice=Math.floor(Math.random()*6)+1;
//console.log(dice);
//to select an element(it select the first element found) and change its value
//document.querySelector('#current-'+ activeplayer).textContent=dice;
//to change the css of element

var scores, activeplayer, roundscore, gameplaying;
init();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gameplaying) {
    //1.random numbers
    var dice = Math.floor(Math.random() * 6 + 1);

    //2.Display the result

    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //3.update the round score if rolled number is not 1
    //!=  performs type coresion

    if (dice !== 1) {
      prev=dice;
      roundscore += dice;
      document.querySelector(
        "#current-" + activeplayer
      ).textContent = roundscore;
    } else {
      btn();
    }
    
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gameplaying) {
    scores[activeplayer] += roundscore;

    document.querySelector("#score-" + activeplayer).textContent =
      scores[activeplayer];

    if (scores[activeplayer] >= 100) {
      document.querySelector("#name-" + activeplayer).textContent = "winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activeplayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activeplayer + "-panel")
        .classList.remove("active");

      gameplaying = false;
    } else {
      btn();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

function btn() {
  activeplayer === 0 ? (activeplayer = 1) : (activeplayer = 0);
  roundscore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //to remove or add or toggle the classes

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //diceDOM.display.style="none";
  document.querySelector(".dice").style.display = "none";
}

function init() {
  scores = [0, 0];
  roundscore = 0;
  activeplayer = 0;
  gameplaying = true;

  document.getElementById("score-0").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".dice").style.display = "none";
  document.querySelector("#name-0").textContent = "player 1";
  document.querySelector("#name-1").textContent = "player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
