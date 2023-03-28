/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// GRADE: this one beats 27% of JavaScript solutions
var twoSum = function (nums, target) {
	for (let firstNumIndex = 0; firstNumIndex < nums.length; firstNumIndex++) {
		// let's not attempt to do an inner loop on the last number of the array
		if (firstNumIndex != nums.length - 1) {
			console.log(firstNumIndex);
			// let's grab the next element in the array and start looping from there
			for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < nums.length; secondNumIndex++) {
				if (nums[firstNumIndex] + nums[secondNumIndex] == target) {
					return [firstNumIndex, secondNumIndex];
				}
			}
		}
	}
	return false;
};

// console.log(twoSum([1, 5, 2, 9], 14));
// console.log(twoSum([3, 2, 4], 6));

var twoSumming = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		let currentNumber = nums[i];
		if (nums.includes(target - currentNumber)) {
			console.log(target - currentNumber);
			return [i, nums.indexOf(target - currentNumber)];
		}
	}
	return false;
};

// GRADE: this one only beats 5% of JS solutions, basically horrible
var twoSumThird = function (nums, target) {
	// create an object from array, where keys are the index, and values are the given element (e.g., {'0': 1, '1': 4})
	let numsObj = Object.assign({}, nums);

	// let shorteningNumsArr = [...nums];

	for (let i = 0; i < nums.length; i++) {
		// delete the key-value pairing with the index we're at, since that number is the base number we're adding to, and we have already checked earlier numbers
		delete numsObj[i];

		// check if the shrinking object has a key to a value that sums with the current number in the iteration to equal the target
		let secondNumberIndex = parseInt(Object.keys(numsObj).find(key => numsObj[key] + nums[i] == target));

		// if that number exists, return the current index of the lopp, and the index of that second number
		if (secondNumberIndex) {
			console.log(`found it: ${secondNumberIndex}`);
			return [i, secondNumberIndex];
		}
		console.log(`not this one: ${nums[i]}`);
	}
	return false;
};

console.log(twoSumThird([3, 2, 4], 6));
