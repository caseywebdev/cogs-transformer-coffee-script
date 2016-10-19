var helper = require('cogs-test-helper');

helper.run({
  'test/config.json': {
    'test/input.coffee': helper.getFileBuffer('test/output.js'),
    'test/error.coffee': Error
  }
});
