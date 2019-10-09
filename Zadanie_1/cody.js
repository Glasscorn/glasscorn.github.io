const hTButton = document.querySelector("#hashTags").addEventListener('click', hashTags),
	  fizBuzzButton = document.querySelector("#fizzBuzz").addEventListener('click', fizzBuzz),
	  fizBuzzChagedButton = document.querySelector("#fizzBuzzChanged").addEventListener('click', fizzBuzzChanged),
	  chessBoardButton = document.querySelector("#chessBoard").addEventListener('click', chessBoard);

function hashTags(){
	let b = "";
	for (let a = 1; a <= 7; a++){
		b += "#";
		console.log(b);
	}
}


function fizzBuzz(){
	for (let a = 1; a <= 100; a++){
		if (a % 3 === 0){
			console.log("Fizz")
		} 
		if (a % 3 !== 0 && a % 5 === 0 ){
			console.log("Buzz")
		}
	}
}

function fizzBuzzChanged(){
	for (let a = 1; a <= 100; a++){
		if (a % 3 === 0 && a % 5 === 0){
			console.log("FizzBuzz")
		}
	}
}

function chessBoard(){
	const sizeWidth = prompt('Введите ширину поля'),
		  sizeHeight = prompt('Введите высоту поля');
	for (let a = 1; a <= sizeHeight; a++){
		if (a % 2 === 0){
			let b = "";
			for (let s = 1; s < sizeWidth; s++){
				b += "#";
				b += " ";
			}
			console.log(b);
		} else {
			let b = "";
			for (let s = 1; s < sizeWidth; s++){
				b += " ";
				b += "#";
			}
			console.log(b);
		}
	}
}