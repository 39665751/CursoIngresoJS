/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno=document.getElementById('numeroUno').value;
var dos=document.getElementById('numeroDos').value;

uno=parseInt(uno);
dos=parseInt(dos);

alert(uno+dos)
}

function restar()
{
	var uno=document.getElementById('numeroUno').value;
var dos=document.getElementById('numeroDos').value;

alert(uno-dos)
}

function multiplicar()
{ 
	var uno=document.getElementById('numeroUno').value;
var dos=document.getElementById('numeroDos').value;

alert(uno*dos)
}

function dividir()
{
	var uno=document.getElementById('numeroUno').value;
var dos=document.getElementById('numeroDos').value;


alert(uno/dos)
}

