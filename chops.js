// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// var nums = [2,7,11,15] 

// for (var i = 0; i < nums.length; i++) {
//     if (nums[i] + nums[i] === 9) {
//         console.log("true")
//     }
// }


// console.log("hello World");


// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

var nums = [1,2,3,4]

// runningSum[i] = sum(nums[0]…nums[i])

// for (var i = 0; i < nums.length; i++) {
//     var first = nums[i] + nums[i + 1];
//     console.log(nums[i])
//     function myfunction() {
//         nums[i] + nums[i + 1]
//         }
//     // console.log(nums[i] + nums[i + 1]);
//     // console.log(first);
//     console.log(nums.map(myfunction))


// }


// const cumulativeSum = (sum => value => sum += value)(0);

// console.log(nums.map(cumulativeSum));


//TODO Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

//TODO For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.


var candies = [2,3,5,1,3], extraCandies = 3;

for (var i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= 5) {
        console.log([i] + true);
    } else {
        console.log([i] + false);
    }
}