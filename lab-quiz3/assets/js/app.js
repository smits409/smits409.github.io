var color = "pink";
var wallet = 2000;
var converted_wallet = 0;
var conversion_rate = [0.88, 111.5, 0.69];




function print_text(text) {
	$('.rates').html(text);
}

$('.rate').click(function() {
	var conversion_rate = $(this).data('value');
	convert_currency(conversion_rate);
});

function convert_currency(amount, converter) { 

	alert('you have ' + wallet + ' dollars in your wallet');

	if (conversion_rate = conversion_rate[1]) {
		alert('the conversion rate is ' + conversion_rate);
		alert('convert currency to yen');

		
		converted_wallet = wallet*conversion_rate;
		alert('conversion successful');
		alert('your balance is ' + converted_wallet + ' yen');

	}
}


