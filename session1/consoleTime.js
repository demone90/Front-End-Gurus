console.log("let's track");

console.time("timer-1");

var a = 20;
var b = 3;
for(let i = b; i < a; i++) {
	// do something
}

// TRY IT OUT WITH ASYNC AWAIT TOO AND SEE HOW IT BEHAVES!
let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
	resolve("resolving");
	},5000);
	// executor (the producing code, "singer")
});

promise.then(function() {
	console.log("promise complete");
});

console.timeEnd("timer-1");