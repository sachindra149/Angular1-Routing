/* app.js  */

angular.module('kingsApp', [
	'kingsApp.controllers',
	'ngRoute'
])

.run(function($rootScope, $route, $timeout){
	$rootScope.layout	=	{};
	$rootScope.layout.loading	=	false;

	$rootScope.$on('$routeChangeStart', function(){
		console.log('$routeChangeStart');
		$timeout(function(){
			$rootScope.layout.loading	=	true;
		});
	});

	$rootScope.$on('$routeChangeSuccess', function(){
		console.log('$routeChangeSuccess');
		$timeout(function(){
			$rootScope.layout.loading	=	false;
		}, 1000);
	});

	$rootScope.$on('$routeChangeError', function(){
		console.log('$routeChangeError');
		$timeout(function(){
			$rootScope.layout.loading	=	false;
		});
	});
})

.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl	: 'templates/home-page.html',
			controller 	: 'contentController',
			activeTab	: 'home'
		})
		.when('/history',{
			templateUrl	: 'templates/kings-history.html',
			controller 	: 'contentController',
			activeTab	: 'history'
		})
		.when('/benefits', {
			templateUrl	: 'templates/benefits.html',
			controller 	: 'contentController',
			activeTab	: 'benefits'
		})
		.when('/news', {
			templateUrl	: 'templates/news.html',
			controller 	: 'contentController',
			activeTab	: 'news'
		})
		.when('/support', {
			templateUrl	: 'templates/contact.html',
			controller 	: 'contentController',
			activeTab	: 'support'
		})
		.otherwise({
			templateUrl	: 'templates/error.html'
		})
}]);
