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
      '100',
      '0',
      '20д.'
    ),
    new ProjectCard(
      'images/vr.jpg',
      'Другое',
      'Виртуальные радости 2019: Зима близко',
      'Вестник игрового мира в оффлайне, журнал "Виртуальные радости" объявляет подписку до конца 2019 года',
      '1000 ',
      '3402',
      '0',
      '11ч.'
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
      '100',
      '0',
      '20д.'
    ),
    new ProjectCard(
      'images/vr.jpg',
      'Другое',
      'Виртуальные радости 2019: Зима близко',
      'Вестник игрового мира в оффлайне, журнал "Виртуальные радости" объявляет подписку до конца 2019 года',
      '1000 ',
      '3402',
      '0',
      '11ч.'
    ),
    new ProjectCard(
      'images/child.jpg',
      'Фильмы и видео',
      'Короткометражный фильм-антиутопия о правах ребенка',
      'Сбор средств на расходы во время съемки, а также на постпродакшен короткометражного игрового фильма-антиутопии о правах ребенка в духе "Черного зеркала".',
      '1200',
      '1300',
      '0',
      'ЗАВЕРШЕН'
    )
  ]

  var sketches = [
    new ProjectCard(
      'images/exampleProjectPict.png',
      'Музыка',
      'Project Spark',
      'К громкому событию - 30-летнему юбилею легендарной панк-стёб-группы,'+ 
      'представляем сбор на новый альбом, который обещает стать настоящим феноменом '+
      'музыкальной индустрии.',
      '10000',
      '100',
      '6д.'
    ),
    new ProjectCard(
      'images/vr.jpg',
      'Другое',
      'Виртуальные радости 2019: Зима близко',
      'Вестник игрового мира в оффлайне, журнал "Виртуальные радости" объявляет подписку до конца 2019 года',
      '1000',
      '3402',
      '2д.'
    ),
    new ProjectCard(
      'images/vr.jpg',
      'Другое',
      'Пример 1',
      'Вестник игрового мира в оффлайне, журнал "Виртуальные радости" объявляет подписку до конца 2019 года',
      '1000',
      '3402',
      '5д.'
    ),
    new ProjectCard(
      'images/vr.jpg',
      'Другое',
      'Черновик',
      'Вестник игрового мира в оффлайне, журнал "Виртуальные радости" объявляет подписку до конца 2019 года',
      '1000',
      '3402',
      '12ч.'
    ),
    new ProjectCard(
      'images/vr.jpg',
      'Другое',
      'пример 2',
      '',
      '1000',
      '3402',
      '1ч.'
    ),
  ]
  // добавление проектов в разметку
  for (let i = 0; i < projects.length; i++) {
    projects[i].AddProjectCard('#projects-box');
    projects[i].ShowProgressStatusPict();
  }
  // добавление поддержанных проектов в разметку
  for (let i = 0; i < supportedProjects.length; i++) {
    supportedProjects[i].AddProjectCard('#supported-box');
    supportedProjects[i].ShowProgressStatusPict();
  }

  // добавление черновиков в разметку
  for (let i = 0; i < sketches.length; i++) {
    sketches[i].AddSketchCard('#sketch-box');
  }

  // смена таба
  $('.row').on('click', '.category', function(){
    let projectsBox = $('#projects-box');
    let supportBox = $('#supported-box');
    let sketchBox = $('#sketch-box');
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
      case 'about':
        projectsBox.hide(200);
        break;
      case 'support':
        supportBox.hide(200);
        break;
      case 'sketch':
        sketchBox.hide(200);
        break;
      default: break;
    }
    switch(point.id){
      case 'about':
        projectsBox.show(200);
        break;
      case 'support':
        supportBox.show(200);
        break;
      case 'sketch':
        sketchBox.show(200);
        break;
      default: break;
    }
  })
})