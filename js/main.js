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
      'Сбор средств на расходы во время съемки, а также на постпродакшен короткометражного игрового фильма-антиутопии о правах ребенка в духе "Черного зеркала".',
      '1200',
      '270'
    )
  ]

  // инициализация слайдера
  var slider = new Slider(projects.length);

  var rewards = [
    new RewardCard(
      'images/chair.jpg',
      'Уникальный стул',
      'Одна из лучших вещей для того, что бы украсить свой дом и сделать его непохожим на другие.',
      '120',
      4
    ),
    new RewardCard(
      'images/candle.jpeg',
      'Свечи',
      'Они создадут незабываемую атмосферу сказки и чудес и подарят вам счастье и тепло, которое не погаснет многие вечера и будет согревать вас.',
      '20',
      12,
      'Project Spark Project Spark Project Spark'
    ),
    new RewardCard(
      'images/notebook.jpg',
      'Записная книга для тех кто много пишет',
      'Для тех, кто ценит свое время, эта вешь будет незаменимой находкой и поможет нашему проекту.',
      '25',
      68
    ),
    new RewardCard(
      'images/pen.jpeg',
      'Сувенирная ручка',
      'Эта ручка будет выделять вас из толпы своим классическим стилем.',
      // 'a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a',
      '13',
      47
    )
  ]

  // добавление слайдов и nav dots в разметку
  for (let i = 0; i < projects.length; i++) {
    slider.AddSlide(projects[i], projects.length);
    slider.AddNavDot();
  }

  // запуск слайдера
  slider.Init(projects.length);

  // добавление проектов в разметку
  for (let i = 0; i < projects.length; i++) {
    projects[i].AddProjectCard('#popular-projects');
    projects[i].AddProjectCard('#recomended-projects');
  }

  for (let i = 0; i < rewards.length; i++) {
    rewards[i].AddRewardCard('#rewards');
  }

 });