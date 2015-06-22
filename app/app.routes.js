// sfApp.config(['$routeProvider', function($routeProvider){
//   $routeProvider
//     .when('/', {
//       templateUrl: "app/components/help-training/views/helpTrainingView.html",
//       controller: "helpTrainingCtrl"
//     })
//     .otherwise({
//       redirectTo: '/'
//     });
// }]);
sfApp.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state("root", {
			url: '/',
			views: {
				"header": { 
					templateUrl: "app/components/global/partials/globalHeader.html",
					controller: "helpTrainingCtrl" 
				},
				"searchBar": {
					templateUrl: "app/components/help-training/views/partials/searchBar.html",
					controller: "helpTrainingCtrl"
				},
				"restOfTemplate": { 
					templateUrl: "app/components/help-training/views/helpTrainingView.html",
					controller: "helpTrainingCtrl"
				}

			}
		})


		$urlRouterProvider
		.otherwise('/');
		

});