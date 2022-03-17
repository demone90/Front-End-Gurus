console.log("OPTIONAL CHAINING");


let user = {}; // a user without "address" property

/*let user = {
	address: {
		street: "Torstrasse 33",
	}
};*/

console.log(user.address.street);

// one way of doing it
//console.log(user.address ? user.address.street : undefined);

//what if we want the user.address.street.name
//console.log( user.address && user.address.street && user.address.street.name);

//Optional chaining
//console.log(user?.address?.street );