# Selection Sort

-   similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

## Pseudocode

-   store the first element as the smallest value you;ve seen so far
-   compare this item to the next item in the arrat until you find a smaller number
-   if a smaller number is found, designate the smaller number to be the new "minimum" and continue until the end of the array
-   if the "minimum" is not the value (index) you initially began with, swap the two values
-   repeat this with the next element until the array is sorted

## Time complexity

-   `O(n^2)`
-   we have to compare every element to every other element of the array, so as the length of the array grows, the number of comparisons grows at a rate of `n * n`
