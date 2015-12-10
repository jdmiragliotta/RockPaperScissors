var helloGoodbye = ['hello', 'goodbye'];
var userScore = 0;
var computerScore = 0;
var buttons = ['<a class=\"control\" data-value=\"hello\">Hello.</a>','<a class=\"control\" data-value=\"goodbye\">Goodbye.</a>'];



function theGame(){
  $(document).on('click','.control', function(){
    var randomString = helloGoodbye[Math.floor(Math.random() * helloGoodbye.length)];
    var choice = $(this).data('value');
    if (choice == 'hello' && randomString == 'hello'){
      alert('A mutual \'hello\'. No points awarded.');
    } else if (choice == 'goodbye' && randomString == 'goodbye'){
      alert('A mutual \'goodbye\'. No points awarded.');
    } else if (choice == 'hello' && randomString == 'goodbye'){
      alert('You said hello, they say goodbye. Have a point.');
      userScore++;
      $('#user-score').html('User: '+userScore);  
    } else if (choice == 'goodbye' && randomString == 'hello'){
      alert('NO BEATLES. Computer point');
      computerScore++;
      $('#computer-score').html('Computer: '+computerScore); 
    }
    randomButton();
  });
} 

theGame();
randomButton();
