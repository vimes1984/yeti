// We create the collection
//Posts = new Mongo.Collection('posts');
Posts = new orion.collection('posts', {
  singularName: 'post', // The name of one of these items
  pluralName: 'posts', // The name of more than one of these items
  link: {
    /**
     * The text that you want to show in the sidebar.
     * The default value is the name of the collection, so
     * in this case it is not necessary.
     */
    title: 'Posts'
  },
  /**
   * Tabular settings for this collection
   */
  tabular: {
    columns: [
      { data: "title", title: "Title" },
      /**
       * If you want to show a custom orion attribute in
       * the index table you must call this function
       * orion.attributeColumn(attributeType, key, label)
       */
      orion.attributeColumn('file', 'image', 'Image'),
      orion.attributeColumn('summernote', 'body', 'Content'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});
// Create the action
Roles.registerAction('posts.update', true); // The admin (which is automatically created) role can update posts always

// Use the action
Posts.allow({
  update: function (userId, doc, fields, modifier) {
    return Roles.allow(userId, 'posts.update', userId, doc, fields, modifier);
  },
});
Posts.deny({
  update: function (userId, doc, fields, modifier) {
    return Roles.deny(userId, 'posts.update', userId, doc, fields, modifier);
  },
});

// Create a new role
EditorRole = new Roles.Role('editor');

// Set the allow/deny rules
EditorRole.allow('posts.update', function(userId, doc, fields, modifier) {
  return doc.userId === userId; // Will be allowed to edit his own posts
})
EditorRole.deny('posts.update', function(userId, doc, fields, modifier) {
  return !_.contains(fields, 'userId') // Can't update userId field.
});
