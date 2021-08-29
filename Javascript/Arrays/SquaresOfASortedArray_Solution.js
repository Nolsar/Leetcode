// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// **** returns ascending order including negatives ****
//  var sortedSquares = function(nums) {
//     nums.sort();
//     console.log(nums)
// };

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    for (let i = 0; i < nums.length; i++){
        nums[i] = nums[i] * nums[i];
    } const sortInt = (a, b) => {
        return a - b;
    };
    return nums.sort(sortInt);
};