---
layout: ../../layout/MarkdownLayout.astro
id: 15
title: 3Sum
description: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
date: May 25, 2023
tags: [Array, Two Pointers, Sorting]
difficulty: Medium
draft: false
---

## Problem

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

### Case 1

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

### Case 2

```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

### Case 3

```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

### Constraints

```
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
```

### Solution

It involves using two pointers to find all unique triplets within the array that add up to zero.

```typescript
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate anchors

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; // skip duplicate left values
        while (left < right && nums[right] === nums[right - 1]) right--; // skip duplicate right values
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
```

After sorting, each index `i` becomes the fixed anchor for a triplet, and two pointers `left`/`right` sweep the remainder of the array looking for complementary pairs that sum to `-nums[i]`. Duplicates are removed deterministically by advancing `i`, `left`, and `right` past repeated values rather than relying on auxiliary hash maps, keeping the algorithm $O(n^2)$ while guaranteeing unique triplets.
