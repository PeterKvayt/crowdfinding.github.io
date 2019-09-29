$(document).ready(function(){
  const comissionPercent = 0.2;// заработок платформы
  const maxProjectDuration = 180;
  const fixedMinTax = 4947; // минимальная сумма, не облогаемая налогом
  const taxPercent = 0.13 // процент налога
  var categories = $('.project-category');
  var projectPicture = $('#project-picture');
  var projectCategory = $('#project-category');
  var projectName = $('#project-name');
  var projectShortDescription = $('#project-short-description');
  var inputProjectName = $('#input-project-name');
  var inputShortDescription = $('#input-short-description');
  var inputCategory = $('#input-category');
  var downloadPictureProject = $('#project-picture-path');
  var financialGoal = $('#financial-goal');
  var projectDurationEl = $('#project-duration');
  var comissionFee = $('#comission-fee');
  var tax = $('#tax');
  var total = $('#total');
  var rewards = [];

  // заполнение процента налога и заработка платформы
  $('#comissionPercent').text(comissionPercent * 100);
  $('#taxPercent').text(taxPercent * 100);

  // заполнение списка годами доставки
  let dat = new Date();
  for (let i = 0; i < 5; i++) {
    $('#delivery-year-input').append(
      '<option>'+ (dat.getFullYear() + i) +'</option>'
    );
  }
  // запонение списка годами рождения
  $('#year-select').append(
    '<option selected>'+ (dat.getFullYear() - 107) +'</option>'
  );
  for (let i = 1; i < 90; i++) {
    $('#year-select').append(
      '<option>'+ (dat.getFullYear() - 107 + i) +'</option>'
    );
  }

  // проверка на цифры
  function CheckNumbers(elem, flag){
    if(flag){
      if (elem.value.match(/[^0-9]/g)) {
        elem.value = elem.value.replace(/[^0-9]/g, '');
      }
    }
    else{
      if (elem.val().match(/[^0-9]/g)) {return false;}
      else{return true;}
    }
  }

  // проверка на буквы
  function CheckLetters(elem){
    if (elem.value.match(/[^a-zA-Zа-яА-Я]/g)) {
      elem.value = elem.value.replace(/[^a-zA-Zа-яА-Я]/g, '');
    }
  }
  // добавление стран доставки
  function AddCountry(selecCountry, selecCost, title, flag){
      if(flag){
        let country = $(selecCountry).val();
        let cost = $(selecCost).val();
        if (cost == '' || Number(cost) < 0) { cost = 0; }
        while(cost.length > 1 && cost[0] == '0'){
          cost = cost.substring(1);
        }
        if (country != null && CheckNumbers($(selecCost, false))) {
          $(selecCountry + ' > option:contains(' + country + ')').attr('disabled', '');
          $('#countries-title').text(title);
          $('#countries').append(
            '<p class="added-country">' +
              '<span class="countries-country title-min-left country-text">' + country + '</span>' +
              '<span class="countries-delivery-cost title-min-left country-text"> ' + cost + ' BYN</span>' +
              '<span class="my-btn change-delivery-country country-btn">Изменить</span>' +
              '<span class="my-btn remove-delivery-country country-btn">Удалить</span>' +
            '</p>'
          );
        }
        $(selecCost).val('');
      }
      else{
        if(title == 'Некоторые страны'){
          $('#add-country-box > option:contains(' + selecCountry + ')').attr('disabled', '');
          $('#add-country-cost').val('');
        }
        else{
          $('#exception-country-box > option:contains(' + selecCountry + ')').attr('disabled', '');
          $('#exception-country-cost').val('');
        }
          $('#countries-title').text(title);
          $('#countries').append(
            '<p class="added-country">' +
              '<span class="countries-country title-min-left country-text">' + selecCountry + '</span>' +
              '<span class="countries-delivery-cost title-min-left country-text"> ' + selecCost + ' BYN</span>' +
              '<span class="my-btn change-delivery-country country-btn">Изменить</span>' +
              '<span class="my-btn remove-delivery-country country-btn">Удалить</span>' +
            '</p>'
          );
          
      }
  }

  // изменение/удаление страны доставки
  function ChangeRemoveCountry(e, param){
    let activeCheckBox = $('.delivery-checkbox-active');
    let selecCountry = '#add-country-box';
    let selecCost = '#add-country-cost';
    if (activeCheckBox.text().includes('Некоторые страны')) {
      selecCountry = '#add-country-box';
      selecCost = '#add-country-cost';
    }
    if(activeCheckBox.text().includes('Весь мир')){
      selecCountry = '#exception-country-box';
      selecCost = '#exception-country-cost';
    }
    let country = param.children('.countries-country').text();
    let cost = param.children('.countries-delivery-cost').text();
    cost = cost.substring(0, cost.length - 4);
    if(e.target.className == 'my-btn change-delivery-country country-btn'){
      $(selecCountry + ' > option:contains('+ country +')').removeAttr('disabled');
      $(selecCountry).val(country);
      $(selecCost).val(cost.substring(1));
      param.remove();
      if($('.added-country').length < 1){$('#countries-title').text('');} 
    }
    // обработка нажатия на удаление страны
    if(e.target.className == 'my-btn remove-delivery-country country-btn'){
      $(selecCountry + ' > option:contains('+ country +')').removeAttr('disabled');
      param.remove(); 
      if($('.added-country').length < 1){$('#countries-title').text('');} 
    }
  }

  // изменение активности стран
  function EnableCountries(list, text){
    for (let i = 0; i < list.length; i++) {
      if (list[i].text != text ) {
        list[i].removeAttribute('disabled');
      }
    }
  }

  // переключает ограничение лотов
  function EnableCountToggle(){
    if($('#reward-count-check').hasClass('fa fa-square')){
      $('#reward-count-check').attr('class','fa fa-check-square');
      $('.reward-count-box').slideDown(400);
    }
    else{
      $('#reward-count-check').attr('class','fa fa-square');
      $('.reward-count-box').slideUp(400);
    }
  }

  // вывод сообщения
  function ShowAlert(message, elem, type){
    let alertElem = $('#alert');
    let messageBox = $('#alert-text');
    if(type){
      alertElem.css('border-color', '#008000');
      alertElem.css('background-color', '#00e600');
    }
    else{
      alertElem.css('border-color', '#fc0a32');
      alertElem.css('background-color', '#fc6c85');
    }
    let elemY = elem.offset().top - 80;
    messageBox.html(message);
    alertElem.slideDown(400);
    setTimeout(function(){
      alertElem.slideUp(400);
    }, 
    2500);
    $('body,html').animate({ scrollTop: elemY }, 400);
    elem.focus();
  }

  // обрезка передних нулей
  function CutZero(elem){
    $(elem).val($(elem).val() * 1);
  }
  
  // добавление вопросов в описание
  function AddQuestion(){
    let questionEl = $('#question-input');
    let answerEl = $('#answer-input');
    let addedQuestionsEl = $('.added-questions');
    if(questionEl.val().trim().length != 0){
      if(answerEl.val().trim().length != 0){
        $('.added-questions > .title').slideDown(400);
        addedQuestionsEl.append(
          '<div class="added-question" style="padding-bottom: 5px;">' +
            '<p><span class="link added-question-btn">' + questionEl.val().trim() + '</span></p>' +
            '<div class="added-answer" style="display:none; padding-bottom: 5px;">' + answerEl.val().trim() + '</div>' +
            '<div class="my-btn change-question-btn" style="margin-right: 5px;"><span class="fa fa-pencil fa-fw"></span>Изменить</div>' +
            '<div class="my-btn delete-question-btn"><span class="fa fa-close fa-fw"></span>Удалить</div>' +
          '</div>'
        );
        questionEl.val('');
        answerEl.val('');
        ShowAlert('Вопрос успешно добавлен <span class="fa fa-thumbs-o-up fa-fw"></span>', questionEl, true);
      }
      else{
        ShowAlert('Вы не ввели ответ на вопрос!', answerEl, false);
      }
    }
    else{
      ShowAlert('Вы не ввели вопрос!', questionEl, false);
    }
  }

  // event on change tabs
  categories.on('click', function(){
    $('.active-category').attr('class', 'category project-category');
    $(this).attr('class', 'active-category project-category');
    $('.active-describe-project-box').attr('class', 'describe-project-box');
    $($(this).attr('href')).attr('class','active-describe-project-box');
  })
  
  // event on input project name
  inputProjectName.on('input', function(){
    projectName.text(inputProjectName.val());
    if (inputProjectName.val() === '') {
      projectName.text('Название проекта');
    }
  })
  
  // event on input project short description
  inputShortDescription.on('input', function(){
    projectShortDescription.text(inputShortDescription.val());
    if (inputShortDescription.val() === '') {
      projectShortDescription.text('Описание проекта');
    }
  })

  // event on change category
  inputCategory.change(function(){
    projectCategory.text(inputCategory.val());
  })
  
  // выбор картинки проекта
  $('#project-picture-btn').on('click', function(){
    $('#project-picture-choose-btn').click();
  }) 

  // ввод винансовой цели проекта
  financialGoal.on('keyup', function(){
    CheckNumbers(this, true);
    CutZero(this);
    let totalTax = 0;
    let finPurpose = Number(financialGoal.val());
    let platformProfit = (finPurpose * comissionPercent).toFixed();
    comissionFee.text(platformProfit);
    if(finPurpose > fixedMinTax){
      totalTax = ((finPurpose - fixedMinTax) * taxPercent).toFixed();
      tax.text(totalTax);
    }
    else{
      tax.text(totalTax);
    }
    total.text(finPurpose - platformProfit - totalTax);
  })

  // ввод продолжительности проекта
  projectDurationEl.on('input', function(){
    CheckNumbers(this, true);
    CutZero(this);
    if(projectDurationEl.val() > maxProjectDuration){projectDurationEl.val(maxProjectDuration);}
  })

  // ввод стоимости лота
  $('#reward-cost-input').on('input', function(){
    CheckNumbers(this, true);
    CutZero(this);
  })

  // выбор картинки лота
  $('#reward-picture-btn').on('click', function(){
    $('#reward-picture-choose-btn').click();
  })

  // ввод количества лотов
  $('#reward-count-input').on('input', function () {
    CheckNumbers(this, true);
    CutZero(this);
  })

  // ввод стоимости доставки в некоторых странах
  $(document).on('input', '#add-country-cost', function(event){
    CheckNumbers(event.target, true);
    CutZero(event.target);
  })

  // ввод стоимости доставки по всему миру
  $(document).on('input', '#all-world-delivery-cost', function(event){
    CheckNumbers(event.target, true);
    CutZero(event.target);
  })

  // ввод стоимости доставки в странах исключениях
  $(document).on('input', '#exception-country-cost', function(event){
    CheckNumbers(event.target, true);
    CutZero(event.target);
  })

  downloadPictureProject.on('change', function(event){
    // $('#preview-picture').src = URL.createObjectURL(event.target.files[0]);
    console.log(downloadPictureProject);
    let preview = $('#project-preview-picture');
    preview.attr('src', downloadPictureProject.val());
    // let file = document.getElementById('project-picture-path').files[0];
    // let reader  = new FileReader();
    // reader.onloadend = function () {
    //   preview.src = reader.result;
    // }
  
    // if (file) {
    //   reader.readAsDataURL(file);
    // } else {
    //   preview.src = "";
    // }
  })

   var loadFile = function(event){
    $('#preview-picture').src = URL.createObjectURL(event.target.files[0]);
  }
  
  // смена вида доставки
  $(document).on('click', '.delivery-checkbox', function(event){
    $('.fa-check-square').attr('class','fa fa-square');
    $('.delivery-input-active').attr('class','delivery-input');
    $('.delivery-checkbox-active').attr('class','delivery-checkbox');
    if(event.target.tagName == 'P' ){
      event.target.className = 'delivery-checkbox-active';
      $('.delivery-checkbox-active span').attr('class','fa fa-check-square');
      $('.delivery-checkbox-active + .delivery-input').attr('class','delivery-input-active');
    }
    else{
      event.target.className = 'fa fa-check-square';
      event.target.parentNode.className = 'delivery-checkbox-active';
      $('.delivery-checkbox-active + .delivery-input').attr('class','delivery-input-active');
    }
    $('#countries-title').text('');
    $('.added-country').remove();
    EnableCountries($('#add-country-box > option'), 'Выберите страну');
    EnableCountries($('#exception-country-box > option'), 'Страны исключения');
  })

  // обработка нажатия добавить страну доставки
  $('#add-country-btn').on('click', function(){
    AddCountry('#add-country-box', '#add-country-cost', 'Страны доставки', true);
  })

  // обработка нажатия на изменение страны
  $('#countries').on('click', '.added-country', function(event){
    ChangeRemoveCountry(event, $(this));
  })

  // обработка нажатия добавить страну исключение
  $('#exception-country-btn').on('click', function () {
    AddCountry('#exception-country-box', '#exception-country-cost', 'Страны исключения', true);
  })

  // клик по ограничению по количеству
  $('.count-checkbox').on('click', function(){
    EnableCountToggle();
  })

  // обработка нажатия на изменение вознгарждения
  $('#rewards-wrapper').on('click', '.change-reward-btn', function(event){
    let rewardParent = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    let rewardParentIndex = $(rewardParent).index();  
    $('#reward-name-input').val(rewards[rewardParentIndex].Name);
    $('#reward-description-input').val(rewards[rewardParentIndex].Description);
    $('#reward-cost-input').val(rewards[rewardParentIndex].Price);
    $('#delivery-month-input').val(rewards[rewardParentIndex].DeliveryMonth);
    $('#delivery-year-input').val(rewards[rewardParentIndex].DeliveryYear);
    switch(rewards[rewardParentIndex].DeliveryType){
      case 'Самовывоз':
        $('.fa-check-square').attr('class','fa fa-square');
        $('.delivery-input-active').attr('class','delivery-input');
        $('.delivery-checkbox-active').attr('class','delivery-checkbox');
        $('#no-delivery').attr('class', 'delivery-checkbox-active');
        $('#no-delivery .fa.fa-square').attr('class', 'fa fa-check-square');
        break;
      case 'Некоторые страны':
        $('.fa-check-square').attr('class','fa fa-square');
        $('.delivery-input-active').attr('class','delivery-input');
        $('.delivery-checkbox-active').attr('class','delivery-checkbox');
        $('#some-countries-delivery').attr('class', 'delivery-checkbox-active');
        $('#some-countries-delivery .fa.fa-square').attr('class', 'fa fa-check-square');
        $('#some-countries-delivery + .delivery-input').attr('class', 'delivery-input-active');
        $('#countries-title').val('Страны доставки');
        for (let i = 0; i < rewards[rewardParentIndex].Delivery.length; i++) {
          AddCountry(rewards[rewardParentIndex].Delivery[i].Country, rewards[rewardParentIndex].Delivery[i].Cost, 'Некоторые страны', false);
        }
        break;
      case 'Весь мир':
        $('.fa-check-square').attr('class','fa fa-square');
        $('.delivery-input-active').attr('class','delivery-input');
        $('.delivery-checkbox-active').attr('class','delivery-checkbox');
        $('#all-world-delivery').attr('class', 'delivery-checkbox-active');
        $('#all-world-delivery .fa.fa-square').attr('class', '.fa-check-square');
        $('#all-world-delivery + .delivery-input').attr('class', 'delivery-input-active');
        $('#countries-title').val('Страны исключения');
        for (let i = 0; i < rewards[rewardParentIndex].Delivery.length; i++) {
          if(rewards[rewardParentIndex].Delivery[i].Country == 'all'){
            $('#all-world-delivery-cost').val(rewards[rewardParentIndex].Delivery[i].Cost);
          }
          else{
            AddCountry(rewards[rewardParentIndex].Delivery[i].Country, rewards[rewardParentIndex].Delivery[i].Cost, 'Страны исключения', false);
          }
        }
        break;
      dafault: break;
    }
    if(rewards[rewardParentIndex].Left != ''){
      $('#reward-count-input').val(rewards[rewardParentIndex].Left.substring(9));
      EnableCountToggle();
    }
    rewards.splice(rewardParentIndex, 1);
    rewardParent.remove();
  })

  // обработка нажатия на удаление вознгарждения
  $('#rewards-wrapper').on('click', '.delete-reward-btn', function(){
    let rewardParent = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    let rewardParentIndex = $(rewardParent).index();
    rewards.splice(rewardParentIndex, 1);
    rewardParent.remove();
  }) 

  // добавление лота
  $(document).on('click', '#add-reward-btn', function(){
    let image = 'images/stock-reward.jpg';
    let name =  $('#reward-name-input');
    let description = $('#reward-description-input');
    let cost = $('#reward-cost-input');
    let month = $('#delivery-month-input');
    let year = $('#delivery-year-input');
    let deliveryCheckBox = $('.delivery-checkbox-active');
    let countCheckBox = $('.count-checkbox');
    let countSpanCheck = $('#reward-count-check');
    let count = $('#reward-count-input');
    if(name.val() != ''){
      if(description.val() != ''){
        if(cost.val() != ''){ 
          if(month.val() != null){
            if(year.val() != null){
              if (deliveryCheckBox.text().includes('Доставка отсутствует')) {
                if (countSpanCheck.attr('class') == 'fa fa-square') {
                  let reward = new RewardCard(
                    image,
                    name.val(),
                    description.val(),
                    cost.val(),
                    null,
                    month.val(),
                    year.val(),
                    'Самовывоз',
                    null
                  );
                  rewards.push(reward);
                  reward.AddFullRewardCard('#rewards-wrapper');
                  reward.AddContolButtons('.reward-card-pay-info:last');
                  ShowAlert('Вознаграждение успешно добавлено', $('#rewards-wrapper > .col-12:last-child'), true);
                  name.val('');
                  description.val('');
                  cost.val('');
                  month.val('Выберите месяц');
                  year.val('Выберите год');
                  count.val('');
                }
                else {
                  if (count.val() != '' && count.val() != '0') {
                    let reward = new RewardCard(
                      image,
                      name.val(),
                      description.val(),
                      cost.val(),
                      count.val(),
                      month.val(),
                      year.val(),
                      'Самовывоз',
                      null
                    );
                    rewards.push(reward);
                    reward.AddFullRewardCard('#rewards-wrapper');
                    reward.AddContolButtons('.reward-card-pay-info:last');
                    ShowAlert('Вознаграждение успешно добавлено', $('#rewards-wrapper > .col-12:last-child'), true);
                    name.val('');
                    description.val('');
                    cost.val('');
                    month.val('Выберите месяц');
                    year.val('Выберите год');
                    count.val('');
                    EnableCountToggle();
                  }
                  else { ShowAlert('Количество вознаграждений должно быть больше 0!', count, false); }
                }
              }
              if (deliveryCheckBox.text().includes('Некоторые страны')) {
                if ($('.added-country').length >= 1) {
                  if (countSpanCheck.attr('class') == 'fa fa-square') {
                    let addedCountries = $('.added-country');
                    let countries = new Array(addedCountries.length);
                    for (let i = 0; i < addedCountries.length; i++) {
                      countries[i] = new DeliveryCountry(addedCountries[i].firstChild.firstChild.data,
                        addedCountries[i].childNodes[1].innerText.substring(1).substring(0, addedCountries[i].childNodes[1].innerText.substring(1).length - 4));
                    }
                    let reward = new RewardCard(
                      image,
                      name.val(),
                      description.val(),
                      cost.val(),
                      null,
                      month.val(),
                      year.val(),
                      'Некоторые страны',
                      countries
                    );
                    rewards.push(reward);
                    reward.AddFullRewardCard('#rewards-wrapper');
                    reward.AddContolButtons('.reward-card-pay-info:last');
                    ShowAlert('Вознаграждение успешно добавлено', $('#rewards-wrapper > .col-12:last-child'), true);
                    name.val('');
                    description.val('');
                    cost.val('');
                    month.val('Выберите месяц');
                    year.val('Выберите год');
                    $('#countries-title').text('');
                    $('.added-country').remove();
                    EnableCountries($('#add-country-box > option'), 'Выберите страну');
                    EnableCountries($('#exception-country-box > option'), 'Страны исключения');
                    count.val('');
                  }
                  else {
                    if (count.val() != '' && count.val() != '0') {
                      let addedCountries = $('.added-country');
                      let countries = new Array(addedCountries.length);
                      for (let i = 0; i < addedCountries.length; i++) {
                        countries[i] = new DeliveryCountry(addedCountries[i].firstChild.firstChild.data,
                          addedCountries[i].childNodes[1].innerText.substring(1).substring(0, addedCountries[i].childNodes[1].innerText.substring(1).length - 4));
                      }
                      let reward = new RewardCard(
                        image,
                        name.val(),
                        description.val(),
                        cost.val(),
                        count.val(),
                        month.val(),
                        year.val(),
                        'Некоторые страны',
                        countries
                      );
                      rewards.push(reward);
                      reward.AddFullRewardCard('#rewards-wrapper');
                      reward.AddContolButtons('.reward-card-pay-info:last');
                      ShowAlert('Вознаграждение успешно добавлено', $('#rewards-wrapper > .col-12:last-child'), true);
                      name.val('');
                      description.val('');
                      cost.val('');
                      month.val('Выберите месяц');
                      year.val('Выберите год');
                      count.val('');
                      countCheckBox.click();
                      $('#countries-title').text('');
                      $('.added-country').remove();
                      EnableCountries($('#add-country-box > option'), 'Выберите страну');
                      EnableCountries($('#exception-country-box > option'), 'Страны исключения');
                    }
                    else { ShowAlert('Количество вознаграждений должно быть больше 0!', count, false); }
                  }
                }
                else {
                  ShowAlert('Выберите страну и введите стоимость доставки!', $('#add-country-cost'), false);
                }
              }
              if (deliveryCheckBox.text().includes('Весь мир')) {
                if ($('#all-world-delivery-cost').val() != '') {
                  if (countSpanCheck.attr('class') == 'fa fa-square') {
                    let addedCountries = $('.added-country');
                    let countries = new Array(addedCountries.length + 1);
                    countries[addedCountries.length] = new DeliveryCountry('all', $('#all-world-delivery-cost').val());
                    for (let i = 0; i < addedCountries.length; i++) {
                      countries[i] = new DeliveryCountry(addedCountries[i].firstChild.firstChild.data,
                        addedCountries[i].childNodes[1].innerText.substring(1).substring(0, addedCountries[i].childNodes[1].innerText.substring(1).length - 4));
                    }
                    let reward = new RewardCard(
                      image,
                      name.val(),
                      description.val(),
                      cost.val(),
                      null,
                      month.val(),
                      year.val(),
                      'Весь мир',
                      countries
                    );
                    rewards.push(reward);
                    reward.AddFullRewardCard('#rewards-wrapper');
                    reward.AddContolButtons('.reward-card-pay-info:last');
                    ShowAlert('Вознаграждение успешно добавлено', $('#rewards-wrapper > .col-12:last-child'), true);
                    name.val('');
                    description.val('');
                    cost.val('');
                    month.val('Выберите месяц');
                    year.val('Выберите год');
                    $('#all-world-delivery-cost').val('');
                    $('#countries-title').text('');
                    $('.added-country').remove();
                    EnableCountries($('#add-country-box > option'), 'Выберите страну');
                    EnableCountries($('#exception-country-box > option'), 'Страны исключения');
                    count.val('');
                  }
                  else {
                    if (count.val() != '' && count.val() != '0') {
                      let addedCountries = $('.added-country');
                      let countries = new Array(addedCountries.length + 1);
                      countries[addedCountries.length] = new DeliveryCountry('all', $('#all-world-delivery-cost').val());
                      for (let i = 0; i < addedCountries.length; i++) {
                        countries[i] = new DeliveryCountry(addedCountries[i].firstChild.firstChild.data,
                          addedCountries[i].childNodes[1].innerText.substring(1).substring(0, addedCountries[i].childNodes[1].innerText.substring(1).length - 4));
                      }
                      let reward = new RewardCard(
                        image,
                        name.val(),
                        description.val(),
                        cost.val(),
                        count.val(),
                        month.val(),
                        year.val(),
                        'Весь мир',
                        countries
                      );
                      rewards.push(reward);
                      reward.AddFullRewardCard('#rewards-wrapper');
                      reward.AddContolButtons('.reward-card-pay-info:last');
                      ShowAlert('Вознаграждение успешно добавлено', $('#rewards-wrapper > .col-12:last-child'), true);
                      name.val('');
                      description.val('');
                      cost.val('');
                      month.val('Выберите месяц');
                      year.val('Выберите год');
                      count.val('');
                      countCheckBox.click();
                      $('#all-world-delivery-cost').val('');
                      $('#countries-title').text('');
                      $('.added-country').remove();
                      EnableCountries($('#add-country-box > option'), 'Выберите страну');
                      EnableCountries($('#exception-country-box > option'), 'Страны исключения');
                    }
                    else { ShowAlert('Количество вознаграждений должно быть больше 0!', count, false); }
                  }
                }
                else {
                  ShowAlert('Введите стоимость доставки по всему миру!', $('#all-world-delivery-cost'), false);
                }
              }
            }
            else{ShowAlert('Введите год доставки вознаграждения!', year, false);}
          }
          else{ShowAlert('Введите месяц доставки вознаграждения!', month, false);}
        }
        else{ShowAlert('Введите стоимость вознаграждения!', cost, false);}
      }
      else{ShowAlert('Введите описание вознаграждения!', description, false);}
    }
    else{ShowAlert('Введите название вознаграждения!', name, false);}
  })

  // добавление вопроса
  $('#question-add-btn').on('click', function(){
    AddQuestion();
  })

  // нажатие на вопрос для появления ответа
  $('.added-questions').on('click', '.added-question-btn', function(event){
    $(event.target.parentNode).next().slideToggle(250);
  })

  // изменение вопроса
  $('.added-questions').on('click', '.change-question-btn', function(event){
    let childrens = $(this.parentNode).children();
    let question = $('#question-input')
    question.val(childrens.children('p > .added-question-btn').text());
    $('#answer-input').val(childrens[1].innerText);
    $('body,html').animate({ scrollTop:  question.offset().top - 80}, 400);
    if($('.added-question').length <= 1){
      $('.added-questions > .title').slideUp(400);
    }
    $(this.parentNode).remove();
  })

  // удаление вопроса
  $('.added-questions').on('click', '.delete-question-btn', function(){
    console.log(this.parentNode);
    if($('.added-question').length <= 1){
      $('.added-questions > .title').slideUp(400);
    }
    $(this.parentNode).remove();
  })

  // ввод фамилии автора
  $('#surname-input').on('input', function(){
    CheckLetters(this);
  })

  // ввод имени автора
  $('#name-input').on('input', function(){
    CheckLetters(this);
  })
  
  // ввод отчества автора
  $('#middle-name-input').on('input', function(){
    CheckLetters(this);
  })

  // ввод контактного телефона
  $('#phone-number-input').on('input', function(){
    CheckNumbers(this, true);
  }) 

  // // выбор месяца рождения
  // $('#month-select').on('change', function(){
  //   let numberSelect = $('#number-select');
  //   let numbers = $('#number-select > option');
  //   if(numbers.length < 32 ){
  //     for (let i = 0; i < 32 - numbers.length; i++) {
  //       numberSelect.append(
  //         '<option>'+ (numbers.length + i)  +'</option>'
  //       );
  //     }
  //   }
  //   switch(this.value){
  //     case 'Апрель':
  //       numberSelect.children().last().remove();
  //       break;
  //     case 'Июнь':
  //       numberSelect.children().last().remove();
  //       break;
  //     case 'Сентябрь':
  //       numberSelect.children().last().remove();
  //       break;
  //     case 'Ноябрь':
  //       numberSelect.children().last().remove();
  //       break;
  //     case 'Февраль':
  //     let year = Number($('#year-select').val());
  //       if(year % 4 == 0 && year % 100 != 0){
  //         numberSelect.children().last().remove();
  //         numberSelect.children().last().remove();
  //         break;
  //       }
  //       if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
  //         numberSelect.children().last().remove();
  //         numberSelect.children().last().remove();
  //         break;
  //       }
  //       else{
  //         numberSelect.children().last().remove();
  //         numberSelect.children().last().remove();
  //         numberSelect.children().last().remove();
  //         break;
  //       }  
  //     default: break;
  //   }
  // })

  // // выбор года рождения
  // $('#year-select').on('change', function(){
  //   let numberSelect = $('#number-select');
  //   let year = Number(this.value);
  //   if($('#month-select').val() == 'Февраль'){
  //       if(year % 4 == 0 && year % 100 != 0){
  //         if(numberSelect.children().length == 29){
  //           numberSelect.append(
  //             '<option>29</option>'
  //           );
  //           return;
  //         }
  //       }
  //       if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
  //         console.log(numberSelect.children().length + 'b');
  //         if(numberSelect.children().length == 29){
  //           numberSelect.append(
  //             '<option>29</option>'
  //           );
  //           return;
  //         }
  //       }
  //       else{
  //         if(numberSelect.children().length == 30){
  //           numberSelect.children().last().remove();
  //           return;
  //         }
  //       }
  //   }
  // })

  // ввод даты рождения автора
  $('#birthday').on('change', function(){
    let birthday = new Date(this.value.substring(0,4),this.value.substring(5,7),this.value.substring(8,10));
    let now = new Date();
    if(birthday > now.setDate(now.getDate() - 6570)){
      ShowAlert('Вы должны быть совершеннолетним(ей)',$(this),false);
      this.value = '';
    }
    if(birthday < now.setDate(now.getDate() - 36500)){
      ShowAlert('Если вам действительно более 120 лет, то напишите в обратную связь',$(this),false);
      this.value = '';
    }
  })

  // ввод даты выдачи паспорта
  $('#passport-getting-date').on('change', function(){
    let date = new Date(this.value.substring(0,4),this.value.substring(5,7),this.value.substring(8,10));
    let now = new Date();
    if(date > now){
      ShowAlert('Введите корректную дату выдачи паспорта',$(this),false);
      this.value = '';
    }
    if(date < now.setDate(now.getDate() - 7300)){
      ShowAlert('Введите корректную дату выдачи паспорта',$(this),false);
      this.value = '';
    }
  })

  // приводит к верхнему регистру серию паспорта
  $('#passport-sries-number').on('input', function(){
    this.value = this.value.toUpperCase();
  })

  // ввод серии и номера паспорта
  $('#passport-sries-number').focusout(function () {
    if (/[A-Z]{2,2}\d{7,7}/.test(this.value) == false) {
      ShowAlert('Введите правильные серию и номер паспорта.', $(this), false);
      this.value = '';
    }
  })

  // визивиг
  $('.header-btn').on( 'click', function() {
    if (window.getSelection() == '') {
      return false;
    }

    let parents = $(window.getSelection().getRangeAt(0).startContainer).parents();
    console.log(window.getSelection().focusNode.parentElement.className);
    if (window.getSelection().getRangeAt(0).startContainer.parentNode.className != 'describing-title'){
      for (let i = 0; i < parents.length; i++){
        if (parents[i].id == 'full-desciption-input'){
          document.execCommand('insertHTML', false, '<span class="describing-title">'+ window.getSelection().getRangeAt(0).extractContents().textContent +'</span>');
        }
      }
    }
    else{
        document.execCommand("removeFormat", false, 'span');
      }
    // let parents = $(window.getSelection().getRangeAt(0).startContainer).parents();
    // if (window.getSelection().getRangeAt(0).startContainer.parentNode.className != 'describing-title') {
    //   for (let i = 0; i < parents.length; i++) {
    //     if (parents[i].id == 'full-desciption-input') {
    //       let range = window.getSelection().getRangeAt(0);
    //       let selectionContents = range.extractContents();
    //       let span = document.createElement("span");
    //       span.appendChild(selectionContents);
    //       span.setAttribute('class', 'describing-title');
    //       range.insertNode(span);
    //       console.log(window.getSelection().getRangeAt(0).startContainer.parentNode.className);
    //       window.getSelection().empty();
    //       break;
    //     }
    //   }
    // }
    // else{
    //   document.execCommand("removeFormat", false, false);
    //   window.getSelection().empty();
    // }
  });
  $('.bold-btn').on( 'click', function() {
    document.execCommand( 'bold', null, null ); 
  });
  $('.italic-btn').on( 'click', function() {
    document.execCommand( 'italic', null, null ); 
  });
  $('.underline-btn').on( 'click', function() {
    document.execCommand( 'underline', null, null ); 
  });
  $('.sub-btn').on( 'click', function() {
    document.execCommand( 'subscript', null, null ); 
  });
  $('.sup-btn').on( 'click', function() {
    document.execCommand( 'superscript', null, null ); 
  });
  $('.list-ul-btn').on( 'click', function() {
    document.execCommand( 'insertUnorderedList', null, null ); 
  });
  $('.list-ol-btn').on( 'click', function() {
    document.execCommand( 'insertOrderedList', null, null ); 
  });
  $('.align-left-btn').on( 'click', function() {
    document.execCommand( 'justifyLeft', null, null ); 
  });
  $('.align-center-btn').on( 'click', function() {
    document.execCommand( 'justifyCenter', null, null ); 
  });
  $('.align-right-btn').on( 'click', function() {
    document.execCommand( 'justifyRight', null, null ); 
  });
  $('.align-justify-btn').on( 'click', function() {
    document.execCommand( 'justifyFull', null, null ); 
  });
  $('.img-btn').on( 'click', function() {
    result = document.execCommand('insertHTML', false, '<img src="images/project-stock.png" class="projectWall"/><p></p>');
  });

  $('#video-btn').on( 'click', function() {
    console.log();
    // $('#full-desciption-input').focus();
    let textBox = $('#input-video-text-box');
    if (textBox.val() != '' && textBox.val().includes('youtu')) {
      let newLink = textBox.val().replace('https://youtu.be', 'https://www.youtube.com/embed');

      let range = window.getSelection().getRangeAt(0);
      // let selectionContents = range.extractContents();
      let video = document.createElement('iframe');
      // video.appendChild(selectionContents);
      video.setAttribute('class', 'video-box');
      video.setAttribute('width', '100%');
      video.setAttribute('height', '400');
      video.setAttribute('src', newLink);
      video.setAttribute('frameborder', '0');
      video.setAttribute('allowfullscreen', 'true');
      range.insertNode(document.createElement('br'));
      range.insertNode(document.createElement('br'));
      range.insertNode(video);
      range.insertNode(document.createElement('br'));

      // result = document.execCommand('insertHTML', false,
      //   '<iframe class="video-box" width="100%" height="400" src="' + newLink + '" frameborder="0" allowfullscreen></iframe><br/><p></p>');
    }
    else {
      ShowAlert('Введите ссылку', textBox, false);
    }
    textBox.val('');
    $('#inputVideoClose').click();
  });

  let linkRange;
  $('.link-btn').on( 'click', function() {
    if (window.getSelection() == '') {
      return false;
    }
    let parents = $(window.getSelection().getRangeAt(0).startContainer).parents();
    console.log(window.getSelection().getRangeAt(0));
    if(window.getSelection().getRangeAt(0).startContainer.parentNode.className != 'link'){
      for (let i = 0; i < parents.length; i++) {
        if (parents[i].id == 'full-desciption-input') {
          linkRange = window.getSelection().getRangeAt(0);
          $('#modal-link-btn').click();
        }
      }
    }
    else{
      document.execCommand("unlink", false, false);
      document.execCommand("removeFormat", false, false);
    }
  });
  $('#input-link-btn').on( 'click', function() {
    let link = $('#input-link');
    if(link.val().trim() != ''){
      // $('#full-desciption-input').focus();
      // document.execCommand('insertHTML', false, 
      // '<a class="link" href="'+ link.val().trim() +'">'+ window.getSelection().getRangeAt(0).extractContents().textContent +'</a>');



      
      let selectionContents = linkRange.extractContents();
      let a = document.createElement('a');
      a.appendChild(selectionContents);
      a.setAttribute('class', 'link');
      a.setAttribute('href', link.val().trim());
      linkRange.insertNode(a);
      $('#inputLinkClose').click();
      window.getSelection().empty();
    }
  });
})