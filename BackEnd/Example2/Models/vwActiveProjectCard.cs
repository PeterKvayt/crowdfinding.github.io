using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Example2.Models
{
    public class VwActiveProjectCard
    {
        public long ProjectID { get; set; } // id
        public string Image { get; set; } // path to img
        public string Category { get; set; } // category name
        public string Name { get; set; } // project name
        public string ShortDescription { get; set; } // project brief description
        public int Budget { get; set; } // financial aim
        public int? Progress { get; set; } // progress
        //public string LeftSketchTime { get; set; } // auto delete timer
        public TimeSpan LeftTime { get; set; } // left time
        public int LeftDays { get; set; } // left days

        //public VwActiveProjectCard(long id, string image, string category, string name, string description, int budget, double progress, string leftSketchTime, DateTime leftTime)
        //{
        //    ProjectID = id;
        //    Image = string.IsNullOrEmpty(image) ? "~/images/stock-project.jpg" : image;
        //    Category = string.IsNullOrEmpty(category) ? "Категория" : category;
        //    Name = string.IsNullOrEmpty(name) ? "Название проекта" : name;
        //    ShortDescription = string.IsNullOrEmpty(description) ? "Описание проекта" : description;
        //    Budget = budget;
        //    Progress = progress;
        //    //LeftSketchTime = leftSketchTime;
        //    LeftTime = leftTime;
        //    //if (string.IsNullOrEmpty(image))
        //    //{
        //    //    Image = "~/images/stock-reward.jpg";
        //    //}
        //    //else
        //    //{
        //    //    Image = image;
        //    //}
        //    //if (category == "" || category == null)
        //    //{
        //    //    this.Category = "Категория";
        //    //}
        //    //else
        //    //{
        //    //    this.Category = category;
        //    //}
        //    //if (name == "" || name == null)
        //    //{
        //    //    this.Name = "Название вознаграждения";
        //    //}
        //    //else
        //    //{
        //    //    this.Name = name;
        //    //}
        //    //if (description == "" || description == null)
        //    //{
        //    //    this.Description = "Описание";
        //    //}
        //    //else
        //    //{
        //    //    this.Description = description;
        //    //}
        //    //this.Budget = budget;
        //    //this.Progress = progress;
        //    //this.LeftSketchTime = leftSketchTime;
        //    //this.LeftTime = leftTime;
        //}

        //public double ProgressProp
        //{
        //    get
        //    {
        //        double newProgress = (Progress == null) ? 0 : (double)Progress;
        //        return newProgress;
        //    }
        //}

        // return progress in percent
        public string GetProgress()
        {
            Progress = Progress == null ? 0 : Progress;
            return string.Format("{0:0}", ((double)Progress / Budget) * 100)+"%";
        }

        // return width of progress-bar
        public string GetProgressLine()
        {
            Progress = Progress == null ? 0 : Progress;
            double result = ((double)Progress / Budget) * 100;
            return result > 100 ? "100%" : result.ToString()+"%";
        }

        // return project status
        public string GetProgressStatus()
        {
            Progress = Progress == null ? 0 : Progress;
            return Progress < Budget ? "ИДЕТ СБОР" : "УСПЕХ";
        }

        // return left time
        public string GetLeftTime()
        {
            if(LeftDays > 0)
            {
                return LeftDays.ToString() + "д.";
            }
            else
            {
                if (LeftTime.Hours >= 0 && LeftTime.Minutes > 0)
                {
                    return LeftTime.Hours + "ч. " + LeftTime.Minutes + "м.";
                }
            }
            return "none";
        }
    }
}

