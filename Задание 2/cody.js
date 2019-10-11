function findMin(a,b) {
	console.log(Math.min(a,b));
}

function isEven(number){
	return number % 2 === 0 ? "Четное" : "Нечетное";
}

function countBs(string){
	let count = 0;
	for (let i = 0; i <= string.length-1; i++) {
		if (string.charAt(i) == 'б'){
			count++
		};
	}
	console.log(count)
}

function countLetters(string, letter){
	let count = 0;
	for (let i = 0; i <= string.length-1; i++) {
		if (string.charAt(i) === letter){
			count++
		};
	}
	console.log(count)
}