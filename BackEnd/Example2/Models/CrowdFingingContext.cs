using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Example2.Models
{
    public class CrowdFindingContext : DbContext
    {
        //public DbSet<User> Users { get; set; } // пользователи

        //public DbSet<Category> Categories { get; set; } // категории проектов

        //public DbSet<EripPayment> EripPayments { get; set; } // переводы через ерип

        //public DbSet<OrderAddres> OrderAddresses { get; set; } // адрес доставки лота

        //public DbSet<Order> Orders { get; set; } // заказ лота

        //public DbSet<Project> Projects { get; set; } // проект

        public DbSet<VwActiveProjectCard> vwActiveProjectCards { get; set; } // текущие карточки проектов

        //public DbSet<vwSlides> Slide { get; set; } // слайды проектов

        //public DbSet<Question> Questions { get; set; } // часто задаваемый вопрос

        //public DbSet<RewardGeography> RewardGeographies { get; set; } // география доставки лота

        //public DbSet<Reward> Rewards { get; set; } // лоты

        //public DbSet<SocialNetworksType> SocialNetworksTypes { get; set; } // типы социальных сетей

        //public DbSet<UsersSocialNetwork> UsersSocialNetworks { get; set; } // социальные сети пользователей

        //public DbSet<UsersWebSite> UsersWebSites { get; set; } // сайты пользователей

        public CrowdFindingContext(DbContextOptions<CrowdFindingContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VwActiveProjectCard>(entity => {
                entity.HasKey(e => e.ProjectID);
            });
        }
    }
}
