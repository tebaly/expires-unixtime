import timestamp from 'unix-timestamp-offset';

export default {
  now() {
    return timestamp();
  },
  left(time) {
    return 0 - this.offset(time);
  },
  offset(time) {
    return timestamp(-time);
  },
  expired(time) {
    return this.left(time) < 1;
  },
};
