/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numero

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );

	numeroSecreto=Math.floor((Math.random()*100)+1);
	contadorIntentos=0;
	document.getElementById('intentos').value=contadorIntentos;
	console.log(numeroSecreto);
}

function verificar()
{
	numero=document.getElementById('numero').value;
	contadorIntentos=contadorIntentos+1;
	document.getElementById('intentos').value=contadorIntentos;
	if(numero==numeroSecreto)
	{
		if (contadorIntentos==1)
		{
			alert("GENIO, CAPOO, IDOLOOOO, GANASTE! SOLO TE COSTO "+contadorIntentos+" VEZ!");
		}
		else
		{
			alert("GENIO, CAPOO, IDOLOOOO, GANASTE! SOLO TE COSTO "+contadorIntentos+" VECES!");
		}
	}
	else if (numero>numeroSecreto)
	{
		alert("MMMH... NO, TIRA UN NUMERO MAS BAJO, CAPAZ VIENE POR AHI LA COSA");
	}
	else
	{
		alert("MMMH... NO, TIRA UN NUMERO MAS ALTO, CAPAZ VIENE POR AHI LA COSA");
	}
}