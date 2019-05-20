Template.rankings.rendered = function() {
	$("#rankings-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#laws-link").removeClass('selected');
	$("#search-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.rankings.helpers({
	highestNo: function() {
		var highestNo = Meteor.users.findOne({}, {sort: {'profile.noScore': -1}});
		return highestNo;
	},
	highestNoPic: function() {
		var highestNo = Meteor.users.findOne({}, {sort: {'profile.noScore': -1}});
		var username = highestNo.username;
		var userId = highestNo.userId;
		var URL = UserImages.findOne({username: username}, {userId: userId});
		return URL
	},

	highestYes: function() {
		var highestYes = Meteor.users.findOne({}, {sort: {'profile.yesScore': -1}});
		return highestYes;
	},
	highestYesPic: function() {
		var highestYes = Meteor.users.findOne({}, {sort: {'profile.yesScore': -1}});
		var username = highestYes.username;
		var userId = highestYes.userId;
		var URL = UserImages.findOne({username: username}, {userId: userId});
		return URL
	},

});	