$(document).ready(function(){
  // смена способа оплаты
  $('.pay-way').on('click', function(){
    $('.active-category.pay-way').attr('class', 'category pay-way');
    $(this).attr('class','active-category pay-way');
    
    if(this.innerText.trim() == 'ЕРИП'){
      console.log(this.innerText);
      $('#erip-pay-info').show(200);
      $('#continue-btn').attr('href', 'erip-page.html')
    }
    else{
      $('#erip-pay-info').hide(200);
      $('#continue-btn').attr('href', 'pay-card-page.html')
    }
  })

  // смена приватности отображения поддержки проекта
  $('.private-pay').on('click', function(){
    $('.active-category.private-pay').attr('class', 'category private-pay');
    $(this).attr('class','active-category private-pay');
  })
})