function checkPalindrome(str){
  if (str.split("").reverse("").join("") === str){
    return true
  }
  else return false
}

checkPalindrome("madam")