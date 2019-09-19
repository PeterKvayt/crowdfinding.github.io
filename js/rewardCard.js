class RewardCard{
   constructor(picture, name, description, price, left, deliveryMonth, deliveryYear, deliveryType, delivery, project){
    this.Picture = picture; // катринка
    this.Name = name; // название лота
    this.Description = description; // описание лота
    this.Price = price; // стоимость
    if(left != null){this.Left = 'ОСТАЛОСЬ ' + left;} // оставшееся количество
    else{this.Left = '';}
    if(deliveryMonth != null){this.DeliveryMonth = deliveryMonth} // месяц доставки
    else{this.DeliveryMonth = '';}
    if(deliveryYear != null){this.DeliveryYear = deliveryYear} // год доставки
    else{this.DeliveryYear = '';}
    if(deliveryType != null){this.DeliveryType = deliveryType;} // тип доставки
    else{this.DeliveryType = ''};
    this.Delivery = delivery; // страны доставки
    this.Project = project; // проект лота
    // this.Href = href; // ссылка на оплату лота
  }

  AddRewardCard(selector){
    $(selector).append(
      '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">'+
      '<a class="reward-link" href="project-page.html">'+
        '<div class="reward-card-box">'+
          '<img class="reward-img lazy" data-original="'+ this.Picture +'" alt="rewardImg" src="data:image/gif;base64,R0lGODlhAwACAIAAAP///wAAACH5BAEAAAEALAAAAAADAAIAAAICjF8AOw=="/>'+
          '<div class="reward-card-body">'+
            '<div class="reward-card-description">'+
              '<div class="reward-title">'+ this.Name +'</div>'+
              this.Description +
            '</div>'+
            '<div class="reward-card-pay-info">'+
              '<div class="row">'+
                '<div class="col">'+
                  '<div class="reward-cost">'+ this.Price +' BYN</div>'+
                '</div>'+
                '<div class="col">'+
                  '<div class="rewards-left">'+ this.Left +'</div>'+
               '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</a>'+
    '</div>'
    );
  }

  AddFullRewardCard(selector){
    $(selector).append(
      '<div class="col-12">' +
        // '<a class="reward-link" href="projectPage.html">' +
          '<div class="reward-card-box">' +
            '<img class="reward-img lazy" data-original="' + this.Picture + '" src="data:image/gif;base64,R0lGODlhAwACAIAAAP///wAAACH5BAEAAAEALAAAAAADAAIAAAICjF8AOw=="/>' +
            '<div class="reward-card-body">' +
              '<div class="reward-card-description-full">' +
                '<div class="reward-title-full">' + this.Name + '</div>' +
                this.Description +
              '</div>' +
              '<div class="reward-card-pay-info">' +
                '<div class="row">' +
                  '<div class="col">' +
                  '<span class="card-down-status">Примерная дата доставки</span>'+
                  '<span class="reward-card-description-full">'+ this.DeliveryMonth +' '+ this.DeliveryYear +'</span>'+
                  '</div>' +
                '</div>' +
                '<div class="row">' +
                  '<div class="col">' +
                  '<span class="card-down-status">Способ получения</span>'+
                  '<span class="reward-card-description-full">'+ this.DeliveryType +'</span>'+
                  '</div>' +
                '</div>' +
                '<div class="row">' +
                  '<div class="col">' +
                    '<div class="reward-cost">' + this.Price + ' BYN</div>' +
                  '</div>' +
                  '<div class="col">' +
                    '<div class="rewards-left">' + this.Left + '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        // '</a>' +
      '</div>'
    );
  }

  AddPayReward(selector){
    $(selector).append(
    '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'+
        '<div class="reward-card-box">'+
          '<img class="reward-img lazy" data-original="'+ this.Picture +'" alt="rewardImg" src="data:image/gif;base64,R0lGODlhAwACAIAAAP///wAAACH5BAEAAAEALAAAAAADAAIAAAICjF8AOw=="/>'+
          '<div class="reward-card-body">'+
            '<div class="reward-card-description-full">'+
              '<div class="reward-title">'+ this.Name +'</div>'+
              '<div class="description" style="display: none;">' + this.Description +'</div>' +
              '<span class="link show-description-btn">Развернуть описание</span>'+
            '</div>'+
            '<div class="reward-card-pay-info">'+
              '<div class="row">' +
                '<div class="col">' +
                  '<span class="card-down-status">Примерная дата доставки</span>' +
                  '<span class="reward-card-description-full">' + this.DeliveryMonth + ' ' + this.DeliveryYear + '</span>' +
                '</div>' +
              '</div>' +
              '<div class="row">' +
                '<div class="col">' +
                  '<span class="card-down-status">Способ получения</span>' +
                  '<span class="reward-card-description-full">' + this.DeliveryType + '</span>' +
                '</div>' +
              '</div>' +
              '<div class="row">' +
                '<div class="col">' +
                  '<div class="reward-cost">' + this.Price + ' BYN</div>' +
                '</div>' +
                '<div class="col">' +
                  '<div class="rewards-left">' + this.Left + '</div>' +
                '</div>' +
              '</div>'+
              '<div class="row">' +
                '<div class="col">' +
                  '<a class="link" href="pay-page.html">Продолжить</a>' +
                '</div>' +
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
    '</div>'
    )
  }

  AddContolButtons(selector){
    $(selector).append(
      '<div class="row">'+
        '<div class="col">' +
          '<div class="change-reward-btn min-btn">'+
            '<span class="fa fa-pencil fa-fw"></span>'+
            'Изменить'+
          '</div>' +
        '</div>' +
        '<div class="col" style="text-align:end;">' +
          '<div class="delete-reward-btn min-btn">'+
            '<span class="fa fa-times fa-fw"></span>'+
            'Удалить'+
          '</div>' +
        '</div>' +
      '</div>'
    );
  }
}