/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = nums;
  this.rlist = []
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    this.rlist.push(sum)
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.rlist[j] - this.rlist[i] + this.nums[i]
};
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
