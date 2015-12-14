$(document).ready(function(){
  var userChoice;
  var computerChoice;
  var userScore = 0;
  var computerScore = 0;
  var roundCounter = 0;
  var computerOptions = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock"
  ];

  // Hide msgs
  
  $("#rock-choice, #paper-choice, #scissors-choice, #lizard-choice, #spock-choice, #bang-choice, #revealUserChoice, #revealComputerChoice, #revealWinner, #chooseAgain #userwinner, #computerwinner, #user-go-screen, #computer-go-screen").hide();

  $(".user-choice").on("click", function (){
      userChoice = $(this).attr("data-choice");
      userThrow = $(this).attr("class");
      computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
      comparisons();
      $(".chooseWeapon").removeClass("load").fadeOut(700);
      animationSequence();
      bindControls();
      setTimeout(updateScore, 10000);
      
    });


  function comparisons(){
    // Tie
    if (userChoice === computerChoice){
      $(".revealwinner").html("Tie!");

    // Computer Wins Scenerios 

    }else if (userChoice === "rock" && (computerChoice === "paper" || computerChoice === "spock")){
      computerScore++;
      $(".revealwinner").html("Sheldon Wins!");
   
    }else if (userChoice === "paper" && (computerChoice === "scissors" || computerChoice === "lizard")){
      computerScore++;
      $(".revealwinner").html("Sheldon Wins!");
      
    }else if (userChoice === "scissors" && (computerChoice === "rock" || computerChoice === "spock")){
      computerScore++;
      $(".revealwinner").html("Sheldon Wins!");

    }else if (userChoice === "lizard" && (computerChoice === "rock" || computerChoice === "scissors")){
      computerScore++;
      $(".revealwinner").html("Sheldon Wins!");

    }else if (userChoice === "spock" && (computerChoice === "lizard" || computerChoice === "paper")){
      computerScore++;
      $(".revealwinner").html("Sheldon Wins!");

    // User Wins Scenerios

    }else if (userChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")){
      userScore++;
      $(".revealwinner").html("You won!");
      
    }else if (userChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")){
      userScore++;
      $(".revealwinner").html("You won!");
      
    }else if (userChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")){
      userScore++;
      $(".revealwinner").html("You won!"); 

    }else if (userChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")){
      userScore++;
      $(".revealwinner").html("You won!");

    }else if (userChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock")){
      userScore++;
      $(".revealwinner").html("You won!");
    };

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
          );

      }else if(userChoice === "paper"){
        $("#choice")
          .addClass("fa-hand-" +userChoice+"-o")
          .removeClass("fa-hand-rock-o\
            fa-hand-scissors-o\
            fa-hand-lizard-o\
            fa-hand-spock-o"
          );
      }else if(userChoice === "scissors"){
        $("#choice")
          .addClass("fa-hand-" +userChoice+"-o")
          .removeClass("fa-hand-paper-o\
            fa-hand-rock-o\
            fa-hand-lizard-o\
            fa-hand-spock-o"
          );

      }else if(userChoice === "lizard"){
        $("#choice")
          .addClass("fa-hand-" +userChoice+"-o")
          .removeClass("fa-hand-paper-o\
            fa-hand-scissors-o\
            fa-hand-rock-o\
            fa-hand-spock-o"
          );

      }else if(userChoice === "spock"){
        $("#choice")
          .addClass("fa-hand-" +userChoice+"-o")
          .removeClass("fa-hand-paper-o\
            fa-hand-scissors-o\
            fa-hand-lizard-o\
            fa-hand-rock-o"
          );
      };
    };

    function revealComputerChoice(){
      if(computerChoice === "rock"){
        $("#computerChoice")
          .addClass("fa-hand-" +computerChoice+"-o")
          .removeClass("fa-hand-paper-o\
            fa-hand-scissors-o\
            fa-hand-lizard-o\
            fa-hand-spock-o"
          );

      }else if(computerChoice === "paper"){
        $("#computerChoice")
          .addClass("fa-hand-" +computerChoice+"-o")
          .removeClass("fa-hand-rock-o\
            fa-hand-scissors-o\
            fa-hand-lizard-o\
            fa-hand-spock-o"
          );
      }else if(computerChoice === "scissors"){
        $("#computerChoice")
          .addClass("fa-hand-" +computerChoice+"-o")
          .removeClass("fa-hand-paper-o\
            fa-hand-rock-o\
            fa-hand-lizard-o\
            fa-hand-spock-o"
          );

      }else if(computerChoice === "lizard"){
        $("#computerChoice")
          .addClass("fa-hand-" +computerChoice+"-o")
          .removeClass("fa-hand-paper-o\
            fa-hand-scissors-o\
            fa-hand-rock-o\
            fa-hand-spock-o"
          );

      }else if(computerChoice === "spock"){
        $("#computerChoice")
          .addClass("fa-hand-" +computerChoice+"-o")
          .removeClass("fa-hand-paper-o\
            fa-hand-scissors-o\
            fa-hand-lizard-o\
            fa-hand-rock-o"
          );
      };
    };
    revealUserChoice();
    revealComputerChoice();
   
  };

  function animationSequence(){
    //$(".user-choice").off().removeClass("pulse");
    $("#rock-choice").delay(1000).addClass("slideLeft").show(1).delay(500).fadeOut(100);
    $("#paper-choice").delay(1750).addClass("slideRight").show(1).delay(500).fadeOut(100);
    $("#scissors-choice").delay(2500).addClass("slideLeft").show(1).delay(500).fadeOut(100);
    $("#lizard-choice").delay(3250).addClass("slideRight").show(1).delay(500).fadeOut(100);
    $("#spock-choice").delay(4000).addClass("slideLeft").show(1).delay(500).fadeOut(100);
    $("#bang-choice").delay(4750).addClass("fadeIn").show(2).delay(1500).fadeOut(200);
    $("#revealUserChoice").delay(6500).addClass("fadeIn").show(2).delay(3000).fadeOut(1000);
    $("#revealComputerChoice").delay(6500).addClass("fadeIn").show(2).delay(3000).fadeOut(1000);
    $("#revealWinner").delay(6500).addClass("fadeIn revealwinner").show(2).delay(3000).fadeOut(1000);
    //$("#chooseAgain").delay(9000).html("Choose Again").fadeIn(1000).show(2).delay(2000).hide();
  };

  
  
  function updateScore (){
    function updateComputer(){
      if(computerScore === 1){
        $("#c-one").removeClass("fa-star-o").addClass("fa-star");  
        }else if(computerScore === 2){
          $("#c-two").removeClass("fa-star-o").addClass("fa-star");
        }else if(computerScore === 3){
          $("#c-three").removeClass("fa-star-o").addClass("fa-star");
        }else if(computerScore === 4){
          $("#c-four").removeClass("fa-star-o").addClass("fa-star");
        }else if(computerScore === 5){
          $("#c-five").removeClass("fa-star-o").addClass("fa-star");
        };
    }; 
    
    function updateUser(){
      if(userScore === 1){
          $("#y-one").removeClass("fa-star-o").addClass("fa-star");  
        }else if(userScore === 2){
          $("#y-two").removeClass("fa-star-o").addClass("fa-star");
        }else if(userScore === 3){
          $("#y-three").removeClass("fa-star-o").addClass("fa-star");
        }else if(userScore === 4){
          $("#y-four").removeClass("fa-star-o").addClass("fa-star");
        }else if(userScore === 5){
          $("#y-five").removeClass("fa-star-o").addClass("fa-star");
        };

      determineWinner();  
    };

    updateComputer();
    updateUser();
    
  }; 

  function determineWinner(){
    if(computerScore === 1){
      $("#chooseAgain").hide();
      $("#computer-go-screen").fadeIn(500);
      $("#computerwinner").fadeIn(2000);
    }else if(userScore === 1){
      $("#chooseAgain").hide();
      $("#user-go-screen").fadeIn(500);
      $("#userwinner").fadeIn(2000);
    }
  };

  determineWinner();


});





