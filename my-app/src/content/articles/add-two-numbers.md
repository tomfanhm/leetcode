---
layout: ../../layout/MarkdownLayout.astro
id: 2
title: Add Two Numbers
description: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
date: Jul 22, 2023
tags: [Linked List, Math, Recursion]
difficulty: Medium
draft: false
---

## Problem

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Case 1

```
Input: l1 = [2, 4, 3], l2 = [5, 6, 4];
Output: [7, 0, 8];
```

### Case 2

```
Input: l1 = [0], l2 = [0];
Output: [0];
```

### Case 3

```
Input: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9];
Output: [8, 9, 9, 9, 0, 0, 0, 1];
```

### Constraints

```
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
```

### ListNode Class

```typescript
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
```

### Solution

```typescript
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carry = 0;
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}
```

This solution uses the elementary math approach to add two numbers digit by digit. We iterate through both linked lists simultaneously, adding corresponding digits along with any carry from the previous digit addition. If one list is longer than the other, we continue the process with the longer list. A dummy head node is used to simplify the code and handle the case where a new digit is added to the result list. The carry variable is used to keep track of the carryover value for each digit addition.
