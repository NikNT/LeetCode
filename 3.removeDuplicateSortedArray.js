var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicate = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    if (nums[i] != nums[j]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

console.log(removeDuplicate(nums));
