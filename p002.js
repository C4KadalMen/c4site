alert("LOCK AND LOADED!");
var CalcuField = document.getElementById("CalcuField");
var ProcessField = document.getElementById("CalcuProcessor");
var theOP = document.getElementById("theOperator");
var result = 0;
var x; // For pressNumber()
var y; // For pressEqu()
var Py; // Placeholder Y
var My;
var a = false;
var b = false;
var o = false;
var touchedOP = 0;
var equalLife = 1;

var counter = 0;

var theOperator = "";

function pressC()
{
	CalcuField.innerHTML = 0;
	theOP.innerHTML = "[_]";
	a = 0;
	b = 0;
	o = 0;
	result = 0;
	counter = 0;
}

function pressQ()
{
	// If you pressed EQUAL before assigning it's value,
	// then the second value will be overwritten by
	// the first value.
	if(b == false)
	{
		b = a;
	}
	// To prevent "b" being copied every single time,
	// equalLife needs to gatekeep this.
	if(equalLife == 1)
	{
		b = Number(CalcuField.innerHTML);
		equalLife -= 1;
	}
	theOP.innerHTML = "[=]";
	justCount(Py);
	a = result;
	if(CalcuField.innerHTML.length >= 12)
	{
		CalcuField.innerHTML.length = 12;
	}	
	CalcuField.innerHTML = result;
	touchedOP = 1;
	counter = 0;
}

function pressNumber(x)
{
	if(CalcuField.innerHTML == 0 || touchedOP == 1)
	{
		CalcuField.innerHTML = "";
		touchedOP = 0;
	}
	if(CalcuField.innerHTML.length <= 12)
	{
		CalcuField.innerHTML += x;
	}
}

function pressEqu(y)
{
	equalLife = 1;
	touchedOP = 1;
	counter +=1;
	if(counter == 1)
	{
		a = Number(CalcuField.innerHTML);
		o = a;
	}
	if(counter >= 2)
	{
		b = Number(CalcuField.innerHTML);
		justCount(y);
		a = result;
		o = a;
	}
	switch(y)
	{
		case '+':
			theOP.innerHTML =  o;
			Py = y;
			break
		case '-':
			theOP.innerHTML =  o;
			Py = y;
			break;
		case '*':
			theOP.innerHTML =  o;
			Py = y;
			break
		case '/':
			theOP.innerHTML =  o;
			Py = y;
			break;
		default:
			return false;
	}
}

// If it's not over yet!
function justCount(My)
{
	switch(My)
	{
		case '+':
			result = a + b;
			break;
		case '-':
			result = a - b;
			break;
		case '*':
			result = a * b;
			break
		case '/':
			result = a / b;
			break;
		default:
			return false;
	}
}
