$(document).ready(function(){
  $("button.dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
    $("button").removeClass()
    $("button").addClass("bright");
    console.log("I'm calling this from a function");
  });

  $("button.bright").click(function() {
    $("body").removeClass();
    $("body").addClass("bright");
    $("button").removeClass()
    $("button").addClass("dark");
  });

});
