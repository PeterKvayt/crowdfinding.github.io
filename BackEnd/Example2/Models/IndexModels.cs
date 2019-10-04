using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Example2.Models
{
    public class IndexModels
    {
        // модель карточки проектов
        public IEnumerable<VwActiveProjectCard> ProjectCards { get; set; }

        // модель слайды
        public IEnumerable<VwActiveProjectSlide> ProjectSlide { get; set; }

        // модель рекомендовванные лоты
        public IEnumerable<VwRecomendedReward> RecomendedRewards { get; set; }
    }
}
