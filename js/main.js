// append a new number to the list by taking the value of the user input when they click on the enter button. Have an alert pop up if user does not enter anything in the input field.  Must be a number from 1-100.
var fizz = ("Fizz");
var buzz = ("Buzz");
var fizzBuzz = ("Fizz-Buzz");
var validInput = true;
var resetNewEntry = function () {
	$(".list").empty();
};
$(".enter-button").click(function(e) {
	var toAdd = $(".main-input").val();
	e.preventDefault();
	resetNewEntry();
	if(toAdd != "" && $.isNumeric(toAdd)) {
		validInput = true;
	} else {
		validInput = false;
	}/*end if statement*/

	if(validInput) {
	for (x = 1; x <= toAdd; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
		$(".list").append("<li class='fizz-buzz'>" + fizzBuzz + "</li>");
	} else if (x % 3 == 0) {
		$(".list").append("<li class='fizz-buzz'>" + fizz + "</li>");
	} else if (x % 5 == 0) {
		$(".list").append("<li class='fizz-buzz'>" + buzz + "</li>");
	} else {
		$(".list").append("<li>"+ x +"</li>");
	}/*end if/else series*/
	}/*end for loop*/
	}/*end validInput*/else {
		alert("Please, enter number to play Fizz-Buzz");
	}
	$(".main-input").val(""); // reset input
});/*end click function*/

// clear entire list by clicking reset button
$(".reset-button").click(function(e) {
	resetNewEntry();
	e.preventDefault();
});/*end of reset click event*/