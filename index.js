const coffee = require('coffee-script');

module.exports = ({file: {buffer}, options}) => ({
  buffer: Buffer.from(coffee.compile(buffer.toString(), options))
});
