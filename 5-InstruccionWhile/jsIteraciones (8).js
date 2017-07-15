function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var positivo=0;
	var negativo=0;
	var numero;
	
	var respuesta='si';

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

	while(respuesta=="si")
	{
		numero=prompt("dame un numero");
		if(numero<0)
		{
			negativo=negativo++;

		}

	}
}//FIN DE LA FUNCIÓN