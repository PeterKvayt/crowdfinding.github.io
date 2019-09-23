
$(document).ready(function(){
  // lazyload init
  $('.lazy').lazyload(
    {
      effect : "fadeIn"
  });

  // меняет модальные окна
  function ChangeModalWindow(tag){
    let current = $('.my-modal-content-active');
    let active = $('#'+tag);
    if(current.attr('id') != tag){
      current.slideUp(450);
      current.attr('class', 'my-modal-content');
      active.slideDown(450);
      active.attr('class', 'my-modal-content-active');
    }
  }
  
  // проверка пароля
  function CheckPasswordModal(value){
    if (value.match(/[a-zа-я]/g)) {
      if (value.match(/[A-ZА-Я]/g)) {
        if (value.match(/[0-9]/g)) {
          return true;
        }
        else { return false; }
      }
      else { return false; }
    }
    else { return false; }
  }

  // задает статус защищенности пароля
  function SetPasswordSecurityModal(picture, box, security){
    switch(security){
      case 'easy':
        picture.attr('class', 'fa fa-unlock fa-fw');
        box.css('background-color', '#fc6c85');
        break;
      case 'middle':
        picture.attr('class', 'fa fa-lock fa-fw');
        box.css('background-color', 'blue');
        break;
      case 'strong':
        picture.attr('class', 'fa fa-shield fa-fw');
        box.css('background-color', '#00e600');
        break;
      default: break;
    }
  }

  // вывод сообщения
  function ShowAlertModal(message, elem, type) {
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

  // проверка на совпадение пароля
  function CheckPasswordOnMatchModal(val, id){
    let label = $('#second-registration-password-status-modal');
    if(val != $(id).val()){
      label.parent().css('background-color', '#fc6c85');
      label.attr('class', 'fa fa-exclamation-circle fa-fw');
    }
    else{
      label.parent().css('background-color', '#00e600');
      label.attr('class', 'fa fa-check fa-fw');
    }
  }
  // нажатие на кнопку войти
  $('.modal-enter-btn').on('click', function(){
    ChangeModalWindow('enter-modal');
  })

  // нажатие на кнопку зарегистрироваться
  $('.modal-registration-btn').on('click', function(){
    ChangeModalWindow('registration-modal');
  })

  // нажатие на кнопку восстановить пароль
  $('#forgot-password-btn').on('click', function(){
    ChangeModalWindow('password-recovery-modal');
  })

  // показать/скрыть пароль
  $('.password-input').on('click', '.fa-eye-slash, .fa-eye', function(event){
    let eye = $(event.target);
    if(eye.hasClass('fa-eye-slash')){
      eye.attr('class', 'fa fa-eye fa-fw');
      eye.next().attr('type', 'text');
    }
    else{
      eye.attr('class', 'fa fa-eye-slash fa-fw');
      eye.next().attr('type', 'password');
    }
  })

  // ввод пароля при регистрации
  $('#registration-password-input-modal').on('input', function(){
    let isUniq = true;
    let passwords = [
      'Qwerty123',
      'Pa$$Word321',
      'gfhjkm123',
      'TempPassWord',
      'Abcd1234',
      'Password1'
    ]
    for (let i = 0; i < passwords.length; i++) {
      if(this.value == passwords[i]){
        isUniq = false;
        break;
      }
    }
    if (isUniq) {
      let picture = $('#password-security-pict-modal');
      let box = $('#modal-password-status-box');
      if (this.value.length >= 8) {
        if(CheckPasswordModal(this.value)){
          SetPasswordSecurityModal(picture, box, 'middle');
        }
        else{
          SetPasswordSecurityModal(picture, box, 'easy');
        }
      }
      if (this.value.length >= 10) {
        if(CheckPasswordModal(this.value)){
          SetPasswordSecurityModal(picture, box, 'strong');
        }
        else{
          if(CheckPasswordModal(this.value)){
            SetPasswordSecurityModal(picture, box, 'middle');
          }
        }
      }
      if(this.value.length >= 12){
        if (this.value.match(/[a-zа-я]/g)) {
          SetPasswordSecurityModal(picture, box, 'middle');
        }
        if(CheckPasswordModal(this.value)){
          SetPasswordSecurityModal(picture, box, 'strong');
        }
      }
      if(this.value.length < 8){
        SetPasswordSecurityModal(picture, box, 'easy');
      }
    }
    CheckPasswordOnMatchModal(this.value, '#second-registration-password-input-modal');
  })

  // повторный ввод пароля при регистрации
  $('#second-registration-password-input-modal').on('input', function(){
    CheckPasswordOnMatchModal(this.value, '#registration-password-input-modal');
  })

  // проверка email
  $('.email-input').focusout(function () {
    if (/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/.test(this.value) == false) {
      ShowAlertModal('Неверный формат электронной почты.', $(this), false);
      this.value = '';
    }
  })

  // navbar scrolling and to top btn scrolling
  var prevScrollpos = window.pageYOffset;
  var toTopBtn = $('#to-top-btn');
  $(document).on('scroll', function(){
    if(window.pageYOffset <= document.documentElement.scrollHeight * 0.2){
      toTopBtn.children().first().attr('class', 'fa fa-chevron-down fa-2x')
    }
    else{
      toTopBtn.children().first().attr('class', 'fa fa-chevron-up fa-2x')
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
    if(toTopBtn.children().first().attr('class') == 'fa fa-chevron-down fa-2x'){
      $('body,html').animate({ scrollTop: $('body').height() }, 500);
    }
    else{
      $('body,html').animate({ scrollTop: 0 }, 500);
    }
  });
 });