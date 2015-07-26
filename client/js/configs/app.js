if (Meteor.isClient) {

  angular.module('yetibox', ['angular-meteor', 'ui.router']);

  orion.dictionary.addDefinition('description', 'site', {
      type: String,
      label: 'Description'
  });
  
}
