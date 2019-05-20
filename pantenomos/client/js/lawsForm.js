Template.lawsForm.rendered = function() {

}

Template.lawsForm.events({
	"submit .laws-post": function() {
		var lawsName = event.target.lawsName.value;
		var lawsPost = event.target.lawsPost.value;

		if (isNotEmpty(lawsName) &&
			isNotEmpty(lawsPost)) {

			Meteor.call('addLaws', lawsName, lawsPost);

			event.target.lawsName.value = "";
			event.target.lawsPost.value = "";

			Bert.alert("Your Comment Was Posted!", "success", "growl-top-right");

		} else {
			
			Bert.alert("something went wrong", "danger", "growl-top-right");
		}

		return false; // prevent submit
	}
});

// Validation Rules

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please fill in all fields", "danger", "growl-top-right");
	return false;
};