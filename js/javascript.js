$(document).ready(function(){
  var userChoice;
  var computerChoice;
  var userScore = 0;
  var computerScore = 0;
  var roundCounter = 1;
  var computerOptions = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock"
  ];

  $(".user-choice").on("click", function(){
      userChoice = $(this).attr("data-choice");
      userThrow = $(this).attr("class");
      computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
      comparisons();
      $(".animation-area").removeClass("load").fadeOut(3000);

      
    });

  function comparisons(){
    // Tie
    if (userChoice === computerChoice){
      $('#myModal').modal('show')

    // Computer Wins Scenerios 

    }else if (userChoice === "rock" && (computerChoice === "paper" || computerChoice === "spock")){
      computerScore++;
      $(".computerScore").html(computerScore);
   
    }else if (userChoice === "paper" && (computerChoice === "scissors" || computerChoice === "lizard")){
      computerScore++;
      $(".computerScore").html(computerScore);
      
    }else if (userChoice === "scissors" && (computerChoice === "rock" || computerChoice === "spock")){
      computerScore++;
      $(".computerScore").html(computerScore);

    }else if (userChoice === "lizard" && (computerChoice === "rock" || computerChoice === "scissors")){
      computerScore++;
      $(".computerScore").html(computerScore);

    }else if (userChoice === "spock" && (computerChoice === "lizard" || computerChoice === "paper")){
      computerScore++;
      $(".computerScore").html(computerScore);

    // User Wins Scenerios

    }else if (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")){
      userScore++;
      $(".yourScore").html(userScore);
      
    }else if (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")){
      userScore++;
      $(".yourScore").html(userScore);
      
    }else if (userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")){
      userScore++;
      $(".yourScore").html(userScore); 

    }else if (userChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")){
      userScore++;
      $(".yourScore").html(userScore);

    }else if (userChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock")){
      userScore++;
      $(".yourScore").html(userScore);
    }
    roundCounter+=1;
    $(".roundCounter").html(roundCounter);  
  };


  


});