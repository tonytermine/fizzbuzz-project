var validInput = true;
var resetList = function () {
	$(".list").empty();
};
var resetInputBar = function () {
	$(".main-input").val("");
};
// append a new number to the list by taking the value of the user input when they click on the enter button. Must be a number from 1-100. Clear list everytime a new number is entered and clear input field after each entry.
$(".enter-button").click(function(e) {
	var toAdd = $(".main-input").val();
	e.preventDefault();
	resetList();
// Have an alert pop up if user does not enter anything in the input field, enters a space, letter, or decimal.
	if(toAdd != "" && $.isNumeric(toAdd) && toAdd % 1 == 0) {
	} else {
		alert("Please, enter a whole number to play Fizz-Buzz");
	}/*end alert*/

	for (x = 1; x <= toAdd; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
		$(".list").append("<li class='fizz-buzz'>" + "Fizz-Buzz" + "</li>");
	} else if (x % 3 == 0) {
		$(".list").append("<li class='fizz-buzz'>" + "Fizz" + "</li>");
	} else if (x % 5 == 0) {
		$(".list").append("<li class='fizz-buzz'>" + "Buzz" + "</li>");
	} else {
		$(".list").append("<li>"+ x +"</li>");
	}/*end if/else series*/
	}/*end for loop*/
	resetInputBar();
});/*end enter-button click function*/

// clear entire list by clicking reset button
$(".reset-button").click(function(e) {
	resetList();
	e.preventDefault();
});/*end of reset-button click event*/