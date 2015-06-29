sfApp.controller('helpTrainingCtrl', ['$scope', '$state', function($scope, $state){
  $scope.message = "lol helpTrainingCtrl view";

  $scope.tabs = [
  	{ title: "FAQs", content: "FAQs content" },
  	// { title: "lulz 2", content: "yay!", disabled: true }
  	{title: "Topics", content: "Topics content"},
  	{title: "Community", content: "Community content"},
  	{title: "Categories", content: "Categories content"}
  ];

}]);
