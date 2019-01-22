$(document).ready(function() {
  console.log('This is the document ready function for the DOM')

  $("#tweet-text").on("keyup", function (event){
    let value = $( this ).val();
    let countdown = 140 - value.length;
    console.log(countdown);
    $(this).siblings('.counter').html(countdown);
    if (countdown < 0) {
      $(this).siblings('.counter').addClass("overlimit"); //only uses .overlimit class when user has entered too many characters.
    } else {
      $(this).siblings('.counter').removeClass("overlimit"); //removes .overlimit class when user removes characters and goes back within limit.
    }
  });

});


