var btnList = ["thrilled", "bored", "happy"];
var gifsDiv = $("#gifsDiv");
var ratDiv = $("#ratDiv");

$("#submit").on("click", function(event) {
  event.preventDefault();
  var input = $("#input")
    .val()
    .trim();
  console.log(input);
  // var movie = $("#movie-input").val().trim();

  btnList.push(input);
  displayButtons();
});

function handleClick() {
  $("#gifsDiv").empty();
  var x = $(this).data("search");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    x +
    "&api_key=atYF5CRPGzxpI7u52fM1vyCLTYUUrm7g&limit=10&rating=pg";
  $.ajax({
    method: "GET",
    url: queryURL
  }).then(function(data) {
    handleResponse(data);
  });
  console.log(queryURL);
}

// var response = data (because data is passed in function call)
function handleResponse(response) {
  console.log(response);
  for (var i = 0; i < response.data.length; i++) {
    var rating = response.data[i].rating;
    var gif = response.data[i].images.original.url;
    var stillGif = response.data[i].images.original_still.url;
    var ratingDiv = $("<div>").text("Rating: " + rating);
    var gifImg = $("<img>").attr("src", gif);
    var stillGifImg = $("<img>").attr("src", stillGif);
    gifsDiv.append(stillGifImg);
    gifsDiv.append(ratingDiv);
  }
  $("img").on("click", function() {
    $(this).empty();
    gifsDiv.append(gifImg);
    console.log("you clicked a still gif");

    if ("<img>" === gifImg) {
      console.log("it won't move");
      // } else {
    }
  });

  // gifsDiv.append(gifImg);
  // gifsDiv.append(ratingDiv);
  console.log(gif);
}

// animate gifs with click event

function displayButtons() {
  // document.getElementById("buttons").innerHTML = "";
  $("#buttons").empty();

  for (var i = 0; i < btnList.length; i++) {
    var btn = $("<button>")
      .text(btnList[i])
      .attr("data-search", btnList[i])
      .on("click", handleClick);

    $("#buttons").append(btn);
  }
}

displayButtons();
