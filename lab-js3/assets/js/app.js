

var objects = ['assets/img/bunny.png',
				'assets/img/cat.jpg',
				'assets/img/dog.png',
				'assets/img/sloth.png',
				'assets/img/circle.png',
				'assets/img/square.png',
				'assets/img/triangle.png',
				'Meow', 'Woof','...','Meep'
				];

var colors = ['red', 'blue', 'pink'];


$('.button').click(function() {
	var random_object_number 	 = Math.floor(Math.random() * objects.length),
		random_color_number		 = Math.floor(Math.random() * colors.length),
		object_to_use			 = objects[random_object_number],
		color_to_use			 = colors[random_color_number],
		result 					 = '';



	if (random_object_number > 6) {
		result = '<span class="object ' + color_to_use + '">' + object_to_use + '</span>';	
	} else {
		result = '<img class="' + color_to_use + '" src="' + object_to_use + '"/>';
	}



	$('.content').prepend(result);

	//$('.content').append(objects[random_object]);
	//$('.content').append('<img src="assets/img/bunny.png"/>');
});