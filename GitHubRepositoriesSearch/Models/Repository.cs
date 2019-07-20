using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GitHubRepositoriesSearch.Models
{
    public class Repository
    {
        private List<RepositoryItem> _allItems;
        public List<RepositoryItem> allItems
        {
            get
            {
                return _allItems;
            }

        }
     public void Add(RepositoryItem repositoryItem)
        {
            RepositoryItem item=null;
            try
            {
                 item = _allItems.Single(e => e.id == repositoryItem.id);
            }
            catch
            {

            }
            if (_allItems == null)
                _allItems = new List<RepositoryItem>();
            //if item exists delete it
            if (item != null)
                _allItems.Remove(item);
            if(repositoryItem.isMarked)
                _allItems.Add(repositoryItem);
              
        } 
    }
}