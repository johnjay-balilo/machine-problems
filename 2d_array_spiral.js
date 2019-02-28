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
	direction = 0;
	nb = 0;
	eb = m-1;
	sb = m-1;
	wb = 0;

	while(counter <= (m*n)) {
		// console.log(direction);
		// console.log(x+","+y);

		arr[x][y] = counter;
		
		if (direction == 0 && y >= eb) {
			direction = 1;
			nb+=1;
		} else if (direction == 1 && x >= sb) {
			direction = 2;
			eb-=1;
		}else if (direction == 2 && y <= wb) {
			direction = 3;
			sb-=1;
		}else if (direction == 3 && x <= nb) {
			direction = 0;
			wb+=1;
		}

		if (direction == 0) {
			y++;
		} else if (direction == 1) {
			x++;
		} else if (direction == 2) {
			y--;
		} else if (direction == 3) {
			x--;
		}

		counter++;
	console.table(arr);	
	}
}

create_table(3, 3);