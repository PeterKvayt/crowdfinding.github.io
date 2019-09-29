$(document).ready(function(){
  // вывод сообщения
  function ShowAlert(message, elem, type, time){
    let alertElem = $('#alert');
    if(type){
      alertElem.css('border-color', '#008000');
      alertElem.css('background-color', '#00e600');
    }
    else{
      alertElem.css('border-color', '#fc0a32');
      alertElem.css('background-color', '#fc6c85');
    }
    let messageBox = $('#alert-text');
    let elemY = elem.offset().top - 80;
    messageBox.html(message);
    alertElem.slideDown(400);
    setTimeout(function(){
      alertElem.slideUp(400);
    }, 
    time);
    $('body,html').animate({ scrollTop: elemY }, 400);
    elem.focus();
  }

  // проверка пароля
  function CheckPassword(value){
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
  function SetPasswordSecurity(picture, box, status, security){
    switch(security){
      case 'easy':
        picture.attr('class', 'fa fa-unlock fa-fw');
        box.css('background-color', '#fc6c85');
        status.text(' простой');
        break;
      case 'middle':
        picture.attr('class', 'fa fa-lock fa-fw');
        box.css('background-color', 'blue');
        status.text(' средний');
        break;
      case 'strong':
        picture.attr('class', 'fa fa-shield fa-fw');
        box.css('background-color', '#00e600');
        status.text(' сложный');
        break;
      default: break;
    }
  }

  // проверка на совпадение пароля
  function ChekPasswordOnMatch(val,id){
    let label = $('#new-password-repit');
    if(val != $(id).val()){
      label.text(' нет совпадения');
      label.parent().css('background-color', '#fc6c85');
      label.parent().children().first().attr('class', 'fa fa-exclamation-circle fa-fw');
    }
    else{
      label.text(' совпадение');
      label.parent().css('background-color', '#00e600');
      label.parent().children().first().attr('class', 'fa fa-check fa-fw');
    }
  }

  // смена таба
  $('.row').on('click', '.category', function(event){
    let profileBox = $('#profile-box');
    let accessBox = $('#access-box');
    let notificationBox = $('#notifications-box');
    let active = $('.active-category');
    let point;
    if(event.target.className.includes('fa')){
      point = event.target.parentNode;
    }
    else{
      point = event.target;
    }
    active.attr('class', 'category');
    point.className = 'active-category';
    switch(active.attr('id')){
      case 'profile':
        profileBox.hide(200);
        break;
      case 'access':
        accessBox.hide(200);
        break;
      case 'notifications':
        notificationBox.hide(200);
        break;
      default: break;
    }
    switch(point.id){
      case 'profile':
        profileBox.show(200);
        break;
      case 'access':
        accessBox.show(200);
        break;
      case 'notifications':
        notificationBox.show(200);
        break;
      default: break;
    }
  })

  // изменение статуса получения новостей на email
  $('#nontification-check').on('click', function(){
    if($(this).hasClass('fa fa-check-square fa-fw')){
      this.className = 'fa fa-square fa-fw';
    }
    else{
      this.className = 'fa fa-check-square fa-fw';
    }
  })

  // добавление веб сайта
  $('#add-web-site-btn').on('click', function(){
    let input = $('#web-site-input');
    let webBox = $('#web-sites-box');
    let webName = $('#web-site-input-name');
    if(input.val().trim().length > 0){
      if(webBox.children().length <= 1){
        webBox.show(400);
      }
      webBox.append(
        '<div class="col-2">'+
          '<div class="my-btn web-site-del-btn">Удалить</div>'+
        '</div>'+
        '<div class="col-10">'+
          '<a class="link" href="'+ input.val().trim() +'">'+ webName.val().trim() +'</a>'+
        '</div>'
      );
      input.val('');
      webName.val('');
    }
    else{
      ShowAlert('Введите адрес веб-сайта', input, false, 2500);
    }
  })

  // удаление веб-сайта
  $('#web-sites-box').on('click', '.web-site-del-btn', function(event){
    let webBox = $('#web-sites-box');
    if(webBox.children().length <= 3){
      webBox.hide(400);
    }
    $(event.target.parentNode).next().remove();
    $(event.target.parentNode).remove();
  })

  // показать/скрыть пароль
  $('.password-box').on('click', '#old-password-eye-btn, #new-password-eye-btn, #second-new-password-eye-btn', function(event){
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

  // ввод нового пароля
  $('#new-password-input').on('keyup', function(){
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
      let picture = $('#new-password-security-picture');
      let box = $('#new-password-security-box');
      let status = picture.next();
      if (this.value.length >= 8) {
        if(CheckPassword(this.value)){
          SetPasswordSecurity(picture, box, status, 'middle');
        }
        else{
          SetPasswordSecurity(picture, box, status, 'easy');
        }
      }
      if (this.value.length >= 10) {
        if(CheckPassword(this.value)){
          SetPasswordSecurity(picture, box, status, 'strong');
        }
        else{
          if(CheckPassword(this.value)){
            SetPasswordSecurity(picture, box, status, 'middle');
          }
        }
      }
      if(this.value.length >= 12){
        if (this.value.match(/[a-zа-я]/g)) {
          SetPasswordSecurity(picture, box, status, 'middle');
        }
        if(CheckPassword(this.value)){
          SetPasswordSecurity(picture, box, status, 'strong');
        }
      }
      if(this.value.length < 8){
        SetPasswordSecurity(picture, box, status, 'easy');
      }
    }
    ChekPasswordOnMatch(this.value,'#second-new-password-input');
  })

  // повторный ввод нового пароля
  $('#second-new-password-input').on('keyup', function(){
    ChekPasswordOnMatch(this.value, '#new-password-input');
  })
})