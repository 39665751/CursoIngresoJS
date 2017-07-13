function Mostrar()
{
var contraseña="utn750";
var clave = prompt("ingrese el número clave.");
	
	while(clave!=contraseña)
	{
		clave=prompt("reingrese el número clave.");
	}
	
	alert("bienvenido!");
}//FIN DE LA FUNCIÓN
