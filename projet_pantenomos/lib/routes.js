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

FlowRouter.route('/votation', {
    name: 'votation',
    action(){
        BlazeLayout.render('votation');
    }
});