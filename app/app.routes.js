sfApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: "app/components/help-training/views/helpTrainingView.html",
      controller: "helpTrainingCtrl"
    })
}]);
