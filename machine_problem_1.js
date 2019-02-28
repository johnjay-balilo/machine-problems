//Row Members:
// John
// Sevy
// Jenny



function create_table(m, n) {
	arr = [];
	counter = 1;


	for (var x = 0; x < m; x++) {
		arr[x] = [];
		for (var y = 0; y < n; y++) {
			arr[x][y] = 0;
		}	
	}

	x=0;
	y=0;

	while(counter <= (m*n)) {	
		console.log(y+","+x)

		let direction = "x++";

		if (y < m) {
			arr[x][y] = counter;
			y++;					
		}

		if (counter == m && x<n) {
			arr[x][y] = counter;
			x++;
		}

		// if (y == m && x < n) {
		// 	arr[x][y-1] = counter;
		// 	x++;
		// }
		// if (x == n && y < m) {
		// 	arr[x][y-1] = counter;
		// 	y--;
		// }

		counter++;

	}


	console.log(arr);
	
}

create_table(3, 3);

