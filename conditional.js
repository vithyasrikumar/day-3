if (10 > 5) {
	console.log("math works");
} else {
	console.log("the condition was false");
}

function sign(n) {
	if (n<0) {
		console.log("negative");
	} else if (n>0) {
		console.log("positive");
	} else if (n === 0) {
		console.log("zero");
	}
}


sign(2);
sign(-2);
sign(0);

function size(number) {
	if (number<10) {
		console.log("BIG!");
	} else {
		console.log("small");
	}
}

size(9);
size(10);
size(11);


function similarity(arg1, arg2) {
	if (arg1 === arg2) {
		console.log("same");
	} else {
		console.log("different");
	}
}

similarity("Vithya", "Vithya");
similarity("Vithya", "Veronica");
similarity(1, 1);
similarity(1,2);



function thrive(top) {
	var sum = 0;
	for (counter = 0; counter<top; counter++) {
		if (counter % 3 === 0) {
			sum = counter + sum;
		} else if (counter % 5 === 0) {
			sum = counter + sum;
		} else {
			sum = sum;
		}
	}
	console.log(sum)
}

thrive(1000);






