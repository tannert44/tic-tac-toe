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

function checkRowsAndColumns(Roc){
  var limeWins = false;
  var aquaWins = false;
  if(Roc === 3){
    limeWins = true;
  }else if(Roc===-3){
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
  if(turn === 9 && limeWins === false && aquaWins === false){
    alert("Sky Pixies and Limes have slaughtered each other! Play Again!");
    reset();
  }
}

function checkForWin(){
  checkRowsAndColumns(scoreObj.row1);
  checkRowsAndColumns(scoreObj.row2);
  checkRowsAndColumns(scoreObj.row3);
  checkRowsAndColumns(scoreObj.column1);
  checkRowsAndColumns(scoreObj.column2);
  checkRowsAndColumns(scoreObj.coulmn4);
  checkRowsAndColumns(scoreObj.drow1);
  checkRowsAndColumns(scoreObj.drow2);
};

function changeBox(numBox, row, column, drow, rowD) {
  numBox.on("click", function(){
  var $backgroundColorValue = numBox.css("background-color");
  if($backgroundColorValue === "rgb(255, 255, 255)"){
    if(turn % 2 === 0){
      turnLime(numBox);
      scoreObj[row]++;
      scoreObj[column]++;
      scoreObj[drow]++;
      scoreObj[rowD]++;
    }else{
      turnAqua(numBox);
      scoreObj[row]--;
      scoreObj[column]--;
      scoreObj[drow]--;
      scoreObj[rowD]--;
    }
  turn++;
  checkForWin();
  }else{
    alert("Thats already been clicked you asshole!! Choose another square!");   
  }});
}

 

changeBox($oneBox, "row1", "column1", "drow1");
changeBox($twoBox, "row1", "column2");
changeBox($threeBox, "row1", "column3", "drow2");
changeBox($fourBox, "row2", "column1");
changeBox($fiveBox, "row2", "column2", "drow1", "drow2");
changeBox($sixBox, "row2", "column3");
changeBox($sevenBox, "row3", "column1", "drow2");
changeBox($eightBox, "row3", "column2");
changeBox($nineBox, "row3", "column3", "drow1");