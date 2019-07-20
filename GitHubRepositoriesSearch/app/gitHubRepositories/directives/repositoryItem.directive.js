(function () {
    'use strict';
    App.directive('repositoryItem', [function () {
        return {
            scope: {
                itemData: '=',
                addItem: '&'

            },
            restrict: 'E',
            replace: true,
            templateUrl: 'app/gitHubRepositories/views/repositoryItem.html',
            link: function ($scope, element, attrs) {
                $scope.emptyAvatar = 'app/img/empty-avatar.jpg'
                
            }

        }


    }])

})();