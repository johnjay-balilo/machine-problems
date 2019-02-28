function get_even(n) {
	if (n < 2) {
		return undefined;
	}

	even_numbers = [];
	for (var i = 0; i <= n; i++) {
		if (i % 2 == 0) {
			even_numbers.push(i);
		}
	}
	return even_numbers;
}


// Sample Test Cases

// #1
console.log(get_even(10));

// #2
console.log(get_even(1));

// #3
console.log(get_even(-1));