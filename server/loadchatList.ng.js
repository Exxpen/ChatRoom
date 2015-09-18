Meteor.startup(function() {
	if (ChatList.find().count() === 0) {
		var chatlist = [{
			author: "Admin",
			message: "You've just joined the chatroom!",
			colour: "black",
			createdAt: new Date()
		},{
			author: "Admin",
			message: "You've just joined the chatroom!",
			colour: "black",
			createdAt: new Date()
		},{
			author: "Admin",
			message: "You've just joined the chatroom!",
			colour: "black",
			createdAt: new Date()
		}];

		for(var i = 0; i < chatlist.length; i++) {
			ChatList.insert(chatlist[i]);
		};
	}
});