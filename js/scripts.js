//User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number-input").val());

    $("#ping-pong-result").text(result);
    $("#result").slideUp();
    $(".jumbotron").hide();
  });
});



//Business End Logic
var equation = function(userInput) {

}
