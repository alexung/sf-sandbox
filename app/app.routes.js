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
				"sixBoxes": {
					templateUrl: "app/components/help-training/views/partials/sixBoxes.html",
					controller: "helpTrainingCtrl"
				},
				"topSolutions": {
					templateUrl: "app/components/help-training/views/partials/topSolutions.html",
					controller: "helpTrainingCtrl"
				},
				"additionalHelpTraining": {
					templateUrl: "app/components/help-training/views/partials/additionalHelpTraining.html",
					controller: "helpTrainingCtrl"
				},
				"upgradeStatement": {
					templateUrl: "app/components/help-training/views/partials/upgradeStatement.html",
					controller: "helpTrainingCtrl"
				},
				"footer": {
					templateUrl: "app/components/global/partials/globalFooter.html",
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