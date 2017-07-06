function Mostrar()
{
//tomo la edad  
var edad=document.getElementById('edad').value;
	if(edad<13)
		{
			alert("eres un niño");
		} 
		else if(edad>=13&&edad<=17)
		{
			alert("eres un adolescente");
		}
		else if(edad>=18)
			 {
			 	alert("eres mayor de edad");
			 }



}//FIN DE LA FUNCIÓN