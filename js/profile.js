$(document).ready(function(){
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
    )
  ]

  var supportedProjects = [
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

  // добавление проектов в разметку
  for (let i = 0; i < projects.length; i++) {
    projects[i].AddProjectCard('#projects-box');
  }
  // добавление поддержанных проектов в разметку
  for (let i = 0; i < supportedProjects.length; i++) {
    supportedProjects[i].AddProjectCard('#supported-box');
  }

  // смена таба
  $('.row').on('click', '.category', function(){
    let infoBox = $('#projects-box');
    let supportBox = $('#supported-box');
    let active = $('.active-category');
    let unactive = $('.category');
    active.attr('class', 'category');
    unactive.attr('class', 'active-category');
    if (unactive.attr('id') == 'about') {
      supportBox.fadeOut(200);
      infoBox.fadeIn(200);
    }
    else {
      infoBox.fadeOut(200);
      supportBox.fadeIn(200);
    }
  })
})