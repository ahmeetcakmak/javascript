const USERS = ["ahmet","mehmet","mahmut123","cabbbbarrr"]

const userName = USERS.map(user => user[0].toUpperCase()+".")
const newName = USERS.map(user => user[0].toUpperCase()+user.slice(1))
console.log("Name",USERS,"Short Name",userName ,"New Name", newName)