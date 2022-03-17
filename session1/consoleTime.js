console.log("let's track");

console.time("timer-1");

var a = 20;
var b = 3;
for(let i = b; i < a; i++) {
	// do something
}

console.timeEnd("timer-1");