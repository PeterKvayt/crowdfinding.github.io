class ProjectCard {

  constructor(imagePath, category, name, description, budget, progress, leftSketchTime, leftTime) {
    this.ImagePath = imagePath;
    if(imagePath == '' || imagePath == null){
      this.ImagePath = 'images/stock-reward.jpg';
    }
    else{
      this.ImagePath = imagePath;
    }
    if(category == '' || category == null){
      this.Category = 'Категория';
    }
    else{
      this.Category = category;
    }
    if(name == '' || name == null){
      this.Name = 'Название вознаграждения';
    }
    else{
      this.Name = name;
    }
    if(description == '' || description == null){
      this.Description = 'Описание';
    }
    else{
      this.Description = description;
    }
    this.Budget = budget;
    this.Progress = progress;
    this.LeftSketchTime = leftSketchTime;
    this.LeftTime = leftTime;
  }

  // добавляет карточку проекта
  AddProjectCard(selector){
    $(selector).append(
      '<div class="col-lg-4 col-md-4 card-wrapper">'+
        '<div class="card-box">'+
          '<div class="card-picture-wrapper">'+
            '<div class="card-picture-box">'+
              '<a class="card-picture-link" href="project-page.html">ПОДДЕРЖАТЬ ПРОЕКТ</a>'+
              '<img class="card-picture-hover" src="images/exampleProjectPictHover.png"/>' +
              '<img class="card-picture" src="'+ this.ImagePath +'" alt="Project picture">'+
            '</div>'+
          '</div>'+
          '<div class="card-body">'+
            '<span class="fa fa-certificate fa-2x project-card-status-pict"></span>'+
            '<a class="link filter" href="all-projects.html">'+ this.Category +'</a>'+
            '<a class="card-description" href="project-page.html">'+
              '<span class="projectName">'+ this.Name +'</span>'+
              this.Description +
            '</a>'+
            '<a class="card-progress-box" href="project-page.html">'+
              '<div class="progress-bar" style="width:'+ this.GetProgressLine() +'%"></div>'+
            '</a>'+
            '<div class="row">'+
              '<div class="col">'+
                '<div class="row">'+
                  '<div class="col">'+
                    '<a class="card-up-status" href="project-page.html">'+ this.GetProgress() +' %</a>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="col">'+
                    '<a class="card-down-status" href="project-page.html">'+ this.GetProgressStatus() +'</a>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class="col">'+
                '<div class="row">'+
                  '<div class="col card-right-status">'+
                    '<a class="card-up-status" href="project-page.html">'+ this.Progress +' BYN</a>'+
                  '</div>'+
                '</div>'+
              '<div class="row">'+
                '<div class="col card-right-status">'+
                  '<a class="card-down-status" href="project-page.html"><span class="fa fa-clock-o fa-fw"></span>'+ this.LeftTime +'</a>'+
                '</div>'+
              '</div>'+
            '</div>'+
            
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'
    );
    // ShowProgressStatusPict();
  }

  AddSketchCard(selector){
    $(selector).append(
      '<div class="col-lg-4 col-md-4 card-wrapper">'+
        '<div class="card-box">'+
          '<div class="card-picture-wrapper">'+
            '<div class="card-picture-box">'+
              '<a class="card-picture-link" href="create-project.html">РЕДАКТИРОВАТЬ</a>'+
              '<img class="card-picture-hover" src="images/exampleProjectPictHover.png"/>' +
              '<img class="card-picture" src="'+ this.ImagePath +'" alt="Project picture">'+
            '</div>'+
          '</div>'+
          '<div class="card-body">'+
            '<span class="link filter">'+ this.Category +'</span>'+
            '<a class="card-description" href="create-project.html">'+
              '<span class="projectName">'+ this.Name +'</span>'+
              this.Description +
            '</a>'+
            // '<span class="fa fa-clock-o fa-fw"></span><span class="card-down-status">'+ this.LeftSketchTime +'</span>'+
            '<a class="row" href="create-project.html">'+
              '<div class="col card-right-status">'+
                '<div class="card-down-status">'+
                  '<span class="fa fa-clock-o fa-fw"></span><span>'+ this.LeftSketchTime +'</span>'+
                '</div>'+
              '</div>'+
            '</a>'+
            // 
            // '<a class="card-progress-box" href="project-page.html">'+
            //   '<div class="progress-bar" style="width:'+ this.GetProgressLine() +'%"></div>'+
            // '</a>'+
            // '<div class="row">'+
            //   '<div class="col">'+
            //     '<div class="row">'+
            //       '<div class="col">'+
            //         '<a class="card-up-status" href="project-page.html">'+ this.GetProgress() +' %</a>'+
            //       '</div>'+
            //     '</div>'+
            //     '<div class="row">'+
            //       '<div class="col">'+
            //         '<a class="card-down-status" href="project-page.html">'+ this.GetProgressStatus() +'</a>'+
            //       '</div>'+
            //     '</div>'+
            //   '</div>'+
            //   '<div class="col">'+
            //     '<div class="row">'+
            //       '<div class="col card-right-status">'+
            //         '<a class="card-up-status" href="project-page.html">'+ this.Progress +' BYN</a>'+
            //       '</div>'+
            //     '</div>'+
            //   '<div class="row">'+
            //     '<div class="col card-right-status">'+
            //       '<a class="card-down-status" href="project-page.html">СОБРАНО</a>'+
            //     '</div>'+
            //   '</div>'+
            // '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'
    )
  }

  // return progress in percent
  GetProgress() {

    return ((Number(this.Progress) / Number(this.Budget)) * 100).toFixed();
  }

  // return width of progress-bar
  GetProgressLine() {
    let result = Number(this.Progress) / Number(this.Budget) * 100;
    return result > 100 ? 100 : result;
  }

  // return project status
  GetProgressStatus(){
    if (Number(this.Progress) < Number(this.Budget)) {
      return 'ИДЕТ СБОР';
    }
    else{
      // $('.project-card-status-pict').last().css('display', 'block');
      return 'УСПЕХ';
    }
  }

  // 
  ShowProgressStatusPict(){
    let profit = Number(this.Progress);
    let aim = Number(this.Budget);
    let pict = $('.fa.fa-certificate.fa-2x.project-card-status-pict').last();
    if (profit >= aim) {
      pict.css('display', 'block');
      if((profit / aim) >= 2){
        pict.css('color', '#00e600');
      }
      if((profit / aim) >= 3){
        pict.css('color', 'purple');
      }
    }
  }
}
;

