class UserCard {

  constructor(imagePath, name, path) {
    this.ImagePath = imagePath; // путь к аве
    this.Name = name; // имя пользователя
    this.Path = path; // ссылка на пользователя
  }

  // добавляет карточку пользователя
  AddUserCard(selector) {
    $(selector).append(
      '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 user-card-wrapper">' +
        '<a class="user-card-link" href="'+ this.Path +'">' +
          '<div class="user-card-box">' +
            '<div class="user-card-name">' +
              this.Name +
            '</div>' +
            '<img class="lazy" width="100%" data-original="'+ this.ImagePath +'" alt="user" src="data:image/gif;base64,R0lGODlhAwACAIAAAP///wAAACH5BAEAAAEALAAAAAADAAIAAAICjF8AOw==">' +
          '</div>' +
        '</a>' +
      '</div>'
    )
  }

}

