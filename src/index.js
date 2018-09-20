
module.exports = function solveEquation(equation) {

	var arr = equation.split('');
	var a, b, c, D, x1, x2;

	console.log(arr);

	arr.splice(1, 0, ' ');
	equation = arr.join('').split(' ');

	a = equation[0] + equation[1];
	b = equation[4] + equation[5];
	c = equation[8] + equation[9];


	D = b*b - 4*a*c;

	if (D>0) {
		x1 = Math.round((-b + Math.sqrt(D)) / (2*a));
		x2 = Math.round((-b - Math.sqrt(D)) / (2*a));

	}

	var  result = [x1,x2];

	result.sort(function(a, b) {
		return a - b;
	});

	return result;
}
