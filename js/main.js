$(document).ready(function(){
  $('.registerBtn').on('click', function(event){
      $('#modalEnterClose').click();
      $('#modalRegistration').show();
  });

  $('.enterBtn').on('click', function(event){
      $('#modalRegistrationClose').click();
      $('#modalEnter').show();
  });

  // navbar scrolling and to top btn scrolling
  var prevScrollpos = window.pageYOffset;
  $(document).on('scroll', function(){
    if (prevScrollpos > window.pageYOffset) {
      $('#navbar').css({'top': '0'});
      $('#to-top-btn').fadeIn();
    } 
    else {
      $('#navbar').css({'top': '-70px'});
      $('#to-top-btn').fadeOut();
    }
    prevScrollpos = window.pageYOffset;
  });

// click-event to-to-btn
  $('#to-top-btn').click(function () {

    $('body,html').animate({ scrollTop: 0 }, 500);
    $('#to-top-btn').fadeOut();
  });
 });