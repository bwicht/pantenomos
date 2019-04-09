Router.configure({
layoutTemplate: "main_template"
});
Router.map(function(){
    //Laws
this.route("laws", {
path: "/",
template: "laws"
});
});