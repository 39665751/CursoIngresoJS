function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sexo;
	var hombres=0;
	var mujeres=0;
	var edad;
	var mayorEdad;
	var contadorEdad;
	var promedioEdad=0;
	var voto;
	var
	
	var respuesta="si";
	/* ejemplo de obtencion, validación y extracción de información.
	 De esta encuesta se debe informar:

	 	1- Cuántas mujeres y cuántos hombres fueron entrevistados.
	 	2- la persona de mayor edad.
	 	3- El promedio de edad.
	 	4- Quién ganará las elecciones.
	 	5- Informar cuantas mujeres mayores de edad hay.
	 	6- Informar cuántos hombres menores a 30 años hay.
	 	7- Informar la altura del hombre que menos edad tiene.
	 	8- Informar cuántos hombres votaron a "otro".
	 	9- De las mujeres informar cuántas votaron a la oposicion.
	 	10- Cuántas personas de 50 años votaron?
	 	11-Cuántas personas de 50 años mujeres votaron?
	 	12- Cuántas mujeres de 50 años de mas de 1M votaron al gobierno?
	 	
*/
	while(respuesta!="no")
	{
		sexo=prompt("escribe f para sexo femenino y m para masculino.");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("escribe f para sexo femenino y m para masculino.");
		}
		edad=pormpt("edad");
		edad=parseInt(edad);
		contadorEdad=contadorEdad+edad;
		while(edad>100||edad<17)
		{
			edad=pormpt("edad");
			edad=parseInt(edad);
		}
		voto=prompt("a quien vas a votar?");
		while(voto!="gobierno"||voto!="oposicion"||voto!=otro)
		{
			voto=prompt("a quien vas a votar?");
		}





		if(sexo=="f")
		{
			mujeres=mujeres+1;
		}
		if(sexo=="m")
		{
			hombres=hombres+1;
		}


		
		if(contador==0)
		{
			mayorEdad=edad;
		}
		else
		{
			if(edad>mayorEdad)
			{
				mayorEdad=edad;
			}
		}
		promedioEdad=contadorEdad/contador;







		contador=contador+1;
	}
}//FIN DE LA FUNCIÓN