function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	/*if (mesDelAño=='Enero')
	{
		alert("que comiences bien el año!!!.");
	}
	else 
	if(mesDelAño=='Marzo')
	{
		alert("a clases!!!.");
	}
	else 
	if (mesDelAño=='Julio')
	{
		alert("se vienen las vacaciones!!!.");
	}
	else
	if(mesDelAño=='Diciembre')  
	{
		alert("Felices fiestas!!!.");
	}
	else{
			alert("en este mes no pasa nada.")
		}*/
		switch (mesDelAño) {
    case 'Enero':
        alert("que comiences bien el año!");
        break;
    case 'Marzo':
        alert("Comienzan las calses!");
        break;
    case 'Julio':
        alert("Se vienen las vacaciones!");
        break;
    case 'Diciembre':
        alert("Felices fiestas!");
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

}//FIN DE LA FUNCIÓN