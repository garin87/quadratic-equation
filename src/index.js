module.exports = function solveEquation(equation) {
  
  var equation = '-20 * x^2 - 108797540 * x - 130011773690520';
  var arr = equation.split('');
  console.log(arr);
  arr.splice(1, 0, ' ');
  equation = arr.join('').split(' ');

  var a, b, c, D, x1, x2;

  a = equation[0] + equation[1];
  b = equation[4] + equation[5];
  c = equation[8] + equation[9];

  
  D = b*b - 4*a*c;

  if (D>0) {
   x1 = (-b + Math.sqrt(D)) / (2*a);
   x2 = (-b - Math.sqrt(D)) / (2*a);
   var  result = [x1,x2].sort(function(a,b){ return a-b;});
   return result; 
  }
  else if (D = 0){
  	x = -d / (2*a);
  	return x;
  }
  else {
  	return null;
  }
  //console.log(a, b , c, D, x1, x2);

  
  //(10)[ -,20,*,x^2,-,108797540,*,x,-,130011773690520 ] 

  //console.log(arr);

  



 // var arr1 = tr.split('*x^2');
  //var arr2 = arr1[1].split('*x');
 // console.log(arr2);
  //[ -20,*,x^2,-,108797540,*,x,-,130011773690520 ] 


}
