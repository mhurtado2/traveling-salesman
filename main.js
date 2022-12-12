// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [ 20, 200, 1000, 500, 3 ]
let totalMiles = 0
// Declare a variable to store the total. Initial value is 0.

/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const miles of weeklyMiles) {
    totalMiles += miles
}

// Declare a new variable to store the average miles over time
const averageMiles = totalMiles / weeklyMiles.length
// Output the average miles and the total miles to the console
console.log(`I averaged ${averageMiles} miles each week. I have driven a total of ${totalMiles} miles`)


//should display 
/*
I average xxx miles each week.
I have driven a total of xxx miles.
*/