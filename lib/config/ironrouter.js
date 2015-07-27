// These are the routes being dealt with by angular-ui see
// http://stackoverflow.com/questions/31035196/iron-router-conflict-with-angular-ui-router
// For more info
//Iron-Router

Router.route('/(.*)', function(){
  this.render('uiview');
});
/*
Router.route('/', {template: 'empty'});
Router.route('/home', {template: 'empty'});
Router.route('/help', {template: 'empty'});
Router.route('/universes/helpsurvival', {template: 'empty'});
Router.route('/universes/whatsurvival', {template: 'empty'});
Router.route('/universes/gladwhatpvp', {template: 'empty'});
Router.route('/universes/helpglad', {template: 'empty'});
*/
