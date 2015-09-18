angular.module("ChatRoom",['angular-meteor']);

angular.module("ChatRoom").controller("MainController", function($scope, $meteor) {

	$scope.chatList = $meteor.collection(ChatList);

	$scope.author = "";
	$scope.message = "";

	$scope.submit = function() {
		if($scope.message) {
			$scope.chatList.push({
				author: $scope.author,
				message: $scope.message,
				createdAt: new Date()
			});
			$scope.message = "";
		}
	}

	$scope.sort = {
		name: "Ascending",
		value: "-"
	};
	$scope.sortChange = function() {
		if($scope.sort.value == "-") {
			$scope.sort.name = "Descending";
			$scope.sort.value = "+";
		} else {
			$scope.sort.name = "Ascending";
			$scope.sort.value = "-";
		}
	}
});