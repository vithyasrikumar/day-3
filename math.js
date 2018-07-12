//f(x) = 2x + 1
function f(x) {
	var answer = 2*x + 1;
	return answer;
}

var output = f(3);
console.log("the answer is " + output + "!");


function g() {
	var answer = 5;
	return answer;
}
var output2 = g();
console.log("the answer is " + output2 + "!");

function h(x) {
	var answer = 3*x - 2;
	return answer;
}
var output3 = h(3);
console.log("the answer is " + output3 + "!");

function v(x, y) {
	var answer = 2*(x+y);
	return answer;
}
var output4 = v(3, 4);
console.log("the answer is " + output4 + "!");

function a(x, y, z) {
	var answer = 5*x + 2*y - 3*z + 7;
	return answer;
}
var output5 = a(3, 4, 5);
console.log("the answer is " + output5 + "!");

function b(x, y, z) {
	var answer = h(x) + h(y) + a(x, y, z);
	return answer;
}
var output6 = b(3, 4, 5);
console.log("the answer is " + output6 + "!");


// g() = 5
// h(x) = 3x - 2
// Write a function that takes two arguments and returns double their sum.
// a(x, y, z) = 5x + 2y - 3z + 7
// b(x, y, z) = h(x) + h(y) + a(x, y, z)



function pythag(a, b) {
	function square(x) {
		var answer = x*x;
		return answer;
	}

	var aSquared = square(a);
	var bSquared = square(b);
	var answer = Math.sqrt(aSquared + bSquared);
	return answer;
}

console.log("the hypotenuse is " + pythag(3,4) + "!");

function triple(word) {
	var output = word + word + word;
	return output;
}

console.log(triple("boi"));
