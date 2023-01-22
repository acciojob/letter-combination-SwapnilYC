const arr = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
function letterCombinations(input_digit) {
  //Complete the function
  let ans = [];
  let lastDigit = input_digit%10;
  let firstDigit = Math.floor(input_digit/10);
  let str1 = String(arr[firstDigit]);
  // console.log(`str1: ${str1}`);
  let str2 = String(arr[lastDigit]);
  // console.log(`str2: ${str2}`);

  for (let i = 0; i < str1.length; i++) {
    let x = String(str1[i]);
    for(let j = 0; j < str2.length; j++){
      ans.push(`${x}${String(str2[j])}`);
    }
    
  }
  
  // console.log(ans.sort());
  return ans.sort();
}

// letterCombinations(21);
       
module.exports = letterCombinations;

