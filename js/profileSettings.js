$(document).ready(function(){
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
})