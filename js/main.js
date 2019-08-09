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
  var toTopBtn = $('#to-top-btn');
  $(document).on('scroll', function(){
    if(window.pageYOffset <= 300){
      toTopBtn.children().first().attr('class', 'fa fa-angle-double-down fa-3x')
    }
    else{
      toTopBtn.children().first().attr('class', 'fa fa-angle-double-up fa-3x')
    }
    if (prevScrollpos > window.pageYOffset) {
      $('#navbar').css({'top': '0'});
    } 
    else {
      $('#navbar').css({'top': '-70px'});
    }
    prevScrollpos = window.pageYOffset;
  });

  // click-event to-to-btn
  toTopBtn.click(function () {
    if(toTopBtn.children().first().attr('class') == 'fa fa-angle-double-down fa-3x'){
      $('body,html').animate({ scrollTop: $('body').height() }, 500);
    }
    else{
      $('body,html').animate({ scrollTop: 0 }, 500);
    }
  });
 });