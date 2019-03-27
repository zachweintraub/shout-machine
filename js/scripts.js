$(document).ready(function() {
  var message = '';
  $("#shout-form").submit(function(event) {
    $("#history").prepend("<p>" + message.toUpperCase() + "</p>");
    message = $("input#message").val();
    console.log(message);
    $("#current-shout").text(message.toUpperCase());
    $("input#message").val('');
    event.preventDefault();

  });
});
