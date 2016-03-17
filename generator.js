function PNG(number){

  var palindrome = number;
  var steps = 0;

  if (checkPal(palindrome) === true){
    return {
      value: palindrome,
      steps: 0
    };
  }

  while(checkPal(palindrome) === false){
    palindrome += Number(String(palindrome).split("").reverse().join(""));
    steps += 1;
  }

  return {
    value: palindrome,
    steps: steps
  };


}

function checkPal(number){
  var original = String(number);
  var reverse = String(number).split("").reverse().join("");

  if (original === reverse){
    return true;
  }

  return false;
}

console.log(PNG(87));