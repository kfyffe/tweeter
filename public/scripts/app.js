$(document).ready(function() {
  console.log('This is the document ready function for the DOM')

  $("i.fas.fa-heart").hide(1000);
  $("i.fas.fa-flag").hide(1000);
  $("i.fas.fa-retweet").hide(1000);

  $(".tweet").hover(function () {
    $(this).addClass("hovertweet");
    $("i.fas.fa-heart").show(1000);
    $("i.fas.fa-flag").show(1000);
    $("i.fas.fa-retweet").show(1000);
    }, function() {
      $(this).removeClass("hovertweet");
      $("i.fas.fa-heart").hide(1000);
      $("i.fas.fa-flag").hide(1000);
      $("i.fas.fa-retweet").hide(1000);
      });

});

