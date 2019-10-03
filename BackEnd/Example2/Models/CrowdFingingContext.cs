﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Example2.Models
{
    public class CrowdFindingContext : DbContext
    {
        // пользователи
        //public DbSet<User> Users { get; set; } 

        // категории проектов
        //public DbSet<Category> Categories { get; set; } 

        // переводы через ерип
        //public DbSet<EripPayment> EripPayments { get; set; } 

        // адрес доставки лота
        //public DbSet<OrderAddres> OrderAddresses { get; set; } 

        // заказ лота
        //public DbSet<Order> Orders { get; set; } 

        // проект
        //public DbSet<Project> Projects { get; set; } 

        // текущие карточки проектов
        public DbSet<VwActiveProjectCard> vwActiveProjectCards { get; set; }
        
        // текущие карточки проектов
        public DbSet<VwActiveProjectSlide> vwActiveProjectSlides { get; set; }

        // слайды проектов
        //public DbSet<vwSlides> Slide { get; set; } 

        // часто задаваемый вопрос
        //public DbSet<Question> Questions { get; set; } 

        // география доставки лота
        //public DbSet<RewardGeography> RewardGeographies { get; set; } 

        // лоты
        //public DbSet<Reward> Rewards { get; set; } 

        //рекомендованные лоты
        public DbSet<VwRecomendedReward> vwRecomendedRewards { get; set; }

        // типы социальных сетей
        //public DbSet<SocialNetworksType> SocialNetworksTypes { get; set; } 

        // социальные сети пользователей
        //public DbSet<UsersSocialNetwork> UsersSocialNetworks { get; set; } 

        // сайты пользователей
        //public DbSet<UsersWebSite> UsersWebSites { get; set; } 

        public CrowdFindingContext(DbContextOptions<CrowdFindingContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VwActiveProjectCard>(entity => {
                entity.HasKey(e => e.ProjectID);
            });

            modelBuilder.Entity<VwActiveProjectSlide>(entity => {
                entity.HasKey(e => e.ProjectID);
            });

            modelBuilder.Entity<VwRecomendedReward>(entity => {
                entity.HasKey(e => e.RewardID);
            });
        }
    }
}
