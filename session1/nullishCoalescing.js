console.log("Nullish Coalescing");

function showMeWhoYouAre(name, surname, age, mantra) {
	mantra = mantra || 'I still have no life changing mantra';
	age = age || 18;
	console.log(`${name} ${surname} ### Age: ${age} ### Mantra: ${mantra}`);
}

showMeWhoYouAre("Giuseppe", "Aina", 31, "Luck is when preparation meets opportunity");
showMeWhoYouAre("Giuseppe", "Aina", 31, "");
showMeWhoYouAre("Giuseppe", "Aina", 0, "");
