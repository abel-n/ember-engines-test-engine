'use strict';

const { buildEngine } = require('ember-engines/lib/engine-addon');

module.exports = buildEngine({
  name: 'ember-engines-test-engine',
  lazyLoading: {
    enabled: true,
  },
});
