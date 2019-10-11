function sum(start,end){
	start + 0; end + 0;
	let a = parseInt(start), b = parseInt(end), result = 0;
	for (; a <= end; a++){
		result = result + a
	}
	return result
}

function range(a,b,step){
	var stepParsed, 
		array = [];
	if (step !== undefined){stepParsed = parseInt(step)} else if (step === undefined) {stepParsed = 1};
	if (a < b){var max = parseInt(a), min = parseInt(b)} else {var max = parseInt(b), min = parseInt(a)}
	for (let c = min; c <= max; c = c + stepParsed){
		array.push(c)
	}
	return array;
}