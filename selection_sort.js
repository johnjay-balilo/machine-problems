arr = [67, 32, 20, 13, 19];
random_numbers = [32, 65, 17, 88, 27, 42, 1, 67, 4, 70, 74, 99, 14, 69, 68, 54, 5, 75, 85, 12];
random_numbers2 = [961, 151, 901, 615, 32, 133, 92, 543, 171, 390, 975, 255, 798, 714, 201, 410, 475, 535, 298, 309
];

function selection_sort(arr) {
	n = arr.length;
	for (var i = 0; i < n-1; i++) {
		min = i;
		
		for (var j = i+1; j < n; j++) {
			if (arr[j] < arr[min]) {
				min = j;		
			}
		}
		x = arr[i];
		arr[i] = arr[min];
		arr[min] = x;
	}
	console.log(arr);
	return arr;
}

selection_sort(arr);
selection_sort(random_numbers);
selection_sort(random_numbers2);