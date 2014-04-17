// append a new number to the list by taking the value of the user input when they click on the enter button. Have an alert pop up if user does not enter anything in the input field.  Must be a number from 1 - 100.
$(".enter-button").click(function(e) {
	e.preventDefault();
	var toAdd = $("input").val();
	var fizz = ("Fizz");
	var buzz = ("Buzz");
	var fizzBuzz = ("Fizz-Buzz");
	if (toAdd == 0) {
	alert("Please, enter number to play Fizz-Buzz");
	return false;
	}
	for (x = 1; x <= toAdd; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
		$(".list").append("<li>" + fizzBuzz + "</li>");
	} else if (x % 3 == 0) {
		$(".list").append("<li>" + fizz + "</li>");
	} else if (x % 5 == 0) {
		$(".list").append("<li>" + buzz + "</li>");
	} else {
		$(".list").append("<li>"+ x +"</li>");
	}
  }
  // reset input
  $("input").val("");
});
// run Fizz-Buzz when user presses enter key
$(".enter-button").keypress(function(e) {
	e.preventDefault();
  if(e.which == 13) {
	for (x = 1; x <= toAdd; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
		$(".list").append("<li>" + fizzBuzz + "</li>");
	} else if (x % 3 == 0) {
		$(".list").append("<li>" + fizz + "</li>");
	} else if (x % 5 == 0) {
		$(".list").append("<li>" + buzz + "</li>");
	} else {
		$(".list").append("<li>"+ x +"</li>");
	}
 }
 }
});
// clear entire list by clicking reset button
	$(".reset-button").click(function(e) {
		$(".list").empty();
		e.preventDefault();
	});
	// clear input bar after entering an item
	// $(".main-input-container")[0].reset();