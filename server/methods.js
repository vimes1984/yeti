/**
 * Created by growlf on 12/22/15.
 */
var fs = Meteor.npmRequire("fs");

Meteor.methods({
    saveToFile: function(arg){
        console.log(arg);
        fs.writeFile('./xyzzy.js', arg, function (err) {
          if (err) throw err;
          console.log('It\'s saved!');
        });
        return fs;
    }

});
