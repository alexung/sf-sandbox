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
				url: "/",
				views: {
					"helpTrainingView":	{
						templateUrl: "app/components/help-training/views/helpTrainingView.html",
						controller: "helpTrainingCtrl"
					},
					"header@root": { 
						templateUrl: "app/components/global/partials/globalHeader.html",
						controller: "helpTrainingCtrl" 
					},
					"searchBar@root": {
						templateUrl: "app/components/help-training/views/partials/searchBar.html",
						controller: "helpTrainingCtrl"
					},
					"sixBoxes@root": {
						templateUrl: "app/components/help-training/views/partials/sixBoxes.html",
						controller: "helpTrainingCtrl"
					},
					"topSolutions@root": {
						templateUrl: "app/components/help-training/views/partials/topSolutions.html",
						controller: "helpTrainingCtrl"
					},
					"additionalHelpTraining@root": {
						templateUrl: "app/components/help-training/views/partials/additionalHelpTraining.html",
						controller: "helpTrainingCtrl"
					},
					"upgradeStatement@root": {
						templateUrl: "app/components/help-training/views/partials/upgradeStatement.html",
						controller: "helpTrainingCtrl"
					},
					"footer@root": {
						templateUrl: "app/components/global/partials/globalFooter.html",
						controller: "helpTrainingCtrl"
					}

				}

			})
			.state("technical", {
				url: "/technical",
				views: {
					"technicalView": {
						templateUrl: "app/components/technical/views/technicalView.html",
						controller: "helpTrainingCtrl"
					},
					"header@technical": { 
						templateUrl: "app/components/global/partials/globalHeader.html",
						controller: "helpTrainingCtrl" 
					},
					"searchBar@technical": {
						templateUrl: "app/components/technical/views/partials/searchBar.html",
						controller: "helpTrainingCtrl"
					},
					"trending@technical": {
						templateUrl: "app/components/technical/views/partials/trending.html",
						controller: "helpTrainingCtrl"
					}
				}

			})

		$urlRouterProvider
			.otherwise('/');
		

});