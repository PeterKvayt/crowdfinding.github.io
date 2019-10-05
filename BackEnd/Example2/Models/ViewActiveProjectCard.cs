using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Example2.Models
{
    public class ViewActiveProjectCard
    {
        public long ProjectID { get; set; } // id
        public string Image { get; set; } // path to img
        public string Category { get; set; } // category name
        public string Name { get; set; } // project name
        public string ShortDescription { get; set; } // project brief description
        public int Budget { get; set; } // financial aim
        public int? Progress { get; set; } // progress
        public TimeSpan LeftTime { get; set; } // left time
        public int LeftDays { get; set; } // left days

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
            return result > 100 ? "100%" : result.ToString().Replace(",",".") + "%";
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

        // show certificate ico
        public string ShowStatusCertificate()
        {
            return Progress > Budget ? "display: block;" : "";
        }

        // show chek ico and set color
        public string ShowStatusCheck()
        {
            string style = Progress > Budget ? "display: block;" : ""; ;
            if (Progress/Budget >= 2)
            {
                if(Progress / Budget >= 3)
                {
                    style += "color: plum;";
                }
                else
                {
                    style += "color: #00e600;";
                }
            }
            return style;
        }
    }
}

