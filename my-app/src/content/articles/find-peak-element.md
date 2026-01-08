---
layout: ../../layout/MarkdownLayout.astro
id: 162
title: Find Peak Element
description: Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
date: Feb 13, 2024
tags: [Array, Binary Search]
difficulty: Medium
draft: false
---

## Problem

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

### Case 1:

```
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
```

### Case 2:

```
Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
```

### Constraints

```
1 <= nums.length <= 1000
-2^31 <= nums[i] <= 2^31 - 1
nums[i] != nums[i + 1] for all valid i.
```

### Solution

```typescript
function findPeakElement(nums: number[]): number {
  let index = 0;
  let num = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > num) {
      num = nums[i];
      index = i;
    }
  }

  return index;
}
```

- Binary Search

```typescript
function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      // If the mid element is greater than the next element, the peak is in the left half
      right = mid;
    } else {
      // If the mid element is less than the next element, the peak is in the right half
      left = mid + 1;
    }
  }
  return left; // left and right converge to the peak element index
}
```

Binary Search Logic: This algorithm uses binary search by comparing the middle element of the array to its next element.

If the middle element is greater than the next element, it means a peak might be on the left side of the middle element, including it. Hence, we move the right pointer to mid.

Conversely, if the middle element is less than the next element, the peak lies on the right side of the middle element. Therefore, we move the left pointer to mid + 1.

Termination: The loop continues until left and right converge, meaning they point to the same peak element. At this stage, since nums[-1] and nums[n] are considered -∞, the element at left or right must be a peak.

Time Complexity: The time complexity of this approach is O(log n) because it essentially halves the search space with each iteration, similar to how binary search operates.
