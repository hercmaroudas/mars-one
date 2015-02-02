'use strict';

var marsOneApp = angular.module('marsOneApp', ['ngRoute','ngSanitize']).
config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'homeController'});
  $routeProvider.when('/missions', {templateUrl: 'partials/missions.html', controller: 'missionsController'});
  
  
  $routeProvider.when('/orbit',
{
	templateUrl: 'partials/orbit.html',
	controller: 'orbitController',
	css: 'css/orbit.css',
	js: ['http://code.jquery.com/ui/1.11.2/jquery-ui.js','scripts/raphael-min.js'],
	resolve: {
		script: function() {
			console.log('resolve called');
			if(!angular.element('script#orbit-jq-ui').length) {
				angular.element('head').append('<script id=\'orbit-jq-ui\' src=\'scripts/jquery-ui.min.js\'></script>');
			}
			
			/*
			if(!angular.element('script#orbit-raphael').length) {
				angular.element('head').append('<script id=\'orbit-raphael\' src=\'scripts/raphael-min.js\'></script>');
			}
			
			if(!angular.element('script#orbit-orbit').length) {
				angular.element('head').append('<script id="orbit-orbit" type="text/javascript" src="scripts/raphael.draggable.js"></script>');
			}
			*/
			if(!angular.element('script#orbit-animation').length) {
				angular.element('head').append('<script id=\'orbit-animation\' src=\'scripts/orbit.js\'></script>');
			}
		}
	}
});
  $routeProvider.otherwise({redirectTo: '/'});
}])



marsOneApp.directive('head', ['$rootScope','$compile',
    function($rootScope, $compile){
        return {
            restrict: 'E',
            link: function(scope, elem){
                var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
                elem.append($compile(html)(scope));
                scope.routeStyles = {};
                $rootScope.$on('$routeChangeStart', function (e, next, current) {
                    if(current && current.$$route && current.$$route.css){
                        if(!angular.isArray(current.$$route.css)){
                            current.$$route.css = [current.$$route.css];
                        }
                        angular.forEach(current.$$route.css, function(sheet){
                            delete scope.routeStyles[sheet];
                        });
                    }
                    if(next && next.$$route && next.$$route.css){
                        if(!angular.isArray(next.$$route.css)){
                            next.$$route.css = [next.$$route.css];
                        }
                        angular.forEach(next.$$route.css, function(sheet){
                            scope.routeStyles[sheet] = sheet;
                        });
                    }
                });
            }
			
        };
    }
]);
