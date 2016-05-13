
$(init);
function init() {
  $('.drag').draggable({cursor: 'move',}
  	);
};



$(saving);
function saving() {
    $(".save").click(function() {
        $(".word").css("color",'#fff');
        $(".logo").css("color",'#fff');
        $(".underline").css("color",'#fff');
        $("body").css("background-color",'#000');
        var saving = true;
  });
};


var blue = 0;
var pink = 0;
var yellow = 0;
var green = 0;

function checkWin() {
  		if (blue > 10) {
  		$(".word").css("color",'#3399ff');
  		}

  		if (pink> 10) {
  		$(".word").css("color",'#ff1a75');
  		}

  		if (yellow > 10) {
  		$(".word").css("color",'#ffec00');
  		}

  		if (green > 10) {
  		$(".word").css("color",'#3fda0b');
  		}
};



var colors = ['#3399ff', '#ff1a75', '#ffec00','#3fda0b'];


var words = [["long", "down", "water","sea","night","cried","cold","ocean","sky",
			  "cool","sad","rainy","tears","careless","foggy","misty","wistful"],
			 ["love","heart","flowers","beautiful","soft","fruity","sweet","floral",
			  "rose","fig","perfume","cute","lovely","blushing","candid","honey"],
			 ["air", "light","golden","sun","corn","sand","hot","eggs","happy","bright",
			 "sunny","buzzing","bee","bouncy","springing","shimmer","lemon","summer"], 
			 ["mountain", "plant","grass","tree","wood","apple","branches","garden",
			 "fresh","natural","sustainable","lush","grassy","healthy","green"]];



$(".word").click(function coloring() {
	var index = Math.floor(Math.random() * colors.length);
  $(this).html(words[index][Math.floor(Math.random()*words[index].length)]);
  

  var color_to_use 			 = colors[index];

	$(this).css("color",color_to_use);
	console.log(color_to_use);

		if (color_to_use == '#3399ff'){
		blue++;
  		checkWin();}

  		if (color_to_use == '#ff1a75'){
		pink++;
  		checkWin();}

  		if (color_to_use == '#ffec00'){
		yellow++;
  		checkWin();}

  		if (color_to_use == '#3fda0b'){
		green++;
  		checkWin();}


});













