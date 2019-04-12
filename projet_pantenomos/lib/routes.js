FlowRouter.route('/', {
    name: 'homepage',
    action(){
        BlazeLayout.render('homePage');
    }
});

FlowRouter.route('/add_text', {
    name: 'form_new_project',
    action(){
        BlazeLayout.render('form_new_project');
    }
});