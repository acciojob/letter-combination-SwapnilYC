const arr = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

//0=>0 1=>1 2=>abc 3=>def 4=>ghi 5=>jkl 6=>mno 7=>pqrs 8=>tuv 9=>wxyz

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
  
  console.log(ans.sort());
  // return ans.sort();
}

letterCombinations(23);
       
module.exports = letterCombinations;

