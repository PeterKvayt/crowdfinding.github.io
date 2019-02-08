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