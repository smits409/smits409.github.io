var clicked = 0;

function checkWin() {
  if (clicked > 14) {
    $( ".container" ).addClass( "gradient" );
    $(".drag").css("display", "block");
    $(".smiley").show();
  }
}

$(".word-wrapper1").click(function() {
  $(".word-wrapper1 .bar2").fadeIn(800);
  $(".popsicle").show();
  clicked++;
  checkWin();
});

$(".word-wrapper2").click(function() {
  $(".word-wrapper2 .bar2").fadeIn(800);
  $(".kleenex").show();
  clicked++;
  checkWin();
});

$(".word-wrapper3").click(function() {
  $(".word-wrapper3 .bar2").fadeIn(800);
  $(".bandaid").show();
  clicked++;
  checkWin();
});

$(".word-wrapper4").click(function() {
  $(".word-wrapper4 .bar2").fadeIn(800);
  $(".qtip").show();
  clicked++;
  checkWin();
});

$(".word-wrapper5").click(function() {
  $(".word-wrapper5 .bar2").fadeIn(800);
  $(".clorox").show();
  clicked++;
  checkWin();
});

$(".word-wrapper6").click(function() {
  $(".word-wrapper6 .bar2").fadeIn(800);
  $(".tupperware").show();
  clicked++;
  checkWin();
});

$(".word-wrapper7").click(function() {
  $(".word-wrapper7 .bar2").fadeIn(800);
  $(".chapstick").show();
  clicked++;
  checkWin();
});

$(".word-wrapper8").click(function() {
  $(".word-wrapper8 .bar2").fadeIn(800);
  $(".hulahoop").show();
  clicked++;
  checkWin();
});

$(".word-wrapper9").click(function() {
  $(".word-wrapper9 .bar2").fadeIn(800);
  $(".yoyo").show();
  clicked++;
  checkWin();
});

$(".word-wrapper10").click(function() {
  $(".word-wrapper10 .bar2").fadeIn(800);
  $(".vaseline").show();
  clicked++;
  checkWin();
});

$(".word-wrapper11").click(function() {
  $(".word-wrapper11 .bar2").fadeIn(800);
  $(".jacuzzi").show();
  clicked++;
  checkWin();
});

$(".word-wrapper12").click(function() {
  $(".word-wrapper12 .bar2").fadeIn(800);
  $(".sharpie").show();
  clicked++;
  checkWin();
});

$(".word-wrapper13").click(function() {
  $(".word-wrapper13 .bar2").fadeIn(800);
  $(".aspirin").show();
  clicked++;
  checkWin();
});

$(".word-wrapper14").click(function() {
  $(".word-wrapper14 .bar2").fadeIn(800);
  $(".postit").show();
  clicked++;
  checkWin();
});

$(".word-wrapper15").click(function() {
  $(".word-wrapper15 .bar2").fadeIn(800);
  $(".pingpong").show();
  clicked++;
  checkWin();
});






$(init);
function init() {
  $('.drag').draggable( {cursor: 'move',}
 );
}








/*

$(".button2").click(function(){
    $( ".container" ).addClass( "gradient" );
    $(".drag").css("display", "block");
});



var words = [];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


$(".shuffle").each(function() {
	words.push($(this).html());
	
});

shuffle(words);
var counter = 0;
$(".shuffle").each(function() {
	$(this).html(words[counter]);
	counter++;
	
});

*/


