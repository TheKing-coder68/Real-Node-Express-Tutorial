const SayHi = (name) => {
	// The guy used ` not ' or "
	console.log(`Hello there ${name}`);
	
	// You can also do...
	// console.log('Hello there ' + name);
}
// When exporting 1 value, you can just assign it like this:
module.exports = SayHi