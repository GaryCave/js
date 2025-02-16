const accountId = 144553
let accountEmail = "himanshu@yahoo.com"
var accountpassword = "12345"
accountcity = "Bilaspur"
 let accountState;  
// accountId = 2  // doing this cause error since we let it constant  

accountEmail = "meta@firefox.com"
accountpassword = "9865"
accountcity = "Raipur"

console.log(accountId);

/*
prefer not use var becoz of old issues it had let was introduced becoz of var limitations
 and without any keyword also we can declare a variable we should never declare like this not formal
*/


console.table([accountEmail, accountId, accountpassword, accountcity, accountState]);
