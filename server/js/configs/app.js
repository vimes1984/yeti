if (Meteor.isServer) {

  // Site description text to be displayed on home page (in particular)
  orion.dictionary.addDefinition('description', 'site', {
    type: String,
    label: 'Description'
  });




  // We create the collection
  Posts = new Mongo.Collection('posts');

  // Create the action
  Roles.registerAction('posts.update', true); // The admin (which is automatically created) role can update posts always

  // Use the action
  Posts.allow({
    update: function(userId, doc, fields, modifier) {
      return Roles.allow(userId, 'posts.update', userId, doc, fields, modifier);
    },
  });
  Posts.deny({
    update: function(userId, doc, fields, modifier) {
      return Roles.deny(userId, 'posts.update', userId, doc, fields, modifier);
    },
  });

  // Create a new role
  EditorRole = new Roles.Role('editor');

  // Set the allow/deny rules
  EditorRole.allow('posts.update', function(userId, doc, fields, modifier) {
    return doc.userId === userId; // Will be allowed to edit his own posts
  });
  EditorRole.deny('posts.update', function(userId, doc, fields, modifier) {
    return !_.contains(fields, 'userId'); // Can't update userId field.
  });


  // Register the action
  Roles.registerAction('posts.subscribeToMyPosts');

  // Create the publication
  Meteor.publish('myPosts', function() {
    // Roles.userHasPermission checks allow and deny rules
    if (!Roles.userHasPermission(this.userId, 'posts.subscribeToMyPosts')) {
      return [];
    } else {
      return Posts.find({
        userId: this.userId
      });
    }
  });

  // Now we will allow editor to subscribe to their posts
  EditorRole.allow('posts.subscribeToMyPosts', true);



}
