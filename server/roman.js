function solution(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer  
 var romanArray = roman.split('');
 console.log(romanArray);
  for(var i=0; i < romanArray.length; i++) {
    
    var num = 0;
    console.log(romanArray.length);
      if(romanArray[i] == 'I') {
        num += 1
      }
      else if(romanArray[i] == 'V') {
        num += 5
      }
      else if(romanArray[i] == 'X') {
        num += 10
      }
      else if(romanArray[i] == 'L') {
        num += 50
      }
      else if(romanArray[i] == 'C') {
        num += 100
      }
      else if(romanArray[i] == 'D') {
        num += 500
      }
      else if(romanArray[i] == 'M') {
        num += 1000
      }
  return num;
    }
}
  