function fibonacci(num){
if (num === 1){
  return 1
}
  var current = 1;
  var previous  = 0;
  var value = 0;
  for (var i = 1; i <num; i++){
    value = current + previous;
    previous = current; 
    current = value;
  }
  return value
}
fibonacci(2)