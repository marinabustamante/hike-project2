document.getElementById("calculate-button").onclick = function () {
  // Input elements with typed numbers.
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');
	
	let val2 = parseInt(elem2.value);
	let val1 = parseInt(elem1.value);
	
	let sum = val1 + val2;
	let subtraction = val1 - val2;
	let multiply = val1 * val2;
	let divide = val1 / val2;



  //Display result inside element with id "result"
	 
	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;

	console.log(val1);
	console.log(val2);
	console.log(sum);

	console.log(subtraction);
	console.log(multiply);
	console.log(divide);

	console.log(operation)

	let operationResult = getResult(val1, val2, operation);
	let resultElement = document.getElementById("result");


	resultElement.innerHTML = operationResult;
	console.log(operationResult);
	console.log(resultElement);
}

	function getResult(num1, num2, operation) {
		if(operation === '+') {
			return num1 + num2;
		} else if (operation === '-') {
			return num1 - num2;
		} else if (operation === '*') {
			return num1 * num2;
		} else if (operation === '/') {
			return num1 / num2;
			}
		}

	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');
	let resultElement = document.getElementById("result");

	let OPS = document.getElementById('undefined');
		
	isNaN ('')

	if (elem1 === isNaN) {
		OPS;
	}
	if (elem2 === isNaN) {
		OPS;
		OPS ===  alert;
			alert ('ops');
	}
	else
			resultElement ;

