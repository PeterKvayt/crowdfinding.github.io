$(document).ready(function(){
  // показать/скрыть тему/вопрос
  $('.accordion-btn, .accordion-btn-alt').on('click', function(){
    let content = $(this).next();
    if(content.css('display') != 'block'){
      content.slideDown(200);
      $(this).children().first().attr('class', 'fa fa-times fa-fw');
      // $(this).css('color', 'var(--greenPoles)');
    }
    else{
      content.slideUp(200);
      $(this).children().first().attr('class', 'fa fa-plus fa-fw');
      // $(this).css('color', 'var(--borderBtn)');
    }
  })
})