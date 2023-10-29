# Problem 01

### Problem Statement

You're working with a sequence of numbers and need to find out how many of them are even. To do this, create a function named `countEvens` that counts the number of even integers in a given array.

The `countEvens` function should accept one parameter:

1. `numbers`: an array of integers.

An integer is considered even if it is divisible by 2 with no remainder. The function should return the count of such even numbers in the array.

Here are some examples:

- `countEvens([2, 1, 2, 3, 4])` should return `3` because there are three even numbers (2, 2, 4).

{Try It!}(node .guides/countEvens/try-it-01.js)

- `countEvens([2, 2, 0])` should return `3` because all the numbers (2, 2, 0) are even.

{Try It!}(node .guides/countEvens/try-it-02.js)

- `countEvens([1, 3, 5])` should return `0` because there are no even numbers.

{Try It!}(node .guides/countEvens/try-it-03.js)

---

### Solution

{Check It!|assessment}
node .guides/secure/countEvensTest.js


### Test Cases

1. **Test Case 1:** 
   - **Input:** `countEvens([2, 1, 2, 3, 4])`
   - **Expected Output:** `3`
   - **Explanation:** The array contains three even numbers: 2, 2, and 4.


2. **Test Case 2:**
   - **Input:** `countEvens([2, 2, 0])`
   - **Expected Output:** `3`
   - **Explanation:** All the numbers in the array are even: 2, 2, and 0.


3. **Test Case 3:**
   - **Input:** `countEvens([1, 3, 5])`
   - **Expected Output:** `0`
   - **Explanation:** There are no even numbers in the array.


4. **Test Case 4:**
   - **Input:** `countEvens([0, 1, -2, -3, 4])`
   - **Expected Output:** `3`
   - **Explanation:** There are three even numbers in the array: 0, -2, and 4.


5. **Test Case 5:**
   - **Input:** `countEvens([11, 23, 35, 47])`
   - **Expected Output:** `0`
   - **Explanation:** There are no even numbers in the array.

# Problem 02

### Problem Statement

You are given an array of integers, which has at least one element. Your task is to create a function named `bigDiff` that finds the difference between the largest and smallest values in the array.

The `bigDiff` function should accept one parameter:

1. `numbers`: an array of integers.

The function should calculate the difference between the maximum and minimum values in the array. You can use the built-in `Math.min()` and `Math.max()` methods to find the smallest and largest values, respectively.

Here are some examples:

- `bigDiff([10, 3, 5, 6])` should return `7`, as the difference between the largest (10) and smallest (3) values is 7.

{Try It!}(node .guides/bigDiff/try-it-01.js)

- `bigDiff([7, 2, 10, 9])` should return `8`, since the largest value is 10 and the smallest is 2.

{Try It!}(node .guides/bigDiff/try-it-02.js)

- `bigDiff([2, 10, 7, 2])` should return `8`, with 10 being the largest and 2 the smallest value.

{Try It!}(node .guides/bigDiff/try-it-03.js)

---

### Solution

{Check It!|assessment}
node .guides/secure/bigDiffTest.js


### Test Cases

1. **Test Case 1:** 
   - **Input:** `bigDiff([10, 3, 5, 6])`
   - **Expected Output:** `7`
   - **Explanation:** The difference between the largest (10) and smallest (3) values is 7.


2. **Test Case 2:**
   - **Input:** `bigDiff([7, 2, 10, 9])`
   - **Expected Output:** `8`
   - **Explanation:** The largest value is 10 and the smallest is 2, so the difference is 8.


3. **Test Case 3:**
   - **Input:** `bigDiff([2, 10, 7, 2])`
   - **Expected Output:** `8`
   - **Explanation:** Here, the largest value is 10 and the smallest is 2, resulting in a difference of 8.


4. **Test Case 4:**
   - **Input:** `bigDiff([1, 1, 1, 1])`
   - **Expected Output:** `0`
   - **Explanation:** Since all values are the same (1), the difference is 0.


5. **Test Case 5:**
   - **Input:** `bigDiff([-3, -1, -4, -2])`
   - **Expected Output:** `3`
   - **Explanation:** The largest value is -1 and the smallest is -4, so the difference is 3.
