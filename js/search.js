$(document).ready(function(){
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

  var rewards = [
    
    new RewardCard(
      'images/candle.jpeg',
      'Свечи',
      'Они создадут незабываемую атмосферу сказки и чудес и подарят вам счастье и тепло, которое не погаснет многие вечера и будет согревать вас.',
      '20',
      12
    ),
    new RewardCard(
      'images/notebook.jpg',
      'Записная книга для тех кто много пишет',
      'Для тех, кто ценит свое время, эта вешь будет незаменимой находкой и поможет нашему проекту.',
      '25',
      68
    ),
    new RewardCard(
      'images/chair.jpg',
      'Уникальный стул',
      'Одна из лучших вещей для того, что бы украсить свой дом и сделать его непохожим на другие.',
      '120',
      4
    ),
    new RewardCard(
      'images/pen.jpeg',
      'Сувенирная ручка',
      'Эта ручка будет выделять вас из толпы своим классическим стилем.',
      '13',
      47
    ),
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
      12
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
      '13',
      47
    )
  ]

  var users = [
    new UserCard(
      'images/user-stock.png',
      'Тим Кук',
      'profile.html'
    ),
    new UserCard(
      'images/user-stock.png',
      'Гейб Ньюел',
      'profile.html'
    ),
    new UserCard(
      'images/user-stock.png',
      'Просто пользователь',
      'profile.html'
    ),
    new UserCard(
      'images/user-stock.png',
      'Зеленое общество',
      'profile.html'
    ),
  ]

  // добавление проектов в разметку
  for (let i = 0; i < projects.length; i++) {
    projects[i].AddProjectCard('#projects-search-results');
  }

  // добавление вознаграждений в разметку
  for (let i = 0; i < rewards.length; i++) {
    rewards[i].AddRewardCard('#rewards-search-results');
  }

  // добавление пользователей в разметку
  for (let i = 0; i < users.length; i++) {
    users[i].AddUserCard('#users-search-results');
  }

  // смена параметра поиска
  $('#search-params').on('change', function(){
    $('.search-results').hide(0)
    console.log(this.value);
    switch(this.value){
      case 'Всё':
        $('.search-results').show(0);
        break;
      case 'Проекты':
        $('#projects-search-results').show(0);
        break;
      case 'Вознаграждения':
        $('#rewards-search-results').show(0);
        break;
      case 'Пользователи':
        $('#users-search-results').show(0);
        break;
        default:break;
    }
  })
})