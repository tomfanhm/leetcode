---
layout: ../../layout/MarkdownLayout.astro
id: 1
title: Two Sum
description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
date: May 24, 2023
tags: [Array, Hash Table]
difficulty: Easy
draft: false
---

## Problem

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Case 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Case 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Case 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints

```
2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.
```

### Solution

- Brute-force algorithms

It uses a nested loop to iterate through each element of the array and check if there is another element in the array that can be added to it to equal the target number.

```typescript
const twoSum = (nums: number[], target: number) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
```

- Hash map

The function uses a hash map to keep track of the previously seen numbers in the array and their indices.

```typescript
const twoSum = (nums: number[], target: number) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};
```
