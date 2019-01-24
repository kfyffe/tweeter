$(document).ready(function() {
  console.log('This is the document ready function for the DOM')




// var $tweet = createTweetElement(tweetData);

// // // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

function createTweetElement(tweetData) {

  //header
  let avatar = $('<img>').attr("src", tweetData.user.avatars.small); //variable for the avatar image
  let $name = $('<h1>').text(tweetData.user.name);   //variable for the h1 (name) of the person
  let handle = $('<h3>').text(tweetData.user.handle); //variable for the h3 (handle) of the person
  let tweetHeader = $('<header>').append(avatar).append($name).append(handle);//append each variable to the header

  //tweet text (middle)
  let tweetText = $('<p>').text(tweetData.content.text);

  //footer
  let postDate = $('<span>').text(tweetData.created_at); //variable for the date the tweet was posted
  let heart = $('<i class="fas fa-heart"></i>');
  let flag = $('<i class="fas fa-flag"></i>');
  let retweet = $('<i class="fas fa-retweet"></i>');

  let tweetFooter = $('<footer>').append(postDate).append(heart).append(flag).append(retweet); //append the postDate variable to the footer

  //article
  let $tweet = $('<article>').addClass("tweet").append(tweetHeader).append(tweetText).append(tweetFooter);

  return $tweet;
}

function renderTweets(tweets) {
  console.log('This is tweet: ', tweets);
  $(".tweet").remove();
  tweets.forEach(tweetData => { // forEach...
    console.log('This is tweetData: ', tweetData);
    let tweetElement = createTweetElement(tweetData); // calls createTweetElement for each tweet
    console.log('This is tweetElement: ', tweetElement);
    $('.tweet-container').prepend(tweetElement); // takes return value and appends it to the tweets container
  });
}

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

$(function() {
  var submitTweet = $('#compose-tweet');
  submitTweet.on('submit', function (event) {
    event.preventDefault();
    let $$tweet = $("#tweet-text").val();
    console.log ('This is tweet value: ', $$tweet);
    let newTweetData = $(this).serialize()
    console.log('newTweetData: ', newTweetData);
    if ($$tweet === '' || $$tweet === null) {
      alert('You did not enter a tweet!');
    } else if ($$tweet.length > 140) {
      alert('Your tweet is too long!');
    } else {
      $.post('/tweets', newTweetData)
      .then(newTweetData => {
        $('textarea').val('');
        $(".tweet-container").empty();
        loadTweets();
      })
    }
  });
});

function loadTweets() {
  $.get('http://localhost:8080/tweets')
  .then(tweets => {
    renderTweets(tweets);
  });
}
});

