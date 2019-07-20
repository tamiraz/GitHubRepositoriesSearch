(function () {
    'use strict';
    App.controller('gitHubRepositories', ['gitHubservice', '$scope', function (gitHubservice, $scope) {

        var self = this;
        //main Data for the view
        self.searchRepositoriesData = [];
        //for bookmarks or search view and functionality
        var viewState = { "search": 1, "bookmarks": 2 }
        self.state = viewState.search;
        //search model
        self.searchText = '';
        //search function for repositories
        self.search = function () {
            self.state = viewState.search;
            if (self.searchText && self.searchText != '') {
                gitHubservice.searchRepositories(self.searchText).then(function (data) {
                    if (data)
                        self.searchRepositoriesData = data;
                })

            }

        }
        //get user Bookmarks
        self.getBookmarks = function () {
            self.state = viewState.bookmarks;
            gitHubservice.getBookmarks().then(function (data) {

                self.searchRepositoriesData = data;
            }

            )
        };

        //add item to main data (gitHubservice)
        self.addItem = function (repoItem) {


            if (repoItem) {
                repoItem.isMarked = !repoItem.isMarked;
                gitHubservice.addItem(repoItem).then(function (data) {
                    

                })
                
            }





        }


    }]);




})();