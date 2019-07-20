using GitHubRepositoriesSearch.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace GitHubRepositoriesSearch.Controllers
{
    public class SessionController : ApiController
    {
        private Repository gitHubRepository = null;
        [HttpPost]
        public HttpResponseMessage bookmarks([FromBody] RepositoryItem repositoryItem)
        {
            HttpResponseMessage  response = new HttpResponseMessage();
            try
            {
                gitHubRepository.Add(repositoryItem);
                response.StatusCode = HttpStatusCode.OK;
             
            }
            catch
            {
                response.StatusCode = HttpStatusCode.BadRequest;

            }
            return response;
        }
        
        [HttpGet]
        public HttpResponseMessage getBookmarks()
        {
             HttpResponseMessage  response = new HttpResponseMessage();
            try
            {
                response.StatusCode = HttpStatusCode.OK;
                response.Content = new StringContent(JsonConvert.SerializeObject(gitHubRepository), System.Text.Encoding.UTF8, "application/json");
            }
            catch
            {
                response.StatusCode = HttpStatusCode.BadRequest;
            }
            return response;
        }
        public SessionController()
        {
            //every request try to get Session data
            gitHubRepository = HttpContext.Current.Session["gitHubRepository"] as Repository;
            if (gitHubRepository==null)
            {
                gitHubRepository = new Repository();
                HttpContext.Current.Session["gitHubRepository"] = gitHubRepository;
            }
         
        }
    }
}
