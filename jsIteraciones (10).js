function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var sexo;
	var hombres=0;
	var mujeres=0;
	var mujeresMayores=0;
	var mujeresQueVotaronOposicion=0;
	var mujeresDe50MasDe1M=0;
	var hombresMenoresA30=0;
	var hombreDeMenorEdad=0;
	var alturaDeHombreMenor;
	var hombresVotaronAOtro=0;
	var edad;
	var mayorEdad;
	var personasDe50=0;
	var mujeresDe50=0;
	var contadorEdad=0;
	var promedioEdad=0;
	var voto;	
	var altura;
	var gobierno=0;
	var oposicion=0;
	var otro=0;
	var ganadores;
	var personas;
	
	var respuesta=true;
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
	while(respuesta==true)
	{
		sexo=prompt("escribe f para sexo femenino y m para masculino.");
		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("escribe f para sexo femenino y m para masculino.");
		}


		edad=prompt("edad");
		edad=parseInt(edad);
		while(edad>100||edad<0)
		{
			edad=prompt("edad");
			edad=parseInt(edad);
		}



		voto=prompt("¿a quien vas a votar? ¿gobierno, oposicion u otro?");
		while(voto!="gobierno"&&voto!="oposicion"&&voto!="otro")
		{
			voto=prompt("a quien vas a votar?");
		}	



		altura=prompt("Ingrese altura en metros.");
		altura=parseInt(altura);
		while(altura<0 || altura > 3)
		{
			altura=prompt("Ingrese altura.");
		}






		if(sexo=="f")
		{
			mujeres=mujeres+1;
			
			if(edad>17)
			{
				mujeresMayores=mujeresMayores+1;
			}
			if(voto=="oposicion")
			{
				mujeresQueVotaronOposicion=mujeresQueVotaronOposicion+1;
			}
			if(edad==50)
			{
				if(altura>1)
				{
					if(voto=="gobierno")
					{
						mujeresDe50MasDe1M=mujeresDe50MasDe1M+1;
					}
				}
				mujeresDe50=mujeresDe50+1;	
			}
		}
		if(sexo=="m")
		{
			hombres=hombres+1;
			if(edad<30)
			{
				hombresMenoresA30=hombresMenoresA30+1;
			}
			if(voto==otro)
			{
				hombresVotaronAOtro=hombresVotaronAOtro+1;
			}
		}


		
		if(contador==0)
		{
			mayorEdad=edad;
			hombreMenor=edad;
		}
		else
		{
			if(edad>mayorEdad)
			{
				mayorEdad=edad;
			}else
			{
				if(edad<hombreMenor)
				{
					hombreMenor=edad;
					alturaDeHombreMenor=altura;
				}
			}
		}
		contadorEdad=contadorEdad+edad;
		promedioEdad=contadorEdad/contador;





		switch(voto)
		{
			case "gobierno":
				gobierno=gobierno+1
				break;

			case "oposicion":
				oposicion=oposicion+1;

			case "otro":
				otro=otro+1;
		}

		if (gobierno>oposicion&&gobierno>otro)
		{
			ganadores="gobierno";
		}
		else if(oposicion>otro&&oposicion>gobierno)
		{
			ganadores="oposicion";
		} else
		{
			ganadores="otro partido"
		}





		if(edad==50)
		{
			personasDe50=personasDe50+1;
		}


		personas=hombres+mujeres;



		contador=contador+1;
		respuesta=confirm("Deceas continuar la encuesta con otra persona?");
	}

	document.write("Fueron entrevistados "+hombres+" hombres, y "+mujeres+" mujeres. ");
	document.write("La persona mayor tiene "+mayorEdad+" años; la altura del hombre menor es de "+alturaDeHombreMenor+" metros, y el promedio de edad es de "+promedioEdad+" años; Hay "+mujeresMayores+" mujeres mayores de 18 años, "+hombresMenoresA30+" hombres menores a 30 años, "+mujeresDe50+" mujeres de exactamente 50 años, Y "+personasDe50+" personas de 50 años. ");
	document.write("Las elecciones las ganará "+ganadores+". Votaron "+personas+" personas en total. "+mujeresQueVotaronOposicion+" mujeres a la oposicion, "+mujeresDe50MasDe1M+" mujeres de 50 años y de mas de un metro votaron al gobierno. Y "+hombresVotaronAOtro+" Hombres votaron otro partido. ");
}/*FIN DE LA FUNCIÓN1- Cuántas mujeres y cuántos hombres fueron entrevistados.
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
	 	12- Cuántas mujeres de 50 años de mas de 1M votaron al gobierno? */