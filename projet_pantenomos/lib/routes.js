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

    this.route("add_text", {
        path: "/add_text",
        template: "form_new_project"
    });

});