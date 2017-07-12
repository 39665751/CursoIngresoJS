/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
	


	/*
	if(numero==numeroSecreto)
	{
		if (contadorIntentos==1)
		{
			alert("Usted es un Psíquico!!!! sólo te costó: "+contadorIntentos+" VEZ!");
		}
		else if (contadorIntentos==2)
		{
			alert("excelente percepción!!! Sólo le costó: "+contadorIntentos+" VECES!");
		}
		else if (contadorIntentos==3)
		{
			alert("Esto es suerte!! Sólo le costó: "+contadorIntentos+" VECES!");
		}
		else if(contadorIntentos==4)
		{
			alert("excelente tecnica! Sólo le costó: "+contadorIntentos+" VECES!");
		}
		else if(contadorIntentos==5)
		{
			alert("usted está en la media! Sólo le costó: "+contadorIntentos+" VECES!");
		}
		else if(contadorIntentos>5&&contadorIntentos<10)
		{
			alert("falta técnica! le costó: "+contadorIntentos+" VECES!");
		}
		else
		{
			alert("Afortunado en el amor! le costó: "+contadorIntentos+" VECES! UN MONTONAZO!");
		}
	}
	else if (numero>numeroSecreto)
	{
		alert("MMMH... NO, TIRA UN NUMERO MAS BAJO, CAPAZ VIENE POR AHI LA COSA");
	}
	else
	{
		alert("MMMH... NO, TIRA UN NUMERO MAS ALTO, CAPAZ VIENE POR AHI LA COSA");
	}*/


		if (numero>numeroSecreto)
	{
		alert("MMMH... NO, TIRA UN NUMERO MAS BAJO, CAPAZ VIENE POR AHI LA COSA");
	}
	else if(numero<numeroSecreto)
	{
		alert("MMMH... NO, TIRA UN NUMERO MAS ALTO, CAPAZ VIENE POR AHI LA COSA");
	} 
	else{

			switch(contadorIntentos){

			case 1:
				alert("Usted es un Psíquico!!!! sólo te costó: "+contadorIntentos+" VEZ!");
			break;

			case 2:
				alert("excelente percepción!!! Sólo le costó: "+contadorIntentos+" VECES!");
			break;

			case 3:
				alert("Esto es suerte!! Sólo le costó: "+contadorIntentos+" VECES!");
			break;

			case 4:
				alert("excelente tecnica! Sólo le costó: "+contadorIntentos+" VECES!");
			break;

			case 5:
			case 7:
			case 8:
			case 9:
				alert("falta técnica! le costó: "+contadorIntentos+" VECES!");
			break;
			default:
				alert("Afortunado en el amor! le costó: "+contadorIntentos+" VECES! UN MONTONAZO!");
		}
	}

}
