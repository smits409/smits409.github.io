$(init);
function init() {
  $('.drag').draggable({cursor: 'move',}
  	);
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


$(".word").click(function() {
	var index = Math.floor(Math.random() * colors.length);
  $(this).html(words[index][Math.floor(Math.random()*words[index].length)]);
  

  var color_to_use 			 = colors[index];

	$(this).css("color",color_to_use);
	console.log(color_to_use);

});




