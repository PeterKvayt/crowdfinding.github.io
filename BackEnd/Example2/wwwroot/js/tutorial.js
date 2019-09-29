$(document).ready(function(){

  // меняет стиль новой вкладки и показывает новый таб
  function ShowTab(text, id){
    let tab = $('.tab-link:contains("'+ text +'")');
    tab.css('left', '-7px');
    tab.prev().attr('class', 'active-nav-tab');
    $('#' + id).show(0);
    $('#' + id).attr('class', 'col-lg-9 col-md-12 active-tab');
    $('body,html').animate({ scrollTop: 0 }, 400);
  }

  // смена таба
  $('.nav-row').on('click', function(){
    let activeBtn = $('.active-nav-tab').parent();
    let btn = $(this);
    if (btn.text() != activeBtn.text()) {
      activeBtn.children().first().attr('class', 'nav-tab');
      activeBtn.children().last().css('left', '0px');
      $('.active-tab').hide(0);
      $('.active-tab').attr('class', 'col-lg-9 col-md-12');
      switch (btn.children().last().text().trim()) {
        case 'Введение':
          ShowTab('Введение', 'introduction');
          break;
        case 'Оформление проекта':
          ShowTab('Оформление проекта', 'formalization');
          break;
        case 'Подарки спонсорам':
          ShowTab('Подарки спонсорам', 'gifts');
          break;
        case 'Бюджет проекта':
          ShowTab('Бюджет проекта', 'budget');
          break;
        case 'Стратегия продвижения':
          ShowTab('Стратегия продвижения', 'strategy');
          break;
        case 'Сбор средств':
          ShowTab('Сбор средств', 'fundraising');
          break;
        case 'Доставка подарков':
          ShowTab('Доставка подарков', 'gifts-delivery');
          break;
        case 'Заключение':
          ShowTab('Заключение', 'conclusion');
          break;
      }
    }
  })
})