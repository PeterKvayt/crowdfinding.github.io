class Slider {
  
  constructor(){
    this.SlideNow = 1; // index of current slide
    this.TranslateWidth = 0; // one slide width
    this.NavBtnId = 0; // start index of nav btn
    this.CurrentSlide = 1; // index of current slide
    this.TranslateWidth = 0; // one slide width
    this.NavBtnId = 0; // start index of nav btn
    this.SlideInterval = 2000; // interval for slide
  }

  // initialization
  Init(projectsCount) {
    var that = this;
    var switchInterval = setInterval(function(){that.NextSlide()}, that.SlideInterval);
    
    // add active class to first dot
    $('#nav-btns li:first').addClass('slide-nav-btn-active');

    // switch for timer slide
    $('#viewport').hover(
      function () {
        clearInterval(switchInterval);
      },
      function () {
        switchInterval = setInterval(function(){that.NextSlide()}, that.SlideInterval);
      }
    );

    // click - event to next
    $('#next-btn').click(function () {
      that.NextSlide(projectsCount);
    });

    // click - event to previous
    $('#prev-btn').click(function () {
      that.PrevSlide(projectsCount);
    });

    // click-event to dots
    $('.slide-nav-btn').click(function () {
      that.NavBtnId = $(this).index();
      $('.slide-nav-btn-active').removeClass('slide-nav-btn-active');
      $(this).addClass('slide-nav-btn-active');

      if (that.NavBtnId + 1 != that.CurrentSlide) {
        that.TranslateWidth = -$('#viewport').width() * (that.NavBtnId);
        $('#slidewrapper').css({
          'transform': 'translate(' + that.TranslateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + that.TranslateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + that.TranslateWidth + 'px, 0)',
        });
        that.CurrentSlide = that.NavBtnId + 1;
      }
    });
  }

  // adding new slide
  AddSlide(project, len) {
    $('#slidewrapper').css({'width':'calc(100% * ' + len + ')'});
    $('#slidewrapper').append(
      '<div class="slide" style="width: calc(100%/' + len + ')">'+
        '<a class="slide-wrapper" href="#">'+
          '<div class="slider-descriprion-box" style="width: calc((100%/' + len + ')'+'*0.35'+')">'+
            '<div class="slider-descriprion-title">'+ project.Name +'</div>'+
            '<div class="slider-descriprion-text">'+
              project.Description +
            '</div>'+
          '</div>'+
          '<img class="slide-img" src="' + project.ImagePath + '" width="100%">'+
        '</a>'+
      '</div>'
    );
  }
  
  // changing nav dots activity
  ChangeNavDotActivity(){
    $('.slide-nav-btn-active').removeClass('slide-nav-btn-active');
    $('.slide-nav-btn').eq(this.CurrentSlide-1).addClass('slide-nav-btn-active');
  }
  
  // next slide
  NextSlide(projectsCount) {
    if (this.CurrentSlide === projectsCount || this.CurrentSlide <= 0 || this.CurrentSlide > projectsCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        this.CurrentSlide = 1;
        this.ChangeNavDotActivity();
    } else {
      this.TranslateWidth = -$('#viewport').width() * (this.CurrentSlide);
        $('#slidewrapper').css({
            'transform': 'translate(' + this.TranslateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + this.TranslateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + this.TranslateWidth + 'px, 0)',
        });
        this.CurrentSlide++;
        this.ChangeNavDotActivity();
    }
  }

  // previous slide
  PrevSlide(projectsCount) {
    if (this.CurrentSlide === 1 || this.CurrentSlide <= 0 || this.CurrentSlide > projectsCount) {
      this.TranslateWidth = -$('#viewport').width() * (projectsCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + this.TranslateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + this.TranslateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + this.TranslateWidth + 'px, 0)',
        });
        this.CurrentSlide = projectsCount;
        this.ChangeNavDotActivity();
    } else {
      this.TranslateWidth = -$('#viewport').width() * (this.CurrentSlide - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + this.TranslateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + this.TranslateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + this.TranslateWidth + 'px, 0)',
        });
        this.CurrentSlide--;
        this.ChangeNavDotActivity();
    }
  }

  // add new nav dot
  AddNavDot(){
    $('#nav-btns').append(
      '<li class="slide-nav-btn"></li>'
    );
  }

}