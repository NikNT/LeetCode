const nums = [3, 2, 3, 4, 4, 4];

var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count++;
    } else if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};

console.log(majorityElement(nums));
