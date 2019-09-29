$(document).ready(function(){
  // вывод сообщения
  function ShowAlert(message, elem, type) {
    let alertElem = $('#alert');
    if (type) {
      alertElem.css('border-color', '#008000');
      alertElem.css('background-color', '#00e600');
    }
    else {
      alertElem.css('border-color', '#fc0a32');
      alertElem.css('background-color', '#fc6c85');
    }
    let messageBox = $('#alert-text');
    let elemY = elem.offset().top - 80;
    messageBox.html(message);
    alertElem.slideDown(400);
    setTimeout(function () {
      alertElem.slideUp(400);
    },
      2500);
    $('body,html').animate({ scrollTop: elemY }, 400);
    elem.focus();
  }

  // проверка на цифры
  function CheckNumbers(elem) {
    if (elem.value.match(/[^0-9]/g)) {
      elem.value = elem.value.replace(/[^0-9]/g, '');
    }
  }

  // смена способа оплаты
  $('.pay-way').on('click', function () {
    $('.active-category.pay-way').attr('class', 'category pay-way');
    $(this).attr('class', 'active-category pay-way');

    if (this.innerText.trim() == 'ЕРИП') {
      $('#erip-pay-info').show(200);
      $('#continue-btn').attr('href', 'erip-page.html')
    }
    else {
      $('#erip-pay-info').hide(200);
      $('#continue-btn').attr('href', 'pay-card-page.html')
    }
  })

  // смена приватности отображения поддержки проекта
  $('.private-pay').on('click', function () {
    $('.active-category.private-pay').attr('class', 'category private-pay');
    $(this).attr('class', 'active-category private-pay');
  })

  // проверка email
  $('#email-input').focusout(function () {
    if (/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/.test(this.value) == false) {
      ShowAlert('Неверный формат почтового адреса.', $(this), false);
      this.value = '';
    }
  })

  // приводит к верхнему регистру серию паспорта
  $('#passport-sries-number').on('input', function(){
    this.value = this.value.toUpperCase();
  })

  // проверка серии и номера паспорта
  $('#passport-sries-number').focusout(function () {
    if (/[A-Z]{2,2}\d{7,7}/.test(this.value) == false) {
      ShowAlert('Введите правильные серию и номер паспорта.', $(this), false);
      this.value = '';
    }
  })

  // проверка дня выдачи паспорта
  $('#passport-date-day').on('input', function () {
    CheckNumbers(this);
    if(Number(this.value) > 31){
      ShowAlert('В месяце максимум может быть 31 день.', $(this), false);
      this.value = '';
    }
  })

  // проверка месяца выдачи паспорта
  $('#passport-date-month').on('input', function () {
    CheckNumbers(this);
    if(Number(this.value) > 12){
      ShowAlert('В году не более 12 месяцев.', $(this), false);
      this.value = '';
    }
  })

  // проверка года выдачи паспорта
  $('#passport-date-year').on('input', function () {
    CheckNumbers(this);
    if(Number(this.value) > (new Date()).getFullYear()){
      ShowAlert('Вы превысили текущий год.', $(this), false);
      this.value = '';
    }
  })

  // проверка почтового индекса
  $('#post-index').on('input', function () {
    if(/[^A-Z0-9-]/g.test(this.value)){
      this.value = this.value.replace(/[^A-Z0-9-]/g, '');
    }
  })
})