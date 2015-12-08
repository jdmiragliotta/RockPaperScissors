$(document).ready(function(){

  var choiceOptions = ["rock", "paper", "scissor"];
  var userScore = 0;
  var computerScore = 0; 

  $("#rock", "#paper", "#scissor").on("click", function(){
    var userChoice = $(this).data("choice");
  });

// The computer chooses RPS when button is clicked
  function computerChoice(uc){
    var computerChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    $("#rock", "#paper", "#scissor").on("click", function(){
      var userChoice = $(this).data("choice");
    });

  }

// Compare the userChoice with computerChoice using if else statement

  



});