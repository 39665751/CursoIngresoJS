function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	var masculino="m";
	var femenino="f"
	while(sexo!=femenino&&sexo!=masculino)
	{
		 sexo = prompt("ingrese f ó m para que funcione.");
	}
	alert("Ingresaste "+sexo);
	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN