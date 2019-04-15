FlowRouter.route('/', {
    name: 'homepage',
    action(){
        BlazeLayout.render('homePage');
    }
});

FlowRouter.route('/add_text', {
    name: 'newProject',
    action(){
        BlazeLayout.render('newProject');
    }
});

FlowRouter.route('/votation_page', {
    name: 'votation',
    action(){
        BlazeLayout.render('votation');
    }
});