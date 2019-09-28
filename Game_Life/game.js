const gridField = document.querySelector('#grid'),
	  nextGeneration = document.querySelector('#next');

function cellFill(){
	for (let i = 0; i < 400; i++) {
		let index = Math.floor(Math.random() * (10 - 1 + 1)) + 1,
			cell = document.createElement('span');
		index > 8 ? cell.className = 'cell alive' : cell.className = 'cell dead';
		gridField.appendChild(cell);
	}
	let cellArr = document.getElementsByClassName('cell');
	arrFromCells(cellArr)
}

cellFill();

function arrFromCells(array){
	let newArray = [];	
	for(let index in array){
		newArray.push(array[index]);
	}
	gameStep(newArray);
}

nextGeneration.addEventListener('click', gameStep(cellArr))

function gameStep(array){
	setInterval(function(){array.forEach(function (item, index, array){
		let siblingCount = 0;
		//Проверка слева и справа
		if (item.previousSibling.className === 'cell alive'){
			siblingCount++
		}
	 	if (item.nextSibling.className === 'cell alive'){
	 		siblingCount++
	 	}
	 	//Проверка сверху
	 	if (index >= 21){
	 		let upLeftSiblingID = index - 21;
		 	if (array[upLeftSiblingID].className === 'cell alive'){
		 		siblingCount++
		 	}
		 }
		if (index >= 20){
		 	let upSiblingID = index - 20;
		 	if (array[upSiblingID].className === 'cell alive'){
		 		siblingCount++
		 	}
		 }
		if (index >= 20){
		 	let upRightSiblingID = index - 19;
		 	if (array[upRightSiblingID].className === 'cell alive'){
		 		siblingCount++
		 	}
		 }
		 //Проверка снизу
		 if (index <= 380){
	 		let bottLeftSiblingID = index + 19;
		 	if (array[bottLeftSiblingID].className === 'cell alive'){
		 		siblingCount++
		 	}
		 }
		if (index <= 380){
		 	let bottSiblingID = index + 20;
		 	if (array[bottSiblingID].className === 'cell alive'){
		 		siblingCount++
		 	}
		 }
		if (index <= 379){
		 	let bottRightSiblingID = index + 21;
		 	if (array[bottRightSiblingID].className === 'cell alive'){
		 		siblingCount++
		 	}
		 }
	 	if(siblingCount < 2 || siblingCount > 3){
	 		item.className = 'cell dead';
	 	} else {
	 		item.className = 'cell alive'
	 	}
	})}, 500)
}


