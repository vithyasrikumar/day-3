var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var store = 0;
// for (var x of arr) {
// 	store = x + store;
// 	console.log(store);
// }


for (var i = 0; i<arr.length; i = i + 1) {
	console.log("element " + i + " is " + arr[i]);
}


function upTo(i, n) {
	var answer = [];
	for (i; i<=n; i = i + 1) {
		answer.push(i);
	}
	return answer;
}

console.log(upTo(10, 50));