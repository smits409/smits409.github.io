

var objects = ['assets/img/blue1.png',
				'assets/img/blue2.png',
				'assets/img/blue3.png',
				'assets/img/blue4.png',
				'assets/img/blue5.png',
			  ];

var objects2 = ['assets/img/pink1.png',
				'assets/img/pink2.png',
				'assets/img/pink3.png',
				'assets/img/pink4.png',
				'assets/img/pink5.png',
			  ];

var objects3 = ['assets/img/yellow1.png',
				'assets/img/yellow2.png',
				'assets/img/yellow3.png',
				'assets/img/yellow4.png',
				'assets/img/yellow5.png'
			  ];



$('.button').click(function() {
	var random_object_number 	 = Math.floor(Math.random() * objects.length),
		object_to_use			 = objects[random_object_number],
		result = '<img src="' + object_to_use + '"/>';
	

	$('.content').prepend(result);

	//$('.content').append(objects[random_object]);
	//$('.content').append('<img src="assets/img/bunny.png"/>');
});

$('.button2').click(function() {
	var random_object_number 	 = Math.floor(Math.random() * objects2.length),
		object_to_use			 = objects2[random_object_number],
		result = '<img src="' + object_to_use + '"/>';
	

	$('.content').prepend(result);

	//$('.content').append(objects[random_object]);
	//$('.content').append('<img src="assets/img/bunny.png"/>');
});

$('.button3').click(function() {
	var random_object_number 	 = Math.floor(Math.random() * objects3.length),
		object_to_use			 = objects3[random_object_number],
		result = '<img src="' + object_to_use + '"/>';
	

	$('.content').prepend(result);

	//$('.content').append(objects[random_object]);
	//$('.content').append('<img src="assets/img/bunny.png"/>');
});






