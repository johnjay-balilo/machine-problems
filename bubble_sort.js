arr = [8, 4, 6, 1, 5, 7, 41, 5, 3];
// arr = [8, 4, 6, 1];

function bubble_sort(arr) {

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i+1]) {
			x = arr[i+1];
			arr[i+1] = arr[i];
			arr[i] = x;

			bubble_sort(arr);
		}
	}

	return arr;
}

// function quick_sort(arr) {
// 	i = 0;
// 	while() {

// 	}
// }

console.log(bubble_sort(arr));