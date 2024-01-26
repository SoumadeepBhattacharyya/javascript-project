const accountId=776728
let accountEmail="good.com"
var accountPassword="1245"//var use is not preffered because of issues in block scope
accountCity="Banglore" 
let accountState;

//three ways of declaring variables are provided above
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
