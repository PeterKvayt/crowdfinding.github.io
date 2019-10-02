namespace Example2.Models
{
    public class VwActiveProjectSlide
    {
        // id
        public long ProjectID { get; set; }

        // path to img
        public string Image { get; set; }

        // project name
        public string Name { get; set; }

        // project brief description
        public string ShortDescription { get; set; } 

    //    // adding new slide
    //    public AddSlide(project, len, href)
    //    {
    //$('#slidewrapper').css({ 'width':'calc(100% * ' + len + ')'});
    //$('#slidewrapper').append(
    //  '<div class="slide" style="width: calc(100%/' + len + ')">' +
    //    '<a class="slide-wrapper" href="' + href + '">' +
    //      '<div class="slider-descriprion-box" style="width: calc((100%/' + len + ')' + '*0.35' + ')">' +
    //        '<div class="slider-descriprion-title">' + project.Name + '</div>' +
    //        '<div class="slider-descriprion-text">' +
    //          project.Description +
    //        '</div>' +
    //      '</div>' +
    //      '<img class="slide-img lazy" data-original="' + project.ImagePath + '" width="100%" src="data:image/gif;base64,R0lGODlhAwACAIAAAP///wAAACH5BAEAAAEALAAAAAADAAIAAAICjF8AOw==">' +
    //    '</a>' +
    //  '</div>'
    //);
        //}
    }
}