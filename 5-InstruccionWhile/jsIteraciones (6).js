function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero=prompt("ingrese un numero.")

	while(contador<5)
	{
		numero=prompt("ingrese el siguiente numero.")
		numero=parseInt(numero);
		contador=contador+1;
		acumulador=acumulador+numero;
	}
	


	document.getElementById('promedio').value=acumulador/contador;
	document.getElementById('suma').value=acumulador;

}//FIN DE LA FUNCIÓN