var btnList = ["Arbor Day", "Leap Day", "National Donut Day"];

displayButtons();

$("#submit").on("click", function(event) {
  event.preventDefault();
  var input = $("#input").val();
  console.log(input);
});

function handleClick() {
  var x = $(this).data("search");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    x +
    "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
  $.ajax({
    method: "GET",
    url: queryURL
  }).then(function(data) {
    handleResponse(data);
  });
}

// var response = data (because data is passed in function call)
function handleResponse(response) {
  console.log(response);
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
