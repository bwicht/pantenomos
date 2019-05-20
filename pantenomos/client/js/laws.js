Template.laws.rendered = function() {
	$("#laws-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#rankings-link").removeClass('selected');
	$("#search-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.laws.helpers({
	laws: function() {
		var laws = Laws.find({}, {sort: {createdAt: -1}});
		return laws;
	}
});

Template.laws.events({
	"click #no": function() {
		var thisUser = Meteor.userId();
		var thisLaws = Laws.findOne({_id: this._id})._id;
		var lawsAuthor = Laws.findOne({_id: this._id}).userId;
		var Name = Meteor.user().username;
		var thisLawsVotes = Laws.findOne({_id: this._id}, {voted: {$in: Name}}).voted;

		if (thisLawsVotes.indexOf(Name) > -1) {
			Bert.alert("You cannot vote twice", "danger", "growl-top-right");
			// In the array!, meaning user has voted
		} else {
			// Not in the Array, Do stuff.
			Meteor.call("countVote", thisLaws, Name);
			Meteor.call("userPointNo", lawsAuthor);
			Meteor.call("noVote", thisUser, thisLaws);
			Bert.alert("Your Vote Was Placed", "success", "growl-top-right");

		}

		if (Name == thisLawsVotes) {
			Bert.alert("You cannot vote for your own comment", "danger", "growl-top-right");
		}
	},

	"click #yes": function() {
		var thisUser = Meteor.userId();
		var thisLaws = Laws.findOne({_id: this._id})._id;
		var lawsAuthor = Laws.findOne({_id: this._id}).userId;
		var Name = Meteor.user().username;
		var thisLawsVotes = Laws.findOne({_id: this._id}, {voted: {$in: Name}}).voted;

		if (thisLawsVotes.indexOf(Name) > -1) {
			Bert.alert("You cannot vote twice", "danger", "growl-top-right");
			// In the array!, meaning user has voted
		} else {
			// Not in the Array, Do stuff.
			Meteor.call("countVote", thisLaws, Name);
			Meteor.call("userPointYes", lawsAuthor);
			Meteor.call("yesVote", thisUser, thisLaws);
			Bert.alert("Your Vote Was Placed", "success", "growl-top-right");

		}

		if (Name == thisLawsVotes) {
			Bert.alert("You cannot vote for your own comment", "danger", "growl-top-right");
		}
	},

});