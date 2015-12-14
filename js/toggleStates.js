$(document).ready(function() {
    $("#startBtn").on("click", function() {
      if($(this).attr("data-status") === "on") {
        $(".user-choice").prop("disabled", false);
        $(this).removeClass("pulse");
        $(".off-screen").fadeOut(2000);
        $(".load").delay(500).fadeIn(500);
      }
      
      enableAnimation();
    });
  
  function enableAnimation() {
    $(".user-choice").on("mouseenter", function() {
      $(this).addClass("pulse");
    }).on("mouseleave", function() {
      $(this).removeClass("pulse");
    });
  }
  enableAnimation();

  









 });