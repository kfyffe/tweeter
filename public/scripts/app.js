$(document).ready(function() {
  console.log('This is the document ready function for the DOM')

  $(".tweet").hover(function () {
    $(this).addClass("hovertweet");
    }, function() {
    $(this).removeClass("hovertweet");
    console.log('Is anything changing?');
  });

    // let value = $( this ).val();
    // let countdown = 140 - value.length;
    // console.log(countdown);
    // $(this).siblings('.counter').html(countdown);
    // if (countdown < 0) {
    //   $(this).siblings('.counter').addClass("overlimit"); //only uses .overlimit class when user has entered too many characters; turns counter red.
    // } else {
    //   $(this).siblings('.counter').removeClass("overlimit"); //removes .overlimit class (from red back to gray text) when user removes characters and goes back within limit.
    // }


});

