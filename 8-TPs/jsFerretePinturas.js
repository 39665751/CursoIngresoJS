/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosF=document.getElementById('Temperatura').value;
	var trans;
	var resultado;

	gradosF=parseInt(gradosF);

	trans=gradosF+32;

	resultado=trans+" °C";
	alert(resultado);

}

function CentigradosFahrenheit () 
{
	var gradosC=document.getElementById('Temperatura').value;
	var trans;
	var resultado;

	gradosC=parseInt(gradosC);

	trans=gradosC-32;

	resultado=trans+" °F";
	alert(resultado);
}
