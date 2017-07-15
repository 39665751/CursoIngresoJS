function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var respuesta=true;
	var mayor;
	var menor;

	while(respuesta==true)
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(contador==0)
		{
			mayor=numero;
			menor=numero;
		}else
		{
			if (numero<menor)
			{
				menor=numero;
			}
			if(numero>mayor)
			{
				mayor=numero;
			}
		}
	

		contador=contador+1;

		respuesta=confirm("queres continuar?");
	}

 	alert("tu numero maximo fue "+mayor+" y tu minimo "+menor);


}//FIN DE LA FUNCIÓN