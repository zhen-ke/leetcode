/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let count = 0;
  for (var i = 0; i < timeSeries.length; i++) {
    if (i == timeSeries.length - 1) {
      count += duration;
    } else if (timeSeries[i] + duration >= timeSeries[i + 1]) {
      count += timeSeries[i + 1] - timeSeries[i]
        //count += duration;
    } else {
      count += duration;
    }
  }
  return count;
};
