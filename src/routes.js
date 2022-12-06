const UniversalRouter = require('universal-router');

module.exports = new UniversalRouter([
  { path: '/test', action: (req) => ({ page: 'test' }) },
  { path: '(.*)', action: () => ({ page: 'test' }) }
])
