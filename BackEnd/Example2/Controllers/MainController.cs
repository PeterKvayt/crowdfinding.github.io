using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Example2.Models;

namespace Example2.Controllers
{

    public class MainController : Controller
    {
        private CrowdFindingContext db;
        public MainController(CrowdFindingContext context)
        {
            db = context;
        }

    //    public ProjectCard[] projects = new ProjectCard[]
    //{
    //    new ProjectCard(
    //      "images/exampleProjectPict.png",
    //      "Музыка",
    //      "Project Spark",
    //      "К громкому событию - 30-летнему юбилею легендарной панк-стёб-группы,"+
    //      "представляем сбор на новый альбом, который обещает стать настоящим феноменом "+
    //      "музыкальной индустрии.",
    //      10000,
    //      100,
    //      "0",
    //      "23д."
    //    ),
    //    new ProjectCard(
    //      "~/images/vr.jpg",
    //      "Другое",
    //      "Виртуальные радости 2019: Зима близко",
    //      "Вестник игрового мира в оффлайне, журнал \"Виртуальные радости\" объявляет подписку до конца 2019 года",
    //      1000,
    //      3402,
    //      "0",
    //      "11ч."
    //    ),
    //    new ProjectCard(
    //      "~/images/child.jpg",
    //      "Фильмы и видео",
    //      "Короткометражный фильм-антиутопия о правах ребенка",
    //      "Сбор средств на расходы во время съемки, а также на постпродакшен короткометражного игрового фильма-антиутопии о правах ребенка в духе \"Черного зеркала\".",
    //      1200,
    //      1300,
    //      "0",
    //      "ЗАВЕРШЕН"
    //    ),
    //    new ProjectCard(
    //      "~/images/exampleProjectPict.png",
    //      "Музыка",
    //      "Project Spark",
    //      "К громкому событию - 30-летнему юбилею легендарной панк-стёб-группы, представляем сбор на новый альбом, который обещает стать настоящим феноменом музыкальной индустрии.",
    //      1000,
    //      2000,
    //      "0",
    //      "23д."
    //    ),
    //    new ProjectCard(
    //      "~/images/vr.jpg",
    //      "Другое",
    //      "Виртуальные радости 2019: Зима близко",
    //      "Вестник игрового мира в оффлайне, журнал \"Виртуальные радости\" объявляет подписку до конца 2019 года",
    //      1000,
    //      3400,
    //      "0",
    //      "11ч."
    //    ),
    //    new ProjectCard(
    //      "~/images/child.jpg",
    //      "Фильмы и видео",
    //      "Короткометражный фильм-антиутопия о правах ребенка",
    //      "Сбор средств на расходы во время съемки, а также на постпродакшен короткометражного игрового фильма-антиутопии о правах ребенка в духе \"Черного зеркала\".",
    //      1200,
    //      1300,
    //      "0",
    //      "ЗАВЕРШЕН"
    //    ),
    //    new ProjectCard(
    //      "~/images/exampleProjectPict.png",
    //      "Музыка",
    //      "Project Spark",
    //      "К громкому событию - 30-летнему юбилею легендарной панк-стёб-группы, представляем сбор на новый альбом, который обещает стать настоящим феноменом музыкальной индустрии.",
    //      1000,
    //      2000,
    //      "0",
    //      "23д."
    //    ),
    //    new ProjectCard(
    //      "~/images/vr.jpg",
    //      "Другое",
    //      "Виртуальные радости 2019: Зима близко",
    //      "Вестник игрового мира в оффлайне, журнал \"Виртуальные радости\" объявляет подписку до конца 2019 года",
    //      1000,
    //      3400,
    //      "0",
    //      "11ч."
    //    ),
    //    new ProjectCard(
    //      "~/images/child.jpg",
    //      "Фильмы и видео",
    //      "Короткометражный фильм-антиутопия о правах ребенка",
    //      "Сбор средств на расходы во время съемки, а также на постпродакшен короткометражного игрового фильма-антиутопии о правах ребенка в духе \"Черного зеркала\".",
    //      1200,
    //      1300,
    //      "0",
    //      "ЗАВЕРШЕН"
    //    ),
    //    new ProjectCard(
    //      "~/images/exampleProjectPict.png",
    //      "Музыка",
    //      "Project Spark",
    //      "К громкому событию - 30-летнему юбилею легендарной панк-стёб-группы, представляем сбор на новый альбом, который обещает стать настоящим феноменом музыкальной индустрии.",
    //      1000,
    //      2000,
    //      "0",
    //      "23д."
    //    ),
    //    new ProjectCard(
    //      "~/images/vr.jpg",
    //      "Другое",
    //      "Виртуальные радости 2019: Зима близко",
    //      "Вестник игрового мира в оффлайне, журнал \"Виртуальные радости\" объявляет подписку до конца 2019 года",
    //      1000,
    //      3400,
    //      "0",
    //      "11ч."
    //    ),
    //    new ProjectCard(
    //      "~/images/child.jpg",
    //      "Фильмы и видео",
    //      "Короткометражный фильм-антиутопия о правах ребенка",
    //      "Сбор средств на расходы во время съемки, а также на постпродакшен короткометражного игрового фильма-антиутопии о правах ребенка в духе \"Черного зеркала\".",
    //      1200,
    //      1300,
    //      "0",
    //      "ЗАВЕРШЕН"
    //    )
    //};

        public IActionResult Index()
        { 
            return View();
        }

        public async Task<IActionResult> AllProjects()
        {
            return View(await db.vwActiveProjectCards.ToListAsync());
        }

        [HttpGet]
        public IActionResult Buy(int id)
        {
            ViewBag.PhoneId = id;
            return View();
        }
        [HttpPost]
        public string Buy(Order order)
        {
            //db.Orders.Add(order);
            // сохраняем в бд все изменения
            //db.SaveChanges();
            return "Спасибо, " + order.User + ", за покупку!";
        }

        public string Square(int a = 3, int h = 10)
        {
            double s = a * h / 2;
            return $"Площадь треугольника с основанием {a} и высотой {h} равна {s}";
        }

        //public IActionResult Index()
        //{
        //    return View();
        //}

        //public IActionResult Privacy()
        //{
        //    return View();
        //}

        //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        //public IActionResult Error()
        //{
        //    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        //}
    }
}
