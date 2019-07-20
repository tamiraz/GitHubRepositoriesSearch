(function () {
    'use strict';
    App.factory('gitHubservice', ['$http', '$q', 'appSetting', function ($http, $q, appSetting) {
        var gitHubservicsFactory = {};

        var _searchRepositories = function (repoSearch) {
            var deferred = $q.defer();
            var requestData = {};
            $http({
                url: appSetting.gitHubBaseUrl,
                method: 'GET',
                params: {
                    'q': repoSearch,
                }
            }
            ).then(function (response) {

                if (response.status == "200" && response.data != null) {

                    if (response.data != null) {
                        

                        //get data search form api and filterd it necessary data
                        _searchRepositoriesData = response.data.items.map(function (item, index) {
                            var repItem = {};
                            repItem.id = index;
                            repItem.name = item.name;
                            repItem.isMarked = false;
                            repItem.avatar_url = item.owner.avatar_url == undefined || item.owner.avatar_url == '' ? null : item.owner.avatar_url;
                            return repItem;

                        });
                    }
                    
                    deferred.resolve(_searchRepositoriesData);
                } else {

                    deferred.resolve(_searchRepositoriesData);
                }

            },
                function (error) {
                    
                });

            return deferred.promise;

        }

        var _addItem = function (reopItem) {
            var deferred = $q.defer();
            $http.post(appSetting.apiBaseUrl +
                'api/Session/bookmarks', JSON.stringify(reopItem), {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            ).then(function (response) {

                if (response.status == "200" && response.data != null) {
                    deferred.resolve(response);
                } else {
                    deferred.resolve(response);
                }

            },
                function (error) {
                  
                    deferred.reject(error)
                });

            return deferred.promise;

        }
        //get all marked repositories
        var _getBookmarks = function () {
            var deferred = $q.defer();
            var requestData = {};
            $http({
                url: appSetting.apiBaseUrl + 'api/Session/getBookmarks',
                method: 'GET',
            }
            ).then(function (response) {

                if (response.status == "200" && response.data.allItems != null) {

                    if (response.data != null) {


                        _searchRepositoriesData = response.data.allItems;
                    }
                   
                    deferred.resolve(_searchRepositoriesData);
                } else {

                    deferred.resolve(_searchRepositoriesData);
                }

            },
                function (error) {
                    
                    deferred.reject(error)
                });

            return deferred.promise;

        }
        var _searchRepositoriesData = {};


        gitHubservicsFactory.getBookmarks = _getBookmarks;
        gitHubservicsFactory.addItem = _addItem;
        gitHubservicsFactory.searchRepositories = _searchRepositories;
        return gitHubservicsFactory;
    }]);


})();