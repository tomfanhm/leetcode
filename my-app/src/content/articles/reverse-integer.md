---
layout: ../../layout/MarkdownLayout.astro
id: 7
title: Reverse Integer
description: Reverse the digits of a 32-bit signed integer, handling overflow.
date: Jan 8, 2026
tags: [Math]
difficulty: Medium
draft: false
---

## Problem

Given a signed 32-bit integer `x`, return the integer obtained by reversing its digits. If the reversed integer overflows beyond the 32-bit signed range $[-2^{31}, 2^{31} - 1]$, return 0.

### Case 1

```
Input: x = 123
Output: 321
```

### Case 2

```
Input: x = -123
Output: -321
```

### Case 3

```
Input: x = 1534236469
Output: 0
Explanation: Reversing this number would overflow the 32-bit signed integer range, so we return 0.
```

### Constraints

```
-2^31 <= x <= 2^31 - 1
```

## Solution

### Math Extraction

```typescript
function reverse(x: number): number {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;
  let result = 0;

  while (x !== 0) {
    const digit = x % 10;
    x = (x / 10) | 0; // truncate toward zero

    // Check for overflow before pushing the digit
    if (result > Math.floor(INT_MAX / 10) || result < Math.ceil(INT_MIN / 10)) {
      return 0;
    }

    result = result * 10 + digit;
  }

  return result;
}
```

Iteratively peel off the last digit with `x % 10` and push it onto the reversed number. Because JavaScript numbers are floating point, `(x / 10) | 0` truncates toward zero (matching integer division). Before appending a new digit, ensure `result` is still within the safe zone; otherwise the final value would exceed the 32-bit boundary and must return 0. The loop processes each digit once, leading to $O(	ext{digits})$ time and $O(1)$ space.
