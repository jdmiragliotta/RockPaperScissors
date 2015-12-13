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

  // Hide msgs
  //$("#gameplay-panel, #pause-screen").hide();
  $("#rock-choice, #paper-choice, #scissors-choice, #lizard-choice, #spock-choice").hide();
  $("#reveal-screen, #name-form-div, #end-of-round-screen").hide();
  $("#game-over-screen").hide();

  $(".user-choice").on("click", function(){
      userChoice = $(this).attr("data-choice");
      userThrow = $(this).attr("class");
      computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
      comparisons();
      $(".chooseWeapon").removeClass("load").fadeOut(2000, animationSequence());
      //animationSequence();
      bindControls();
      
    });


  function comparisons(){
    // Tie
    if (userChoice === computerChoice){
      

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



  function bindControls(){
    function revealUserChoice(){
      if(userChoice === "rock"){
        $("#choice")
          .addClass("fa-hand-" +userChoice+"-o")
          .removeClass("fa-hand-paper-o\
            fa-hand-scissors-o\
            fa-hand-lizard-o\
            fa-hand-spock-o"
          ).show();

      }else if(userChoice === "paper"){
        $("#choice")
          .addClass("fa-hand-" +userChoice+"-o")
          .removeClass("fa-hand-rock-o\
            fa-hand-scissors-o\
            fa-hand-lizard-o\
            fa-hand-spock-o"
          ).show();
      }else if(userChoice === "scissors"){
        $("#choice")
          .addClass("fa-hand-" +userChoice+"-o")
          .removeClass("fa-hand-paper-o\
            fa-hand-rock-o\
            fa-hand-lizard-o\
            fa-hand-spock-o"
          ).show();

      }else if(userChoice === "lizard"){
        $("#choice")
          .addClass("fa-hand-" +userChoice+"-o")
          .removeClass("fa-hand-paper-o\
            fa-hand-scissors-o\
            fa-hand-rock-o\
            fa-hand-spock-o"
          ).show();

      }else if(userChoice === "spock"){
        $("#choice")
          .addClass("fa-hand-" +userChoice+"-o")
          .removeClass("fa-hand-paper-o\
            fa-hand-scissors-o\
            fa-hand-lizard-o\
            fa-hand-rock-o"
          ).show();
      };
    };
    revealUserChoice();
  };

  function animationSequence(){
    
    $("#rock-choice").delay(2000).addClass("slideLeft").show(1).delay(500).fadeOut(100);
    $("#paper-choice").delay(2500).addClass("slideRight").show(1).delay(500).fadeOut(100);
    $("#scissors-choice").delay(3000).addClass("slideLeft").show(1).delay(500).fadeOut(100);
    $("#lizard-choice").delay(3500).addClass("slideRight").show(1).delay(500).fadeOut(100);
    $("#spock-choice").delay(4000).addClass("slideLeft").show(1).delay(500).fadeOut(100);
  };
  
  


});