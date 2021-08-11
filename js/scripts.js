$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const locationInput = $("input#location").val();
    console.log(nameInput, locationInput);
    $(".name").text(nameInput);
    $("#locationSpan").text(locationInput);

    $("#letter").show();
  });
})