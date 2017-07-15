function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var nota;
	var notaMayor;
	var notaMenor;
	//var numero=prompt("ingrese un numero.");
	/*
	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("ingrese otro numero");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		respuesta=prompt("ingrese si para ingresar otro numero");
	}*/
	while(contador<3)
	{
		nota=prompt("ingrese una nota.");
		nota=parseInt(nota);
		if(contador==0)
		{
			notaMenor=nota;
			notaMayor=nota;
		}

		//console.log("vuelta "+contador);
		else
		{
			if(nota>notaMayor)
			{
				notaMayor=nota;
			}
			if(nota<notaMenor)
			{
				notaMenor=nota;
			}
		}

		contador=contador+1;
	}

	console.log("la nota mayor es "+notaMayor);
	console.log("la nota menor es "+notaMenor);

	/*
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
	*/
}//FIN DE LA FUNCIÓN