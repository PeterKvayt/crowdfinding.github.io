using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Example2.Models
{
    public class ProjectPageModels
    {
        // проект
        public List<ViewAllProject> Project { get; set; }

        // лоты проекта
        public List<ViewAllRewards> Rewards { get; set; }

    }
}
