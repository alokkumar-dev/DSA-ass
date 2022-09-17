// 2. Check Whether a String is Palindrome or Not?
const string = "madam";

const checkPalindrome = str => {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }

  if (temp == str) {
    console.log("It is a palindrome String");
  } else {
    console.log("It is not a palindrome String");
  }
};

checkPalindrome(string);
