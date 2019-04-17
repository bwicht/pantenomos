<<<<<<< HEAD
Router.configure({
layoutTemplate: "main_layout"
});
Router.map(function(){
    //Laws
this.route('laws', {
path: '/laws',
template: 'laws'
});

    //Login
    this.route('login', {
        path: '/',
        template: 'login'
        });

        //Signup
    this.route('signup', {
        path: '/signup',
        template: 'signup'
        });
        });
=======
FlowRouter.route('/', {
    name: 'homePage',
    action(){
        BlazeLayout.render('homePage');
    }
});

FlowRouter.route('/nouveauprojet', {
    name: 'newProject',
    action(){
        BlazeLayout.render('newProject');
    }
});

FlowRouter.route('/votation/:_id', {
    name: 'votation',
    action(){
        BlazeLayout.render('votation');
    }
});
>>>>>>> ImplementationDonnees
