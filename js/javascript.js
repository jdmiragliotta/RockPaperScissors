$(document).ready(function(){
  var userChoice;
  var computerChoice;
  var userScore = 0;
  var computerScore = 0;
  var roundCounter = 1;
  var computerOptions = [
    "rock",
    "paper",
    "scissors"
  ];

  $(".btn-success").on("click", function(){
      userChoice = $(this).attr("data-choice");
      computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
      comparisons();
      console.log(userChoice, computerChoice);
    });

  function comparisons(){
    // Rock
    if (userChoice === computerChoice){
      alert("Ties");
      
    }else if (userChoice === "rock" && computerChoice === "paper"){
      computerScore++;
      $(".computerScore").html(computerScore);
     
    }else if (userChoice === "paper" && computerChoice === "scissor"){
      computerScore++;
      $(".computerScore").html(computerScore);
      
    }else if (userChoice === "scissors" && computerChoice === "rock"){
      computerScore++;
      $(".computerScore").html(computerScore);
     
    }else if (userChoice === "paper" && computerChoice === "rock"){
      userScore++;
      $(".yourScore").html(userScore);
      
    }else if (userChoice === "scissors" && computerChoice === "paper"){
      userScore++;
      $(".yourScore").html(userScore);
      
    }else if (userChoice === "rock" && computerChoice === "scissors"){
      userScore++;
      $(".yourScore").html(userScore);  
    }

    roundCounter+=1;
    $(".roundCounter").html(roundCounter);  
  };


  


});