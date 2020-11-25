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


// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.


// var candies = [2,3,5,1,3], extraCandies = 3;

// for (var i = 0; i < candies.length; i++) {
//     if (candies[i] + extraCandies >= 5) {
//         console.log([i] + true);
//     } else {
//         console.log([i] + false);
//     }
// }

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

//===============================================================================================

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// word1 = ['ab', 'c']
// word2 = ['a', 'bc']

// console.log(word1.join(''))

// if (word1.join('') === word2.join('') ) {
//     console.log('true')
// } 

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.


// var nums = [1,2,3,1,1,3];

// var result = false;

// for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums.length; j++) {
//         if ( i !== j) {
//             if (nums[i] === nums[j]) {
//                 result = true
//                 break;
//             }            
//         }
//     }
//     if (result) {
//         break;
//     }
//     console.log(result)
// }


checkDuplicate();
   function checkDuplicate(element, index) {
      let arr = ["abc","xy","bb", "abc"];
      for(let i = 0; i < arr.length;i++) {
         // nested loop
         for(let j = 0; j < arr.length;j++) {
            // do not compare same elements
            if(i !== j) {
              // check if elements match
        if(arr[i] === arr[j]){
                 // duplicate element found
           result = true;
                 // terminate inner loop
           break;
        }
            }
         }
         // terminate outer loop
         if(result){
            break;
         }
      }
      if(result) {
         console.log('Array contains duplicate elements');
      } else {
         console.log('Array does not contain duplicate elements');
      }
   }
 

