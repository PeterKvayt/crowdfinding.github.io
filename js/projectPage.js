$(document).ready(function(){
  // инициализация лотов
  var rewards = [
    new RewardCard(
      'images/chair.jpg',
      'Уникальный стул',
      'Одна из лучших вещей для того, что бы украсить свой дом и сделать его непохожим на другие.',
      '120',
      4,
      'Январь',
      '2020',
      'Самовывоз',
      'whatewer',
      'whatewer'
    ),
    new RewardCard(
      'images/chair.jpg',
      'Уникальный стул',
      'Одна из лучших вещей для того, что бы украсить свой дом и сделать его непохожим на другие.',
      '120',
      4,
      'Январь',
      '2020',
      'Самовывоз',
      'whatewer',
      'whatewer'
    ),new RewardCard(
      'images/chair.jpg',
      'Уникальный стул',
      'Одна из лучших вещей для того, что бы украсить свой дом и сделать его непохожим на другие.',
      '120',
      4,
      'Январь',
      '2020',
      'Самовывоз',
      'whatewer',
      'whatewer'
    ),new RewardCard(
      'images/chair.jpg',
      'Уникальный стул',
      'Одна из лучших вещей для того, что бы украсить свой дом и сделать его непохожим на другие.',
      '120',
      4,
      'Январь',
      '2020',
      'Самовывоз',
      'whatewer',
      'whatewer'
    )
  ]

  // инициаллизация заказов
  var orders = [
    new OrderCard(
      'Иван Иванов',
      'images/user-stock.png',
      'profile.html',
      '20',
      '21.09.2019'
    ),
    new OrderCard(
      'Иван Васильевич',
      'images/user-stock.png',
      'profile.html',
      '1000',
      '22.09.2019'
    ),new OrderCard(
      'Джейсон Стейтем',
      'images/user-stock.png',
      'profile.html',
      '352',
      '23.09.2019'
    ),new OrderCard(
      'Адриано Челентано',
      'images/user-stock.png',
      'profile.html',
      '50',
      '29.09.2019'
    ),
  ] 

  // заполнение лотами
  for (let i = 0; i < rewards.length; i++) {
    rewards[i].AddFullRewardCard($('#rewards-box'));
  }

  // заполнение заказами
  for (let i = 0; i < orders.length; i++) {
    orders[i].AddOrderCard($('#orders-box'));
  }

  // смена таба
  $('.row').on('click', '.category', function(){
    let infoBox = $('#total-info');
    let supportBox = $('#society');
    let active = $('.active-category');
    let unactive = $('.category');
    active.attr('class', 'category');
    unactive.attr('class', 'active-category');
    if (unactive.attr('id') == 'about') {
      supportBox.hide(200);
      infoBox.show(200);
    }
    else {
      infoBox.hide(200);
      supportBox.show(200);
    }
  })
})