// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

var nums = [2,7,11,15] 

for (var i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i] === 9) {
        console.log("ture")
    }
}