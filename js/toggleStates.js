$(document).ready(function() {
    $("#startBtn").on("click", function() {
      if($(this).attr("data-status") === "on") {
        $(".user-choice").prop("disabled", false);
        $(this).removeClass("pulse");
        $(".load").fadeIn(3000);
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

  function userChoice(){
    $(this).on("click", function loopingAnimation(){
    $(".rock-pic").fadeIn(3000).delay(1000).fadeOut(2000);
    setTimeout(function(){
      $(".paper-pic").fadeIn(3000).delay(1000).fadeOut(2000)
    }, 2000)
    setTimeout(function(){
      $(".scissors-pic").fadeIn(3000).delay(1000).fadeOut(2000)
    }, 2000)
    setTimeout(function(){
      $(".lizard-pic").fadeIn(3000).delay(1000).fadeOut(2000)
    }, 2000)
    setTimeout(function(){
      $(".spock-pic").fadeIn(3000).delay(1000).fadeOut(2000)
    }, 2000)

    })
  };









 });