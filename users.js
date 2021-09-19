
const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
];


// Write a function which filter users who has  scoresGreaterThan85,
function filterUsers(users,score){
    let user = users.filter((USER)=>{
        return (USER.scores>score)
    })
    return user
}


// console.log(filterUsers(users,85))

// Write a function which addUser  to the user array only if the user does not exist.

function addUser(users,newUser) {
    let isUser = users.find(user => user.name === newUser.name)
    if(!isUser){
        users.push(newUser)
    }
    else{
        return `${newUser.name} name already exits in the users array`
    }
    return users

}

let userToAdd = {
    name: 'Thomas', scores: 100, skills: [ 'HTM', 'CSS', 'Nodejs' ], age: 24
}
// console.log(addUser(users,userToAdd))

// Write a function which addUserSkill which can add skill to a user only if the user exist.

function addUserSkill(users,username,newUserSkill) {
    let objectIndex = users.findIndex(user => user.name === username)
    if(objectIndex != undefined || null) {
        users[objectIndex].skills = newUserSkill
    }
    else{
        return `${username} no user with such name`
    }
    return users

}
// console.log( addUserSkill(users,'Alex',['css','html5','canvas']))


// Write a function which editUser if the user exist in the users array.

function editUser(users,username) {
    let objectIndex = users.findIndex(user => user.name === username)
    if(objectIndex != undefined || null) {
        
    }
    else{
        return `${username} no user with such name`
    }
    return users

}