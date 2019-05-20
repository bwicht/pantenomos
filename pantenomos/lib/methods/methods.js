if (Meteor.isServer) {
	Meteor.methods({
		// Method for adding laws
		addLaws: function(lawsName, lawsPost) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Laws.insert({
					lawsName: lawsName,
					lawsPost: lawsPost,
					author: username,
					date: date,
					createdAt: new Date(),
					noScore: 0,
					yesScore: 0,
					voted: [username],
					userId: Meteor.userId(), 
				});

			}
		},

		removeLaws: function(lawsId) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Laws.remove(lawsId);
			}
		},

		countVote: function(thisLaws, Name) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Laws.update(thisLaws, { $addToSet: { voted: Name}});
			}
		},

		userPointNo: function(lawsAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(lawsAuthor, { $inc: {'profile.noScore': +1}});
			}
		},

		noVote: function(thisUser, thisLaws) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Laws.update(thisLaws, {$inc: {noScore: +1}});
			}
		},

		userPointYes: function(lawsAuthor) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				Meteor.users.update(lawsAuthor, { $inc: {'profile.yesScore': +1}});
			}
		},

		yesVote: function(thisUser, thisLaws) {
			if (!thisUser) {
				throw new Meteor.Error('not authorized');
				return false;
			} else {
				Laws.update(thisLaws, {$inc: {frownScore: +1}});
			}
		},

	});
	
}














