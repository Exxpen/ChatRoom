angular.module("ChatRoom",['angular-meteor']);

angular.module("ChatRoom").controller("MainController", function($scope, $meteor) {

	$scope.chatList = $meteor.collection(ChatList);

	$scope.author = "";
	$scope.message = "";
	$scope.text = "asdfadsfd";

	$scope.submit = function() {
		console.log("You pressed submit!");
		if($scope.message) {
			if($scope.chatList.length >= 20) {
				$scope.chatList.splice(0,1);
			}

			$scope.chatList.push({
				author: $scope.author,
				message: $scope.message,
				createdAt: new Date()
			});
			$scope.message = "";
		}
	};

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
	};
});