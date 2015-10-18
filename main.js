

//my totes hackable score
var score = 0;


var start = function(){
  var text = "You and your friends come across a haunted house during a dark and stormy night. Your friends are in the Halloween spirit and want to proceed inside. They egg you on. Do you go in?";

  document.getElementById("game-text").innerHTML = text + "<br>" + "<button onClick='goIn()'>Go In</button>"+"<button onClick='leave()'>Leave</button>";

  }



var goIn = function(){

  score += 50;

  var text = "You build up every bit of courage in your body and head inside. The door creaks and lighting crashes down nearby. You’re all in now. Should you split up to check more rooms or stay together?";

  document.getElementById("game-text").innerHTML = text + "<br>" + "<button onClick='splUp()'>Split Up</button>"+"<button onClick='stay()'>Stay Together</button>";
  document.getElementById("current-score").innerHTML = score.toString();
}

var leave = function(){

  score += 1000;

  var text = "You gained 1000 points for making a good life decision. You go home and spend the night watching Netflix and eating pizza. No matter how many mocking texts your friends send you, you know nothing is better than the Netflix and chill option in life.  At least you’ll always have your Facebook friends… The End. You finished with a score of " + score + "<br>" + "<button onClick='reset()'>Play Again</button>";

  document.getElementById("game-text").innerHTML = text;
  document.getElementById("current-score").innerHTML = score.toString();



}

var splUp = function(){
  score -= 100;

  var text = "Have you never seen a horror movie? Why would you not stay together?";

  document.getElementById("game-text").innerHTML = text + "<br>" + "<button onClick='upStairs()'>Upstairs</button>"+"<button onClick='downStairs()'>Downstairs</button>";
  document.getElementById("current-score").innerHTML = score.toString();
}


var stay = function(){
  score += 50;

  var text = "You’re smart, but unfortunately, your friends aren’t. They insist on splitting up. ";

  document.getElementById("game-text").innerHTML = text + "<br>" + "<button onClick='upStairs()'>Upstairs</button>"+"<button onClick='downStairs()'>Downstairs</button>";
  document.getElementById("current-score").innerHTML = score.toString();
}

var upStairs = function(){

  score += 20;


  var text = "A dark figure hovers above the top of the stairs. As you near you hear “muahahahaha”. The pale vampire flashes his fangs in intimidation. If you want to pass you will prove your worth and beat me in a game of skill and intellect! We will play Dracula, Van Helsing, Old Age! The rules are simple (yet make no sense to me as Dracula should beat everything because he’s awesome). Dracula beats Old Age with his immortality, Van Helsing beats Dracula with his stake, and Old Age beats Van Helsing with arthritis and heart failure. On the count of three we each choose.";

  document.getElementById("game-text").innerHTML = text + "<br>" + "<button onClick='drac()'>Dracula</button>"+"<button onClick='vanHel()'>Van Helsing</button>"+"<button onClick='oldAge()'>Old Age</button>";
  document.getElementById("current-score").innerHTML = score.toString();

}

var downStairs = function(){
  score += 50;

  var text = "Screw cardio. You might need to save your energy for running later, so you wisely stick to the easier route. You hear a loud crash coming from the other room. Do you explore it or run away?";

  document.getElementById("game-text").innerHTML = text + "<br>" + "<button onClick='explore()'>Explore</button>"+"<button onClick='runAway()'>Run Away</button>";
  document.getElementById("current-score").innerHTML = score.toString();

}

var runAway = function (){
  score -= 40;

  var text = "In such a rush to leave you run into a door and are knocked out. You awake in the morning to find that you survived a night in the haunted house, but are now covered in unmentionable markings. Some great friends you have there. The End. You finished with a final score of " + score + "<br>" + "<button onClick='reset()'>Play Again</button>";

  document.getElementById("game-text").innerHTML = text;
  document.getElementById("current-score").innerHTML = score.toString();
}

var explore = function (){
  score += 10;

  var text = "As you approach you make out the sound of music. It gets louder and louder followed by the loud thumps of dancing. You thought these only existed in fiction, but you have encountered a mythical Werewolf Barmitzvah! Boys becoming men. Men becoming wolves. 'Welcome, human!' An elderly werewolf exclaims. 'If you want to join our party as a guest, you’re going to have to impress us with some fresh dance moves.' What dance do you try?";

  document.getElementById("game-text").innerHTML = text + "<br>" + "<button onClick='theRobot()'>Robot</button>"+"<button onClick='runningMan()'>Running Man</button>";
  document.getElementById("current-score").innerHTML = score.toString();
}


var danceOff = function(danceMove){

//Success weighted by general move awesomeness with the Robot being better
  var robWeight = 1.5;
  var runWeight = 0.8;

  var danceAbility = Math.random();
  var sweetMoves = 0;

// Multiplying move chosen by natural random ability to dance
  if(danceMove === "Robot"){
    sweetMoves = danceAbility * robWeight;
  }
  else{
    sweetMoves = danceAbility * runWeight;
  }

// Range is from 0- 1.5. Setting cutoff at 60% chance of winning
  if(sweetMoves > 0.6){
    danceWin();
  }
  else{
    danceLose();
  }

}

var theRobot = function(){
  danceOff("Robot");
}

var runningMan = function(){
  danceOff("Running Man");
}

var danceWin = function(){
  score += 500;

  var text = "'I am most impressed. You are clearly the most interesting person in the world'- The Elder Wolf says. After a night of partying with your new pack of friends, you finally have the inspiration you’ve been looking for to finish that Twilight Fan Fic you’ve been working on for the last 3 years. This leads to you earning tens of internet dollars and a lifetime of happiness. Congratulations, you finished with a final score of " + score + "<br>" + "<button onClick='reset()'>Play Again</button>";

  document.getElementById("game-text").innerHTML = text;
  document.getElementById("current-score").innerHTML = score.toString();
}

var danceLose = function(){
  score -= 300;

  var text = "'I’ve never seen something flail about aimless that much in my life. Fortunately, you won’t have much room to dance pathetically once you’re in my stomach.'- The Wolf says.  You always knew you should’ve taken a dance class instead of spending so much time on the computer. At least you don’t have too much time left to worry about it or your paltry score of " + score + "<br>" + "<button onClick='reset()'>Play Again</button>";

  document.getElementById("game-text").innerHTML = text;
  document.getElementById("current-score").innerHTML = score.toString();
}
// Play Dracula, Van Helsing,
var dracVanOld = function(playerChoice){

  //Use random number generator to determine vampire choice. Note vampire is biased and more likely to pick his idol, Dracula

  var vampRand = Math.random();
  var vampChoice ="";

  if(vampRand <= 0.25){
    vampChoice = "Old Age";
  }
  else if(vampRand <= 0.50){
    vampChoice = "Van Helsing";
  }
  else {
    vampChoice = "Dracula";
  }


  // Win and loss scenarios

  if(playerChoice === "Dracula"){
    if(vampChoice === "Old Age"){
      dracWin(vampChoice);
    }
    else if(vampChoice === "Van Helsing"){
      dracLoss(vampChoice);
    }
    else{
      dracTie(vampChoice);
    }
  }
  else if(playerChoice === "Van Helsing"){
    if(vampChoice === "Old Age"){
      dracLoss(vampChoice);
    }
    else if(vampChoice === "Van Helsing"){
      dracTie(vampChoice);
    }
    else{
      dracWin(vampChoice);
    }
  }
  else{
    if(vampChoice === "Old Age"){
      dracTie(vampChoice);
    }
    else if(vampChoice === "Van Helsing"){
      dracWin(vampChoice);
    }
    else{
      dracLoss(vampChoice);
    }
  }
}


var drac = function(){
  dracVanOld("Dracula");
}
var vanHel = function(){
  dracVanOld("Van Helsing");
}

var oldAge = function(){
  dracVanOld("Old Age");
}

var dracWin = function(vampChoice){
  score += 700;

  var text = "The vampire selected " + vampChoice + " and you won! Supremely impressed by your uncanny intellect the vampire decides to suck your blood anyway to absorb all that knowledge. It's a shame really because you could've written such good Twilight Fan-Fic about it... The end. You finished with a score of " + score + "<br>" + "<button onClick='reset()'>Play Again</button>";

  document.getElementById("game-text").innerHTML = text;
  document.getElementById("current-score").innerHTML = score.toString();

}

var dracLoss = function(vampChoice){
  score -= 200;

  var text = "The vampire selected " + vampChoice + " and you lost! Disgusted by your lack of ingenuity, the vampire decides it would be best if there wasn't an immortal version of you and spares you. Screaming like a mad man, you run home and never sleep well again. The End. You finished with a score of " + score + "<br>" + "<button onClick='reset()'>Play Again</button>";

  document.getElementById("game-text").innerHTML = text;
  document.getElementById("current-score").innerHTML = score.toString();

}

var dracTie = function(vampChoice){

    score += 300;

    var text = "The vampire selected " + vampChoice + " and you tied! Having met his intellectual equal, the vampire decides make you immortal so you can be best buds and drink blood beers while watching bloodball or whatever it is vampire bros do. The End. You finished with a score of  " + score + "<br>" + "<button onClick='reset()'>Play Again</button>";

    document.getElementById("game-text").innerHTML = text;
    document.getElementById("current-score").innerHTML = score.toString();

  }

  var reset = function (){
    score = 0;
    document.getElementById("current-score").innerHTML = score.toString();
    start();
  }
