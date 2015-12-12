$(document).ready(function(){
  function loopingAnimation(){
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
      $(".lizard-pic").fadeIn(3000).delay(1000).fadeOut(2000)
    }, 2000)
  }

  setInterval(loopingAnimation, 3000);



});