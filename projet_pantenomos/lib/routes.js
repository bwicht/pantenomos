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
        });
        // comment