// / Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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
  let tweetFooter = $('<footer>').append(postDate); //append the postDate variable to the footer

  //article
  let $tweet = $('<article>').addClass("tweet").append(tweetHeader).append(tweetText).append(tweetFooter);

  return $tweet;
}

function renderTweets(tweets) {
  console.log('This is tweet: ', tweets);
  tweets.forEach(tweetData => { // forEach...
    console.log('This is tweetData: ', tweetData);
    let tweetElement = createTweetElement(tweetData); // calls createTweetElement for each tweet
    console.log('This is tweetElement: ', tweetElement);
    $('.tweet-container').append(tweetElement); // takes return value and appends it to the tweets container
  });
}

renderTweets(data);

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

