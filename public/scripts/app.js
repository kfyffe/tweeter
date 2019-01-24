$(document).ready(function() {
  console.log('This is the document ready function for the DOM')

//function that creates a new tweet element with where each piece of data should be appended.
function createTweetElement(tweetData) {
  //header
  let avatar = $('<img>').attr("src", tweetData.user.avatars.small); //variable for the avatar image
  let $name = $('<h1>').text(tweetData.user.name);   //variable for the h1 (name) of the person
  let handle = $('<h3>').text(tweetData.user.handle); //variable for the h3 (handle) of the person
  let tweetHeader = $('<header>').append(avatar).append($name).append(handle);//append each variable to the header
  //tweet text (middle)
  let tweetText = $('<p>').text(tweetData.content.text);
  //footer
  let currentTime = Date.now();
  console.log('Time elapsed is: ', currentTime - tweetData.created_at);
  let postDate = $('<span>').text(tweetData.created_at); //variable for the date the tweet was posted
  let heart = $('<i class="fas fa-heart"></i>');
  let flag = $('<i class="fas fa-flag"></i>');
  let retweet = $('<i class="fas fa-retweet"></i>');
  let tweetFooter = $('<footer>').append(postDate).append(heart).append(flag).append(retweet); //append the postDate variable to the footer
  //article
  let $tweet = $('<article>').addClass("tweet").append(tweetHeader).append(tweetText).append(tweetFooter);
  return $tweet;
}

//helper function for when existing tweets are hovered. Icons initially hidden, and displayed upon hover...are then removed when mouse is off of the tweet.
function hoverTweets(tweets) {
  $("i.fas.fa-heart").hide(1000);
  $("i.fas.fa-flag").hide(1000);
  $("i.fas.fa-retweet").hide(1000);

  $(".tweet").hover(function () {
    $(this).addClass("hovertweet");
    $(this).find("i.fas.fa-heart").show(1000);
    console.log('value of $this: ', $(this))
    $(this).find("i.fas.fa-flag").show(1000);
    $(this).find("i.fas.fa-retweet").show(1000);
    }, function() {
      $(this).removeClass("hovertweet");
      $(this).find("i.fas.fa-heart").hide(1000);
      $(this).find("i.fas.fa-flag").hide(1000);
      $(this).find("i.fas.fa-retweet").hide(1000);
      });
}

//function that renders the tweets and calls createTweetElement function
function renderTweets(tweets) {
  $(".tweet").remove();
  tweets.forEach(tweetData => {
    let tweetElement = createTweetElement(tweetData);
    $('.tweet-container').prepend(tweetElement); // takes return value and prepends it to the tweets container
  });
}

//hides the compose tweet box when first land on the page, after compose button is clicked, tweet box slides into view and focuses the cursor in the text area.
$(".new-tweet").hide();
$(".compose").on("click", function (){
$(".new-tweet").slideToggle();
$("#tweet-text").focus();
})

//when cursor is in the textarea, no error message shows
$('textarea').on("click", function () {
  $(".error").text('');
})

//functionality for submission of new tweet
var submitTweet = $('#compose-tweet');
submitTweet.on('submit', function (event) {
  event.preventDefault();
  let $$tweet = $("#tweet-text").val();
  let newTweetData = $(this).serialize()
  //validation for what is entered in the tweet textarea and invokes error message if submitted without tweet or if it is too long.
  if ($$tweet === '' || $$tweet === null) {
    $(".error").text('You did not enter a tweet!');
  } else if ($$tweet.length > 140) {
    $(".error").text('Your tweet is too long!');
    } else {
      $.post('/tweets', newTweetData)
      .then(newTweetData => {
        $('textarea').val('');
        $(".tweet-container").empty();
        loadTweets();
      })
      }
});

//function with the GET for tweets, calls the renderTweets function and hoverTweets function.
function loadTweets() {
  $.get('http://localhost:8080/tweets')
  .then(tweets => {
    renderTweets(tweets);
    hoverTweets(tweets);
  });
}

loadTweets();

});

