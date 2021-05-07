// Modules
const names = require('./names');
const SayHi = require('./utils');
const items = require('./alternate-exports');
//If you invoke the function inside of the module, you don't have to assign a varible like the others, it will automatically run
require('./mind-grenade');
SayHi('King')
// In order to call the variables for john and peter I have to say the variable.mainvar
// ex. names.john or names.peter

SayHi(names.john)
SayHi(names.peter)