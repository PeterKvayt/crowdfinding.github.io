namespace Example2.Models
{
    public class vwSlides
    {
        public readonly long ProjectID; // id
        public string Image { get; set; } // path to img
        public string Name { get; set; } // project name
        public string ShortDescription { get; set; } // project brief description
    }
}