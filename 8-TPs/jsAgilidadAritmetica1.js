/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numero1;
var numero2;
var signo;
var responden;

function comenzar()
{
	numero1=Math.floor((Math.random()*10)+1);
	numero2=Math.floor((Math.random()*10)+1);
	signo=Math.floor((Math.random()*3)+1);


	switch(signo)
	{
		case 1:
			signo="÷";
			respuesta=numero1/numero2;
		break;
		case 2:
			signo="+";
			respuesta=numero2+numero1;
		break;
		case 3:
			signo="-";
			respuesta=numero1-numero2;
		break;
		case 4:
		 	signo="X";
		 	respuesta=numero1*numero2;
		break;
	}
	document.getElementById('PrimerNumero').value=numero1;
	document.getElementById('SegundoNumero').value=numero2;
	document.getElementById('Operador').value=signo;

}//FIN DE LA FUNCIÓN
function Responder()
{
	responden=document.getElementById('Respuesta').value;
	if(responden==respuesta)
	{
		alert("perfecto! es "+respuesta);
	}
	else
	{
		alert("Practica mas matematicas..");
	}
	comenzar()
}//FIN DE LA FUNCIÓN
