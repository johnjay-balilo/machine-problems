// function get_primes(n) {
// 	primes = [];

// 	for (var i = 2; i <= n; i++) {
// 		let divisors = 0;

// 		console.log("FOR " + i);

// 		for (var j = i-1; j <= n && j >= 0; j--) {
// 			// console.log("i=" + i);
// 			// console.log("j=" + j);
// 			// console.log(i + "/" + (i-j) + " = " + i/(i-j));

			

// 			let quotient = i/(i-j);
			
// 			if ((quotient % 1) == 0) {
// 				console.log('divisor ' + (i-j));
// 				divisors++;
// 			}else{
// 				console.log('not divisor ' + (i-j));				
// 			}
			
// 		}
// 		console.log("** TOTAL divisors " + divisors);

// 		if (divisors == 2) {
// 			primes.push(i);
// 		}	
// 	}
// 	return [primes];

// }




// function get_primes(n) {
// 	primes = [];

// 	for (var i = 1; i <= n; i++) {
// 		let divisors = 0;
// 		for (var j = i-1; j <= n && j >= 0; j--) {
// 			let quotient = i/(i-j);			
// 			if ((quotient % 1) == 0) {
// 				divisors++;
// 			}		
// 		}
// 		if (divisors == 2) {
// 			primes.push(i);
// 		}	
// 	}
// 	return primes;
// }


function get_primes(n) {
	primes = [2];

	if (n < 2) {
		return [];
	}

	for (var i = 3; i <= n; i++) {
		let divisors = 0;
		for (var j = 0; j < primes.length; j++) {
			let modulo = i%primes[j];
			if (modulo == 0) {
				divisors++;
			}		
		}
		if (divisors == 0) {
			primes.push(i);
		}	
	}
	return primes;
}




// function get_primes(n){
//   let primes = [2];
  
//   if( n==2 ){
//     return [2];
//   }
  
//   if( n<2 ){
//     return undefined;
//   }
  
//   for(x=3; x<=n; x++){
    
//     let isPrime = true;
    
//     for(y=0; y<primes.length; y++){
      
//       if(x%primes[y]==0){
//         isPrime = false;
//       }
      
//     }

//     if(isPrime){
//       primes.push(x);
//     }
      
//   }
  
//   // Return the new array of primes
//   return primes;

// }

console.log(get_primes(5));
console.log(get_primes(20));
console.log(get_primes(1));