// let input = prompt("Enter equation in the form f(x)=0")
let inpArr = [], input, xinput, res;
let indexarr; // Stores index of =,-,+
let computedarr = [];// Stores the computed value of each term
let finalexpression = ""; // Stores the final expression to be fed to the calculator
function findIndex(input) { // Finds index of +,-,=

	for (let i = 0; i < input.length; i++) {
		if (input.charAt(i) == '+' || input.charAt(i) == '-' || input.charAt(i) == '=')
			indexarr.push(i);
	}
}

function termExtractor() { // Extracts terms from equation
	for (let i = 0; i < indexarr.length - 1; i++) {
		if ((input.charAt(indexarr[i]) == '-' && indexarr[i] == 0) || i==0) {// Prevents the stripping off of first - or first character of the equation
			compute(input.slice((indexarr[i]), indexarr[i + 1]), xinput)
			console.log(input.slice((indexarr[i]), indexarr[i + 1]) + ".......1")
		}
		else {//Prevents + or - to be included in the terms
			compute(input.slice(indexarr[i] + 1, indexarr[i + 1]), xinput)
			console.log(input.slice(indexarr[i] + 1, indexarr[i + 1]) + ".........2")
		}
	}
}
function compute(str, x) // computes the value of each term
{

	let computed, coeff, power;
	if (str.indexOf('x') == -1) { // check for constant
		computed = parseFloat(str)
		computedarr.push(computed)
	}
	else if (str.indexOf('x') == str.length - 1) { //check for terms like nx, x
		coeff = str.slice(0, str.indexOf('x'))
		if (coeff == '' || coeff == '+')// If x is first character assigns coefficient =1 and since + sign was not stripped like the minus, prevents code to think + as coefficient of +x  
			coeff = 1;
		computed = parseFloat(coeff) * x;
		computedarr.push(computed)
	}
	else {
		coeff = str.slice(0, str.indexOf('x'))
		power = str.slice(str.indexOf('x') + 2)
		if (coeff == '')// handles expressions like x^3
			coeff = 1;
		if (coeff == '-') // Handles if first term is -x
			coeff = -1
		console.log(coeff, power)
		computed = parseFloat(coeff) * Math.pow(x, parseFloat(power))
		computedarr.push(computed)
	}
	console.log(computedarr)
}
function expressionFormer() {
	indexarr.shift()
	for (let i = 0; i < indexarr.length; i++)
		finalexpression += (computedarr[i]) + input[indexarr[i]];
	finalexpression = finalexpression.slice(0, finalexpression.length - 1)
	finalexpression = finalexpression.replaceAll("+-", "-")
	finalexpression = finalexpression.replaceAll("--", "+")
	finalexpression = finalexpression.replaceAll("-+", "-")
	console.log(finalexpression)
}

function createArray() {
	let c = -1;
	let i;
	let str = finalexpression;
	for (i = 0; i < str.length; i++) {
		if (isNaN(str[i]) && str[i] != '.') {
			c++;
			inpArr[c] = str[i];
		}
		else if (isNaN(str[i - 1]) && str[i - 1] != '.') {
			c++;
			inpArr[c] = str[i];
		}
		else
			inpArr[c] += str[i];
	}
	if (inpArr[0] == '-')
		inpArr.unshift(0)
	console.log(inpArr)
}

function calculate(operand, num1, num2) {
	if (operand == '/')
		return num1 / num2;
	else if (operand == 'x')
		return num1 * num2;
	else if (operand == '+')
		return num1 + num2;
	else
		return num1 - num2;
}


function update(result, index) {
	inpArr.splice(index - 1, 3, result)
	console.log(inpArr)
}


function func(sign1, sign2) {
	let i = 1;
	while (inpArr.indexOf(sign1) != -1 || inpArr.indexOf(sign2) != -1) {

		if (inpArr[i] == sign1 || inpArr[i] == sign2) {
			res = calculate(inpArr[i], parseFloat(inpArr[i - 1]), parseFloat(inpArr[i + 1]))
			update(res, i)
			i = 0;
		}
		i++;
	}
}
function finalResult() {
	func('+', '-')
	document.querySelector("#result").innerText = `Function value: ${inpArr[0]}`

}

document.getElementById('funcval').addEventListener('click', () => {
	input = document.querySelector("#equation").value;
	xinput = document.querySelector("#x").value;
	if (input == '' || xinput == '') {
		alert('Enter valid values')
		return
	}

	xinput = parseFloat(xinput)
	if (input[0] == '-')// checks if first character is minus, if not checked 0 would be appended 2 times
		indexarr = [];
	else
		indexarr = [0];
	findIndex(input)
	termExtractor()
	expressionFormer()
	createArray()
	finalResult()
})

document.getElementById('refreshEq').addEventListener('click', () => {
	inpArr = [];
	computedarr = [];
	indexarr = [];
	finalexpression = '';
	document.querySelector("#equation").value = ''
	document.querySelector("#result").innerText = ''
	document.querySelector("#equation").focus()
})

document.getElementById('refreshx').addEventListener('click', () => {
	inpArr = [];
	computedarr = [];
	indexarr = [];
	finalexpression = '';
	document.querySelector("#result").innerText = ''
	document.querySelector("#x").value = ''
	document.getElementById('x').focus()
})