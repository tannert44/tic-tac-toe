var turn = 0;

var scoreObj = {
  row1: 0,
  row2: 0,
  row3: 0,
  column1: 0,
  column2: 0,
  column3: 0,
  drow1: 0,
  drow2: 0
};

var $oneBox = $('#one');
var $twoBox = $('#two');
var $threeBox = $('#three');
var $fourBox = $('#four');
var $fiveBox = $('#five');
var $sixBox = $('#six');
var $sevenBox = $('#seven');
var $eightBox = $('#eight');
var $nineBox = $('#nine');

function turnLime(numDiv){
  numDiv.css("background-color", "lime")
}

function turnAqua(numDiv){
  numDiv.css("background-color", "aqua")
}

function reset() {
  $('div').css('background-color', 'white');
  scoreObj.row1 = 0;
  scoreObj.row2 = 0;
  scoreObj.row3 = 0;
  scoreObj.column1 = 0;
  scoreObj.column2 = 0;
  scoreObj.column3 = 0;
  scoreObj.drow1 = 0;
  scoreObj.drow2 = 0;
  
  turn = 0;
};

function checkForWin(){
  var limeWins = false;
  var aquaWins = false;
  if(scoreObj.row1===3){
  	limeWins=true;
  } else if(scoreObj.row1===-3){
  	aquaWins=true;
  }
  if(scoreObj.row2===3){
    limeWins=true;
  } else if(scoreObj.row2===-3){
  	aquaWins=true;
  }
  if(scoreObj.row3===3){
    limeWins=true;
  } else if(scoreObj.row3===-3){
  	aquaWins=true;
  }

  if(scoreObj.column1===3){
  	limeWins=true;
  } else if(scoreObj.column1===-3){
  	aquaWins=true;
  }
  if(scoreObj.column2===3){
  	limeWins=true;
  } else if(scoreObj.column2===-3){
  	aquaWins=true;
  }
  if(scoreObj.column3===3){
  	limeWins=true;
  } else if(scoreObj.column3===-3){
  	aquaWins=true;
  }

  if(scoreObj.drow1===3){
  	limeWins=true;
  } else if(scoreObj.drow1===-3){
  	aquaWins=true;
  }
  if(scoreObj.drow2===3){
  	limeWins=true;
  } else if(scoreObj.drow2===-3){
  	aquaWins=true;
  }

  if(limeWins){
  	alert("Limes Rules The World!");
  	reset();
  }
  if(aquaWins){
  	alert("Sky Pixies Rule The World!");
  	reset();
  }
};

$oneBox.on("click", function(){
  if(turn % 2 === 0){
    turnLime($oneBox);
    scoreObj.row1++;
    scoreObj.column1++;
    scoreObj.drow1++;
  }else{
    turnAqua($oneBox);
    scoreObj.row1--;
    scoreObj.column1--;
    scoreObj.drow1--;
  }
  turn++;
  checkForWin();
});

$twoBox.on("click", function(){
  if(turn % 2 === 0){
    turnLime($twoBox);
    scoreObj.row1++;
    scoreObj.column2++;
  }else{
    turnAqua($twoBox);
    scoreObj.row1--;
    scoreObj.column2--;
  }
  turn++;
  checkForWin();
});

$threeBox.on("click", function(){
  if(turn % 2 === 0){
    turnLime($threeBox);
    scoreObj.row1++;
    scoreObj.column3++;
    scoreObj.drow2++;
  }else{
    turnAqua($threeBox);
    scoreObj.row1--;
    scoreObj.column3--;
    scoreObj.drow2--;
  }
  turn++;
  checkForWin();
});

$fourBox.on("click", function(){
  if(turn % 2 === 0){
    turnLime($fourBox);
    scoreObj.row2++;
    scoreObj.column1++;
  }else{
    turnAqua($fourBox);
    scoreObj.row2--;
    scoreObj.column1--;
  }
  turn++;
  checkForWin();
});

$fiveBox.on("click", function(){
  if(turn % 2 === 0){
    turnLime($fiveBox);
    scoreObj.row2++;
    scoreObj.column2++;
    scoreObj.drow1++;
    scoreObj.drow2++;
  }else{
    turnAqua($fiveBox);
    scoreObj.row2++;
    scoreObj.column2--;
    scoreObj.drow1--;
    scoreObj.drow2--;
  }
  turn++;
  checkForWin();
});

$sixBox.on("click", function(){
  if(turn % 2 === 0){
    turnLime($sixBox);
    scoreObj.row2++;
    scoreObj.column3++;
  }else{
    turnAqua($sixBox);
    scoreObj.row2--;
    scoreObj.column3--;
  }
  turn++;
  checkForWin();
});

$sevenBox.on("click", function(){
  if(turn % 2 === 0){
    turnLime($sevenBox);
    scoreObj.row3++;
    scoreObj.column1++;
    scoreObj.drow2++;
  }else{
    turnAqua($sevenBox);
    scoreObj.row3--;
    scoreObj.column1--;
    scoreObj.drow2--;
  }
  turn++;
  checkForWin();
});

$eightBox.on("click", function(){
  if(turn % 2 === 0){
    turnLime($eightBox);
    scoreObj.row3++;
    scoreObj.column2++;
  }else{
    turnAqua($eightBox);
    scoreObj.row3--;
    scoreObj.column2--;
  }
  turn++;
  checkForWin();
});

$nineBox.on("click", function(){
  if(turn % 2 === 0){
    turnLime($nineBox);
    scoreObj.row3++;
    scoreObj.column3++;
    scoreObj.drow1++;
  }else{
    turnAqua($nineBox);
    scoreObj.row3--;
    scoreObj.column3--;
    scoreObj.drow1--;
  }
  turn++;
  checkForWin();
});