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


        //public async Task<IActionResult> Index()
        public IActionResult Index()
        {
            //public IEnumerable<VwActiveProjectCard> projectCards = db.vwActiveProjectCards.ToListAsync();
            IndexModels model = new IndexModels
            {
                //ProjectCards = await db.vwActiveProjectCards.ToListAsync();
                //ProjectSlide = await db.vwActiveProjectSlides.ToListAsync();
                ProjectCards = db.vwActiveProjectCards.ToList(),
                ProjectSlide = db.vwActiveProjectSlides.ToList(),
                RecomendedRewards = db.vwRecomendedRewards.ToList()
            };
            return View(model);
        }

        public async Task<IActionResult> AllProjects()
        {
            return View(await db.vwActiveProjectCards.ToListAsync());
        }

        //public async Task<IActionResult> CreateProjectRules()
        public IActionResult CreateProjectRules()
        {
            return View();
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

