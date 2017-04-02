/* controllers.js  */
angular.module('kingsApp.controllers', [])

.controller('contentController', function($scope){

})

.controller('navigationController', function($scope, $location){
	$scope.isActive	=	function(route){
		return route	===		$location.path();
	}
});
