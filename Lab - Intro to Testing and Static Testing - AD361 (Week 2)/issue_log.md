// Issue 1:
- Location: Line 12
- Issue: There is ',' sign without any object
- Explanation: This sign should only come after an object and not alone 
- Suggested fix: Remove ',' sign
- Status: Fixed

// Issue 2:
- Location: Line 17
- Issue: '=' sign is used in the object and ' "" ' is added to property
- Explanation: Inside the object, there should only be ':' sign and property should not have quotes
- Suggested fix: Change from '=' to ':' for both places in that line and remove double quotes
- Status: Fixed

// Issue 3:
- Location: Line 22
- Issue: The word 'name' with double quote is incorrect for property
- Explanation: For property, no quote is used
- Suggested fix: Remove double quote
- Status: Fixed

// Issue 4:
- Location: Lines 27, 28 and 29
- Issue: Missing parameters, '3' is not iterable, the function is used for variable, and 'price' property is addressed incorrectly
- Explanation: There are no parameters, '3' is not iterable, the function should not be used as variable, and 'price' property is addressed incorrectly
- Suggested fix: Add parameters, change '3' to 'ITEMS' and create a new variable (e.g. subTotal to store as variable), and change "price" to '[1]'
- Status: Fixed

// Issue 5:
- Location: Line 35
- Issue: The function has been renamed
- Explanation: The function has been renamed to 'subTotal()'
- Suggested fix: Rename to 'subTotal()'
- Status: Fixed

// Issue 6:
- Location: Lines 48 and 49
- Issue: backtick is used with double quote
- Explanation: In case of template literal we only use backtick for both ends
- Suggested fix: Replace double quote of both lines to backtick
- Status: Fixed

// Issue 7: 
- Locaton: Lines 16 and 21, 27, 34, 39
- Issue: export function is the ES modules syntax and not commonjs rule
- Explanation: We should make it consistent between source file and test file
- Suggested fix: Remove 'export' for each function and add at the end of source file
- Status: Fixed




- Root cause: ',' sign in Line 12
- Error: It could be the human's error by accidently adding it
- Defect: By having two ',' next to each other there is defect
- Failure: As the result, it will pop up error when running the code


// Final Comment: total() function could not be solved so the remaining three functions do not pass the tests.