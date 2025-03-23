const accountId = 122223
let accountEmail = "divyanshu@gmail.com"
var accountPassword = "3848394"
let accountState;
accountState = "uttar pradesh"
/*
Prefer not to use var because of issue in block 
*/
accountCity ="Lucknow"

// accountId = 2 (since this is not allowed)

accountEmail = "div@email.com"
accountPassword ="4w4543"
accountCity = "Varansi"



console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
