class RewardCard{
   constructor(picture, name, description, price, left, project){
    this.Picture = picture;
    this.Name = name;
    this.Description = description;
    this.Price = price;
    this.Left = left;
    this.Project = project;
  }

  AddRewardCard(selector){
    $(selector).append(
      '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">'+
      '<a class="reward-link" href="projectPage.html">'+
        '<div class="reward-card-box">'+
          '<img class="reward-img" src="'+ this.Picture +'" alt="rewardImg"/>'+
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
                  '<div class="rewards-left">ОСТАЛОСЬ '+ this.Left +'</div>'+
               '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</a>'+
    '</div>'
    )
  }
}