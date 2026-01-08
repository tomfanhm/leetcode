---
layout: ../../layout/MarkdownLayout.astro
id: 8
title: String to Integer (atoi)
description: Implement the classic atoi function respecting whitespace, sign, non-digit stops, and 32-bit overflow.
date: Jan 8, 2026
tags: [String]
difficulty: Medium
draft: false
---

## Problem

Implement `atoi` which converts a string to a 32-bit signed integer.

Rules:

- Ignore leading whitespace.
- Optional `+` or `-` determines the sign.
- Parse digits until the first non-digit character (or end of string).
- Clamp the result to $[-2^{31}, 2^{31} - 1]$ on overflow.

### Case 1

```
Input: s = "42"
Output: 42
```

### Case 2

```
Input: s = "   -42"
Output: -42
```

### Case 3

```
Input: s = "4193 with words"
Output: 4193
```

### Constraints

```
0 <= s.length <= 200
s consists of English letters (lower-case and upper-case), digits, ' ', '+', '-', and '.'.
```

## Solution

### Deterministic Parser

```typescript
function myAtoi(s: string): number {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  let i = 0;
  const n = s.length;

  while (i < n && s[i] === " ") i++; // skip leading spaces
  if (i === n) return 0;

  let sign = 1;
  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  let result = 0;
  while (i < n && s[i] >= "0" && s[i] <= "9") {
    const digit = s.charCodeAt(i) - "0".charCodeAt(0);
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    result = result * 10 + digit;
    i++;
  }

  return result * sign;
}
```

This parser walks the string once: trimming whitespace, capturing an optional sign, and multiplying the running value by 10 as long as digits appear. The overflow guard compares against `INT_MAX` before adding a new digit, returning the saturated limit if necessary. Time complexity is $O(n)$ and space overhead is $O(1)$.
