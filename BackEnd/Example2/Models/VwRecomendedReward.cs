using System;

namespace Example2.Models
{
    public class VwRecomendedReward
    {
        // id лота
        public long RewardID { get; set; }

        // id проекта
        public long ProjectID { get; set; }

        // название лота
        public string RewardName { get; set; }

        // путь к изображению
        public string RewardImage { get; set; }

        // описание лота
        public string RewardDescription { get; set; }

        // стоимость
        public int Price { get; set; }

        // оставшиеся лоты
        //private int? LeftRewards { get; set; }
        private int? leftRewards;

        public int? LeftRewards
        {
            get
            {
                int? result = leftRewards < 0 ? null : leftRewards;
                return result;
            }
            set => leftRewards = value;
        }

        public string GetLeftRewards()
        {
            string result = LeftRewards == null ? "" : "ОСТАЛОСЬ " + leftRewards.ToString();
            return result;
        }
    }
}