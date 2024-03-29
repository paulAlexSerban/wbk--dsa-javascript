/**
 * Find the Longest Word in a String
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 */
function findLongestWordLength_v2(s) {
    return s.split(' ').reduce(function (longest, word) {
        return Math.max(longest, word.length);
    }, 0);
}
findLongestWordLength('The quick brown fox jumped over the lazy dog');
