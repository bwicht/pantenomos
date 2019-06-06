//création d'un helper qui permet de récupérer le Fullname de l'utilisateur ayant crée un compte

Template.registerHelper('getUserFullname', function(userId){

    let user = Meteor.users.findOne({_id: userId});
    
    if (user && user.profile){
        return user.profile.fullname
    }

});