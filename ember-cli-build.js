'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    cssModules: {
      plugins: [
        require('postcss-preset-env')
      ]
    }
  });

  return app.toTree();
};
