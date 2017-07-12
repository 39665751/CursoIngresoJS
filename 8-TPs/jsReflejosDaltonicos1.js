/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
var respuesta;
function comenzar()
{
	ColorSecreto=Math.floor((Math.random()*6)+1);
	alert(ColorSecreto);

	switch(ColorSecreto)
	{
		case "1":
			ColorSecreto='azul';
		case "2":
			ColorSecreto="amarillo";
		case "3":
			ColorSecreto="marron";
		case "4":
			ColorSecreto="verde";
		case "5":
			ColorSecreto="celeste";
		case "6":
			ColorSecreto="rojo";
	}
	
	document.getElementById('ColorElejido').value=ColorSecreto;

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	respuesta=document.getElementById('FormIngreso').value;
	if (respuesta==ColorSecreto)
	{
		alert("bien");
	}
	else
	{
		alert("andamos mal eh");
	}
}//FIN DE LA FUNCIÓN
