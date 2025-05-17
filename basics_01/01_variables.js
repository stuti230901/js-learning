// variables

const accountId = 12345
let accountName = "Stuti"
var accountPasswd = "1234"
//This is possible as well but not recommended. 
accountCity = "Vadodara"
// When a variable is not defined, then JS assigns it the value undefined.
let accountState;

// accountId = 2 --> when decalred as a const, the value cannnot be changes later once initiazed.

accountName = "Namechanged"
accountPasswd = "565656"
accountCity = "Bangaluru"

console.log(accountId);
console.table([accountName, accountPasswd, accountCity, accountState]);

// Donot use var because it does not follow block and fucntional scope. But 'let' let us do that.


