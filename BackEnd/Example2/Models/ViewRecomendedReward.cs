﻿using System;

namespace Example2.Models
{
    public class ViewRecomendedReward
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
        private int? leftRewards;

        //public ViewRecomendedReward(long RewardID, long ProjectID, string RewardName, string RewardImage, string RewardDescription, int Price, int? leftRewards)
        //{
        //    this.RewardID = RewardID;
        //    this.ProjectID = ProjectID;
        //    this.RewardName = RewardName;
        //    this.RewardImage = RewardImage;
        //    this.RewardDescription = RewardDescription;
        //    this.Price = Price;
        //    this.leftRewards = leftRewards;
        //}

        public int? LeftRewards
        {
            get
            {
                int? result = leftRewards < 0 ? null : leftRewards;
                return result;
            }
            set => leftRewards = value;
        }

        // возращает оставшееся число лотов
        public string GetLeftRewards()
        {
            string result = LeftRewards == null ? "" : "ОСТАЛОСЬ " + leftRewards.ToString();
            return result;
        }
    }
}