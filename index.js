'use struct';

/**
 *  http://jsperf.com/array-destroy/83
 *
 *  @param {Array} arr
 *  @return {Array} arr
 */

module.exports = function empty(arr) {
  arr.length = 0;
  return arr;
};
