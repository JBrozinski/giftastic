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

  var rating = response.data[0].rating;
  var gif = response.data[0].images.original.url;
  var stillGif = response.data[0].images.original_still.url;
  var ratingDiv = $("<div>").text("Rating: " + rating);
  var gifImg = $("<img>").attr("src", gif);

  gifsDiv.append(gifImg);
  gifsDiv.append(ratingDiv);
  console.log(gif);
}

function displayButtons() {
  // document.getElementById("buttons").innerHTML = "";
  $("#buttons").empty();

  for (var i = 0; i < btnList.length; i++) {
    // var btn = document.createElement("button");
    // btn.textContent = btnList[i];
    // btn.setAttribute("data-search", btnList[i]);

    // document.getElementById("buttons").appendChild(btn);

    var btn = $("<button>")
      .text(btnList[i])
      .attr("data-search", btnList[i])
      .on("click", handleClick);

    $("#buttons").append(btn);
  }
}

displayButtons();

// $("img").on("click", function() {
//   if ("<img>" === stillGif) {
//     $(this).attr("src", gif);

//   } else {
//     $(this).attr("src", stillGif);

//   }
