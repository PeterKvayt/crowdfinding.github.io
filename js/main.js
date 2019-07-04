$(document).ready(function(){
  $('.registerBtn').on('click', function(event){
      $('#modalEnterClose').click();
      $('#modalRegistration').show();
  });

  $('.enterBtn').on('click', function(event){
      $('#modalRegistrationClose').click();
      $('#modalEnter').show();
  });

  // navbar scrolling
  var prevScrollpos = window.pageYOffset;
  $(document).on('scroll', function(){
    if (prevScrollpos > window.pageYOffset) {
      $('#navbar').css({'top': '0'});
    } 
    else {
      $('#navbar').css({'top': '-70px'});
    }
    prevScrollpos = window.pageYOffset;
  });
 });