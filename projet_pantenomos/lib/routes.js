Router.configure({
layoutTemplate: "main_template"
});
Router.map(function(){
    //Laws
this.route("laws", {
path: "/laws",
template: "laws"
});

    //Login
    this.route("login", {
        path: "/",
        template: "login"
        });
        });