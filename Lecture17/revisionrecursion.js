
/* Compute time complexity of this function */
function recursion(n) {
  if (n == 0) return;
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);

  for (let i = 0; i < n; i++) {
    console.log(i * i);
  }
}

/* 
Print this pattern, 

1. given N = 5

A
AB
BCD
CDEF
DEFGH

2. N = 4
    *
   * *
  *   *
 *     *
  *   *
   * *
    * 
*/

/* Question on Map & Set
Function to find length of longest substring with non-repeating characters
input: "abbcda"
output: 4 (string is bcda)
*/