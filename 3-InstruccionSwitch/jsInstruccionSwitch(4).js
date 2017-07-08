function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch (mesDelAño){
	
	case'Abril':
	
	case'Junio':
	 
	case'Septiembre':
	 
	case'Noviembre':
		alert("Este mes tiene 30 Dias");
		break; 
	case'Febrero':
	 	alert("Este mes tiene 28 Dias");
		break;
	default:
		alert("Este mes tiene 31 Dias");
	}



}//FIN DE LA FUNCIÓN