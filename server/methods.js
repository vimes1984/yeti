/**
 * Created by growlf on 12/22/15.
 */

Meteor.methods({
    saveToFile: function(arg){
        console.log(arg);
        var fileSave = Meteor.npmRequire("file-save");
        var file = fileSave('test.js');
    }
});
