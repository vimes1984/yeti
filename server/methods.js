/**
 * Created by growlf on 12/22/15.
 */
var fs = Meteor.npmRequire("fs");

Meteor.methods({
    saveToFile: function(arg){
        console.log(arg);
        fs.writeFile('message.txt', 'Hello Node.js', function (err) {
          if (err) throw err;
          console.log('It\'s saved!');
        });
        return fs;
        /*fileSave('xyzzy.js')
            .write('this is the first line', 'utf8')
            .write('this is the second line', 'utf8', function() {
                console.log('writer callback');
            })
            .end('this is the end')
            .error(function() {
                console.log('error goes here');
            })
            .finish(function() {
                console.log('write finished.');
            });
*/
    }

});
