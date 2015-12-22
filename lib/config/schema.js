var Schemas = {};
Schemas.blockly = new SimpleSchema({
  workspace: {
    type: String,
    optional: true
  },
  title: {
    type: String,
    optional: true
  },
  pageid: {
    type: Number,
    optional: true
  },
  jscodejson: {
    type: String,
    optional: true
  }
});

Schemas.UserProfile = new SimpleSchema({
  blockly: {
      type: [Schemas.blockly],
      optional: true
  },
  additional: {
    type: String,
    optional: true
  },
  mcuserid: {
    type: String,
    optional: true
  }
});

Schemas.User = new SimpleSchema({
    profile: {
        type: Schemas.UserProfile,
        optional: true
    }
});

Meteor.users.attachSchema(Schemas.User);
