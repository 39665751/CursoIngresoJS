function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero=Math.floor((Math.random()*10)+1);
	if(numero>4)
	{
		if (numero<9)
		{
			alert(numero+" Aprobó!");
		}else
		{
			alert(numero+" Exelente!");
		}
	}
	else
		{alert(numero+" Desaprobó.")}

}//FIN DE LA FUNCIÓN