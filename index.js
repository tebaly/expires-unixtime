var timestamp = require('unix-timestamp-offset');

module.exports =  {
  now: function() {
    return timestamp();
  },
  left: function(time) {
    return 0 - this.offset(time);
  },
  offset: function(time) {
    return timestamp(-time);
  },
  expired: function(time) {
    return this.left(time) < 1;
  },
  exceeded: function(time, offset) {
    return this.offset(time) > offset;
  },
};
