$("button").on("click", function() {
  var x = $(this).data("search");
  //   console.log(x);

  var queryURL = "bob";
  "https://giphy.com/v1/gifs/search?q=" + x + "api_key=...&limit=10";
  console.log(queryURL);
});
