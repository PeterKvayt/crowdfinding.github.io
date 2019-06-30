$(document).ready(function(){

  $('.registerBtn').on('click', function(event){
      $('#modalEnterClose').click();
      $('#modalRegistration').show();
  });

  $('.enterBtn').on('click', function(event){
      $('#modalRegistrationClose').click();
      $('#modalEnter').show();
  });

  // navbar scrolling
  var prevScrollpos = window.pageYOffset;
  $(document).on('scroll', function(){
    if (prevScrollpos > window.pageYOffset) {
      $('#navbar').css({'top': '0'});
    } 
    else {
      $('#navbar').css({'top': '-70px'});
    }
    prevScrollpos = window.pageYOffset;
  });

  // инициализация проектов
  var projects = [
    new ProjectCard(
      'images/exampleProjectPict.png',
      'Музыка',
      'Project Spark',
      'К громкому событию - 30-летнему юбилею легендарной панк-стёб-группы,'+ 
      'представляем сбор на новый альбом, который обещает стать настоящим феноменом '+
      'музыкальной индустрии.',
      '10000',
      '100'
    ),
    new ProjectCard(
      'images/vr.jpg',
      'Другое',
      'Виртуальные радости 2019: Зима близко',
      'Вестник игрового мира в оффлайне, журнал "Виртуальные радости" объявляет подписку до конца 2019 года',
      '1000 ',
      '3402'
    ),
    new ProjectCard(
      'images/child.jpg',
      'Фильмы и видео',
      'Короткометражный фильм-антиутопия о правах ребенка',
      'Сбор средств на расходы во время съемки, а также на постпродакшен короткометражного игрового фильма-антиутопии о правах ребенка в духе "Черного зеркала"',
      '1200',
      '270'
    )
  ]

  // инициализация слайдера
  var slider = new Slider();

  // добавление слайдов и nav dots в разметку
  for (let i = 0; i < projects.length; i++) {
    slider.AddSlide(projects[i], projects.length);
    slider.AddNavDot();
  }

  // запуск слайдера
  slider.Init(projects.length);

  // добавление проектов в разметку
  for (let i = 0; i < projects.length; i++) {
    projects[i].AddProjectCard();
  }

 });