---
layout: ../../layout/MarkdownLayout.astro
id: 5
title: Longest Palindromic Substring
description: Given a string s, return the longest palindromic substring in s.
date: Jan 8, 2026
tags: [String, Dynamic Programming, Two Pointers]
difficulty: Medium
draft: false
---

## Problem

Given a string s, return the longest palindromic substring in s.

### Case 1

```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

### Case 2

```
Input: s = "cbbd"
Output: "bb"
```

### Case 3

```
Input: s = "a"
Output: "a"
```

### Constraints

```
1 <= s.length <= 1000
s consists of only digits and English letters.
```

## Solution

### Expand Around Center

```typescript
function longestPalindrome(s: string): string {
  if (s.length < 2) return s; // Single character strings are already palindromes

  let start = 0;
  let end = 0;

  const expandAroundCenter = (left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1; // Length of the palindrome discovered
  };

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i); // Odd length palindromes
    const len2 = expandAroundCenter(i, i + 1); // Even length palindromes
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}
```

For every character, we treat it as the midpoint of a palindrome and expand pointers left and right while they match. We do this twice—once for odd-length centers `(i, i)` and once for even-length centers `(i, i + 1)`—to cover both palindrome shapes. Whenever the expanded substring is longer than the current best window, we update `start` and `end` to that window. This maintains an $O(n^2)$ time complexity with $O(1)$ extra space, which satisfies the constraint $n \le 1000$.
