import timestamp from 'unix-timestamp-offset';

export default {
  now() {
    return timestamp();
  },
  left(time) {
    return 0 - timestamp(-time);
  },
  expired(time) {
    return this.left(time) < 1;
  },
};
