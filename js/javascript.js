$(document).ready(function(){
  var userChoice;
  var computerChoice;
  var userScore = 0;
  var computerScore = 0;
  var roundCounter = 1;
  var animating = false;
  var computerOptions = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock"
  ];

  // Hide Animation Divs
  
  $("#rock-choice, #paper-choice, #scissors-choice, #lizard-choice, #spock-choice, #bang-choice, #revealUserChoice, #revealComputerChoice, #revealWinner, #chooseAgain, #userwinner, #computerwinner, #user-go-screen, #computer-go-screen, #chooseWeapon").hide();

  // Assigns what button the user clicks on to be compared to in comparison function
  
  function userSelection(){
      if($(this).attr("data-clickable") === "true") {
        userChoice = $(this).attr("data-choice");
        computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
        comparisons();
        $(".chooseWeapon").removeClass("load").fadeOut(700);
        animationSequence();
        bindControls();
        $(".user-choice").attr("data-clickable", false);
        }
    };


  $(".user-choice").on("click", userSelection);

  // Determines the winning scenerios

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

    // roundCounter+=1;
    // $(".roundCounter").html(roundCounter);  

  };

  //binds the appropriete images based on user selectiion and computer selection for aninmation

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
    if( animating !== true){
      animating = true;
      
        $("#rock-choice").delay(1000).addClass("slideLeft").show(1).delay(500).fadeOut(100, function(){
          $("#paper-choice").addClass("slideRight").show(1).delay(500).fadeOut(100, function(){
            $("#scissors-choice").addClass("slideLeft").show(1).delay(500).fadeOut(100, function(){
              $("#lizard-choice").addClass("slideRight").show(1).delay(500).fadeOut(100, function(){
                $("#spock-choice").addClass("slideLeft").show(1).delay(500).fadeOut(100, function(){
                  $("#bang-choice").addClass("fadeIn").show(2).delay(1500).fadeOut(200, function(){
                    $("#revealUserChoice").addClass("fadeIn").show(2).delay(3000).fadeOut(1000);
                    $("#revealComputerChoice").addClass("fadeIn").show(2).delay(3000).fadeOut(1000);
                    $("#revealWinner").addClass("fadeIn revealwinner").show(2).delay(3000).fadeOut(1000, function(){
                      updateScore();
                      
                      $("#chooseAgain").fadeIn(1000).show(2).delay(1000).fadeOut(1000, function(){
                        roundCounter++;
                        $(".roundCounter").html(roundCounter); 
                        $(".user-choice").attr("data-clickable", true); 
                        animating = false;

                        
                      });
                    });
                  });
                });
              });
            });
          }); 
        });
    }  
  };



  // Added fa-star class when userScore and computerScore increments  by one based on the comparison function results
  
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

// Determines the winner and returns the homescreen to play again.

  function determineWinner(){
    if(computerScore === 5){
      $("#chooseAgain").hide();
      $("#computer-go-screen").fadeIn(500);
      $("#computerwinner").fadeIn(500);
      $("#resetBtn").on("click", function(){
        $("#computer-go-screen").fadeOut(1000);
        userScore = 0;
        computerScore = 0;
        roundCounter = 0;
        removeStars();
      });
    
    }else if(userScore === 5){  
      $("#chooseAgain").hide();
      $("#user-go-screen").fadeIn(500);
      $("#userwinner").fadeIn(500);
      $("#resetBtn").on("click", function(){
        $("#user-go-screen").fadeOut(1000);
        userScore = 0;
        computerScore = 0;
        roundCounter = 0;
        $(".game-load").fadeIn(500);
        removeStars();


      });
  };

};

  determineWinner();


    // removes fa-star class to star new game
  function removeStars (){
    $("#c-one").removeClass("fa-star").addClass("fa-star-o");  
    $("#c-two").removeClass("fa-star").addClass("fa-star-o");
    $("#c-three").removeClass("fa-star").addClass("fa-star-o");
    $("#c-four").removeClass("fa-star").addClass("fa-star-o");
    $("#c-five").removeClass("fa-star").addClass("fa-star-o");
    $("#y-one").removeClass("fa-star").addClass("fa-star-o");  
    $("#y-two").removeClass("fa-star").addClass("fa-star-o");
    $("#y-three").removeClass("fa-star").addClass("fa-star-o");
    $("#y-four").removeClass("fa-star").addClass("fa-star-o");
    $("#y-five").removeClass("fa-star").addClass("fa-star-o");
  };

  
  
});





