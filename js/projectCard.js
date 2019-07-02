class ProjectCard {

  constructor(imagePath, category, name, description, budget, progress) {
    this.ImagePath = imagePath;
    this.Category = category;
    this.Name = name;
    this.Description = description;
    this.Budget = budget;
    this.Progress = progress;
  }

  // добавляет карточку проекта
  AddProjectCard(selector){
    $(selector).append(
      ' <div class="col-lg-4 col-md-4 card-wrapper">'+
        '<div class="card-box">'+
          '<div class="card-picture-wrapper">'+
            '<div class="card-picture-box">'+
              '<a class="card-picture-link" href="projectPage.html">ПОДДЕРЖАТЬ ПРОЕКТ</a>'+
              '<img class="card-picture-hover" src="images/exampleProjectPictHover.png"/>' +
              '<img class="card-picture" src="'+ this.ImagePath +'" alt="Project picture">'+
            '</div>'+
          '</div>'+
          '<div class="card-body">'+
            '<a class="link filter" href="allProjects.html">'+ this.Category +'</a>'+
            '<a class="card-description" href="projectPage.html">'+
              '<span class="projectName">'+ this.Name +'</span>'+
              this.Description +
            '</a>'+
            '<a class="card-progress-box" href="projectPage.html">'+
              '<div class="progress-bar" style="width:'+ this.GetProgressLine() +'%"></div>'+
            '</a>'+
            '<div class="progressStatus row">'+
              '<div class="col">'+
                '<div class="row">'+
                  '<div class="col">'+
                    '<a class="card-up-status" href="projectPage.html">'+ this.GetProgress() +' %</a>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="col">'+
                    '<a class="card-down-status" href="projectPage.html">'+ this.GetProgressStatus() +'</a>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class="col">'+
                '<div class="row">'+
                  '<div class="col card-right-status">'+
                    '<a class="card-up-status" href="projectPage.html">'+ this.Progress +' BYN</a>'+
                  '</div>'+
                '</div>'+
              '<div class="row">'+
                '<div class="col card-right-status">'+
                  '<a class="card-down-status" href="projectPage.html">СОБРАНО</a>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'
    )
  }

  // return progress in percent
  GetProgress() {

    return ((Number(this.Progress) / Number(this.Budget)) * 100).toFixed(2);
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
      return 'УСПЕХ';
    }
  }
}
;

