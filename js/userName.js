$(document).ready(function(){
  $(window).load(function(){
        $('#userName').modal('show');
    });

  $('.modal').on('shown.bs.modal', function () {
    $(this).find('input:text:visible:first').focus();
  })

  


  // Add UserName to List
  $(".btn-default").on("click", function(e){
    e.preventDefault();

    var userName =$("#userNameForm").val();
    $(".userName").html(userName);   
 
  });
});