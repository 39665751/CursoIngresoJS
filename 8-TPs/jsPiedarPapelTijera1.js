/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var piedraa="piedra"
var papell="palel"
var tijeraa="tijeras"
var eleccion;

function comenzar()
{
	eleccionMaquina=Math.floor((Math.random()*10)/4+1);
	switch(eleccionMaquina)
	{
		case 1:
			eleccion=piedraa;
		break;
		case 2:
			eleccion=papell;
		break;
		case 3:
			eleccion=tijeraa;
		break;
	}
	console.log(eleccion)
}//FIN DE LA FUNCIÓN

function piedra()
{
	if(eleccion==piedraa)
	{
		alert("empató!");
		return comenzar();
	}
	else 
	if(eleccion==tijeraa)
	{
		alert("ganaste");
		return comenzar();
	}
	else
	{
		alert("perdiste");
		return comenzar();
	}
}//FIN DE LA FUNCIÓN

function papel()
{
	if(eleccion==piedraa)
	{
		alert("ganaste");
		return comenzar();
	}
	else 
	if(eleccion==tijeraa)
	{
		alert("perdiste");
		return comenzar();
	}
	else
	{
		alert("empataste");
		return comenzar();
	}

}//FIN DE LA FUNCIÓN

function tijera()
{
	if(eleccion==piedraa)
	{
		alert("perdiste");
		return comenzar();
	}
	else 
	if(eleccion==tijeraa)
	{
		alert("empataste");
		return comenzar();
	}
	else
	{
		alert("ganaste");
		return comenzar();
	}
	

}//FIN DE LA FUNCIÓN
