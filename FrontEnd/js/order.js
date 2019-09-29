class OrderCard{
  constructor(userName, userImg, userLink, rewardCost, orderDate){
    this.UserName = userName;
    this.UserImg = userImg;
    this.UserLink = userLink;
    this.RewardCost = rewardCost;
    this.OrderDate = orderDate;
  }

  AddOrderCard(selector){
    $(selector).append(
      '<div class="col-lg-4 col-md-4 col-sm-4">'+
        '<div class="box">'+
          '<div class="row">'+
            '<div class="col-lg-3">'+
              '<a href="'+ this.UserLink +'">'+
                '<img src="'+ this.UserImg+'" alt="ava" style="border-radius:4px; width:65px;text-decoration: none;">'+
              '</a>'+
            '</div>'+
            '<div class="col-lg-8">'+
                '<a class="link" href="'+ this.UserLink +'">'+ this.UserName +'</a>'+
                '<br>'+
                '<span class="reward-title-full">'+ this.RewardCost +' BYN</span>'+
                '<br>'+
                '<span style="color: #AFAFAF;font-size: 14px;">'+ this.OrderDate +'</span>'+
              '</div>'+
            '</div>'+
          '</div>'+
      '</div>'
    );
  }
}