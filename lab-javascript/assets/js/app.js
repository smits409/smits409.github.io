

// function
// alert ('hello js');

//variables
var animal = "cat";
var age = 13;
var clothing = ["shirts", "socks", "pants"];
var winner = true;

var checking_account = 1000;
var marni_earrings = 450;
var marni_shirt = 1000;
var stella_dress = 3000;


console.log(winner);


//functions: var text is implicit as a variable
function print_text(text) {
	$('.value').html(text);
}


function charge_cc(item_value, brand_name) { 

	alert('you will be charged ' + item_value + ' for this ' + brand_name + ' item');
	alert('your checking account balance is ' + checking_account);

	if (checking_account < item_value) {
		if (checking_account == 0) {
			alert('you dont have any money');
		} else { 
			alert('you dont have enough money to purchase this item');	
			}
		
		
	} else {
		checking_account = checking_account - item_value;
		alert('charge successful');
		alert('checking balance is ' + checking_account);
		display_checking_balance();
	}

}

function display_checking_balance() {
	$('.value').html(checking_account);
}


$('.item').click(function() {
	var item_value = $(this).data('value');
	var brand_name = $(this).data('brand');
	charge_cc(item_value, brand_name);
});


display_checking_balance();




	// the value of the thing we're buying
	// checking account balance

	// if (age > 12) {
	// 	alert('enjoy the movie!');
	// } else if (age > 7){
	// 	alert('how about mighty ducks instead?');
	// } else{
	// 	alert('you are cute');
	// }


