from typing import List

class Solution():
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}

        # building the hashmap the size of nums, where the key is the number of concern, and the value is the index of that number within the nums List
        for i in range(len(nums)):
            hashmap[nums[i]] = i
        

        for i in range(len(nums)):
            # define the complement - our second number - as being the target minus the current number we're ate in the iteration
            complement = target - nums[i]
            # if the complement is a valid key within hashmap, and the index of complement is not the exact index we're at (because we cannot use the same-indexed number twice), then we found it!
            if complement in hashmap and hashmap[complement] != i:
                # return the current index, and the value of hashmap[complement], which is just the index of that complement value
                return [i, hashmap[complement]]

# print(Solution.twoSum({}, nums = [1,3,4,5], target = 9))

class Solution2():
    def twoSum2(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}

        # building the hashmap the size of nums, where the key is the number of concern, and the value is the index of that number within the nums List
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap and hashmap[complement] != i:
                # return the current index, and the value of hashmap[complement], which is just the index of that complement value
                return [i, hashmap[complement]]
            hashmap[nums[i]] = i

print(Solution2.twoSum2({}, nums = [1,3,4,5], target = 9))