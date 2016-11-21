function removeDuplicate(arr){
  filteredArr = [];
  for (var i = 0; i < arr.length; i++){
    if (filteredArr.indexOf(arr[i]) === -1){
      filteredArr.push(arr[i]);
      
    }
  }  
  return filteredArr
}
removeDuplicate([1,3,3,3,1,5,6,7,8,1])
