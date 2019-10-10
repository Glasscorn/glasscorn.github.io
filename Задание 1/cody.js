const hTButton = document.querySelector("#hashTags").addEventListener('click', hashTags),
	  fizBuzzButton = document.querySelector("#fizzBuzz").addEventListener('click', fizzBuzz),
	  fizBuzzChagedButton = document.querySelector("#fizzBuzzChanged").addEventListener('click', fizzBuzzChanged),
	  chessBoardButton = document.querySelector("#chessBoard").addEventListener('click', chessBoard);

function hashTags(){
	let height = 15,
		tags = "";
	for (let a = 1; a <= height; a++){
		function spaces(arg){
				a === 1 || a === 3 ? a++ : a;
				let space = (arg - (a-1))/2,
					b = "";
				if (space % 2 !== 0 && space % 1 !== 0){
					space += 0.5;
				} else if (space === 2){
					space++;
				}
				if (space === 1){
					space++;
				}//Код решает проблему когда количество пробелов неверно
				for (let i = 1; i <= space; i++) {
					b += " ";
				}
				return b;
			}
		if (a === 1){
			tags += "#";
			string = spaces(height) + tags + spaces(height);
			console.log(string);
		} else if (a % 3 === 0) {
			tags += "##";
			string = spaces(height) + tags + spaces(height);
			console.log(string);
		}
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