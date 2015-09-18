angular.module("ChatRoom",['angular-meteor']);

angular.module("ChatRoom").controller("MainController", function($scope, $meteor) {

	$scope.chatList = $meteor.collection(ChatList);

	$scope.newMessage = {
		author: "",
		message: "",
		colour: "black"
	};

	$scope.black = "black",	$scope.red = "red",	$scope.blue = "blue",
	$scope.grey = "grey", $scope.green = "green", $scope.purple = "purple";

	$scope.changeColour = function(newcolour) {
		$scope.newMessage.colour = newcolour;
	};

	$scope.submit = function() {
		console.log("You pressed submit!");
		if($scope.newMessage.message) {
			if($scope.chatList.length >= 20)
				$scope.chatList.splice(0,1);
			$scope.chatList.push({
				author: $scope.newMessage.author,
				message: $scope.newMessage.message,
				colour: $scope.newMessage.colour,
				createdAt: new Date()
			});
			$scope.newMessage.message = "";
		}
	};
});