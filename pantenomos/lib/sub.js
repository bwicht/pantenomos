if (Meteor.isClient) {
	Meteor.subscribe('Laws');
	Meteor.subscribe('Users');
	Meteor.subscribe('ProfileImages');
	Meteor.subscribe('UserImages');
}