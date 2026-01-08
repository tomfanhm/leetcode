---
layout: ../../layout/MarkdownLayout.astro
id: 39
title: Combination Sum
description: Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
date: May 29, 2023
tags: [Array, Backtracking]
difficulty: Medium
draft: false
---

## Problem

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
frequency
of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

### Case 1

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

### Case 2

```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

### Case 3

```
Input: candidates = [2], target = 1
Output: []
```

### Constraints

```
1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40
```

### Solution

- Backtracking algorithm

```typescript
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  // Sort candidates to help with early stopping
  candidates.sort((a, b) => a - b);

  function backtrack(
    start: number,
    combination: number[],
    remainingTarget: number,
  ) {
    if (remainingTarget === 0) {
      // If the remaining target is 0, we found a valid combination
      result.push([...combination]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remainingTarget) break; // Early stop if the candidate exceeds the remaining target
      combination.push(candidates[i]);
      // Recurse with the current number included, decrementing the remaining target
      backtrack(i, combination, remainingTarget - candidates[i]);
      combination.pop(); // Backtrack
    }
  }

  backtrack(0, [], target);
  return result;
}
```

Sorting: First, the candidates are sorted to ensure that we can stop early in our recursion when we reach a sum that exceeds the target.

Backtracking Function: The core of the solution is the backtrack function, which takes the current start index in the candidates array, the current combination of numbers, and the remaining target to achieve.

If the remaining target is 0, we've found a valid combination and add a copy of it to our result list.

We iterate through the candidates, starting from the current index to avoid duplicates and maintain the uniqueness of combinations.

For each candidate, if adding it to the current sum exceeds the target, we stop exploring further as the candidates are sorted in ascending order.

If it doesn't exceed, we add the candidate to the current combination and recursively call backtrack with the updated parameters.

After exploring all possibilities with the current candidate, we remove it from our combination (backtrack) to explore the next candidate.

This approach systematically explores all combinations, ensuring all unique combinations that sum up to the target are found, utilizing the concept of backtracking to explore each possibility and backtrack once it's either found to be successful or leads to a dead end.
