var context = require.context('.', true, /test-order\.js?$/);
context.keys().forEach(context);
module.exports = context;