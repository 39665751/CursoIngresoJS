/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var numero1;
var numero2;
var signo;
var responden;

function comenzar()
{
	alert("tenes 4 segundos");
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
	temporizador=setTimeout (comenzar, 4000);
	
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
