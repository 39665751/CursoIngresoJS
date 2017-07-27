function Mostrar()
{
	var dia;

	dia=prompt("que dia es?");

	switch(dia)
	{
		case "sabado":
		case "domingo":
			alert("Es fin de semana!");
			break;
		default:
			alert("A trabajar!");
	}
}
