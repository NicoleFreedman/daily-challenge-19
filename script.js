//#1 Turn the below users (value is their ID number) into an array: [ [ ‘user1’, 18273 ], [ ‘user2’, 92833 ], [ ‘user3’, 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

let usersArr = Object.entries(users); // [ [ ‘user1’, 18273 ], [ ‘user2’, 92833 ], [ ‘user3’, 90315 ] ]

//#2 change the output array of the above to have the user’s IDs multiplied by 2 – 
// Should output:[ [ ‘user1’, 36546 ], [ ‘user2’, 185666 ], [ ‘user3’, 180630 ] ]

let doubleArr = usersArr.map(user => {
	user[1] = user[1] * 2;
	return user;
});

