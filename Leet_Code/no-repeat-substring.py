class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        strList = list(s)
        shorterStr = strList.copy()

        longestSubstringLength = 0 if not strList else 1
        currentLength = 1

        for i, outterChar in enumerate(strList):

            print(strList)
            shorterStr.pop(0)
            print(shorterStr)
            for i, innerChar in enumerate(shorterStr):
                print(currentLength)
                if outterChar == innerChar:
                    print('outter match found!')
                    currentLength == 1
                    break
                if shorterStr[i - 1] == innerChar:
                    currentLength == 1
                    print('inner match found!')
                    break
                currentLength = currentLength + 1

                if currentLength > longestSubstringLength:
                    longestSubstringLength = currentLength
            currentLength = 1
        print(longestSubstringLength)
        return longestSubstringLength


solution = Solution()

solution.lengthOfLongestSubstring(s='aabccdefhjggerf')
solution.lengthOfLongestSubstring(s='aabccdefhjggerf')
