function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero=prompt("ingrese un numero.")
	
	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("ingrese otro numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta=prompt("ingrese si para ingresar otro numero");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN