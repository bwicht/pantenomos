
Template.registerHelper('getUserFullname', function(userId){
    let user = Meteor.users.findOne({_id: userId});
    if (user && user.profile){
        return user.profile.fullname
    }
});