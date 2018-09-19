module.exports = function solveEquation(equation) {
  var a, b, c, d, x1, x2;
    equation = equation.split(" ").join('');
    var arr1 = equation.split('*x^2');
    //console.log(arr1);
  var arr2 = arr1[1].split('*x');
  a = arr1[0];
  b = arr2[0];
  c = arr2[1];
  console.log(a,b,c);
  d = Math.pow(b,2)-4*a*c; //расчёт дискриминанта
  //console.log(d);
  if (d>0) {
    x1 = Math.round((-b+Math.sqrt(d))/(2*a)); // расчёт если дискр. > 0 для х1
    x2 = Math.round((-b-Math.sqrt(d))/(2*a)); //расчёт если дискр. > 0 для х2
  }
  var result = [x1, x2].sort(function(a,b){ return a-b;});
  console.log(result);
   return result;
  } 
  