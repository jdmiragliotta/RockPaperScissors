$(document).ready(function(){
  function loopingAnimation(){
    $(".rock-pic").fadeIn(3000).delay(1000).fadeOut(3000);
    setTimeout(function(){
      $(".paper-pic").fadeIn(4000).delay(1000).fadeOut(3000)
    }, 2000)
  }

  setInterval(loopingAnimation, 3000);



});