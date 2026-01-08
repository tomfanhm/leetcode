---
layout: ../../layout/MarkdownLayout.astro
id: 165
title: Majority Element
description: The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
date: Feb 12, 2024
tags: [Array, Hash Table, Divide And Conquer, Sorting, Counting]
difficulty: Easy
draft: false
---

## Problem

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

### Case 1

```
Input: nums = [3,2,3]
Output: 3
```

### Case 2

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

### Constraints

```
n == nums.length
1 <= n <= 5 * 10^4
-10^9 <= nums[i] <= 10^9
```

### Solution

```typescript
function majorityElement(nums: number[]): number {
  const countMap: Record<number, number> = {}; // Create a hash map to store counts
  for (let num of nums) {
    if (!countMap[num]) countMap[num] = 0;
    countMap[num]++;
    // Check if the current number has become the majority element
    if (countMap[num] > nums.length / 2) return num;
  }
}
```

Counting: Iterate through each element in the array, counting occurrences using a hash map.

Immediate Return: As soon as an element's count exceeds n / 2, it is returned as the majority element.

Assumption Validation: The problem statement guarantees the existence of a majority element, allowing for this early return logic without needing to iterate through the entire array or map.

Complexity: The time complexity is O(n) due to a single pass through the array, and the space complexity is O(n) for storing the counts, although in practice, it's often much less than n due to early termination.
