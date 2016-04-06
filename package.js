Package.describe({
  name: 'nathantreid:sass-test-package',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'package to test meteor build servers',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('isobuild:compiler-plugin@1.0.0');
});

Package.registerBuildPlugin({
  name: 'test',
  npmDependencies: {
    "node-sass": "3.4.2",
  },
  sources: [
    'plugin.js'
  ]
});