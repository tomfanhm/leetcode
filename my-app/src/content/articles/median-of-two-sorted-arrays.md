---
layout: ../../layout/MarkdownLayout.astro
id: 4
title: Median of Two Sorted Arrays
description: Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
date: Feb 12, 2024
tags: [Array, Binary Search, Divide And Conquer]
difficulty: Hard
draft: false
---

## Problem

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

### Case 1

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

### Case 2

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

### Constraints

```
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
```

## Solution

### Merge and Sort (Brute Force)

This beginner solution directly merges the two arrays and then finds the median. It's straightforward but does not meet the optimal time complexity requirement.

```typescript
function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);

  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}
```

### Binary Search Partition (Optimal)

To hit the required $O(\log (m+n))$ complexity, binary search the smaller array for a partition where the left halves of both arrays contain exactly half of the total elements. When the largest value on the left is not greater than the smallest value on the right for both arrays, the median is determined from the border elements.

```typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1); // ensure nums1 is the shorter array
  }

  const m = nums1.length;
  const n = nums2.length;
  const totalLeft = Math.floor((m + n + 1) / 2);
  let left = 0;
  let right = m;

  while (left <= right) {
    const partitionA = Math.floor((left + right) / 2);
    const partitionB = totalLeft - partitionA;

    const maxLeftA = partitionA === 0 ? -Infinity : nums1[partitionA - 1];
    const minRightA = partitionA === m ? Infinity : nums1[partitionA];
    const maxLeftB = partitionB === 0 ? -Infinity : nums2[partitionB - 1];
    const minRightB = partitionB === n ? Infinity : nums2[partitionB];

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        );
      }
      return Math.max(maxLeftA, maxLeftB);
    }

    if (maxLeftA > minRightB) {
      right = partitionA - 1;
    } else {
      left = partitionA + 1;
    }
  }

  return 0; // input constraints guarantee a solution
}
```
