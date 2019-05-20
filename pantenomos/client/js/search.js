Template.search.rendered = function() {
	$("#search-link").addClass('selected');
	$("#profile-link").removeClass('selected');
	$("#rankings-link").removeClass('selected');
	$("#laws-link").removeClass('selected');
	$("#login-link").removeClass('selected');
}

Template.search.helpers({
	inputAttributes: function() {
		return { 'class': 'easy-search-input', 'placeholder': 'Start Searching' };
	},
	players: function() {
		return Laws.find({}, { sort: { createdAt: -1 } });
	},
	selectedName: function() {
		var laws = LawsIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedLaws") });
		return laws && laws.lawsName;
	},
	index: function () {
		return LawsIndex;
	},
	resultsCount: function() {
		return LawsIndex.getComponentDict().get('count');
	},
	showMore: function() {
		return false;
	},

	renderTmpl: () => Template.renderTemplate

});

Template.User.helpers({
	selected: function() {
		return Session.equals("selectedLaws", this.__originalId) ? "selected" : '';
	},
});

Template.User.events({
	'click': function() {
		Session.set("selectedLaws", this.__originalId);
	}
});