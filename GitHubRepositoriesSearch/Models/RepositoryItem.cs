using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GitHubRepositoriesSearch.Models
{
    public class RepositoryItem
    {
      public int id { get; set; }
      public string name { get; set; }
      public bool isMarked { get; set; }
      public string avatar_url { get; set; }
    }
}