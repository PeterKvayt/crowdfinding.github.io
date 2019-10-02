using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Example2.Models
{
    public class IndexModels
    {
        public IEnumerable<VwActiveProjectCard> ProjectCards { get; set; }

        public IEnumerable<VwActiveProjectSlide> ProjectSlide { get; set; }
    }
}
