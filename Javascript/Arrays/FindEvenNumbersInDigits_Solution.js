/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i].toString().length % 2 ? 0 : 1
    };
        return result;
    
};
    
 //+= addition 
// The toString() method returns a string representing the specified Number object.
// (%) is the modulus operator, it will let you have the remainder of place/sequence.length.

// condition ? value if true : value if false
// The condition is what you’re actually testing. The result of your condition should be true or false or at least coerce to either boolean value.
// A ? separates our conditional from our true value. Anything between the ? and the : is what is executed if the condition evaluates to true.
// Finally a : colon. If your condition evaluates to false, any code after the colon is executed.
// https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff