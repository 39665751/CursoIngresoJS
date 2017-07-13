function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while(numero<-1||numero>9)
	{
		alert("ENTRE 0 Y 9 TE DIJE, ingresa otro numero ENTRE 0 Y 9");
		prompt("ingrese un número entre 0 y 9.");
	}
	alert("Tu numero es "+numero);
}//FIN DE LA FUNCIÓN