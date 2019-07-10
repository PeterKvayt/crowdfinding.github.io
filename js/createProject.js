jQuery(function($){
  $("#fullDescription").summernote({
    lang: 'ru-RU',
    minHeight: 400,
    placeholder: 'Введите полное описание проекта',
    toolbar:[
      ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough', 'superscript', 'subscript']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']],
    ['insert',['picture', 'link']],
    ['fontsize', ['fontsize']]
    ],
    popover: false
  });
})

$(document).ready(function(){
  const comissionPercent = 0.1;
  const maxProjectDuration = 180;
  var categories = $('.project-category');
  var projectPicture = $('#project-picture');
  var projectCategory = $('#project-category');
  var projectName = $('#project-name');
  var projectShortDescription = $('#project-short-description');
  var inputProjectName = $('#input-project-name');
  var inputShortDescription = $('#input-short-description');
  var inputCategory = $('#input-category');
  var downloadPicture = $('#picture-path');
  var financialGoal = $('#financial-goal');
  var projectDurationEl = $('#project-duration');
  var comissionFee = $('#comission-fee');
  var tax = $('#tax');
  var total = $('#total');

  function CheckNumbers(target){
    if (target.val().match(/[^0-9]/g)) {return false;}
    else{return true;}
  }

  // event on change tabs
  categories.on('click', function(){
    $('.active-category').attr('class', 'category project-category');
    $(this).attr('class', 'active-category project-category');
    $('.active-describe-project-box').attr('class', 'describe-project-box');
    $($(this).attr('href')).attr('class','active-describe-project-box');
  })
  
  // event on input project name
  inputProjectName.on('keyup', function(){
    projectName.text(inputProjectName.val());
    if (inputProjectName.val() === '') {
      projectName.text('Название проекта');
    }
  })
  
  // event on input project short description
  inputShortDescription.on('keyup', function(){
    projectShortDescription.text(inputShortDescription.val());
    if (inputShortDescription.val() === '') {
      projectShortDescription.text('Описание проекта');
    }
  })

  // event on change category
  inputCategory.change(function(){
    projectCategory.text(inputCategory.val());
  })
  
  // ввод винансовой цели проекта
  financialGoal.on('keyup', function(){
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    comissionFee.text(Number(financialGoal.val()) * comissionPercent);
  })

  // ввод продолжительности проекта
  projectDurationEl.on('keyup', function(){
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    if(projectDurationEl.val() > maxProjectDuration){projectDurationEl.val(maxProjectDuration);}
  })

  // downloadPicture.on('change', function(event){
  //   $('#preview-picture').src = URL.createObjectURL(event.target.files[0]);
  // })

   var loadFile = function(event){
    $('#preview-picture').src = URL.createObjectURL(event.target.files[0]);
  }
  
  // смена вида доставки
  $('.delivery-checkbox').on('click', function(){
    $('.fa-check-square').attr('class','fa fa-square');
    $('.delivery-input-active').attr('class','delivery-input');
    $('.delivery-checkbox-active').attr('class','delivery-checkbox');
    $(this).attr('class', 'delivery-checkbox-active');
    $('.delivery-checkbox-active span').attr('class','fa fa-check-square');
    $('.delivery-checkbox-active + .delivery-input').attr('class','delivery-input-active');
  })

  // обработка нажатия добавить страну доставки
  $('#add-country-btn').on('click', function(){
    let country = $('#add-country-box').val();
    let cost = $('#add-country-cost').val();
    if(cost == '' || Number(cost) < 0){ cost = 0;}
      if(country != 'Выберите страну' && country != null && CheckNumbers($('#add-country-cost')) ){
        $('#add-country-box > option:contains('+ country +')').attr('disabled', 'disabled');
        $('#countries-title').text('Страны доставки');
        $('#countries').append(
          '<p class="added-country">'+
            '<span class="countries-country title-min-left country-text">'+ country +'</span>'+
            '<span class="countries-delivery-cost title-min-left country-text"> '+ cost +' BYN</span>'+
            '<span class="my-btn change-delivery-country country-btn" >Изменить</span>'+
            '<span class="my-btn remove-delivery-country country-btn">Удалить</span>'+
        '</p>'
        )
      }

  })
})