/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/
const users = [ { username: 'mlewis' }, { username: 'akagen' }, { username: 'msmith' } ];

function findUserByUsername(usersArray, username) {
	const usernameObject = usersArray.find((currentObject) => {
		return currentObject.username === username;
	});
	return usernameObject;
}
let doesItMatch = findUserByUsername(users, 'mlewis');
console.log(doesItMatch);

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
	//IndexOfObject will be -1 if not found, and a number if found
	const IndexOfObject = usersArray.findIndex((currentObject) => {
		return currentObject.username === username;
	});
	//if it isn't negative 1 then something was found
	if (IndexOfObject !== -1) {
		let objectFound = usersArray[IndexOfObject];
		usersArray.splice(IndexOfObject, 1);
		return objectFound;
	} else {
		return undefined;
		//nothing was found
	}
}
let wasIndexFound = removeUser(users, 'mlewis');
console.log(wasIndexFound);
console.log(users);
