/**
 * Created by growlf on 12/22/15.
 */

Meteor.methods({
    saveToFile: function(arg){
        console.log(arg);
        var fileSave = Meteor.npmRequire("file-save");
    //    var file = fileSave('xyzzy.js');
    //    file.write(arg, 'utf8');
    //    file.end();


        fileSave('xyzzy.js')
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

    }



});
