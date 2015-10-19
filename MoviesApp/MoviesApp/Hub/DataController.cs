using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;
using MoviesApp.Models;
using Newtonsoft.Json;

namespace MoviesApp.Hub
{

    public class DataController
    {
        public static string ApiUrl = "https://api.themoviedb.org/3/";
        public static string ApiKey = "?api_key=34a209538e9c2bf4cbcdef696f2bf6a2";
        private static RootObject _apiRootObject = new RootObject();

    //  public ActionResult MovieSearch(string query, string page = "1")
    //  {
    //      var searchMovies = DataController.ApiCall("search", "search/multi", page, query);
    //      return PartialView("../Partials/_SearchResults", searchMovies);
    //  }
    public static RootObject ApiCall(string type, string call, string page = null, string query = null)
        {
            var callString = call + ApiKey;
            callString = (!page.IsNullOrWhiteSpace())
                ? callString + "&page=" + page
                : callString;

            callString = (!query.IsNullOrWhiteSpace())
                ? callString + "&query=" + query
                : callString;

            var client = new WebClient{BaseAddress = ApiUrl};
            var json = client.DownloadString(callString);
            RootObject movies = JsonConvert.DeserializeObject<RootObject>(json);
            return movies;
        }
    }
}
