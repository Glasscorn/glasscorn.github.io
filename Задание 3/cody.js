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

function reverseArray(array){
  let arrCopy = [];
  for (let i = array.length-1; i >= 0; i--){
    arrCopy.push(array[i])
  }
  return arrCopy
}

console.log(reverseArray([1,2,3,4,5]));


function arrFromList(array){
  let list = {value: undefined, rest: null},
  	  _rest = {value: undefined, rest: null};
  	  listStep();
  function listStep() {
    for (var i = 0; i < array.length; i++) {
    	if (!list.rest){
	    	list.value = array[i];
	    	list.rest = _rest
 		} else {
 			_rest.value = array[i]
 		}
 	}
  }
	return list;
}
