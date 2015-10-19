using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using MoviesApp.Hub;
using MoviesApp.Models;
using Newtonsoft.Json;

namespace MoviesApp.Controllers
{

    public class HomeController : Controller
    {

        public ActionResult Index(string page = "1")
        {
            var popularMovies = DataController.ApiCall("popular", "movie/popular", page);
            @ViewBag.Message = "Kappa123.";
            //@ViewBag.Kappa = popularMovies;

            return View(popularMovies);
        }

        public ActionResult MovieSearch(string query, string page = "1")
        {
            var searchMovies = DataController.ApiCall("search", "search/multi", page, query);
            return PartialView("../Partials/_SearchResults", searchMovies);
        }

        public ActionResult Browse()
        {
            ViewBag.Message = "Le ebik Browse page.";

            return View();
        }
    }
}