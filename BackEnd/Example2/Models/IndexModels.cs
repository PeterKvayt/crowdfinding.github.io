using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Example2.Models
{
    public class IndexModels
    {
        // модель карточки проектов
        public IEnumerable<ViewActiveProjectCard> ProjectCards { get; set; }

        // модель слайды
        public IEnumerable<ViewActiveProjectSlide> ProjectSlide { get; set; }

        // модель рекомендовванные лоты
        public IEnumerable<ViewRecomendedReward> RecomendedRewards { get; set; }
    }
}
