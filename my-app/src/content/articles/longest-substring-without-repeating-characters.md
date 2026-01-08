---
layout: ../../layout/MarkdownLayout.astro
id: 3
title: Longest Substring Without Repeating Characters
description: Given a string s, find the length of the longest substring without repeating characters.
date: Feb 12, 2024
tags: [Hash Table, String, Sliding Window]
difficulty: Medium
draft: false
---

## Problem

Given a string s, find the length of the longest substring without repeating characters.

### Case 1:

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

### Case 2:

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

### Case 3:

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

### Constraints

```
0 <= s.length <= 5 * 10^4
s consists of English letters, digits, symbols and spaces.
```

### Solution

```typescript
function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0; // To store the max length of substring found
  let start = 0; // Sliding window start index
  const charIndexMap = new Map<string, number>(); // Map to store the last seen index of characters

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    // If the character is seen and is within the current window
    if (charIndexMap.has(char) && charIndexMap.get(char)! >= start) {
      // Move the start to the next character of the last seen duplicate
      start = charIndexMap.get(char)! + 1;
    }
    charIndexMap.set(char, end); // Update the last seen index of the character
    maxLength = Math.max(maxLength, end - start + 1); // Update the max length if needed
  }

  return maxLength;
}
```

Sliding Window Technique: The algorithm maintains a sliding window that dynamically adjusts its start and end indices based on the presence of repeating characters within the window.

HashMap Tracking: The hash map tracks the last seen index of each character. If a character within the current window is encountered again, the start of the window is moved to the character immediately after the previous occurrence.

Maximum Length Calculation: The maximum length of substrings without repeating characters is updated by comparing the current length of the window (end - start + 1) with the previously stored maximum length.

Efficiency: This solution efficiently iterates through the string once (O(n) complexity), making adjustments to the window as needed without needing to backtrack or re-scan elements.
