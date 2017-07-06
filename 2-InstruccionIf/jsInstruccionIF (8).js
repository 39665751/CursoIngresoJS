function Mostrar()
{
//tomo la edad  
var estado=document.getElementById('estadoCivil').value;
	var edad=document.getElementById('edad').value;
	if(edad<=18&&estado!="Soltero")
	{}
	if (edad>=18&&estado=="Soltero")
	{
		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN