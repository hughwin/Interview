function verifyPrime(num){
  for (var i = 2; i < num-1; i ++){
    if (num % i === 0){
      return false
    }
  }
  return true
}




verifyPrime(137)