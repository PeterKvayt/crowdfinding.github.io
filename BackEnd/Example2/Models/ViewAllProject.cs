using System;

namespace Example2.Models
{
    public class ViewAllProject
    {
        // id
        public long ProjectID { get; set; }
        
        // название проекта
        public string Name { get; set; }

        // путь к картинке проекта
        public string Image { get; set; }

        // ссылка на видео
        public string VideoUrl { get; set; }

        // финансовая цель проекта
        public int Budget { get; set; }

        // город релизвации
        public string Location { get; set; }

        // полное описание
        public string FullDescription { get; set; }

        // краткое описание
        public string ShortDescription { get; set; }

        // название категории
        public string CategoryName { get; set; }

        // прогресс
        public int? Progress { get; set; }

        // имя пользователя
        public string UserName { get; set; }

        // id пользователя
        public long UserID { get; set; }

        // изображение пользователя
        public string UserImage { get; set; }

        // оставшиеся дни
        public int LeftDays { get; set; }

        // оставшееся время
        public TimeSpan LeftTime { get; set; }

        // количество заказов
        public int Orders { get; set; }
    }
}