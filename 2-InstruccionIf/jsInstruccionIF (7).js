function Mostrar()
{
//tomo la edad  
	var estado=document.getElementById('estadoCivil').value;
	var edad=document.getElementById('edad').value;
	if(edad<18)
		{ 
			if (estado!="soltero")
			{
				alert("Es muy pequeño para NO ser soltero.");
			}
		}

}//FIN DE LA FUNCIÓN