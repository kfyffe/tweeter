//When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type
// (subtracting the number of characters they've typed from the maximum allowable character count of 140)
$(document).ready(function() {
  console.log('This is the document ready function for the DOM')


  $("#tweet-text").on("keyup", function (event){
    let value = $(this).val();
    let countdown = 140 - value.length;
    $(this).siblings(".counter").html(countdown);
    if (countdown < 0) {
      $(this).siblings(".counter").addClass(".overlimit"); //only uses .overlimit class when user has entered too many characters; turns counter red.
    } else {
      $(this).siblings(".counter").removeClass(".overlimit"); //removes .overlimit class (from red back to gray text) when user removes characters and goes back within limit.
    }
  });

});


