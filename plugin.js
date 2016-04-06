var sass = Npm.require('node-sass');

Plugin.registerCompiler({
 extensions: ['test'],
 archMatching: 'web'
}, function () {
 return { 
   processFilesForTarget: function(files) { 
    console.log('it ran');
   }
 };
});
