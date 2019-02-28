// Initializing a 2D array based on m and n parameters

// Row count
let m = 3;

// Column count
let n = 3;

// Array declaration
let arr = [];

// PART 1
// Creating a 2D array that is uninitalized

// Build the row first
for(x=0; x<m; x++){

  // Build the arrays for the columns next
  arr[x] = [];
  
}

// Try to print out the contents
counter = 1;
for(x=0; x<m; x++){
  
  for(y=0; y<n; y++){
  	arr[x][y] = counter;
  	// console.log("("+x+","+y+") => "+arr[x][y]);
  	counter++;
  }
  console.log(arr[x]);
  
}
