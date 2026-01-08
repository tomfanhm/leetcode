---
layout: ../../layout/MarkdownLayout.astro
id: 6
title: Zigzag Conversion
description: Convert a string into a zigzag pattern on a given number of rows and then read it row-by-row.
date: Jan 8, 2026
tags: [String, Simulation]
difficulty: Medium
draft: false
---

## Problem

Given a string s and an integer numRows, arrange the characters of s in a zigzag pattern on numRows rows. Then read the rows sequentially to produce the converted string.

### Case 1

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

### Case 2

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
```

### Case 3

```
Input: s = "A", numRows = 1
Output: "A"
```

### Constraints

```
1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
```

## Solution

### Row-by-Row Simulation

```typescript
function convert(s: string, numRows: number): string {
  if (numRows === 1 || s.length <= numRows) return s; // already linear

  const rows = new Array(Math.min(numRows, s.length)).fill("");
  let currentRow = 0;
  let goingDown = false;

  for (const char of s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown; // flip direction at the edges
    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}
```

Instead of building the full zigzag grid, maintain one string per visible row. The `currentRow` index walks downward until it hits the bottom, then upward until it hits the top, toggling `goingDown` at both boundaries. Each character is appended to its active row, and the result is the concatenation of all rows.

This visits each character once with $O(n)$ time and $O(numRows)$ additional space, which fits comfortably inside the input limit of $n \le 1000$.
